import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private _isLoggedInSubj = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedInSubj.asObservable();
  token: string = 'sfh8w7g387fhih9h384jgoi43jh98j43g34g43g';

  constructor(private _router: Router) {}

  get isLoggedIn() {
    return this._isLoggedInSubj.value;
  }

  login() {
    this._isLoggedInSubj.next(true);
  }

  logout() {
    this._isLoggedInSubj.next(false);
    this._router.navigateByUrl('/');
  }
}
