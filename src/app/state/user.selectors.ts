import {State, usersFeatureSelectorKey} from "./user.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const userFeatureSelector = createFeatureSelector<State>(usersFeatureSelectorKey);

export const selectUsers = createSelector(
  userFeatureSelector,
  (state: State) => state.users
);

export const selectUserForUpdate = createSelector(
  userFeatureSelector,
  (state: State) => state.selectedUser
)
