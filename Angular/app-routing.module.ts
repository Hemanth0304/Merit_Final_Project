import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([ 

    {path:'products', component:ProductComponent},
    {path:'Cart', component:CartComponent}]
    )],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
