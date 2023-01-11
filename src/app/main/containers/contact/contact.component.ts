import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'mt-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(auth: AuthService) {}
}
