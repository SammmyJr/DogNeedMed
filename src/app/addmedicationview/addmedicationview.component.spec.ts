import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedicationviewComponent } from './addmedicationview.component';

describe('AddmedicationviewComponent', () => {
  let component: AddmedicationviewComponent;
  let fixture: ComponentFixture<AddmedicationviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmedicationviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmedicationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
