import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {reducer, usersFeatureSelectorKey} from "../state/user.reducer";
import {UserListComponent} from "../components/user-list.component";
import {UsersService} from "./user.service";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "../state/user.effects";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {UserAddComponent} from "../components/user-add.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'updates',
    component: UserAddComponent
  }
]

@NgModule({
  declarations: [UserListComponent, UserAddComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(usersFeatureSelectorKey, reducer),
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [UserListComponent, UserAddComponent],
  providers: [UsersService]
})
export class UsersModule{}
