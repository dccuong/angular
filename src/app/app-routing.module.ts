import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './layout/client/sign-in/sign-in.component';
import { SignUpComponent } from './layout/client/sign-up/sign-up.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AddCComponent } from './layout/admin/cate-admin/add-c/add-c.component';
import { ListCComponent } from './layout/admin/cate-admin/list-c/list-c.component';
import { AddComponent } from './layout/admin/prd-admin/add/add.component';
import { EditComponent } from './layout/admin/prd-admin/edit/edit.component';
import { ListComponent } from './layout/admin/prd-admin/list/list.component';

import { ClientComponent } from './layout/client/client.component';
import { DetailHomeComponent } from './layout/client/detail-home/detail-home.component';
import { HomeMainComponent } from './layout/client/home-main/home-main.component';
import { CategorylistComponent } from './layout/client/categorylist/categorylist.component';
import { CanAcessAminService } from './services/guards/can-acess-amin.service';
import { CartComponent } from './layout/client/cart/cart.component';
import { ListUserComponent } from './layout/admin/user-ad/list-user/list-user.component';
import { AddUserComponent } from './layout/admin/user-ad/add-user/add-user.component';

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
        path: 'detail/:_id',
        component: DetailHomeComponent
      },
      {
        path: 'signin',
        component: SignInComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      }, {
        path: 'category',
        component: CategorylistComponent
      }, {
        path: 'cart',
        component: CartComponent
      },


    ]
  },
  {
    path: "admin", component: AdminComponent, canActivate: [CanAcessAminService],
    children: [
      {
        path: "products",
        children: [
          { path: "", component: ListComponent },
          { path: "add", component: AddComponent },
          { path: "edit/:_id", component: AddComponent },
        ]
      },
      {
        path: "categorys",
        children: [
          { path: "", component: ListCComponent },
          { path: "add", component: AddCComponent },
          { path: "edit/:_id", component: AddCComponent },

        ]
      },
      {
        path: "users",
        children: [
          { path: "", component: ListUserComponent },
          { path: "add", component: AddUserComponent },
          { path: "edit/:_id", component: AddUserComponent },

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
