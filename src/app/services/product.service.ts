import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prd, PrdAdd } from '../layout/types/Prd';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Prd[]> {

    return this.http.get<Prd[]>(environment.products)
  }
  getProduct(_id: string): Observable<Prd> {
    console.log(_id)
    return this.http.get<Prd>(`${environment.product}/${_id}`);
  }
  deletePrd(_id: string): Observable<any> {
    console.log(_id)
    return this.http.delete(`${environment.product}/${_id}`);
  }
  addPrd(prd: PrdAdd): Observable<Prd> {
    return this.http.post<Prd>(environment.products, prd)
  }
  updatePrd(id: string, data: PrdAdd): Observable<Prd> {
    return this.http.patch<Prd>(`${environment.products}/${id}`, data)
  }
}
