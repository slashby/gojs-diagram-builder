import { Injectable } from '@angular/core';
import {DiagramNodesService} from '../nodes/core/services/diagram-nodes.service';
import {extractNodeSettingsFromConfig} from '../nodes';
import merge from 'lodash-es/merge';

@Injectable({
  providedIn: 'root'
})
export class DiagramBuilderService {
  constructor(private diagramNodesService: DiagramNodesService) { }

  prepareNewNode(node: go.Part) {
    const {type} = node.data;
    const config = this.diagramNodesService.getNodeConfig(type);

    node.data = merge(
      extractNodeSettingsFromConfig(config),
      node.data,
    );
  }
}
