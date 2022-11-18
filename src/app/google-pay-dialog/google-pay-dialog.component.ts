import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-google-pay-dialog',
  templateUrl: './google-pay-dialog.component.html',
  styleUrls: ['./google-pay-dialog.component.scss']
})
export class GooglePayDialogComponent implements OnInit{

  shared_price: number = 0;

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.shared_price = params['shared_price'];
    })
  }

  openFinalWindow() {
    if(this.shared_price == undefined) {
      this.router.navigate(['thank-you']);
    } else {
      this.router.navigate(['customer/share-equal/waiting'], { queryParams: { shared_price: this.shared_price }});
    }
  }

}