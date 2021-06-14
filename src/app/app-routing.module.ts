import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserAddComponent} from "./components/user-add.component";

const routes: Routes = [
  {
    path: 'view/updates',
    component: UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
