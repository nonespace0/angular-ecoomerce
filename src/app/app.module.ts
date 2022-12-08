import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CategoriesService } from './service/categorie.service';
import { FormsModule } from '@angular/forms';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';
import { ProductsaddComponent } from './productsadd/productsadd.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterService } from './service/register.service';
import { LoginService } from './service/login.service';
import { GuardsGuard } from './security/guards.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     AdminhomeComponent,
     CategoryaddComponent,
     ProductsaddComponent,
     RegisterComponent,
     LoginComponent,
     CartComponent
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoriesService,
              RegisterService,
              LoginService,],
             
            
  bootstrap: [AppComponent]
})
export class AppModule { }
