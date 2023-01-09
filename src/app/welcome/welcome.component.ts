import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageInfo } from '../models/PageInfo';

@Component({
  selector: 'mt-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  @Input() username!: string;
  @Input() pageInfo!: PageInfo;
  @Output() welcomeMsg = new EventEmitter<string>()


  clickHandler() {
    this.welcomeMsg.emit('Hi' + this.username)
  }
}
