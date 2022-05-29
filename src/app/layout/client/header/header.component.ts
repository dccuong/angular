import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu: boolean = false;
  menuDropdown() {
    this.menu = !this.menu;
  }

  constructor() { }

  ngOnInit(): void { }
}