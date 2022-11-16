import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';

import { ApplePayDialogComponent } from '../apple-pay-dialog/apple-pay-dialog.component';
import { GooglePayDialogComponent } from '../google-pay-dialog/google-pay-dialog.component';
import { WaiterHelpDialogComponent } from '../waiter-help-dialog/waiter-help-dialog.component';

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

  constructor(public dialog: MatDialog) { }

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


  // Apple Pay Dialog
  openApplePayDialog() {
    this.dialog.open(ApplePayDialogComponent);
  }

  // Google Pay Dialog
  openGooglePayDialog() {
    this.dialog.open(GooglePayDialogComponent);
  }

  // Server Notification Dialog
  openWaiterDialog() {
    this.dialog.open(WaiterHelpDialogComponent);
  }

  // Need Help Dialog
  openNeedHelpDialog() {
    this.dialog.open(WaiterHelpDialogComponent);
  }

}