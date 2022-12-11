import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetail } from '../Model/userdetail';

@Component({
  selector: 'app-formvalidregister',
  templateUrl: './formvalidregister.component.html',
  styleUrls: ['./formvalidregister.component.css']
})
export class FormvalidregisterComponent implements OnInit {

  registerForm:FormGroup;
  submitted=false;
  userDetail:UserDetail= new UserDetail();



  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {

    this.registerForm= new FormGroup(
      {
        'name': new FormControl('', [Validators.required, Validators.pattern('[a-z,A-Z, " "]*')]),
        'email' : new FormControl('', [Validators.required, Validators.email]),
       //'email' : new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z],{2,4$}')]),
        'phone' : new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
        'password':new FormControl('',[Validators.required, Validators.minLength(8)])
      });
    
  }
  onSubmit(){
 this.submitted=true
 
}
get name(){return this.registerForm.get('name')}
get email(){return this.registerForm.get('email')}
get phone(){return this.registerForm.get('phone')}
get password(){return this.registerForm.get('password')}

}
