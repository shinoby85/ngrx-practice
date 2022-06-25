import usersReducer from './reducers/users.reducers';
import cartReducer from './reducers/cart.reducers'
import {IUser} from "../interfaces";
import {EntityState} from "@ngrx/entity";
import {ICartUser} from "./reducers/cart.reducers";

export interface IState {
  users: {
    items: IUser[],
    loading: boolean
  },
  cart: EntityState<ICartUser>
}

export const reducers = {
  users: usersReducer,
  cart: cartReducer
}
