// tslint:disable:no-unused-variable

import {async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import {Customer} from '../customer';
import {Observable, of} from 'rxjs';
import Spy = jasmine.Spy;
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DummyComponent} from '../../testing/dummy.component';
import {PartsModule} from '../../parts/parts.module';
import {CustomersModule} from '../customers.module';
import {RouterTestingModule} from '@angular/router/testing';
import {CustomerDetailComponent} from '../customer-detail/customer-detail.component';
import {CustomerAddComponent} from '../customer-add/customer-add.component';
import {CustomerEditComponent} from '../customer-edit/customer-edit.component';
import {ActivatedRoute} from '@angular/router';
import {ActivatedRouteStub} from '../../testing/router-stubs';
import {CustomerService} from '../customer.service';
import {By} from '@angular/platform-browser';


class CustomerServiceStub {
  getCustomers(): Observable<Customer[]> {
    return of();
  }
}


describe('CustomerListComponent', () => {

  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerService = new CustomerServiceStub();
  let spy: Spy;
  let de: DebugElement;
  let el: HTMLElement;

  const testCustomer: Customer = {
    id: 1,
    firstName: 'George',
    lastName: 'Franklin',
    address: '110 W. Liberty St.',
    city: 'Madison',
    telephone: '6085551023',
    appliances: null
  };
  let testCustomers: Customer[];

  // beforeEach(async(function:() => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummyComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [CommonModule, FormsModule, PartsModule, CustomersModule,
        RouterTestingModule.withRoutes(
          [{path: 'customers', component: CustomerListComponent},
            {path: 'customers/add', component: CustomerAddComponent},
            {path: 'customers/:id', component: CustomerDetailComponent},
            {path: 'customers/:id/edit', component: CustomerEditComponent}
          ])],
      providers: [
        {provide: CustomerService, useValue: customerService},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {

    testCustomers = [{
      id: 1,
      firstName: 'George',
      lastName: 'Franklin',
      address: '110 W. Liberty St.',
      city: 'Madison',
      telephone: '6085551023',
      appliances: [{
        id: 1,
        name: 'Leo',
        purchaseDate: '2010-09-07',
        type: {id: 1, name: 'cat'},
        customer: null,
        drops: null
      }]
    }];

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    customerService = fixture.debugElement.injector.get(CustomerService);
    spy = spyOn(customerService, 'getCustomers')
      .and.returnValue(of(testCustomers));
  });

  it('should create CustomerListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit() method', () => {
    fixture.detectChanges();
    expect(spy.calls.any()).toBe(true, 'getCustomers called');
  });

  it(' should show full name after getCustomers observable (async) ', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async getCustomers
      fixture.detectChanges();        // update view with name
      de = fixture.debugElement.query(By.css('.customerFullName'));
      el = de.nativeElement;
      expect(el.innerText).toBe((testCustomer.firstName.toString() + ' ' + testCustomer.lastName.toString()));
    });
  }));

});
