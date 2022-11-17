import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApplePayDialogComponent } from '../apple-pay-dialog/apple-pay-dialog.component';
import { GooglePayDialogComponent } from '../google-pay-dialog/google-pay-dialog.component';
import { WaiterHelpDialogComponent } from '../waiter-help-dialog/waiter-help-dialog.component';

@Component({
  selector: 'app-customer-share-equal',
  templateUrl: './customer-share-equal-payment.component.html',
  styleUrls: ['./customer-share-equal-payment.component.scss']
})
export class CustomerShareEqualPaymentComponent implements OnInit{

    shared_price: number;

    constructor(public dialog: MatDialog, public router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this.shared_price = params['shared_price'];
        })
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
        this.router.navigate(['customer/share-equal']);
    }

}