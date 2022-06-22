import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/layout/types/auth';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  userId: string
  constructor(
    private userService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute
  ) {
    this.userId = ""
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl("", Validators.required),
      role: new FormControl("", Validators.required),
      status: new FormControl("", Validators.required),
    })
  }

  ngOnInit(): void {
    this.userId = this.activateRoute.snapshot.params['_id'];
    if (this.userId) {
      this.userService.getUser(this.userId).subscribe(data => {
        this.userForm.patchValue({
          name: data.name,
          email: data.email,
          pass: data.pass,
          role: data.role,
          status: data.status
        });
      })
    }
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/users');
  }
  onSubmit() {
    const data = this.userForm.value;
    if (this.userId !== '' && this.userId !== undefined) {
      return this.userService.updatePrd(this.userId, data).subscribe(data => {
        this.toastr.success("Sửa thành công")
        this.redirectToList();
      })

    }
    return this.userService.signup(data).subscribe(() => {
      this.toastr.success("Đăng ký thành công")
      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 1000)
    })
  }
}