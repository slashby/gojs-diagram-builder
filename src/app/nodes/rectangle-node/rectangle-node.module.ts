import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramNodeConfig, DIAGRAM_NODES_CONFIG } from '../declarations';

export const RectangleDiagramNodeConfig: DiagramNodeConfig = {
  type: 'rectangle',
  title: 'Rectangle',
  figure: 'Rectangle',
  color: 'blueviolet',
  fieldsConfig: [],
  data: {},
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: DIAGRAM_NODES_CONFIG,
      useValue: RectangleDiagramNodeConfig,
      multi: true,
    }
  ]
})
export class RectangleNodeModule { }
