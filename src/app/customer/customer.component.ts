import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', price: 1.79 },
  { position: 2, name: 'Helium', price: 4.26 },
  { position: 3, name: 'Lithium', price: 6.91 },
  { position: 4, name: 'Beryllium', price: 9.22 },
  { position: 5, name: 'Boron', price: 10.81 },
  { position: 6, name: 'Carbon', price: 12.01 },
  { position: 7, name: 'Nitrogen', price: 14.00 },
  { position: 8, name: 'Oxygen', price: 15.99 },
  { position: 9, name: 'Fluorine', price: 18.99 },
  { position: 10, name: 'Neon', price: 20.17 },
];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
