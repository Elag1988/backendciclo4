import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesListComponent } from './calificaciones-list.component';

describe('CalificacionesListComponent', () => {
  let component: CalificacionesListComponent;
  let fixture: ComponentFixture<CalificacionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
