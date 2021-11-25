import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomiciliosFormComponent } from './domicilios-form.component';

describe('DomiciliosFormComponent', () => {
  let component: DomiciliosFormComponent;
  let fixture: ComponentFixture<DomiciliosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomiciliosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomiciliosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
