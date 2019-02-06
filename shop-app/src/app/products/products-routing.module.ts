import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import {
  ProductListComponent,
  ProductDetailsComponent,
  ProductEditComponent
} from './components';
import { AuthGuard } from '../_core/auth';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'details/:productId',
    component: ProductDetailsComponent
  },
  {
    path: 'edit/:productId',
    component: ProductEditComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
