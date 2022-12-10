import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetail } from '../Model/userdetail';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

  registerForm:FormGroup;
  submitted=false;

 name:string;

 //userDetail:UserDetail= new UserDetail ();

  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
   
    this.registerForm = this.formBuilder.group({
     name:['', Validators.required]
    })
   }

  onSubmit(){
  this.submitted=true;
  if(this.registerForm.invalid)
  return

}
}
