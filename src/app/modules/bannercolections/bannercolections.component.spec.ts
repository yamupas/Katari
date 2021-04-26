import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannercolectionsComponent } from './bannercolections.component';

describe('BannercolectionsComponent', () => {
  let component: BannercolectionsComponent;
  let fixture: ComponentFixture<BannercolectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannercolectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannercolectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
