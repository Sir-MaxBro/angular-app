import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingKeys } from './_core/routing/routing-keys.enum';

const routes: Routes = [
  {
    path: RoutingKeys.Products,
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: RoutingKeys.Auth,
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
