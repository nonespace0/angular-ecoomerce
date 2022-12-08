import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../Model/category';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseURL = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}/get`);
  }

  createEmployee(category: Category): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/save`, category);
  }

}
