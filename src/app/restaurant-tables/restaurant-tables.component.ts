import { Component, OnInit, ViewChild } from '@angular/core'
import { MatTable } from '@angular/material';
import { Router } from '@angular/router';
export class TableItem {
  tableNumber: string
  checked: boolean
  id: string
  constructor(tableNumber, id) {
    this.tableNumber = tableNumber;
    this.checked = false;
    this.id = id;
  }
}

@Component({
  selector: 'app-restaurant-tables',
  templateUrl: './restaurant-tables.component.html',
  styleUrls: ['./restaurant-tables.component.scss']
})
export class RestaurantTablesComponent implements OnInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;
  displayedColumns: string[] = ['table'];
  id = 1;
  items = [
    new TableItem(1, this.id++),
    new TableItem(2, this.id++),
    new TableItem(3, this.id++),
    new TableItem(4, this.id++),
    new TableItem(5, this.id++),
    new TableItem(6, this.id++),
  ]
  checked = [];
  constructor(public router: Router) { }

  ngOnInit() {
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

  goToTable(tableNum) {
    if (tableNum === 1) {
      this.router.navigate(['restaurant/table-eg']);
    } else {
      this.router.navigate(['restaurant/table/' + tableNum]);
    }
  }

  addTable() {
    this.items.push(new TableItem(this.items.length + 1, this.id++));
    this.table.renderRows();
  }

  removeTable() {
    if (this.items.length == 1) {
      alert("1 table required.");
      return;
    }
    this.items.pop();
    this.table.renderRows();
  }
}
