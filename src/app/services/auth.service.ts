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

  dangnhap(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.signin}`, user)
  }
  dangki(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.signup}`, user);
  }
  getList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(environment.user)
  }
  delete(_id: string): Observable<any> {
    return this.http.delete(`${environment.user}/${_id}`);
  }

  getUser(_id: string): Observable<IUser> {
    return this.http.get<IUser>(`${environment.user}/${_id}`)
  }
  updatePrd(id: string, data: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${environment.user}/${id}`, data)
  }
}
