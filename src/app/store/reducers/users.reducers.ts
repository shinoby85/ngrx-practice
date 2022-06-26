import {IUser} from "../../interfaces";
import {Action, createReducer, on, State} from "@ngrx/store";
import {getUsersPending, getUsersSuccess} from "../actions/users.actions";
import {cartAdapter} from "./cart.reducers";

const initialState: {items:IUser[], loading: boolean} = {
  items: [],
  loading: false
};

const scoreboardReducer = createReducer(
  initialState,
  on(getUsersPending,(state)=>{
    return {
      ...state,
      loading: true
    }
  }),
  on(getUsersSuccess, (state, action) => {
    return {
      items: action.users,
      loading: false
    };
  })
)

export default function reducer(state: any,action: Action) {
  return scoreboardReducer(state,action);
}


