import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MatTable, MAT_DIALOG_DATA } from '@angular/material';
import { filter } from 'rxjs/operators';


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
  id = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.items = [
      new MenuItem(this.id++, 1, "Chicken", 1.79),
      new MenuItem(this.id++, 2, "Beef", 4.26),
      new MenuItem(this.id++, 3, "Pork", 1.21),
      new MenuItem(this.id++, 4, "Pork Chop", 11.79),
      new MenuItem(this.id++, 5, "Coke", 12.79),
      new MenuItem(this.id++, 6, "Pepsi", 5.29),
      new MenuItem(this.id++, 7, "Wine", 1.79),
      new MenuItem(this.id++, 8, "Shaved Ice", 0.29),
      new MenuItem(this.id++, 9, "Pancake", 12.79),
    ]
  }

  // Add item dialog
  openAddItemDialog() {
    const dialogRef = this.dialog.open(AddItemDialogComponent);

    dialogRef.afterClosed().subscribe(data => {
      if (data && data.itemName != "" && data.itemPrice != "") {
        this.items.push(new MenuItem(this.id++, this.items.length + 1, data.itemName, data.itemPrice))
        this.table.renderRows();
      }
    })

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

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddItemDialogComponent>
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      itemName: '',
      itemPrice: ''
    })
  }

  submit(form) {
    this.dialogRef.close(form.value);
  }
}
