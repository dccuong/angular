import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cate, Prd, PrdAdd } from 'src/app/layout/types/Prd';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { CateService } from 'src/app/services/cate.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  productsForm: FormGroup;
  cate: cate[];
  productId: string;
  constructor(
    private prdService: ProductService,
    private cateService: CateService,
    private router: Router,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute
  ) {
    this.cate = []
    this.productId = ""

    this.productsForm = new FormGroup({
      name: new FormControl("", Validators.required),
      desc: new FormControl("", Validators.required),
      img: new FormControl("", Validators.required),
      price: new FormControl(0, Validators.required),
      category: new FormControl("", Validators.required),
    })
  }
  onGetCate() {
    this.cateService.getCate().subscribe((data) => {
      this.cate = data
    })
  }
  ngOnInit(): void {

    this.onGetCate()
    this.productId = this.activateRoute.snapshot.params['_id'];

    if (this.productId) {
      this.prdService.getProduct(this.productId).subscribe(data => {
        this.productsForm.patchValue({
          name: data.name,
          price: data.price,
          img: data.img,
          desc: data.desc,
          category: data.category
        });
      })
    }
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/products');
  }
  onSubmit() {

    const data = this.productsForm.value;



    if (this.productId !== '' && this.productId !== undefined) {
      return this.prdService.updatePrd(this.productId, data).subscribe(data => {
        this.toastr.success("Sửa thành công")
        this.redirectToList();
      })
    }
    return this.prdService.addPrd(data).subscribe(data => {
      this.toastr.success("Sửa thành công")
      this.redirectToList();
    })
  }
}
