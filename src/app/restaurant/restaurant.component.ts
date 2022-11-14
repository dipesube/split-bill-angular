import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';


export class MenuItem {
  position: number;
  name: string;
  price: string;
  checked: boolean;
  id: number;

  constructor(id, position, name, price) {
    this.id = id;
    this.position = position;
    this.name = name;
    this.price = price;
    this.checked = false;
  }
}

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'price', 'select'];
  checked = [];
  items: MenuItem[] = [];


  constructor() { }

  ngOnInit() {
    this.items = [
      new MenuItem(1, 1, "Chicken", 1.79),
      new MenuItem(2, 2, "Beef", 4.26),
      new MenuItem(3, 3, "Pork", 1.21),
      new MenuItem(4, 4, "Pork Chop", 11.79),
      new MenuItem(5, 5, "Coke", 12.79),
      new MenuItem(6, 6, "Pepsi", 5.29),
      new MenuItem(7, 7, "Wine", 1.79),
      new MenuItem(8, 8, "Shaved Ice", 0.29),
      new MenuItem(9, 9, "Pancake", 12.79),
    ]
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  // Remove Items
  clearMenu() {
    this.items = [];
    this.table.renderRows();
  }

  removeItems() {
    this.items.pop();
    this.table.renderRows();
  }

  // Checkbox logic
  getCheckbox() {
    this.checked = this.items.filter(i => i.checked == true);
  }

  changeChkState(id) {
    this.items.forEach(chk => {
      if (chk.id === id) {
        chk.checked = !chk.checked;
        this.getCheckbox();
      }
    });
  }

}