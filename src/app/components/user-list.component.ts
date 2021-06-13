import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../users/users.model";
import {select, Store} from "@ngrx/store";
import {State} from "../state/user.reducer";
import {usersFetched} from "../state/user.actions";
import {selectUsers} from "../state/user.selectors";

@Component({
  selector: 'app-user-list',
  template: `
    <h4>Users list</h4>
    <ul>
      <li *ngFor="let user of users$ | async">
        {{user.id}}. {{user.name}}
      </li>
    </ul>
  `
})
export class UserListComponent implements OnInit {

  users$?: Observable<User[]>;

  constructor(private state: Store<State>) {
  }

  ngOnInit() {
    this.state.dispatch(usersFetched());

    this.users$ = this.state.pipe(select(selectUsers));
  }
}
