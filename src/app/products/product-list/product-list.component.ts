import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List'
  showImage: boolean = false;
  _filterByCharacters: string;

  public get filterBy(): string {
    return this._filterByCharacters;
  }

  public set filterBy(value: string) {
    this._filterByCharacters = value;
    this.filteredListProducts = this.filterBy ? this.filtereProducts(this.filterBy) : this.products;
  }

  filteredListProducts: IProduct[];
  products: IProduct[];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredListProducts = this.products;
  }
  filtereProducts(filter: string): IProduct[] {
    return this.products.filter((p: IProduct) => p.productName.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
  }
  toggleImage() {
    this.showImage = !this.showImage;
  }
  onRatingClicked(mesage: string): void {
    this.pageTitle = `Product List: ${mesage}`;
  }
}
