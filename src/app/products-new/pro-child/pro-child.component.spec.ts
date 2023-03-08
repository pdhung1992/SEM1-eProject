import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProChildComponent } from './pro-child.component';

describe('ProChildComponent', () => {
  let component: ProChildComponent;
  let fixture: ComponentFixture<ProChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
