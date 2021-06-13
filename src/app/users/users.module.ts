import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {reducer, usersFeatureSelectorKey} from "../state/user.reducer";
import {UserListComponent} from "../components/user-list.component";
import {UsersService} from "./user.service";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "../state/user.effects";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(usersFeatureSelectorKey, reducer)
  ],
  exports: [UserListComponent],
  providers: [UsersService]
})
export class UsersModule{}
