import { Component } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'mt-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products!: Product[];

  constructor(private _productService: ProductsService) {
    this.products = _productService.getProducts();
  }
}
