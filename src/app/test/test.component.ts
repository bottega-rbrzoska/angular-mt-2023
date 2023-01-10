import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MyType } from '../models/MyType';
import { MULTI_PROVIDER_TOKEN } from '../tokens';
import { TestService } from './test.service';
export type ConfigValue = { name: string };
@Component({
  selector: 'mt-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TestComponent {
  displayMsg: string = 'test';
  showBox = false;
  testobject: MyType = {
    name: 'testname',
    count: 10
  };

  dataCollection: MyType[] = [{ name: 'Name1', count: 10 }, { name: 'Name2' }, { name: 'Name3', count: 30 }, { name: 'Name4', count: 40 }];

  @Input()
  set msg(msgVal: string) {
    this.displayMsg = this.uppercasePipe.transform(msgVal);
  }

  constructor(@Inject(MULTI_PROVIDER_TOKEN) multiProvider: ConfigValue[], public testService: TestService) {
    console.log(multiProvider);
    testService.getTestData();
  }

  uppercasePipe = new UpperCasePipe();
  toggleBox() {
    this.showBox = !this.showBox;
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
}
