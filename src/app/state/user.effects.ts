import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UsersService} from "../users/user.service";
import {usersFetched, usersFetchFailed, usersFetchWorked} from "./user.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class UserEffects {
  fetchUsers$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersFetched),
      mergeMap(
        () => this.usersService.getAllUsers().pipe(
          map((users) => usersFetchWorked({users})),
          catchError(error => of(usersFetchFailed(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService) {
  }
}
