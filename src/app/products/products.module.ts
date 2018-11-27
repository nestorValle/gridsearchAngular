import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ConvertToSpacesPipe, ProductDetailComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
