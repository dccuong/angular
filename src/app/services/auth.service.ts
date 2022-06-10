import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../layout/types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.signin}`, user)
  }
  signup(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.signup}`, user);
  }

}
