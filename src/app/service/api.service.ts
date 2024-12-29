import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //se requiere del numero del pokemon
  apiURL = 'https://pokeapi.co/api/v2/pokemon/25/';
  constructor(private http: HttpClient) {}

  //GET
  getdata(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
