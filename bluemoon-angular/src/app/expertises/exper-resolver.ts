import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Expertise} from './expertise';
import {ExpertiseService} from './expertise.service';
import {Observable} from 'rxjs';

@Injectable()
export class ExperResolver implements Resolve<Expertise[]> {

  constructor(private expertiseService: ExpertiseService) { }

  resolve(): Observable<Expertise[]> | Promise<Expertise[]> | Expertise[] {
    return this.expertiseService.getExpertises();
  }

}
