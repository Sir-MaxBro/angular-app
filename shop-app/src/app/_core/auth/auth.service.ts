import { Injectable } from '@angular/core';
import { StorageService } from './../storage/storage.service';
import { AuthKeys } from './auth-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storageService: StorageService
  ) { }

  public login(login: string, password: string): boolean {
    if (login === password) {
      this.storageService.addItem(AuthKeys.User, login);
      return true;
    }
    return false;
  }

  public logout(login: string): void {
    localStorage.removeItem(login);
  }

  public isUserLogin(): boolean {
    return localStorage.getItem(AuthKeys.User) ? true : false;
  }
}
