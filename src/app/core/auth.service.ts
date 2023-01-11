import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private _isLoggedInSubj = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedInSubj.asObservable();

  constructor() {}

  login() {
    this._isLoggedInSubj.next(true);
  }

  logout() {
    this._isLoggedInSubj.next(false);
  }
}
