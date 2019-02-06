import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ProductsSharedModule } from './shared/products-shared.module';
import { ProductsRoutingModule } from './products-routing.module';

// components
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,

    ProductsSharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
