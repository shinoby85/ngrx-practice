import {IUser} from "../../interfaces";
import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Action, createReducer, on} from "@ngrx/store";
import {addUserToCart, decUserInCart, incUserInCart, removeUserFromCart} from "../actions/cart.actions";

export interface ICartUser extends IUser{
  count: number
}

export const cartAdapter = createEntityAdapter({
  selectId: (user: ICartUser)=>user.id.value
})


const initialState = cartAdapter.getInitialState();

const cartReducer = createReducer(initialState,
  on(removeUserFromCart, (state, {id})=>{
    return cartAdapter.removeOne(id, state);
  }),
  on(incUserInCart, (state,{id})=>{
    const entity = state.entities[id] as ICartUser;
    return cartAdapter.updateOne({id, changes:{count: ++entity.count}},state);
  }),
  on(decUserInCart, (state, {id})=>{
    const entity = state.entities[id] as ICartUser;
    return cartAdapter.updateOne({id, changes:{count: --entity.count}}, state);
  }),
  on(addUserToCart, (state, {user})=>{
    const entity = state.entities[user.id.value] as ICartUser;
    return cartAdapter.upsertOne({...user, count: entity? ++entity.count : 1}, state);
  })
  )

export default function reducer(state: EntityState<ICartUser> | undefined, action: Action){
  return cartReducer(state, action);
}
