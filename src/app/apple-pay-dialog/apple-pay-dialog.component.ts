import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FinalWindowComponent } from '../final-window/final-window.component';

@Component({
  selector: 'app-apple-pay-dialog',
  templateUrl: './apple-pay-dialog.component.html',
  styleUrls: ['./apple-pay-dialog.component.scss']
})
export class ApplePayDialogComponent implements OnInit{

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openFinalWindow() {
    this.router.navigate(['thank-you']);
  }

}
