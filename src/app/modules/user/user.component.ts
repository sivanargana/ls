import { Component, OnInit } from '@angular/core';
import { animations } from 'src/app/utils/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations:animations
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
