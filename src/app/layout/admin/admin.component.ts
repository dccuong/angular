import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  logOut() {
    localStorage.removeItem("LogedInUser");
    this.toastr.success("Đăng xuất thành công")
    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 2000)
  }
}
