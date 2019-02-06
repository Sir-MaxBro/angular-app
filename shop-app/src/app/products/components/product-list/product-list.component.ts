import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { RoutingKeys } from 'src/app/_core/routing/routing-keys.enum';
import { Product, ProductService } from './../../shared';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: ReadonlyArray<Product> = [];

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  public onOpenDetails($event: number): void {
    this.router.navigate([RoutingKeys.Products, 'details', $event]);
  }
}
