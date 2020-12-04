import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleNodeModule } from './circle-node/circle-node.module';
import { RectangleNodeModule } from './rectangle-node/rectangle-node.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    CircleNodeModule,
    RectangleNodeModule,
  ]
})
export class NodesModule { }
