import { Component } from '@angular/core';
import { DiagramSchema } from './declarations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diagram-builder';

  diagramSchema: DiagramSchema = {
    nodes: [
      { key: 'Alpha', type: 'circle', title: 'Alpha' },
      { key: 'Beta', type: 'circle', title: 'Beta' },
      { key: 'Gamma', type: 'rectangle' },
      { key: 'Delta', type: 'circle' }
    ],

    links: [
      { key: -1, from: 'Alpha', to: 'Beta', fromPort: 'r', toPort: '1' },
      { key: -2, from: 'Alpha', to: 'Gamma', fromPort: 'b', toPort: 't' },
      { key: -3, from: 'Beta', to: 'Beta' },
      { key: -4, from: 'Gamma', to: 'Delta', fromPort: 'r', toPort: 'l' },
      { key: -5, from: 'Delta', to: 'Alpha', fromPort: 't', toPort: 'r' }
    ],
  }
}
