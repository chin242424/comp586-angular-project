import {NgModule} from '@angular/core';

import {CustomerService} from './customer.service';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CustomersRoutingModule} from './customers-routing.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerAddComponent} from './customer-add/customer-add.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {AppliancesModule} from '../appliances/appliances.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule,
    AppliancesModule
  ],
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerAddComponent
  ],
  providers: [CustomerService]

})

export class CustomersModule {
}
