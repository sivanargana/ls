import { Component, OnInit } from '@angular/core';
import { animations } from 'src/app/utils/animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations:animations
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
