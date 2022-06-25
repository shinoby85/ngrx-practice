import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UsersService} from "../../services/user.service";
import {getUsersPending, getUsersSuccess} from "../actions/users.actions";
import {catchError, EMPTY, map, mergeMap} from "rxjs";

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(getUsersPending),
    mergeMap(() => this.usersService.getUsers(5)
      .pipe(
        map((users) => getUsersSuccess({users})),
        catchError(() => EMPTY)
      ))
  ))


  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }

}

