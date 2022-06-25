import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {Store} from "@ngrx/store";
import {IState} from "../store";
import {getUsersPending} from "../store/actions/users.actions";
import {addUserToCart} from "../store/actions/cart.actions";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users$: Observable<IUser[]> = this.store.select('users','items');
  public loading$: Observable<boolean> = this.store.select('users','loading');
  constructor(private store: Store<IState>) {
  }

  ngOnInit() {
    this.store.dispatch(getUsersPending());
  }

  add(data:any) {
    this.store.dispatch(addUserToCart({user: data}))
  }

}
