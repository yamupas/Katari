import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductssalesComponent } from './productssales.component';

describe('ProductssalesComponent', () => {
  let component: ProductssalesComponent;
  let fixture: ComponentFixture<ProductssalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductssalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductssalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
