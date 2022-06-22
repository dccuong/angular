import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { CateService } from 'src/app/services/cate.service';
import { cate } from 'src/app/layout/types/Prd';
@Component({
  selector: 'app-add-c',
  templateUrl: './add-c.component.html',
  styleUrls: ['./add-c.component.css']
})
export class AddCComponent implements OnInit {
  cateForm: FormGroup;
  cate: cate[];
  cateId: string;
  constructor(
    private cateService: CateService,
    private router: Router,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute
  ) {
    this.cate = []
    this.cateId = ""
    this.cateForm = new FormGroup({
      name: new FormControl("", Validators.required),
      status: new FormControl(0, Validators.required),
    })
  }

  ngOnInit(): void {
    this.cateId = this.activateRoute.snapshot.params['_id'];
    if (this.cateId) {
      this.cateService.getACate(this.cateId).subscribe(data => {
        this.cateForm.patchValue({
          name: data.name,
          status: 0
        });
      })
    }
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/categorys');
  }
  onSubmit() {

    const data = this.cateForm.value;



    if (this.cateId !== '' && this.cateId !== undefined) {
      return this.cateService.updatecate(this.cateId, data).subscribe(data => {
        this.toastr.success("Sửa thành công")
        this.redirectToList();
      })
    }
    return this.cateService.addCate(data).subscribe(data => {
      this.toastr.success("Sửa thành công")
      this.redirectToList();
    })
  }

}
