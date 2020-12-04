import { Inject, Injectable } from '@angular/core';
import { DiagramNodeConfig, DiagramNodeConfigMap, DIAGRAM_NODES_CONFIG } from '../../declarations';

@Injectable({
  providedIn: 'root'
})
export class DiagramNodesService {
  readonly configMap: DiagramNodeConfigMap;

  constructor(@Inject(DIAGRAM_NODES_CONFIG) private diagramNodesConfig: DiagramNodeConfig[]) {
    this.configMap = this.buildConfigMap(diagramNodesConfig);
  }

  private buildConfigMap(diagramNodesConfig: DiagramNodeConfig[]): DiagramNodeConfigMap {
    return diagramNodesConfig.reduce<DiagramNodeConfigMap>((map, nodeConfig) => {
      map[nodeConfig.type] = nodeConfig;
      return map;
    }, {});
  }

  getNodeConfig(type: string): DiagramNodeConfig | never {
    const nodeConfig = this.configMap[type];

    if (nodeConfig === undefined) {
      throw new Error(`Unknown node type: ${type}`)
    }

    return nodeConfig;
  }
}
