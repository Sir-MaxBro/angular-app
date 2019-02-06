import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ProductListComponent, ProductDetailsComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'details/:productId',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
