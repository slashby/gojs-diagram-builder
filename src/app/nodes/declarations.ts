import { InjectionToken } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface DiagramNodeConfig {
  type: string;
  title: string;
  color: string;
  figure: string;
  fieldsConfig: FormlyFieldConfig[];
  data: {[key: string]: any};
}

export interface DiagramNodeConfigMap {
  [key: string]: DiagramNodeConfig;
}

export const DIAGRAM_NODES_CONFIG = new InjectionToken<DiagramNodeConfig[]>('DiagramNodesConfig');
