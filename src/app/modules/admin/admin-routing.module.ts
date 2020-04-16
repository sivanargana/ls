import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddFinancialInformationComponent } from './views/add-financial-information/add-financial-information.component';
import { CompanyListComponent } from './views/company-list/company-list.component';

const routes: Routes = [
  { 
  path: '',
   component: AdminComponent,
   children:[
     {
     path:'add',
     component:AddFinancialInformationComponent
   },{
     path:'',
     component:CompanyListComponent
   }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
