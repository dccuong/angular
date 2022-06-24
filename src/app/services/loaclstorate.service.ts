import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { bookcart } from '../layout/types/Prd';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class LoaclstorateService {

  constructor(private toastr: ToastrService) { }

  private serviceSubject = new Subject<string>(); // vừa giống Observable có thế lắng nghe được,  vừa phát được sự kiên để lắng nghe

  watchService(): Observable<any> {
    return this.serviceSubject.asObservable();
  }

  getItem() {
    const data = JSON.parse(localStorage.getItem('cart') || '[]');
    return data
  }

  setItem(addItem: bookcart) {
    //1. Cập nhật dữ liệ vào Local
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existItem = cartItems.find((item: bookcart) => item._id === addItem._id);
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.quantity += addItem.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.toastr.success("thêm thành công")
    this.serviceSubject.next('')
  }
  editItem(addItem: bookcart) {
    //1. Cập nhật dữ liệ vào Local
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existItem = cartItems.find((item: bookcart) => item._id === addItem._id);
    if (!existItem) {

      cartItems.push(addItem);
    } else {
      existItem.quantity == addItem.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.serviceSubject.next('')
  }


  getUser() {
    const data = JSON.parse(localStorage.getItem('LogedInUser') || '[]').user
    console.log(data)
    return data
  }
}