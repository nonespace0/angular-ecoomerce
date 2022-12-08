import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetail } from '../Model/userdetail';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:UserDetail = new UserDetail();
  successmessage='';
  errormessage ='';
  fieldsEmpty='';

  constructor(private valid:LoginService, private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
onSubmit() {
  //input validate is valid
  if(this.user.userName != null && this.user.password != null){
    if(this.valid.generateToken(this.user).subscribe(
      (response:any) =>{console.log(response.token)},
      error =>{console.log(error)}
     )){
     this.successmessage="Login Sucess"
     
     }
     else{
      this.errormessage="bad"
     }
  

 
 }
 else{
  console.log("Fields are empty")
  
  this.fieldsEmpty="Required all fields"
 }

  
} 
}



