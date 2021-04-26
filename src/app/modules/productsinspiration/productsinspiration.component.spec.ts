import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinspirationComponent } from './productsinspiration.component';

describe('ProductsinspirationComponent', () => {
  let component: ProductsinspirationComponent;
  let fixture: ComponentFixture<ProductsinspirationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinspirationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
