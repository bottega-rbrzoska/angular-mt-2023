import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TestComponent } from './test.component';
import { TestResolver } from './test.resolver';

const routes: Routes = [
  { path: '', component: TestComponent, resolve: { testData: TestResolver } },
  { path: 'my-test', component: MyTestComponent },
  { path: 'rxjs', component: RxjsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}
