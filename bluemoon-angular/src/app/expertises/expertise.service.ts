import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HandleError, HttpErrorHandler} from '../error.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Expertise} from './expertise';
import {catchError} from 'rxjs/operators';



@Injectable()
export class ExpertiseService {

  private entityUrl = environment.REST_API_URL + 'expertises';

  private handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('ExpertiseService');
  }

  getExpertises(): Observable<Expertise[]> {
    return this.http.get<Expertise[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getExpertises', []))
      );
  }

  getExpertiseById(specId: string): Observable<Expertise> {
    return this.http.get<Expertise>((this.entityUrl + '/' + specId))
      .pipe(
        catchError(this.handlerError('getExpertiseById', {} as Expertise))
      );
  }
}
