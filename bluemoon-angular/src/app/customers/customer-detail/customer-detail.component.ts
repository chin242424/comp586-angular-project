import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  errorMessage: string;
  customer: Customer;

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) {
    this.customer = {} as Customer;
  }

  ngOnInit(): void {

    const customerId = this.route.snapshot.params.id;
    this.customerService.getCustomerById(customerId).subscribe(
      customer => this.customer = customer,
      error => this.errorMessage = error as any);
  }

  // tslint:disable-next-line:typedef
  gotoCustomersList() {
    this.router.navigate(['/customers']);
  }

  // tslint:disable-next-line:typedef
  editCustomer() {
    this.router.navigate(['/customers', this.customer.id, 'edit']);
  }

  // tslint:disable-next-line:typedef
  addAppliance(customer: Customer) {
    this.router.navigate(['/customers', customer.id, 'appliances', 'add']);
  }
}
