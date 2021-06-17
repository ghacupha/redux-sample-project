import {Action, createReducer, on} from "@ngrx/store";
import {User} from "../users/users.model";
import {
  userAdditionWorked,
  userDeletionWorked,
  userHasBeenSelected,
  userSelectionWorked,
  usersFetchWorked,
  userUpdateWorked
} from "./user.actions";

export const usersFeatureSelectorKey = "users";

export interface State {
  users: User[]
  selectedUser: User | undefined
}

export const initialState: State = {
  users: [],
  selectedUser: undefined
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
      ...state,
      users: [...users]
    }
  }),
  on(userUpdateWorked, (state, {users}) => {
    return {
      ...state,
      users: [...users],
    }
  }),
  on(userHasBeenSelected, (state, {user}) => {
    return {
      ...state,
      selectedUser: {...user}
    }
  }),
  on(userSelectionWorked, (state) => ({
    ...state,
    selectedUser: undefined
  }))
)

export function reducer(state: State | undefined, action: Action): State {
  return _reducer(state, action)
}
