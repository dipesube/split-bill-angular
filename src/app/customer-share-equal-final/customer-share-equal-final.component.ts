import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-share-equal-final',
  templateUrl: './customer-share-equal-final.component.html',
  styleUrls: ['./customer-share-equal-final.component.scss']
})
export class CustomerShareEqualFinalComponent implements OnInit{

    shared_price: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.shared_price = params['shared_price'];
        })
    }

}
