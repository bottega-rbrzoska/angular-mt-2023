import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() isLoggedIn!: boolean;
  @Output() auth = new EventEmitter<boolean>();

  login() {
    this.auth.emit(true);
  }

  logout() {
    this.auth.emit(false);
  }
}
