import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { DetailHomeComponent } from './layout/client/detail-home/detail-home.component';
import { HomeMainComponent } from './layout/client/home-main/home-main.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeMainComponent
      },
      {
        path: 'detail',
        component: DetailHomeComponent
      },


    ]
  },
  {
    path: "admin", component: AdminComponent,
    children: [
      // { path:, component },
      // { path:, component }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
