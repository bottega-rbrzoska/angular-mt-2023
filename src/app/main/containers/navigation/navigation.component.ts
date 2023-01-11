import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'mt-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(private _authService: AuthService) {
    this.isLoggedIn$ = _authService.isLoggedIn$;
  }

  authHandler(login: boolean) {
    login ? this._authService.login() : this._authService.logout();
  }
}
