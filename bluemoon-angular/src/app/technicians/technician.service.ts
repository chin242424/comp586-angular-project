import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HandleError, HttpErrorHandler} from '../error.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Technician} from './technician';
import {catchError} from 'rxjs/operators';



@Injectable()
export class TechnicianService {

  entityUrl = environment.REST_API_URL + 'technicians';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('CustomerService');
  }

  getTechnicians(): Observable<Technician[]> {
    return this.http.get<Technician[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getTechnicians', []))
      );
  }

  getTechnicianById(technicianId: string): Observable<Technician> {
    return this.http.get<Technician>((this.entityUrl + '/' + technicianId))
      .pipe(
        catchError(this.handlerError('getTechnicianById', {} as Technician))
      );
  }
}
