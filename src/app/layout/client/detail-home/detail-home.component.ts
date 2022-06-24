import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Prd } from '../../types/Prd';
import { LoaclstorateService } from 'src/app/services/loaclstorate.service';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute,
    private lsService: LoaclstorateService) {
    this.product = {
      _id: "",
      name: "",
      price: 0,
      desc: "",
      img: "",
      category: ""
    }
    console.log(this.cartItemValue)
  }

  ngOnInit(): void {
    const _id: string = this.activateRoute.snapshot.params['_id'];
    console.log(_id)
    this.productService.getProduct(_id).subscribe(data => {
      this.product = data
    })
  }
  onInputValueChange = (event: any) => {
    console.log(event.target.value)
    this.cartItemValue = event.target.value
  }

  onAddToCart() {

    console.log(this.cartItemValue)
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      price: this.product.price,
      img: this.product.img,
      quantity: +this.cartItemValue
    };
    this.lsService.setItem(addItem);
    this.toastr.success("thêm thành công")
    this.cartItemValue = 1;
  }

}
