import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../Model/category';
import { CategoriesService } from '../service/categorie.service';

@Component({
  selector: 'app-categoryadd',
  templateUrl: './categoryadd.component.html',
  styleUrls: ['./categoryadd.component.css']
})
export class CategoryaddComponent implements OnInit {
category:Category = new Category();
constructor(private router:Router, private categoryService: CategoriesService){

}

onSubmit(){
  this.categoryService.createEmployee(this.category).subscribe( data =>{
    console.log(data);
  });
  this.router.navigateByUrl("/admin");
}

onCancel(){
  this.router.navigateByUrl("/admin");
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
