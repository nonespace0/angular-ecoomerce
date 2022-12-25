import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loginService:LoginService){}
  public loggedIn=false;

  ngOnInit(): void {
   this.loggedIn = this.loginService.isLoogedIn();
   
  }

  logout(){
    this.loginService.logout();
    window.location.href=("login")
  }
  
  title = 'spring-ecommerce';
}
