import { Component, ChangeDetectionStrategy, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import * as go from 'gojs';
import { DataSyncService, DiagramComponent } from 'gojs-angular';
import { DiagramSchema } from '../../declarations';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-diagram-builder-pane',
  templateUrl: './diagram-builder-pane.component.html',
  styleUrls: ['./diagram-builder-pane.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagramBuilderPaneComponent implements AfterViewInit {
  @Input()
  diagramSchema!: DiagramSchema;

  @Output()
  init = new EventEmitter<go.Diagram>();

  @Output()
  nodeSelected = new EventEmitter<go.Node | null>();

  @Output()
  schemaUpdated = new EventEmitter<DiagramSchema>();

  readonly diagramDivClassName: string = 'myDiagramDiv';

  diagramModelData: go.ObjectData = { prop: 'value' };

  skipsDiagramUpdate = false;

  get nodes() {
    return this.diagramSchema.nodes;
  }

  get links() {
    return this.diagramSchema.links;
  }

  readonly initDiagram: () => go.Diagram;

  @ViewChild('diagram', { static: true }) diagramComponent!: DiagramComponent;

  constructor() {
    this.initDiagram = () => this.buildDiagram();
  }

  ngAfterViewInit() {
    const {diagram} = this.diagramComponent;

    this.init.emit(diagram);

    this.prepareDiagram(diagram);
  }

  private prepareDiagram(diagram: go.Diagram) {
    diagram.addDiagramListener('ChangedSelection', (e) => {
      let selectedNode: go.Node | null = null;
      if (e.diagram.selection.count > 0) {
        const node = e.diagram.selection.first();
        if (node instanceof go.Node) {
          selectedNode = node;
        }
      }

      this.nodeSelected.emit(selectedNode);
    });
  }

  // initialize diagram / templates
  private buildDiagram(): go.Diagram {
    const dia = $(go.Diagram, {
      'undoManager.isEnabled': true,
      model: $(go.GraphLinksModel,
        {
          linkToPortIdProperty: 'toPort',
          linkFromPortIdProperty: 'fromPort',
          linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
        }
      ),
    });

    dia.commandHandler.archetypeGroupData = { key: 'Group', isGroup: true };

    const makePort = function(id: string, spot: go.Spot) {
      return $(go.Shape, 'Circle',
        {
          opacity: .5,
          fill: 'gray',
          strokeWidth: 0,
          desiredSize: new go.Size(8, 8),
          portId: id,
          alignment: spot,
          fromLinkable: true,
          toLinkable: true,
        }
      );
    }

    dia.nodeTemplate = $(
      go.Node,
      'Spot',

        $(go.Panel, 'Auto',

          $(
            go.Shape,
            'Circle',
            {
              fill: 'white',
              stroke: 'gray',
              strokeWidth: 2,
              portId: '',
              fromLinkable: true,
              toLinkable: true,
              fromLinkableDuplicates: true,
              toLinkableDuplicates: true,
              fromLinkableSelfNode: true,
              toLinkableSelfNode: true
            },
            new go.Binding('stroke', 'color'),
            new go.Binding('figure')
          ),

          $(
            go.TextBlock,
            {
              margin: new go.Margin(5, 5, 3, 5),
              font: '10pt sans-serif',
              minSize: new go.Size(16, 16),
              maxSize: new go.Size(120, NaN),
              textAlign: 'center',
              editable: true
            },
            new go.Binding('text', 'title').makeTwoWay()
          ),
        ),

        // Ports
        makePort('t', go.Spot.TopCenter),
        makePort('l', go.Spot.Left),
        makePort('r', go.Spot.Right),
        makePort('b', go.Spot.BottomCenter),

        {
          contextMenu:     // define a context menu for each node
            $('ContextMenu',  // that has one button
              $('ContextMenuButton',
                $(go.TextBlock, 'Copy'),
                {
                  click: this.copyNode.bind(this),
                }
              )
            )
        }
    );

    dia.addDiagramListener("ExternalObjectsDropped", function(e) {
      var tb = dia.selection.first();
      console.log(tb);
    });

    return dia;
  }

  copyNode() {
  }

  // When the diagram model changes, update app data to reflect those changes
  diagramModelChange(changes: go.IncrementalData) {
    // when setting state here, be sure to set skipsDiagramUpdate: true since GoJS already has this update
    // (since this is a GoJS model changed listener event function)
    // this way, we don't log an unneeded transaction in the Diagram's undoManager history
    this.skipsDiagramUpdate = true;

    const nodes = DataSyncService.syncNodeData(changes, this.nodes);
    const links = DataSyncService.syncLinkData(changes, this.links);
    this.diagramModelData = DataSyncService.syncModelData(changes, this.diagramModelData);

    this.diagramSchema = {
      nodes,
      links,
    }

    this.schemaUpdated.emit(this.diagramSchema);
  };
}
