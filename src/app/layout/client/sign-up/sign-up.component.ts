import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private userService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl("", Validators.required),
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const data = this.userForm.value;
    console.log(data)
    this.userService.dangnhap(data).subscribe(() => {
      this.toastr.success("Đăng ký thành công")
      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 2000)
    })
  }
}