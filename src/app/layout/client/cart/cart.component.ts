import { Component, OnInit } from '@angular/core';
import { bookcart, Prd } from '../../types/Prd'; import { LoaclstorateService } from 'src/app/services/loaclstorate.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  prdItem: bookcart[]
  product: bookcart;
  prd: Prd
  total: number = 0;
  cartItemValue: number = 1;
  constructor(
    private lsServite: LoaclstorateService,
    private productService: ProductService,
  ) {
    this.prdItem = []
    this.product = {
      _id: "",
      name: "",
      price: 0,
      img: "",
      quantity: 0
    }
    this.prd = {
      _id: "",
      name: "",
      price: 0,
      desc: "",
      img: "",
      category: ""
    }
  }

  ngOnInit(): void {
    this.prdItem = this.lsServite.getItem()
    for (var i in this.prdItem) {
      this.total += this.prdItem[i].price * this.prdItem[i].quantity;
    }

  }
  onInputValueChange(event: any) {
    this.cartItemValue = event.target.value;
    console.log(this.cartItemValue)
  }
  checkCard(_id: string) {
    console.log(this.cartItemValue)
    this.productService.getProduct(_id).subscribe(data => {
      console.log(data)
      this.prd = data

      const editItem = {
        _id: this.prd._id,
        name: this.prd.name,
        price: this.prd.price,
        img: this.prd.img,
        quantity: this.cartItemValue
      };
      this.lsServite.editItem(editItem);
      console.log(editItem)

    })
  }
}