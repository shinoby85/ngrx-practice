import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IState} from "../store";
import {decUserInCart, incUserInCart, removeUserFromCart} from "../store/actions/cart.actions";
import {ICartUser, selectUserInCart} from "../store/reducers/cart.reducers";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public users$ = this.store.select(selectUserInCart);

  constructor(private store: Store<IState>) {
  }

  ngOnInit(): void {
  }

  public increment({id}: ICartUser): void {
    this.store.dispatch(incUserInCart({id: id.value}));
  }

  public decrement(user: ICartUser): void {
    if (user.count === 1) {
      this.remove(user);
      return;
    }
    this.store.dispatch(decUserInCart({id: user.id.value}))
  }

  public remove({id}: ICartUser): void {
    this.store.dispatch(removeUserFromCart({id: id.value}));
  }

  public trackByFn(_index: number, item: ICartUser): string{
    return item.id.value
  }

}
