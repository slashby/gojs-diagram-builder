import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramNodeInspectorComponent } from './diagram-node-inspector.component';

describe('DiagramNodeInspectorComponent', () => {
  let component: DiagramNodeInspectorComponent;
  let fixture: ComponentFixture<DiagramNodeInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramNodeInspectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramNodeInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
