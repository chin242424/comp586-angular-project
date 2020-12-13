import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';
import {HandleError, HttpErrorHandler} from '../error.service';
import {HttpClient} from '@angular/common/http';
import {Drop} from './drop';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class DropService {

  private entityUrl = environment.REST_API_URL + 'drops';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('DropService');
  }

  getDrops(): Observable<Drop[]> {
    return this.http.get<Drop[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getDrops', []))
      );
  }

  getDropById(dropId: string): Observable<Drop> {
    return this.http.get<Drop>(this.entityUrl + '/' + dropId)
      .pipe(
        catchError(this.handlerError('getDropById', {} as Drop))
      );
  }

  addDrop(drop: Drop): Observable<Drop> {
    return this.http.post<Drop>(this.entityUrl, drop)
      .pipe(
        catchError(this.handlerError('addDrop', drop))
      );
  }

  updateDrop(dropId: string, drop: Drop): Observable<Drop> {
    return this.http.put<Drop>(this.entityUrl + '/' + dropId, drop)
      .pipe(
        catchError(this.handlerError('updateDrop', drop))
      );
  }

  deleteDrop(dropId: string): Observable<number> {
    return this.http.delete<number>(this.entityUrl + '/' + dropId)
      .pipe(
        catchError(this.handlerError('deleteDrop', 0))
      );

  }


}
