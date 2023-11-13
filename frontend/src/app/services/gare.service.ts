import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gare } from '../models/gare.model';


const baseUrl = 'http://localhost:8080/api/gares';
@Injectable({
  providedIn: 'root'
})
export class GareService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Gare[]> {
    return this.http.get<Gare[]>(baseUrl);
  }

  get(id: any): Observable<Gare> {
	return this.http.get(`${baseUrl}/${id}`);
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

  deleteAll(): Observable<any> {
	return this.http.delete(baseUrl);
  }
}
