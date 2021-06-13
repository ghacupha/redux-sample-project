import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UsersService} from "../users/user.service";
import {
  userAdditionWorked,
  userAdditionFailed,
  usersFetched,
  usersFetchFailed,
  usersFetchWorked, userHasBeenCreated
} from "./user.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {User} from "../users/users.model";

@Injectable()
export class UserEffects {
  fetchUsersEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersFetched),
      mergeMap(
        () => this.usersService.getAllUsers().pipe(
          map((users: User[]) => usersFetchWorked({users})),
          catchError(error => of(usersFetchFailed({error})))
        )
      )
    )
  );

  createUserEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(userHasBeenCreated),
      mergeMap(
        (action) => this.usersService.addUser(action.user).pipe(
          map(user => userAdditionWorked({user})),
          catchError(error => of(userAdditionFailed({error})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService) {
  }
}
