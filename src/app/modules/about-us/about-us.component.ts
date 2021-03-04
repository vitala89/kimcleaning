import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Почему мы?',
      }
    ];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
