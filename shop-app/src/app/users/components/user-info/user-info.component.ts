import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../shared';
import { StorageService } from './../../../_core/storage/storage.service';
import { AuthKeys } from 'src/app/_core/auth';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public user: User = {} as User;

  constructor(
    private userService: UserService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    const currentUserLogin: string = this.storageService.getItem(AuthKeys.User);
    this.user = this.userService.getUserByLogin(currentUserLogin);
  }
}
