import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as go from 'gojs';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-diagram-builder-overview',
  templateUrl: './diagram-builder-overview.component.html',
  styleUrls: ['./diagram-builder-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagramBuilderOverviewComponent {
  @Input()
  observedDiagram!: go.Diagram;

  readonly oDivClassName = 'myOverviewDiv';

  initOverview(): go.Overview {
    return $(go.Overview);
  }
}
