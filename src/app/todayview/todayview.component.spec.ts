import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayviewComponent } from './todayview.component';

describe('TodayviewComponent', () => {
  let component: TodayviewComponent;
  let fixture: ComponentFixture<TodayviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
