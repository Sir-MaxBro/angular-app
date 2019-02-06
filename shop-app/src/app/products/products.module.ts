import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// modules
import { GoBackModule } from '../_ui/go-back/go-back.module';
import { ProductsSharedModule } from './shared/products-shared.module';
import { ProductsRoutingModule } from './products-routing.module';

// components
import {
  ProductListComponent,
  ProductItemComponent,
  ProductDetailsComponent,
  ProductEditComponent
} from './components';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    GoBackModule,
    ProductsSharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
