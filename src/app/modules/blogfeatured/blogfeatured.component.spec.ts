import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogfeaturedComponent } from './blogfeatured.component';

describe('BlogfeaturedComponent', () => {
  let component: BlogfeaturedComponent;
  let fixture: ComponentFixture<BlogfeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogfeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogfeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
