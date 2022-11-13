import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Chicken', price: 1.79 },
  { position: 2, name: 'Beef', price: 4.26 },
  { position: 3, name: 'Pork', price: 6.91 },
  { position: 4, name: 'Lamb', price: 9.22 },
  { position: 5, name: 'Coke', price: 10.81 },
  { position: 6, name: 'Pepsi', price: 12.01 },
  { position: 7, name: 'Hotdog', price: 14.00 },
  { position: 8, name: 'BBQ Pork Ribs', price: 15.99 },
  { position: 9, name: 'Shaved Ice', price: 18.99 },
  { position: 10, name: 'Wine', price: 20.17 },
];

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
