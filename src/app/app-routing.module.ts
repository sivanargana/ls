import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }, { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }, { path: 'super-admin', loadChildren: () => import('./modules/super-admin/super-admin.module').then(m => m.SuperAdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
