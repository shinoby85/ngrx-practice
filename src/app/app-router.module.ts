import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', loadChildren:()=>import('./users/users.module').then(mod=>mod.UsersModule)},
  {path: 'cart', loadChildren: () => import('./cart/cart.module').then(mod=>mod.CartModule)}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
