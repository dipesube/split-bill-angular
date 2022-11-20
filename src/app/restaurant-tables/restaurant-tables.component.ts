import { Component, OnInit, ViewChild } from '@angular/core'
import { MatTable } from '@angular/material';
import { Router } from '@angular/router';

export class TableItem {
  tableNumber: string
  checked: boolean
  id: string
  state: number
  constructor(tableNumber, id, state) {
    this.tableNumber = tableNumber;
    this.checked = false;
    this.id = id;
    this.state = state;
  }
}

@Component({
  selector: 'app-restaurant-tables',
  templateUrl: './restaurant-tables.component.html',
  styleUrls: ['./restaurant-tables.component.scss']
})
export class RestaurantTablesComponent implements OnInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;
  isLinear = false;

  displayedColumns: string[] = ['table', 'status'];
  id = 1;
  items = [
    new TableItem(1, this.id++, 3),
    new TableItem(2, this.id++, 1),
    new TableItem(3, this.id++, 1),
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
    this.items.push(new TableItem(this.items.length + 1, this.id++, -1));
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

  customerView() {
    this.router.navigate(["/"]);
  }
}
