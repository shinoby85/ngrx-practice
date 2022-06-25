import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartUserComponent } from './cart-user/cart-user.component';
import {CartComponent} from "./cart.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const route: Routes = [
  {
    path: '', component: CartComponent
  }
]

@NgModule({
  declarations: [
    CartComponent,
    CartUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class CartModule { }
