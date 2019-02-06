import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/models';
import { RoutingKeys } from 'src/app/core/routing/routing-keys.enum';
import { ProductService } from './../../shared/services';

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
