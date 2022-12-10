import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CategoriesService } from './service/categorie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';
import { ProductsaddComponent } from './productsadd/productsadd.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterService } from './service/register.service';
import { LoginService } from './service/login.service';
import { GuardsGuard } from './security/guards.guard';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import {MatButtonModule} from '@angular/material/button';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     AdminhomeComponent,
     CategoryaddComponent,
     ProductsaddComponent,
     RegisterComponent,
     LoginComponent,
     CartComponent,
     UploadimageComponent,
     FormvalidationComponent
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule


  ],
  providers: [CategoriesService,
              RegisterService,
              LoginService,],
             
            
  bootstrap: [AppComponent]
})
export class AppModule {


 }
