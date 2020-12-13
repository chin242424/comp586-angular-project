import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {


  customer: Customer;
  errorMessage: string;
  constructor(private customerService: CustomerService, private router: Router) {
    this.customer = {} as Customer;
  }

  // ngOnInit(): void {
  // }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  onSubmit(customer: Customer) {
    customer.id = null;
    this.customerService.addCustomer(customer).subscribe(
      newCustomer => {
        this.customer = newCustomer;
        this.gotoCustomersList();
      },
      error => this.errorMessage = error as any
    );
  }

  // tslint:disable-next-line:typedef
  gotoCustomersList() {
    this.router.navigate(['/customers']);
  }


}
