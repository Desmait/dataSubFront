import { Injectable } from '@angular/core';
import {BaseApi} from '../models/base-api';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getAllUsers(): Observable<any> {
    return this.get('api/users');
  }

  createNewUsers(users: UserModel): Observable<any> {
    return this.post('api/users', users);
  }

  updateUsers(users: UserModel) {
    return this.put(`api/users`, users);
  }

  deleteUsers(id: number) {
    return this.delete(`api/users/${id}`);
  }

  getUsersById(id: number) {
    return this.get(`api/users/${id}`);
  }
}
