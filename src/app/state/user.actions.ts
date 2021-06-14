import {createAction, props} from "@ngrx/store";
import {User} from "../users/users.model";

export const usersFetched = createAction(
  '[Users Page] Users fetched'
)

export const usersFetchWorked = createAction(
  '[Users API] Users fetched successfully',
  props<{users: User[]}>()
)

export const usersFetchFailed = createAction(
  '[Users API] Users fetch failed',
  props<{error: string}>()
)

/**
 * Dispatched when the user adds a new user
 */
export const userHasBeenCreated = createAction(
  '[Users Page] Users created',
  props<{user: User}>()
)

/**
 * Dispatched when the user is added successfully
 */
export const userAdditionWorked = createAction(
  '[Users API] Users added successfully',
  props<{user: User}>()
)

/**
 * Dispatched when the user addition process fails
 */
export const userAdditionFailed = createAction(
  '[Users API] Users add failed',
  props<{error: string}>()
)

/**
 * Dispatched when a user entity is deleted
 */
export const userHasBeenDeleted = createAction(
 '[Users Page] user deleted',
 props<{userId: number}>()
);

/**
 * Dispatched when user is deleted successfully and has list of current
 * users as metadata
 */
export const userDeletionWorked = createAction(
  '[Users API] User has been deleted successfully',
  props<{users: User[]}>()
)

/**
 * Dispatched after user list is dispatch in the event we delete a user;
 * and then failure is experienced
 */
export const userListRefreshFailed = createAction(
  '[Users API] Refresh of user list has failed',
  props<{error: string}>()
)

export const userDeletionFailed = createAction(
  '[Users API] User has deletion has failed',
  props<{error: String}>()
)

export const userHasBeenUpdated = createAction(
  '[User Page] User has been updated',
  props<{user: User}>()
)

export const userUpdateWorked = createAction(
  '[User API] User has been updated',
  props<{users: User[]}>()
)

export const userUpdateFailed = createAction(
  '[User API] User has been updated',
  props<{error: string}>()
)

export const userHasBeenSelected = createAction(
  '[User Page] User has been selected',
  props<{user: User}>()
)
