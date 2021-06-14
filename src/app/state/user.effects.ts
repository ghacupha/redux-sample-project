import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UsersService} from "../users/user.service";
import {
  userAdditionWorked,
  userAdditionFailed,
  usersFetched,
  usersFetchFailed,
  usersFetchWorked,
  userHasBeenCreated,
  userHasBeenDeleted,
  userDeletionWorked,
  userDeletionFailed,
  userListRefreshFailed
} from "./user.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {User} from "../users/users.model";
import {createAction} from "@ngrx/store";

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

  /**
   * Delete users and then dispatched user-deletion-worked with the array of new
   * user list to the reducer
   */
  deleteUserEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(userHasBeenDeleted),
      mergeMap(
        (action) => this.usersService.deleteUser(action.userId).pipe(
          mergeMap(() => this.usersService.getAllUsers().pipe(
            map((users: User[]) => userDeletionWorked({users})),
            catchError(error => of(userListRefreshFailed({error})))
          )),
          catchError(error => of(userDeletionFailed({error})))
        )
      )
    )
  )

  // updateUserEffect$ = createEffect();

  constructor(
    private actions$: Actions,
    private usersService: UsersService) {
  }
}
