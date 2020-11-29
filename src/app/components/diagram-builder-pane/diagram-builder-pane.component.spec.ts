import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramBuilderPaneComponent } from './diagram-builder-pane.component';

describe('DiagramBuilderPaneComponent', () => {
  let component: DiagramBuilderPaneComponent;
  let fixture: ComponentFixture<DiagramBuilderPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramBuilderPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramBuilderPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
