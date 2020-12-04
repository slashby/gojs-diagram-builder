import { DiagramNodeConfig } from './nodes/declarations';
import * as go from 'gojs';

export interface Node {
  node: go.Node;
  config: DiagramNodeConfig;
}

export interface DiagramSchema {
  nodes: go.ObjectData[];
  links: go.ObjectData[];
}
