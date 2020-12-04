import { TestBed } from '@angular/core/testing';

import { DiagramBuilderService } from './diagram-builder.service';

describe('DiagramBuilderService', () => {
  let service: DiagramBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagramBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
