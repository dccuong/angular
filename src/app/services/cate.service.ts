import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cate, Prd, PrdCate } from '../layout/types/Prd';

@Injectable({
  providedIn: 'root'
})
export class CateService {

  constructor(private http: HttpClient) { }
  getCate(): Observable<cate[]> {
    return this.http.get<cate[]>(environment.cate)
  }
  addCate(category: cate): Observable<cate> {
    return this.http.post<cate>(environment.cate, category)
  }
  getACate(_id: string): Observable<cate> {

    return this.http.get<cate>(`${environment.cates}/${_id}`)
  }
  updatecate(_id: string, data: cate): Observable<cate> {
    return this.http.put<cate>(`${environment.cate}/${_id}`, data)
  }

  deleteCate(_id: string): Observable<any> {
    console.log(_id)
    return this.http.delete(`${environment.cate}/${_id}`);
  }
  getPrdCate(_id: string): Observable<PrdCate> {
    return this.http.get<PrdCate>(`${environment.cate}/${_id}`)
  }
}

