import { Component } from '@angular/core';
import { TestService } from './core/test.service';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome title';
}
