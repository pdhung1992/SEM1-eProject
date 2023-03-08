import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedChildComponent } from './completed-child.component';

describe('CompletedChildComponent', () => {
  let component: CompletedChildComponent;
  let fixture: ComponentFixture<CompletedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
