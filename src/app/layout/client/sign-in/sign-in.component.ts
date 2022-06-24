import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private userService: AuthService,
    private router: Router,
    private toastr: ToastrService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const data = this.loginForm.value;
    this.userService.Signin(data).subscribe((user) => {
      localStorage.setItem('LogedInUser', JSON.stringify(user))
      this.toastr.success("Đăng nhập thành công")
      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 2000)
    })
  }
}
