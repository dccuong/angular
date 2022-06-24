import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoaclstorateService } from 'src/app/services/loaclstorate.service';
import { IUser } from '../../types/auth';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: IUser = { _id: '', name: '', email: '', status: 1, pass: '', role: 1 }
  menu: boolean = false;

  menuDropdown() {
    this.menu = !this.menu;
  }

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private lsServite: LoaclstorateService
  ) {

  }

  ngOnInit(): void {
    this.onSetUser();
    this.lsServite.watchService().subscribe(data => {
      this.onSetUser
    })
  }

  logOut() {
    localStorage.removeItem("LogedInUser");
    this.toastr.success("Đăng xuất thành công")
    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 1000)
  }
  onSetUser() {
    this.user = this.lsServite.getUser()
  }
}