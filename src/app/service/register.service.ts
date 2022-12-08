import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetail } from '../Model/userdetail';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseURL = "http://localhost:8000";


  constructor(private httpClient:HttpClient) { }

  registerUser(userdetail: UserDetail): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/register`, userdetail);
  }
}
