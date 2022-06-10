import { Component, OnInit } from '@angular/core';
import { cate } from 'src/app/layout/types/Prd';
import { CateService } from 'src/app/services/cate.service';

@Component({
  selector: 'app-list-c',
  templateUrl: './list-c.component.html',
  styleUrls: ['./list-c.component.css']
})
export class ListCComponent implements OnInit {
  category: cate[]
  constructor(private cateServiec: CateService) {
    this.category = []
  }
  onGetCate() {
    this.cateServiec.getCate().subscribe((data) => {
      this.category = data
    })
  }
  // ondelete(_id: string) {
  //   if (window.confirm("bạn có muốn xóa"))
  //     this.cateServiec.deleteCate(_id).subscribe((data) => {
  //       this.onGetCate()
  //     })
  // }
  ngOnInit(): void {
    this.onGetCate()
  }

}
