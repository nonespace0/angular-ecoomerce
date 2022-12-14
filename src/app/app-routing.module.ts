import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CartComponent } from './cart/cart.component';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';

import { FormvalidregisterComponent } from './formvalidregister/formvalidregister.component';
import { LoginComponent } from './login/login.component';
import { ProductsaddComponent } from './productsadd/productsadd.component';
import { RegisterComponent } from './register/register.component';

import { GuardsGuard } from './security/guards.guard';
import { AuthGuard } from './service/auth.guard';
import { UploadimageComponent } from './uploadimage/uploadimage.component';




const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'admin', component: AdminhomeComponent,children:[{path: 'add', component: CategoryaddComponent}]},
  {path: 'productAdd', component:ProductsaddComponent},
  {path: 'register', component:FormvalidregisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cart', component:CartComponent, canActivate:[AuthGuard]},
  {path:'upload', component:UploadimageComponent},

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
