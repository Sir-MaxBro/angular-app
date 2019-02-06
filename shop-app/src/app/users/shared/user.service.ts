import { Injectable } from '@angular/core';
import { User } from './user.model';
import { UsersSharedModule } from './users-shared.module';

@Injectable({
  providedIn: UsersSharedModule
})
export class UserService {
  public getUserByLogin(login: string): User {
    return new User(1, 'First user');
  }
}
