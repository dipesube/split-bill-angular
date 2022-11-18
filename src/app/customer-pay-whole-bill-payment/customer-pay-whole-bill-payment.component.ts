import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ApplePayDialogComponent } from '../apple-pay-dialog/apple-pay-dialog.component';
import { GooglePayDialogComponent } from '../google-pay-dialog/google-pay-dialog.component';
import { WaiterHelpDialogComponent } from '../waiter-help-dialog/waiter-help-dialog.component';

@Component({
  selector: 'app-customer-pay-whole-bill-payment',
  templateUrl: './customer-pay-whole-bill-payment.component.html',
  styleUrls: ['./customer-pay-whole-bill-payment.component.scss']
})
export class CustomerWholeBillPaymentComponent implements OnInit{

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit() {
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

  // Go to the previous window
  goBack() {
    this.router.navigate(['customer/whole-bill']);
  }

}