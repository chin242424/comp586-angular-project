import { Component, OnInit } from '@angular/core';
import {Technician} from '../technician';
import {TechnicianService} from '../technician.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.css']
})
export class TechnicianListComponent implements OnInit {

  technicians: Technician[];
  errorMessage: string;
  responseStatus: number;

  constructor(private technicianService: TechnicianService, private router: Router) {
    this.technicians = [];
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.technicianService.getTechnicians().subscribe(
      technicians => this.technicians = technicians,
      error => this.errorMessage = error as any);
  }

  // tslint:disable-next-line:typedef
  gotoHome() {
    this.router.navigate(['/welcome']);
  }
}
