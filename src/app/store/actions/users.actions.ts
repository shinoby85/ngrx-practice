import {createAction, props} from "@ngrx/store";
import {IUser} from "../../interfaces";

export const getUsersPending = createAction('[User] Get users pending');

export const getUsersSuccess = createAction('[User] Get users success', props<{ users: IUser[] }>());

export const getUsersError = createAction('[User] Get users error');





