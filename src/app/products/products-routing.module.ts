import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './containers/product-add/product-add.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';
import { ProductListComponent } from './containers/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: ProductAddComponent },
  { path: ':/id/edit', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
