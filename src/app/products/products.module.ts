import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';
import { VatPipe } from '../shared/vat.pipe';

export const myFactory = () => new VatPipe();

@NgModule({
  declarations: [ProductListComponent, ProductAddComponent, ProductItemComponent, ProductEditComponent, ProductFormComponent],
  imports: [SharedModule, CommonModule, ProductsRoutingModule],
  providers: []
})
export class ProductsModule {}
