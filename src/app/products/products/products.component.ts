import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product = {
    id: 100,
    title: 'How to make router & navigation in Angular 8',
    author: 'Didin J.',
    description: 'This is a product'
  };
  constructor() { }

  ngOnInit() {
  }

  

}
