import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {Router} from '@angular/router';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  errorMessage: string;
  customers: Customer[];

  constructor(private router: Router, private customerService: CustomerService) { }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      customers => this.customers = customers,
      error => this.errorMessage = error as any
    );
  }
// tslint:disable-next-line:typedef
    onSelect(customer: Customer) {
      this.router.navigate(['/customers', customer.id]);
    }

// tslint:disable-next-line:typedef
  addCustomer() {
    this.router.navigate(['/customers/add']);
  }

  // tslint:disable-next-line:typedef
  gotoHome() {
    this.router.navigate(['/welcome']);
  }

}
