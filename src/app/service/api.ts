import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  apiIndex = "a";

  private apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.apiIndex}`;

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
