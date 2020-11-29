import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramBuilderOverviewComponent } from './diagram-builder-overview.component';

describe('DiagramBuilderOverviewComponent', () => {
  let component: DiagramBuilderOverviewComponent;
  let fixture: ComponentFixture<DiagramBuilderOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramBuilderOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramBuilderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
