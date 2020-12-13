import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerAddComponent} from './customer-add/customer-add.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {ApplianceAddComponent} from '../appliances/appliance-add/appliance-add.component';

const customerRoutes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/add', component: CustomerAddComponent},
  {path: 'customers/:id', component: CustomerDetailComponent},
  {path: 'customers/:id/edit', component: CustomerEditComponent},
  {path: 'customers/:id/appliances/add', component: ApplianceAddComponent}
];


@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})

export class CustomersRoutingModule {
}
