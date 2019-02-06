import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, ProductService } from './../../shared';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  public product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const currentProductId: number = +this.activatedRoute.snapshot.paramMap.get('productId');
    this.product = this.productService.getProductById(currentProductId);
  }

  public onSaveProduct(): void {
    this.productService.saveProduct(this.product);
  }
}
