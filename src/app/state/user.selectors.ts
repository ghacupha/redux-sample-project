import {State, usersFeatureSelectorKey} from "./user.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectUsers = createSelector(
  createFeatureSelector<State>(usersFeatureSelectorKey),
  (state: State) => state.users
);
