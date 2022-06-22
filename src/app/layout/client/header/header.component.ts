import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any
  menu: boolean = false;
  menuDropdown() {
    this.menu = !this.menu;
  }

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { this.user = localStorage.getItem("LogedInUser") }

  ngOnInit(): void {
    this.user = localStorage.getItem("LogedInUser")

  }
  logOut() {
    localStorage.removeItem("LogedInUser");
    this.toastr.success("Đăng xuất thành công")
    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 1000)
  }
}