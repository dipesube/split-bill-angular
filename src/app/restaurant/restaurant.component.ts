import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MatTable, MAT_DIALOG_DATA } from '@angular/material';


export class MenuItem {
  position: number;
  name: string;
  price: string;
  checked: boolean;
  quantity: string;
  id: number;

  constructor(id, position, name, price, quantity) {
    this.id = id;
    this.position = position;
    this.name = name;
    this.price = price;
    this.checked = false;
    this.quantity = quantity;
  }
}

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'price', 'quantity', 'select',];
  checked = [];
  items: MenuItem[] = [];
  id = 0;
  totalDisplay: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.items = [
      new MenuItem(this.id++, 1, "Chicken", 12.79, 2),
      new MenuItem(this.id++, 2, "Beef", 14.26, 1),
      new MenuItem(this.id++, 3, "Pork", 10.21, 1),
      new MenuItem(this.id++, 4, "Pork Chop", 11.79, 1),
      new MenuItem(this.id++, 5, "Coke", 2.79, 1),
      new MenuItem(this.id++, 6, "Pepsi", 2.29, 1),
      new MenuItem(this.id++, 7, "Wine", 10.79, 1),
      new MenuItem(this.id++, 8, "Shaved Ice", 10.29, 1),
      new MenuItem(this.id++, 9, "Pancake", 5.79, 2),
    ]
    this.updateTotal();
  }

  // Add item dialog
  openAddItemDialog() {
    const dialogRef = this.dialog.open(AddItemDialogComponent);

    dialogRef.afterClosed().subscribe(data => {
      if (data && data.itemName != "" && data.itemPrice != "" && data.itemQuantity != "") {
        var exists = false;
        for (var i = 0; i < this.items.length; i++) {
          if (this.items[i].name == data.itemName) {
            this.items[i].quantity = (parseInt(this.items[i].quantity) + parseInt(data.itemQuantity)).toString();
            exists = true;
          }
        }

        if (exists == false) {
          this.items.push(new MenuItem(this.id++, this.items.length + 1, data.itemName, data.itemPrice, data.itemQuantity))
          this.table.renderRows();
        }
        this.updateTotal();
      }
    })

  }

  updateTotal() {
    var tot = 0;
    for (var i = 0; i < this.items.length; i++) {
      tot += parseFloat(this.items[i].price) * parseFloat(this.items[i].quantity);
    }
    this.totalDisplay = tot.toFixed(2);
  }

  // Remove Items
  clearMenu() {
    this.items = [];
    this.table.renderRows();
    this.totalDisplay = "0.00";
  }

  removeItems() {
    var newItems = [];
    var position = 1;
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].checked == false) {
        newItems.push(new MenuItem(this.items[i].id, position, this.items[i].name, this.items[i].price, this.items[i].quantity));
        position++;
      }
    }
    this.items = newItems;
    this.table.renderRows();
    this.updateTotal();
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

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddItemDialogComponent>
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      itemName: '',
      itemPrice: '',
      itemQuantity: '',
    })
  }

  submit(form) {
    this.dialogRef.close(form.value);
  }
}
