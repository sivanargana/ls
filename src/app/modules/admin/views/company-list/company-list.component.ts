import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/modules/admin/api.service';
import { CommonService } from 'src/app/utils/common.service';
import { animations } from 'src/app/utils/animations';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  animations: animations
})
export class CompanyListComponent implements OnInit, AfterViewInit {
  @ViewChild('actions', { static: false }) actions: TemplateRef<any>;
  @ViewChild('badge', { static: false }) badge: TemplateRef<any>;
  columns = []
  companies: any = [];
  page = 1;
  constructor(private cd: ChangeDetectorRef, public api: ApiService, private common: CommonService) {
    this.api.liquidSolutionsAll().subscribe(res => {
      this.companies = res;
    })
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.columns = [
      { name: "Company Name", cellTemplate: this.badge},      
      { prop: 'state', name: "State" },
      { prop: 'actions', name: "Actions", cellTemplate: this.actions, headerClass: "text-right", cellClass: "text-right", sortable: false }
    ];
    this.cd.detectChanges();
  }
  confirm(item) {
    this.common.alert.fire({
      title: 'Are you sure?',
      text: "You won't to delete " + item,
      icon: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        this.common.alert.fire({
          title: 'Deleted',
          text: item + ' has been deleted',
          icon: 'success'
        })
      }
    })
  }
}
