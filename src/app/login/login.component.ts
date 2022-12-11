import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetail } from '../Model/userdetail';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted=false;

  user:UserDetail = new UserDetail();
  successmessage='';
  errormessage ='';
  fieldsEmpty='';

  constructor(private valid:LoginService, private router:Router, private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required, Validators.email],
      password:['', Validators.required]
  })
}
onSubmit() {
  
this.submitted=true;
if(!this.loginForm.invalid){
  
  console.log(this.loginForm.value);
  this.valid.login(this.user).subscribe(
    data=>{this.successmessage="loginSucess";
    this.router.navigateByUrl("/cart")},
    error=>{this.errormessage="BadCredentials"})
  
 
 
}
else{
return

}
  
  
} 
}



