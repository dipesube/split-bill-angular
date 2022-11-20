import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

export class MenuItem {
  position: number;
  name: string;
  price: string;
  id: number;
  quantity: number;

  constructor(id, position, name, price, quantity) {
    this.id = id;
    this.position = position;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

@Component({
  selector: 'app-customer-share-equal',
  templateUrl: './customer-share-equal.component.html',
  styleUrls: ['./customer-share-equal.component.scss']
})
export class CustomerShareEqualComponent implements OnInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'price', 'quantity'];
  items: MenuItem[] = [];
  price: string;

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = [
      new MenuItem(1, 1, "Chicken", 1.79, 2),
      new MenuItem(2, 2, "Beef", 4.26, 1),
      new MenuItem(3, 3, "Pork", 1.21, 1),
      new MenuItem(4, 4, "Pork Chop", 11.79, 1),
      new MenuItem(5, 5, "Coke", 12.79, 3),
      new MenuItem(6, 6, "Pepsi", 5.29, 1),
      new MenuItem(7, 7, "Wine", 1.79, 1),
      new MenuItem(8, 8, "Shaved Ice", 0.29, 2),
      new MenuItem(9, 9, "Pancake", 12.79, 3),
    ]
  }

  // Go to the previous window
  goBack() {
    this.router.navigate(['customer/table/1']);
  }

  // Compute the price of each participant
  computePrice() {
    let output = document.getElementById("customer_price");
    let input = (<HTMLInputElement>document.getElementById("nb_customers")).value;
    let price: string = (105.24 / parseInt(input)).toFixed(2);
    output.innerHTML = price.toString();
    this.price = price;
  }

  // Go to the payment window
  pay() {
    if ((<HTMLInputElement>document.getElementById("nb_customers")).value != "") {
      this.router.navigate(['/customer/share-equal/payment'], {
        queryParams: {
          shared_price: this.price
        }
      });
    } else {
      const input = document.getElementById("input_customers");
      const element = document.createElement("warning");
      element.innerText = "You need to choose the number of participants.";
      element.style.color = "red";
      input.appendChild(element);
    }

  }

}