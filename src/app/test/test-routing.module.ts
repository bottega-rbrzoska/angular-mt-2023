import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';
import { TestComponent } from './test.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'my-test', component: MyTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}
