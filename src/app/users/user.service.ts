import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./users.model";

@Injectable({providedIn: 'root'})
export class UsersService {
  userUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.userUrl);
  }

  addUser(user: User): Observable<User> {

    return this.http.post<User>(this.userUrl, user);
  }

  /**
   * Returns observable object which I won't use
   * @param userId
   */
  deleteUser(userId: number): Observable<Object> {

    return this.http.delete(`${this.userUrl}/${userId}` )
  }
}
