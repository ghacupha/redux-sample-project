import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../users/users.model";
import {select, Store} from "@ngrx/store";
import {State} from "../state/user.reducer";
import {userHasBeenDeleted, userHasBeenSelected, usersFetched} from "../state/user.actions";
import {selectUsers} from "../state/user.selectors";

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.template.html'
})
export class UserListComponent implements OnInit {

  users$?: Observable<User[]>;

  constructor(private state: Store<State>) {
  }

  ngOnInit() {
    this.state.dispatch(usersFetched());

    this.users$ = this.state.pipe(select(selectUsers));
  }

  delete(userId: number): void {
    this.state.dispatch(userHasBeenDeleted({userId}));
  }

  update(user: User): void {
    this.state.dispatch(userHasBeenSelected({user}))
  }
}
