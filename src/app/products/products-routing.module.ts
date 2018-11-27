import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ValidateURLGuard } from '../Services/guards/validate-url.guard';

const routes: Routes = [
  {path:'products',component:ProductListComponent},
  {path:'product/:id', canActivate:[ValidateURLGuard], component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }