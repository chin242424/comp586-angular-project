import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HandleError, HttpErrorHandler} from '../error.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Customer} from './customer';

@Injectable()
export class CustomerService {

  entityUrl = environment.REST_API_URL + 'customers';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('CustomerService');
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getCustomers', []))
      );
  }

  getCustomerById(customerId: string): Observable<Customer> {
    return this.http.get<Customer>(this.entityUrl + '/' + customerId)
      .pipe(
        catchError(this.handlerError('getCustomerById', {} as Customer))
      );
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.entityUrl, customer)
      .pipe(
        catchError(this.handlerError('addCustomer', customer))
      );
  }

  updateCustomer(customerId: string, customer: Customer): Observable<{}> {
    return this.http.put<Customer>(this.entityUrl + '/' + customerId, customer)
      .pipe(
        catchError(this.handlerError('updateCustomer', customer))
      );
  }

  deleteCustomer(customerId: string): Observable<{}> {
    return this.http.delete<Customer>(this.entityUrl + '/' + customerId)
      .pipe(
        catchError(this.handlerError('deleteCustomer', [customerId]))
      );
  }


}
