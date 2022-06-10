import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cate } from '../layout/types/Prd';

@Injectable({
  providedIn: 'root'
})
export class CateService {

  constructor(private http: HttpClient) { }
  getCate(): Observable<cate[]> {

    return this.http.get<cate[]>(environment.cate)
  }
  deleteCate(_id: string): Observable<any> {
    console.log(_id)
    return this.http.delete(`${environment.cate}/${_id}`);
  }
}

