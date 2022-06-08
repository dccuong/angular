import { Component, OnInit } from '@angular/core';
import { Prd } from 'src/app/layout/types/Prd';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Prd[];
  constructor(private prdService: ProductService) { this.products = [] }
  onGetList() {
    this.prdService.getProducts().subscribe((data) => {
      this.products = data
    })
  }
  ngOnInit(): void {
    this.onGetList()
  }
  ondelete(_id: string) {
    //confirm

    if (window.confirm("bạn có muốncoas")) {

      this.prdService.deletePrd(_id).subscribe((data) => {
        this.onGetList()
      })
    }
  }

}
