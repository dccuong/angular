import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { HeaderComponent } from './layout/client/header/header.component';
import { HomeMainComponent } from './layout/client/home-main/home-main.component';
import { DetailHomeComponent } from './layout/client/detail-home/detail-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    HeaderComponent,
    HomeMainComponent,
    DetailHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
