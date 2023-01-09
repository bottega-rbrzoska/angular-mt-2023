import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MyType } from '../models/MyType';

@Component({
  selector: 'mt-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TestComponent {

  displayMsg: string = 'test';

  testobject: MyType = {
    name: 'testname',
    count: 10
  }

  @Input()
  set msg(msgVal: string) {
    this.displayMsg = this.uppercasePipe.transform(msgVal)
  }

  uppercasePipe = new UpperCasePipe();



  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }
}
