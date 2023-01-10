import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductAddComponent } from './containers/product-add/product-add.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from './services/products.service';
import { ProductListComponent } from './containers/product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent, ProductAddComponent, ProductItemComponent, ProductEditComponent, ProductFormComponent],
  imports: [SharedModule, CommonModule, ProductsRoutingModule],
  providers: [ProductsService]
})
export class ProductsModule {}
