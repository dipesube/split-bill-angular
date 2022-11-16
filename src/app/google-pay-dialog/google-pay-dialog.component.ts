import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-pay-dialog',
  templateUrl: './google-pay-dialog.component.html',
})
export class GooglePayDialogComponent implements OnInit{

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openFinalWindow() {
    this.router.navigate(['thank-you']);
  }

}