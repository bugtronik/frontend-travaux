import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travaux } from '../models/travaux.model';


const baseUrl = 'http://localhost:8080/api/travaux';
@Injectable({
  providedIn: 'root'
})
export class TravauxService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Travaux[]> {
    return this.http.get<Travaux[]>(baseUrl);
  }

  get(id: any): Observable<Travaux> {
    return this.http.get<Travaux>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
