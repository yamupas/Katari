import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepbyComponent } from './stepby.component';

describe('StepbyComponent', () => {
  let component: StepbyComponent;
  let fixture: ComponentFixture<StepbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
