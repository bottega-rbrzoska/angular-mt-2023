import { Component } from '@angular/core';
import { MyType } from '../../models/MyType';

@Component({
  selector: 'mt-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent {
  testvar: MyType = {
    name: 'testname'
  };
}
