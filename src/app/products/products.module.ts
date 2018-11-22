import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductListComponent, ConvertToSpacesPipe, StarComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
