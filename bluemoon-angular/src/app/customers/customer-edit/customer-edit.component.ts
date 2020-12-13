import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;
  errorMessage: string;
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
    this.customer = {} as Customer;
  }
  // ngOnInit(): void {
  // tslint:disable-next-line:typedef
  ngOnInit() {
    const customerId = this.route.snapshot.params.id;
    this.customerService.getCustomerById(customerId).subscribe(
      customer => this.customer = customer,
      error => this.errorMessage = error as any);
  }

  // tslint:disable-next-line:typedef
  onSubmit(customer: Customer) {
    const that = this;
    this.customerService.updateCustomer(customer.id.toString(), customer).subscribe(
      res => this.gotoCustomerDetail(customer),
      error => this.errorMessage = error as any
    );
  }

  // tslint:disable-next-line:typedef
  gotoCustomerDetail(customer: Customer) {
    this.errorMessage = null;
    this.router.navigate(['/customers', customer.id]);
  }

}
