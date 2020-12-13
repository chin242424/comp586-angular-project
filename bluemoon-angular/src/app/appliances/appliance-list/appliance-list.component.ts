import {Component, Input, OnInit} from '@angular/core';
import {Appliance} from '../appliance';
import {Router} from '@angular/router';
import {ApplianceService} from '../appliance.service';

@Component({
  selector: 'app-appliance-list',
  templateUrl: './appliance-list.component.html',
  styleUrls: ['./appliance-list.component.css']
})
export class ApplianceListComponent implements OnInit {

  errorMessage: string;
  @Input() appliance: Appliance;
  responseStatus: number;
  deleteSuccess = false;


  constructor(private router: Router, private applianceService: ApplianceService) {
    this.appliance = {} as Appliance;
  }


    ngOnInit(): void {
    console.log(this.appliance);
  }

  // tslint:disable-next-line:typedef
  editAppliance(appliance: Appliance) {
    this.router.navigate(['/appliances', appliance.id, 'edit']);
  }
  // tslint:disable-next-line:typedef
  deleteAppliance(appliance: Appliance) {
    this.applianceService.deleteAppliance(appliance.id.toString()).subscribe(
      response => {
        this.deleteSuccess = true;
        this.appliance = {} as Appliance;
      },
      error => this.errorMessage = error as any);
  }
  // tslint:disable-next-line:typedef
  addDrop(appliance: Appliance) {
    this.router.navigate(['/appliances', appliance.id, 'drops', 'add']);
  }
}
