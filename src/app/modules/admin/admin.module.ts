import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/utils/shared.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { SidebarComponent } from './includes/sidebar/sidebar.component';
import { AddFinancialInformationComponent } from './views/add-financial-information/add-financial-information.component';
import { ApiService } from './api.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CompanyListComponent } from './views/company-list/company-list.component';



@NgModule({
  declarations: [AdminComponent, HeaderComponent, FooterComponent, SidebarComponent,AddFinancialInformationComponent,CompanyListComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    NgxDatatableModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot()

  ],
  providers:[ApiService]
})
export class AdminModule { }
