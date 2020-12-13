import { Component, OnInit } from '@angular/core';
import {ApplianceType} from '../appliancetype';
import {ApplianceTypeService} from '../appliancetype.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appliancetype-list',
  templateUrl: './appliancetype-list.component.html',
  styleUrls: ['./appliancetype-list.component.css']
})
export class AppliancetypeListComponent implements OnInit {
  appliancetypes: ApplianceType[];
  errorMessage: string;
  responseStatus: number;
  isInsert = false;

  constructor(private appliancetypeService: ApplianceTypeService, private router: Router) {
    this.appliancetypes = [] as ApplianceType[];
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.appliancetypeService.getApplianceTypes().subscribe(
      appliancetypes => this.appliancetypes = appliancetypes,
      error => this.errorMessage = error as any
    );
  }

  // tslint:disable-next-line:typedef
    gotoHome() {
      this.router.navigate(['/welcome']);
    }


}
