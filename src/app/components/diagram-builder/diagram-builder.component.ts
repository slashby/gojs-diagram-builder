import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';
import { DiagramNodesService } from '../../nodes/core/services/diagram-nodes.service';
import { DiagramNodeConfigMap, extractNodeSettingsFromConfig } from '../../nodes';
import {Node, DiagramSchema} from '../../declarations';
import cloneDeep from 'lodash-es/cloneDeep';
import merge from 'lodash-es/merge';

@Component({
  selector: 'app-diagram-builder',
  templateUrl: './diagram-builder.component.html',
  styleUrls: ['./diagram-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DiagramBuilderComponent implements OnChanges {
  observedDiagram!: go.Diagram;

  selectedNode: Node | null = null;

  @Input()
  diagramSchema!: DiagramSchema;

  readonly paletteNodes: string[] = ['circle', 'rectangle'];

  readonly nodeConfigs: DiagramNodeConfigMap;

  constructor(private diagramNodesService: DiagramNodesService) {
    this.nodeConfigs = diagramNodesService.configMap;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('diagramSchema' in changes) {
      this.diagramSchema = this.prepareDiagramSchema(this.diagramSchema);
    }
  }

  onPaneInit(observedDiagram: go.Diagram) {
    this.observedDiagram = observedDiagram;
  }

  onNodeSelected(node: go.Node | null) {
    let selectedNode: Node | null = null;
    if (node) {
      const {type} = node.data;
      const config = this.diagramNodesService.getNodeConfig(type);

      selectedNode = {
        node,
        config,
      }
    }

    this.selectedNode = selectedNode;
  }

  onSchemeUpdated(diagramSchema: DiagramSchema) {
    this.diagramSchema = diagramSchema;
  }

  onNodeDataUpdated([key, data]: [string, any]) {
    const updatedNode = this.findNodeByKey(this.diagramSchema.nodes, key);
    if (updatedNode) {
      updatedNode.data = data;
    }
  }

  private findNodeByKey(nodes: go.ObjectData[], key: string) {
    return nodes.find((node) => node.key === key);
  }

  private prepareDiagramSchema(diagramSchema: DiagramSchema) {
    const preparedDiagramSchema = cloneDeep(diagramSchema);

    preparedDiagramSchema.nodes = preparedDiagramSchema.nodes.map((node) => {
      const {type} = node;
      const config = this.diagramNodesService.getNodeConfig(type);

      return merge(extractNodeSettingsFromConfig(config), node);
    });

    return preparedDiagramSchema;
  }
}
