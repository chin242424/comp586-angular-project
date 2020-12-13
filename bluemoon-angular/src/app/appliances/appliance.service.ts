import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HandleError, HttpErrorHandler} from '../error.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appliance} from './appliance';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ApplianceService {

  private entityUrl = environment.REST_API_URL + 'appliances';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('CustomerService');
  }

  getAppliances(): Observable<Appliance[]> {
    return this.http.get<Appliance[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getAppliances', []))
      );
  }

  getApplianceById(applianceId: string): Observable<Appliance> {
    return this.http.get<Appliance>(this.entityUrl + '/' + applianceId)
      .pipe(
        catchError(this.handlerError('getApplianceById', {} as Appliance))
      );
  }

  addAppliance(appliance: Appliance): Observable<Appliance> {
    return this.http.post<Appliance>(this.entityUrl, appliance)
      .pipe(
        catchError(this.handlerError('addAppliance', appliance))
      );
  }

  updateAppliance(applianceId: string, appliance: Appliance): Observable<Appliance> {
    return this.http.put<Appliance>(this.entityUrl + '/' + applianceId, appliance)
      .pipe(
        catchError(this.handlerError('updateAppliance', appliance))
      );
  }

  deleteAppliance(applianceId: string): Observable<number> {
    return this.http.delete<number>(this.entityUrl + '/' + applianceId)
      .pipe(
        catchError(this.handlerError('deleteAppliance', 0))
      );
  }

}
