import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CanAcessAminService {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!localStorage.getItem('LogedInUser')) {
      this.toastr.error("Bạn cần đăng nhập để truy cập admin")
      this.router.navigateByUrl('/signin')
    }
    const user = JSON.parse(localStorage.getItem('LogedInUser')!);
    if (user.user.role === 1) {
      return true;
    }
    this.toastr.error("Không có quyền truy cập admin")
    this.router.navigateByUrl('/')
    return false;
  }

}
