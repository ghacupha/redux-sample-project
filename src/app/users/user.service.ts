import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./users.model";

@Injectable({providedIn: 'root'})
export class UsersService {
  userUrl = 'https://my-json-server.typicode.com/ghacupha/fake-test-data/db';

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.userUrl);
  }
}
