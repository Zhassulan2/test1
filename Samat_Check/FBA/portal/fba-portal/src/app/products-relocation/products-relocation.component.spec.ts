import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRelocationComponent } from './products-relocation.component';
import {beforeEach, describe, expect, it} from '@angular/core/testing/src/testing_internal';

describe('ProductsSendComponent', () => {
  let component: ProductsRelocationComponent;
  let fixture: ComponentFixture<ProductsRelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsRelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});