import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerPayWholeBillComponent } from './customer-pay-whole-bill/customer-pay-whole-bill.component';
import { CustomerShareEqualComponent } from './customer-share-equal/customer-share-equal.component';
import { CustomerShareInequalComponent } from './customer-share-inequal/customer-share-inequal.component';
import { CustomerComponent } from './customer/customer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FinalWindowComponent } from './final-window/final-window.component';
import { CustomerShareEqualPaymentComponent } from './customer-share-equal-payment/customer-share-equal-payment.component';
import { CustomerWholeBillPaymentComponent } from './customer-pay-whole-bill-payment/customer-pay-whole-bill-payment.component';
import { CustomerShareEqualFinalComponent } from './customer-share-equal-final/customer-share-equal-final.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'customer/whole-bill', component: CustomerPayWholeBillComponent},
  { path: 'customer/share-equal', component: CustomerShareEqualComponent},
  { path: 'customer/share-inequal', component: CustomerShareInequalComponent},
  { path: 'thank-you', component: FinalWindowComponent},
  { path: 'customer/share-equal/payment', component: CustomerShareEqualPaymentComponent},
  { path: 'customer/whole-bill/payment', component: CustomerWholeBillPaymentComponent},
  { path: 'customer/share-equal/waiting', component: CustomerShareEqualFinalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
