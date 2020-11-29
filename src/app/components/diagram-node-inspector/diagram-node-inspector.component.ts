import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-diagram-node-inspector',
  templateUrl: './diagram-node-inspector.component.html',
  styleUrls: ['./diagram-node-inspector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagramNodeInspectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
