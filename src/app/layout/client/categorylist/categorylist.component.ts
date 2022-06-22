import { Component, OnInit } from '@angular/core';
import { CateService } from 'src/app/services/cate.service';

import { ActivatedRoute } from '@angular/router';
import { cate, Prd, PrdCate } from '../../types/Prd';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  listCate: cate[];
  prdCate: PrdCate[] = [{
    category: {
      _id: "",
      name: "",
      status: 0
    }, products: []
  }];
  listBookCate: PrdCate[] = []
  prd: Prd[];

  constructor(private cateService: CateService, private activateRoute: ActivatedRoute,) {
    this.listCate = []; this.prd = [];
    console.log(this.listBookCate)
  }
  ngOnInit(): void {

    this.cateService.getCate().subscribe((data1) => {
      this.listCate = data1
      data1.map(element => {
        this.cateService.getPrdCate(element._id).subscribe((data) => {
          this.listBookCate.push(data)
        })
      });
    })
  }
}
