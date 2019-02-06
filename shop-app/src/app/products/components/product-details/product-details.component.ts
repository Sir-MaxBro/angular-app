import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RoutingKeys } from 'src/app/_core/routing/routing-keys.enum';
import { Product, ProductService } from '../../shared';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const currentProductId: number = +this.activatedRoute.snapshot.paramMap.get('productId');
    this.product = this.productService.getProductById(currentProductId);
  }

  public onEditProduct(): void {
    this.router.navigate([RoutingKeys.Products, 'edit', this.product.id]);
  }
}
