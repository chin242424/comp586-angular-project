import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';
import {HandleError, HttpErrorHandler} from '../error.service';
import {HttpClient} from '@angular/common/http';
import {ApplianceType} from './appliancetype';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ApplianceTypeService {

  entityUrl = environment.REST_API_URL + 'appliancetypes';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('CustomerService');
  }

  getApplianceTypes(): Observable<ApplianceType[]> {
    return this.http.get<ApplianceType[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getApplianceTypes', []))
      );
  }

  getApplianceTypeById(typeId: string): Observable<ApplianceType> {
    return this.http.get<ApplianceType>((this.entityUrl + '/' + typeId))
      .pipe(
        catchError(this.handlerError('getApplianceTypeById', {} as ApplianceType))
      );
  }

  // updateApplianceType(typeId: string, applianceType: ApplianceType): Observable<ApplianceType> {
  //   return this.http.put<ApplianceType>(this.entityUrl + '/' + typeId, applianceType)
  //     .pipe(
  //       catchError(this.handlerError('updateApplianceType', applianceType))
  //     );
  // }
  //
  // addApplianceType(applianceType: ApplianceType): Observable<ApplianceType> {
  //   return this.http.post<ApplianceType>(this.entityUrl, applianceType)
  //     .pipe(
  //       catchError(this.handlerError('addApplianceType', applianceType))
  //     );
  // }
  //
  // deleteApplianceType(typeId: string): Observable<number> {
  //   return this.http.delete<number>(this.entityUrl + '/' + typeId)
  //     .pipe(
  //       catchError(this.handlerError('deleteApplianceType', 0))
  //     );
  // }
}
