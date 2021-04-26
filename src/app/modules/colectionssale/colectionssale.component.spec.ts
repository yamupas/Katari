import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionssaleComponent } from './colectionssale.component';

describe('ColectionssaleComponent', () => {
  let component: ColectionssaleComponent;
  let fixture: ComponentFixture<ColectionssaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColectionssaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionssaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
