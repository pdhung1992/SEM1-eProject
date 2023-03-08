import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STimerComponent } from './s-timer.component';

describe('STimerComponent', () => {
  let component: STimerComponent;
  let fixture: ComponentFixture<STimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
