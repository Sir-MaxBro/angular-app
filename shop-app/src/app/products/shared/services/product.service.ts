import { Injectable } from '@angular/core';

import { Product } from '../models';
import { ProductsSharedModule } from '../products-shared.module';

@Injectable({
  providedIn: ProductsSharedModule
})
export class ProductService {

  constructor() { }

  public getAllProducts(): ReadonlyArray<Product> {
    return [
      new Product(1, 'Product 1', 'Product description 1'),
      new Product(2, 'Product 2', 'Product description 2'),
      new Product(3, 'Product 3', 'Product description 3'),
      new Product(4, 'Product 4', 'Product description 4'),
      new Product(5, 'Product 5', 'Product description 5')
    ];
  }

  public getProductById(productId: number): Readonly<Product> {
    return this.getAllProducts()
      .find(product => product.id === productId);
  }
}
