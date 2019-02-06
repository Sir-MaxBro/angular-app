import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { ProductsSharedModule } from './products-shared.module';

@Injectable({
  providedIn: ProductsSharedModule
})
export class ProductService {

  private products: Array<Product> = [
    new Product(1, 'Product 1', 100, 'Product description 1'),
    new Product(2, 'Product 2', 200, 'Product description 2'),
    new Product(3, 'Product 3', 300, 'Product description 3'),
    new Product(4, 'Product 4', 400, 'Product description 4'),
    new Product(5, 'Product 5', 500.15, 'Product description 5')
  ];

  constructor() { }

  public getAllProducts(): ReadonlyArray<Product> {
    return this.products;
  }

  public getProductById(productId: number): Readonly<Product> {
    return this.products
      .find(product => product.id === productId);
  }

  public saveProduct(product: Product): void {
    const isProductExists: boolean = this.getProductById(product.id) ? true : false;
    if (isProductExists) {
      this.products = [
        ...this.products,
        product
      ];
    } else {
      this.products.push(product);
    }
  }
}
