import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RestaurantComponent, AddItemDialogComponent } from './restaurant/restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

import { CustomerPayWholeBillComponent } from './customer-pay-whole-bill/customer-pay-whole-bill.component';
import { CustomerShareEqualComponent } from './customer-share-equal/customer-share-equal.component';
import { CustomerShareInequalComponent } from './customer-share-inequal/customer-share-inequal.component';
import { ApplePayDialogComponent } from './apple-pay-dialog/apple-pay-dialog.component';
import { GooglePayDialogComponent } from './google-pay-dialog/google-pay-dialog.component';
import { WaiterHelpDialogComponent } from './waiter-help-dialog/waiter-help-dialog.component';
import { FinalWindowComponent } from './final-window/final-window.component';
import { CustomerShareEqualPaymentComponent } from './customer-share-equal-payment/customer-share-equal-payment.component';
import { CustomerWholeBillPaymentComponent } from './customer-pay-whole-bill-payment/customer-pay-whole-bill-payment.component';
import { CustomerShareEqualFinalComponent } from './customer-share-equal-final/customer-share-equal-final.component';
import { RestaurantTablesComponent } from './restaurant-tables/restaurant-tables.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RestaurantComponent,
    AddItemDialogComponent,
    CustomerPayWholeBillComponent,
    CustomerShareEqualComponent,
    CustomerShareInequalComponent,
    ApplePayDialogComponent,
    GooglePayDialogComponent,
    WaiterHelpDialogComponent,
    FinalWindowComponent,
    CustomerShareEqualPaymentComponent,
    CustomerWholeBillPaymentComponent,
    CustomerShareEqualFinalComponent,
    RestaurantTablesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    RouterModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddItemDialogComponent, ApplePayDialogComponent, GooglePayDialogComponent, WaiterHelpDialogComponent]
})
export class AppModule { }
