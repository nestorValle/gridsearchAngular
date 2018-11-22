import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ValidateURLGuard } from './Services/guards/validate-url.guard';

const routes: Routes = [
  {path:'', redirectTo:'welcome',pathMatch:'full'},
  {path:'products',component:ProductListComponent},
  {path:'product/:id', canActivate:[ValidateURLGuard], component: ProductDetailComponent},
  {path:'**', redirectTo:'welcome', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
