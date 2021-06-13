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
