import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedinstagramComponent } from './feedinstagram.component';

describe('FeedinstagramComponent', () => {
  let component: FeedinstagramComponent;
  let fixture: ComponentFixture<FeedinstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedinstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedinstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
