import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramNodeConfig, DIAGRAM_NODES_CONFIG } from '../declarations';

export const CircleDiagramNodeConfig: DiagramNodeConfig = {
  type: 'circle',
  title: 'Circle',
  color: 'firebrick',
  figure: 'Circle',
  fieldsConfig: [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Text',
        placeholder: 'Placeholder',
        required: true,
      },
    },
  ],
  data: {},
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: DIAGRAM_NODES_CONFIG,
      useValue: CircleDiagramNodeConfig,
      multi: true,
    }
  ]
})
export class CircleNodeModule { }
