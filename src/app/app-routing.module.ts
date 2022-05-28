import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';

const routes: Routes = [
  {
    path: "", component: ClientComponent,
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
