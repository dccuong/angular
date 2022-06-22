import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { HeaderComponent } from './layout/client/header/header.component';
import { HomeMainComponent } from './layout/client/home-main/home-main.component';
import { DetailHomeComponent } from './layout/client/detail-home/detail-home.component';
import { ListComponent } from './layout/admin/prd-admin/list/list.component';
import { AddComponent } from './layout/admin/prd-admin/add/add.component';
import { EditComponent } from './layout/admin/prd-admin/edit/edit.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCComponent } from './layout/admin/cate-admin/add-c/add-c.component';
import { ListCComponent } from './layout/admin/cate-admin/list-c/list-c.component';
import { SignInComponent } from './layout/client/sign-in/sign-in.component';
import { SignUpComponent } from './layout/client/sign-up/sign-up.component';
import { ValidateComponent } from './components/validate/validate.component';
import { ToastrModule } from 'ngx-toastr';
import { CategorylistComponent } from './layout/client/categorylist/categorylist.component';
import { CartComponent } from './layout/client/cart/cart.component';
import { AddUserComponent } from './layout/admin/user-ad/add-user/add-user.component';
import { ListUserComponent } from './layout/admin/user-ad/list-user/list-user.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    HeaderComponent,
    HomeMainComponent,
    DetailHomeComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    AddCComponent,
    ListCComponent,
    SignInComponent,
    SignUpComponent,
    ValidateComponent,
    CategorylistComponent,
    CartComponent,
    AddUserComponent,
    ListUserComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
