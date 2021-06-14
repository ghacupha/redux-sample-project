import {Action, createReducer, on} from "@ngrx/store";
import {User} from "../users/users.model";
import {userAdditionWorked, userDeletionWorked, usersFetchWorked} from "./user.actions";

export const usersFeatureSelectorKey = "users";

export interface State {
  users: User[]
}

export const initialState: State = {
  users: []
}

const _reducer = createReducer(
  initialState,
  on(usersFetchWorked, (state, {users}) => {
    return {
      ...state,
      users: [...state.users, ...users]
    }
  }),
  on(userAdditionWorked, (state, {user}) => {
    return {
      ...state,
      users: [...state.users, user]
    }
  }),
  on(userDeletionWorked, (state, {users}) => {
    return {
      // forget current state
      users: [...users]
    }
  })
)

export function reducer(state: State | undefined, action: Action): State {
  return _reducer(state, action)
}
