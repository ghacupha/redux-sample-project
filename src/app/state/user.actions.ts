import {createAction, props} from "@ngrx/store";
import {User} from "../users/users.model";

export const usersFetched = createAction(
  '[Users Page] Users fetched'
)

export const usersFetchWorked = createAction(
  '[Users Page] Users fetched successfully',
  props<{users: User[]}>()
)

export const usersFetchFailed = createAction(
  '[Users Page] Users fetch failed',
  props<{error: string}>()
)
