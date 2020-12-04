import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Node } from '../../declarations';
import cloneDeep from 'lodash-es/cloneDeep';

@Component({
  selector: 'app-diagram-node-inspector',
  templateUrl: './diagram-node-inspector.component.html',
  styleUrls: ['./diagram-node-inspector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagramNodeInspectorComponent implements OnChanges {
  @Input()
  node!: Node;

  @Output()
  dataUpdated = new EventEmitter<[key: string, model: any]>();

  model: any;

  hasForm = false;

  readonly form: FormGroup;

  constructor() {
    this.form = new FormGroup({});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('node' in changes) {
      const nodeData = this.node.node.data.data;
      this.model = cloneDeep(nodeData);
      this.hasForm = this.node.config.fieldsConfig.length > 0;
    }
  }

  onSubmit() {
    this.dataUpdated.emit([this.node.node.key as string, cloneDeep(this.model)]);
  }
}
