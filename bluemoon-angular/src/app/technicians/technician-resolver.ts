import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Technician} from './technician';
import {Observable} from 'rxjs';
import {TechnicianService} from './technician.service';
@Injectable()
export class TechnicianResolver implements Resolve<Technician> {
  constructor(private technicianService: TechnicianService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Technician> | Promise<Technician> | Technician {
    return this.technicianService.getTechnicianById(route.paramMap.get('id'));
  }

}
