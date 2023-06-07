import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlUserApi: string;

  constructor(private http: HttpClient) {
    this.urlUserApi = 'http://127.0.0.1:8000/api/users';
  }

  registerUser(user: UserDTO): Observable<any> {
    return this.http.post<UserDTO>(`${this.urlUserApi}`, user);
  }
}
