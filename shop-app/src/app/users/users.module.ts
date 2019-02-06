import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { UsersSharedModule } from './shared/users-shared.module';
import { UsersRoutingModule } from './users-routing.module';

// components
import { UserInfoComponent } from './components';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,

    UsersSharedModule,
    UsersRoutingModule
  ],
  exports: [UserInfoComponent]
})
export class UsersModule { }
