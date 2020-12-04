import { Component, ChangeDetectionStrategy, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as go from 'gojs';
import { PaletteComponent } from 'gojs-angular';
import { DiagramNodeConfigMap } from 'src/app/nodes/declarations';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-diagram-builder-palette',
  templateUrl: './diagram-builder-palette.component.html',
  styleUrls: ['./diagram-builder-palette.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagramBuilderPaletteComponent implements OnChanges {
  @Input()
  nodes!: string[];

  @Input()
  nodeConfigs!: DiagramNodeConfigMap;

  paletteModelData: go.ObjectData = { prop: 'val' };

  paletteNodes: go.ObjectData[] = [];

  readonly paletteDivClassName = 'myPaletteDiv';

  skipsPaletteUpdate = false;

  @ViewChild('palette', { static: true }) paletteComponent!: PaletteComponent;

  ngOnChanges(changes: SimpleChanges): void {
    if ('nodes' in changes) {
      this.paletteNodes = this.buildPaletteNodes(this.nodes, this.nodeConfigs);
    }
  }

  private buildPaletteNodes(nodes: string[], nodeConfigs: DiagramNodeConfigMap): go.ObjectData[] {
    return nodes.map((node) => {
      const nodeConfig = nodeConfigs[node];

      return {
        type: nodeConfig.type,
        title: nodeConfig.title,
        color: nodeConfig.color,
        figure: nodeConfig.figure,
      };
    });
  }

  initPalette(): go.Palette {
    const palette = $(go.Palette);

    // define the Node template
    palette.nodeTemplate =
      $(go.Node, 'Auto',
        $(go.Shape, 'RoundedRectangle',
          {
            stroke: null
          },
          new go.Binding('fill', 'color')
        ),
        $(go.TextBlock, { margin: 8 },
          new go.Binding('text', 'key'))
      );

      palette.nodeTemplate = $(go.Node, 'Auto',
        { locationSpot: go.Spot.Center },
        new go.Binding('location', 'location', go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Shape, 'Circle',
          {
            fill: 'white',
            stroke: 'gray',
            strokeWidth: 2,
            portId: ''
          },
          new go.Binding('stroke', 'color'),
          new go.Binding('figure')),
        $(go.TextBlock,
          {
            margin: new go.Margin(5, 5, 3, 5),
            font: '10pt sans-serif',
            minSize: new go.Size(16, 16),
            maxSize: new go.Size(120, NaN),
            textAlign: 'center',
            editable: true
          },
          new go.Binding('text', 'title')
        )
      );

    return palette;
  }

  paletteModelChange(changes: go.IncrementalData) {
    // when setting state here, be sure to set skipsPaletteUpdate: true since GoJS already has this update
    // (since this is a GoJS model changed listener event function)
    // this way, we don't log an unneeded transaction in the Palette's undoManager history
    this.skipsPaletteUpdate = true;
  }
}
