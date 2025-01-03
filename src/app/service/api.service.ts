//Aqui configuramos el Serivicio para la API a consumir
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

//Declaramos las peticiones, aqui se configura el CRUD
export class ApiService {
  //se requiere del numero del pokemon
  apiURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  //GET
  getdata(): Observable<any> {
    return this.http.get(this.apiURL);
  }
  //GETLIS
  getdatalist(limit: number = 20): Observable<any[]> {
    return this.http
      .get<any>(`${this.apiURL}?limit=${limit}`)
      .pipe(map((response) => response.results));
  }
  //GETDETAILS
  getdatadetails(name: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${name}`);
  }
}
