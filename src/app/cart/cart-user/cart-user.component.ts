import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICartUser} from "../../store/reducers/cart.reducers";

@Component({
  selector: 'app-cart-user',
  templateUrl: './cart-user.component.html',
  styleUrls: ['./cart-user.component.scss']
})
export class CartUserComponent implements OnInit {

  @Input()
  public user!: ICartUser;

  @Output()
  public remove = new EventEmitter();

  @Output()
  public increment = new EventEmitter<ICartUser>();

  @Output()
  public decrement = new EventEmitter<ICartUser>();


  constructor() { }

  ngOnInit(): void {
  }

}
