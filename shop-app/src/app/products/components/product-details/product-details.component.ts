import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../shared/services/product.service';
import { Product } from '../../shared/models';
import { RoutingKeys } from 'src/app/core/routing/routing-keys.enum';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
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

  public onGoBack(): void {
    this.router.navigate([RoutingKeys.Products]);
  }
}
