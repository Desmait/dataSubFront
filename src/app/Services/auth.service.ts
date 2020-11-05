import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from '../models/base-api';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  authRegister(user: UserModel): Observable<any> {
    return this.post(`api/register`, user);
  }

  authLogin(user: UserModel): Observable<any> {
    return this.post(`api/login`, user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser(): Observable<any> {
    return this.post(`api/logout`, null);
  }

  getMe(): Observable<any> {
    return this.post('api/me', null);
  }
}
