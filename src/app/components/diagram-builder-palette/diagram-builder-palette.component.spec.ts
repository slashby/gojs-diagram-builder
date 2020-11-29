import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramBuilderPaletteComponent } from './diagram-builder-palette.component';

describe('DiagramBuilderPaletteComponent', () => {
  let component: DiagramBuilderPaletteComponent;
  let fixture: ComponentFixture<DiagramBuilderPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramBuilderPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramBuilderPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
