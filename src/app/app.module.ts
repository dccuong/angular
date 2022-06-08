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
import { DetailComponent } from './layout/admin/prd-admin/detail/detail.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
    DetailComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
