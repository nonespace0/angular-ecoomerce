import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetail } from '../Model/userdetail';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = "http://localhost:8000";

  constructor(private httpClient:HttpClient) { }
  //calling the server generate token
  generateToken(user:any){
    return this.httpClient.post(`${this.baseURL}/token`, user);
  }
 // login(user:UserDetail):Observable<Object>{
  //  return this.httpClient.post(`${this.baseURL}/login`, user)
 // }

 

  loginUser(token:any){
    localStorage.setItem("token", token)
    return true;
  }
  isLoogedIn(){
    let token =localStorage.getItem("token");
    if(token == undefined || token ==='' || token==null){
      return false
    }
    else{
      return true;
    }
  }
  logout(){
    localStorage.removeItem("token")
    return true;
  }
  getToken(){
    return localStorage.getItem("token")
  }

}
