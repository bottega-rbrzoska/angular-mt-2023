import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { MyTestComponent } from './my-test/my-test.component';
import { SharedModule } from '../shared/shared.module';
import { TestService } from './test.service';

@NgModule({
  declarations: [TestComponent, MyTestComponent],
  imports: [CommonModule, TestRoutingModule, SharedModule],
  providers: [TestService]
})
export class TestModule {}
