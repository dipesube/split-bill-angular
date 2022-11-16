import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatTable, MAT_DIALOG_DATA } from '@angular/material';



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


  constructor(public dialog: MatDialog) { }

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

  newItemName: string;
  newItemPrice: string;
  // Add Item Dialog
  openAddItemDialog() {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      data: { itemName: this.newItemName, itemPrice: this.newItemPrice },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newItemName = result.itemName;
      this.newItemPrice = result.itemPrice;
    });
  }

  // Remove Items
  clearMenu() {
    this.items = [];
    this.table.renderRows();
  }

  removeItems() {
    var newItems = [];
    var position = 1;
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].checked == false) {
        console.log(this.items[i]);
        newItems.push(new MenuItem(this.items[i].id, position, this.items[i].name, this.items[i].price));
        position++;
      }
    }
    this.items = newItems;
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

@Component({
  selector: 'add-item-dialog.component',
  templateUrl: 'add-item-dialog.component.html',
})
export class AddItemDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      itemName: string,
      itemPrice: number
    },
  ) { }
}
