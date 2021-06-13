import {State} from "./user.reducer";
import {createSelector, props} from "@ngrx/store";
import {User} from "../users/users.model";

export const selectUsers = (state: State) => state.users;
