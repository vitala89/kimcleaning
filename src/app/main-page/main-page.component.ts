import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productservice';
import {Product} from '../interfaces/product';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  products: Product[];
  responsiveOptions;
  activeIndex: number = 0;
  constructor(private productService: ProductService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(products => {
      this.products = products;
    });
  }

}
