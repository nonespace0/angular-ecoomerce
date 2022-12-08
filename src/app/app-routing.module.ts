import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CartComponent } from './cart/cart.component';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';
import { LoginComponent } from './login/login.component';
import { ProductsaddComponent } from './productsadd/productsadd.component';
import { RegisterComponent } from './register/register.component';

import { GuardsGuard } from './security/guards.guard';




const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'admin', component: AdminhomeComponent,children:[{path: 'add', component: CategoryaddComponent}]},
  {path: 'productAdd', component:ProductsaddComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cart', component:CartComponent}
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
