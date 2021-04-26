import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionslistComponent } from './colectionslist.component';

describe('ColectionslistComponent', () => {
  let component: ColectionslistComponent;
  let fixture: ComponentFixture<ColectionslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColectionslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
