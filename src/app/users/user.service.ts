import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable, of} from "rxjs";
import {User} from "./users.model";
import {State} from "../state/user.reducer";
import {select, Store} from "@ngrx/store";
import {selectUsers} from "../state/user.selectors";

@Injectable({providedIn: 'root'})
export class UsersService {
  userUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private state: Store<State>
  ) {
  }

  getAllUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.userUrl);
  }

  /**
   * We add a user and return EMPTY if the user exists
   *
   * @param user
   */
  addUser(user: User): Observable<User> {

   return this.http.post<User>(this.userUrl, user);
  }

  updateUser(user: User): Observable<User[]> {

    if (!this.contains(this.existingUsers, user.id)) {
      this.http.put<User>(this.userUrl, user)
      return this.getAllUsers();
    }
    else
      return of(this.existingUsers)
  }

  get existingUsers() {
    const existingUsers: User[] = [];

    this.state.pipe(select(selectUsers)).subscribe(users => {
      existingUsers.push(...users)
    });

    return existingUsers;
  }

  /**
   * Returns observable object which I won't use
   * @param userId
   */
  deleteUser(userId: number): Observable<Object> {

    return this.http.delete(`${this.userUrl}/${userId}`)
  }

  contains(a: User[], userId: number): boolean {
    let i: number = a.length;
    while (i--) {
      if (a[i].id === userId) {
        return true;
      }
    }
    return false;
  }
}
