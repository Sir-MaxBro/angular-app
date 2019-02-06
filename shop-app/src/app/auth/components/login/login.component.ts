import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './../../../_core/auth';
import { UserAuth } from '../../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, DoCheck {

  public canLogin = false;
  public userAuth: UserAuth = {} as UserAuth;
  public loginErrorMessage: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.canLogin = !this.userAuth.login || !this.userAuth.password;
  }

  public onTryLogin(): void {
    const isUserLoginSuccess: boolean = this.authService.login(this.userAuth.login, this.userAuth.password);
    if (!isUserLoginSuccess) {
      this.loginErrorMessage = 'Something wrong';
      return;
    }

    const returnUrl: string = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
    if (returnUrl) {
      this.router.navigateByUrl(returnUrl);
    }
  }
}
