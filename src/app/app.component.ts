import {Component} from '@angular/core';
import {totalUsers} from "./store/reducers/cart.reducers";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-practice';
  public cartUserCount$ = this.store.select(totalUsers);

  constructor(private store:Store) {
  }

}
