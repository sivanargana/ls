import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { SharedModule } from 'src/app/utils/shared.module';


@NgModule({
  declarations: [SuperAdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
