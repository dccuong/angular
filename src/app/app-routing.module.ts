import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AddComponent } from './layout/admin/prd-admin/add/add.component';
import { DetailComponent } from './layout/admin/prd-admin/detail/detail.component';
import { EditComponent } from './layout/admin/prd-admin/edit/edit.component';
import { ListComponent } from './layout/admin/prd-admin/list/list.component';
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
      {
        path: "products",
        children: [
          { path: "", component: ListComponent },
          { path: "add", component: AddComponent },
          { path: "edit/:id", component: EditComponent },
          { path: ":id", component: DetailComponent },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
