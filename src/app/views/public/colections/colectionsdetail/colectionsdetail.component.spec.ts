import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionsdetailComponent } from './colectionsdetail.component';

describe('ColectionsdetailComponent', () => {
  let component: ColectionsdetailComponent;
  let fixture: ComponentFixture<ColectionsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColectionsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
