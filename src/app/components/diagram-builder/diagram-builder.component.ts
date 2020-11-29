import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-diagram-builder',
  templateUrl: './diagram-builder.component.html',
  styleUrls: ['./diagram-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DiagramBuilderComponent {
  observedDiagram: go.Diagram | null = null;

  selectedNode: go.Node | null = null;

  diagramNodeData: go.ObjectData[] = [
    { key: 'Alpha', text: 'Alpha', color: 'lightblue', arr: [1, 2] },
    { key: 'Beta', text: 'Beta', color: 'orange', figure: 'Square' },
    { key: 'Gamma', text: 'Gamma', color: 'lightgreen' },
    { key: 'Delta', text: 'Delta', color: 'pink' }
  ];

  diagramLinkData: go.ObjectData[] = [
    { key: -1, from: 'Alpha', to: 'Beta', fromPort: 'r', toPort: '1' },
    { key: -2, from: 'Alpha', to: 'Gamma', fromPort: 'b', toPort: 't' },
    { key: -3, from: 'Beta', to: 'Beta' },
    { key: -4, from: 'Gamma', to: 'Delta', fromPort: 'r', toPort: 'l' },
    { key: -5, from: 'Delta', to: 'Alpha', fromPort: 't', toPort: 'r' }
  ];

  public paletteNodeData: go.ObjectData[] = [
    { key: 'PaletteNode1--', text: 'Node1', color: 'firebrick', figure: 'Circle' },
    { key: 'PaletteNode2', text: 'Node2', color: 'blueviolet', figure: 'Square' }
  ];

  onPaneInit(observedDiagram: go.Diagram) {
    this.observedDiagram = observedDiagram;
  }

  onNodeSelected(selectedNode: go.Node | null) {
    this.selectedNode = selectedNode;
  }
}
