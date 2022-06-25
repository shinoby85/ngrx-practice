import {createAction, props} from "@ngrx/store";
import {IUser} from "../../interfaces";

export const addUserToCart = createAction('[Cart] Add user to cart',  props<{user:IUser}>());

export const removeUserFromCart = createAction('[Cart] Remove user from cart', props<{id: string}>());

export const incUserInCart  = createAction('[Cart] Increment user in cart', props<{id: string}>());

export const decUserInCart = createAction('[Cart] Decrement user in cart',  props<{id: string}>());
