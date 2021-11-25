import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomiciliosListComponent } from './domicilios-list.component';

describe('DomiciliosListComponent', () => {
  let component: DomiciliosListComponent;
  let fixture: ComponentFixture<DomiciliosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomiciliosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomiciliosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
