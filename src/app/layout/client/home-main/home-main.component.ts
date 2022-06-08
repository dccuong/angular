import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Prd } from '../../types/Prd';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  products: Prd[];
  constructor(private prdService: ProductService) { this.products = [] }

  ngOnInit(): void {
    this.prdService.getProducts().subscribe((data) => {
      this.products = data
    })
  }
}
