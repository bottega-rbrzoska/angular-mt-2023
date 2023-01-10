import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { MyTestComponent } from './my-test/my-test.component';

@NgModule({
  declarations: [TestComponent, MyTestComponent],
  imports: [CommonModule, TestRoutingModule]
})
export class TestModule {}
