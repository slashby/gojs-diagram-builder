import { TestBed } from '@angular/core/testing';

import { DiagramNodesService } from './diagram-nodes.service';

describe('DiagramNodesService', () => {
  let service: DiagramNodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagramNodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
