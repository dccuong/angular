import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Prd } from '../../types/Prd';
import { LoaclstorateService } from 'src/app/services/loaclstorate.service';

@Component({
  selector: 'app-detail-home',
  templateUrl: './detail-home.component.html',
  styleUrls: ['./detail-home.component.css']
})
export class DetailHomeComponent implements OnInit {
  product: Prd;
  cartItemValue: number = 1;

  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private lsService: LoaclstorateService) {
    this.product = {
      _id: "6245375bb36ce30593dea41d",
      name: "",
      price: 0,
      desc: "",
      img: "",
      category: ""

    }
  }

  ngOnInit(): void {

    const _id: string = this.activateRoute.snapshot.params['_id'];
    console.log(_id)
    this.productService.getProduct(_id).subscribe(data => {
      this.product = data
    })
  }
  onInputValueChange(event: any) {
    this.cartItemValue = event.target.value;
  }
  onAddToCart() {
    // 1. Định nghĩa cấu trúc dữ liệu thêm vào giỏ
    const addItem = {
      id: this.product._id,
      name: this.product.name,
      value: +this.cartItemValue
    };
    // // 2. Kiểm tra xem đã có sp này trong giỏ hàng chưa
    // // 2.1 Lấy ra toàn bộ sp trong giỏ
    // const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    // // 2.2 Tìm phần tử trong giỏ có id === addItem.id
    // const existItem = cartItems.find((item: ProductCart) => item.id === addItem.id);
    // // 3. Nếu không có thì push luôn vào làm phần tử mới
    // if (!existItem) {
    //   cartItems.push(addItem);
    // } else {
    //   // 3.1 Nếu đã có thì cập nhật số lượng mới = số lượng cũ + thêm
    //   existItem.value += addItem.value;
    // }
    // // 4. Cập nhật dữ liệu giỏ hàng
    // localStorage.setItem('cart', JSON.stringify(cartItems));

    // this.lsService.setItem(addItem);
    // 5. Cập nhật lại giá trị cho ô input value
    this.cartItemValue = 1;
  }

}
