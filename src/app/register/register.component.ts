import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetail } from '../Model/userdetail';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userdetail: UserDetail= new UserDetail();
regsiterForm: any;

constructor(private registerService:RegisterService, private router:Router,){

}

  onSubmit(){
  
    this.registerService.registerUser(this.userdetail).subscribe();
      this.router.navigate(["/home"]);
    
    
   
  }
  
  ngOnInit():void {
  

  }

}
