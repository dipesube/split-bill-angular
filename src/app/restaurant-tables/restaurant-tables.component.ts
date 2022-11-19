import { Component, OnInit } from '@angular/core'
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
  displayedColumns: string[] = ['table', 'select'];
  items = [
    new TableItem(1, 1),
    new TableItem(2, 2),
    new TableItem(3, 3),
    new TableItem(4, 4),
    new TableItem(5, 5),
    new TableItem(6, 6),
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

  goToTable() {
    this.router.navigate(['restaurant']);
  }
}
