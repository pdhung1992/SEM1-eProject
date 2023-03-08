import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StTimerComponent } from './st-timer.component';

describe('StTimerComponent', () => {
  let component: StTimerComponent;
  let fixture: ComponentFixture<StTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
