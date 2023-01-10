import { Component, Input } from '@angular/core';
import { PageInfo, User } from '@mt/models';
@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pageInfo: PageInfo = {
    description: 'descr',
    title: 'Welcome Home1'
  };

  user: User = {
    email: 'test@sdsadsad.pl',
    isAdmin: false,
    name: 'Alojzy'
  };

  messageHandler(message: string) {
    console.log(message);
  }
}
