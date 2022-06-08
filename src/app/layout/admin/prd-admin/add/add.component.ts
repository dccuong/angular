import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Prd, PrdAdd } from 'src/app/layout/types/Prd';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  productsForm: FormGroup;
  productId: string;
  constructor(
    private prdService: ProductService,
    private router: Router) {
    this.productId = ""
    this.productsForm = new FormGroup({
      name: new FormControl("", Validators.required),
      desc: new FormControl("", Validators.required),
      img: new FormControl("", Validators.required),
      price: new FormControl(0, Validators.required),
      category: new FormControl("", Validators.required),
    })
  }

  ngOnInit(): void {
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/products');
  }
  onSubmit() {
    const prd: PrdAdd = this.productsForm.value
    if (this.productId !== '' && this.productId !== undefined) {
      return this.prdService.updatePrd(this.productId, prd).subscribe(data => {
        this.redirectToList();
      })
    }
    return this.prdService.addPrd(prd).subscribe(data => {
      this.redirectToList();
    })
  }
}
