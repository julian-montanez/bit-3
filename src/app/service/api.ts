import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {

  private apiUrl = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) {}

  public getproducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  public getproductsInfoId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
