import {Component, Input, OnInit} from '@angular/core';
import {Appliance} from '../appliance';
import {ApplianceType} from '../../appliancetypes/appliancetype';
import {Customer} from '../../customers/customer';
import {ApplianceService} from '../appliance.service';
import {ApplianceTypeService} from '../../appliancetypes/appliancetype.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-appliance-edit',
  templateUrl: './appliance-edit.component.html',
  styleUrls: ['./appliance-edit.component.css']
})
export class ApplianceEditComponent implements OnInit {

  appliance: Appliance;
  @Input() currentType: ApplianceType;
  currentCustomer: Customer;
  applianceTypes: ApplianceType[];
  errorMessage: string;

  constructor(private applianceService: ApplianceService, private applianceTypeService: ApplianceTypeService, private router: Router,
              private route: ActivatedRoute) {

  this.appliance = {} as Appliance;
  this.currentCustomer = {} as Customer;
  this.currentType = {} as ApplianceType;
  this.applianceTypes = [];
  }

  // tslint:disable-next-line:typedef
    ngOnInit(){
      this.applianceTypeService.getApplianceTypes().subscribe(
        appliancetypes => this.applianceTypes = appliancetypes,
        error => this.errorMessage = error as any);

      const applianceId = this.route.snapshot.params.id;
      this.applianceService.getApplianceById(applianceId).subscribe(
        appliance => {
          this.appliance = appliance;
          this.currentCustomer = this.appliance.customer;
          this.currentType = this.appliance.type;
        },
        error => this.errorMessage = error as any);
  }

  // tslint:disable-next-line:typedef
  onSubmit(appliance: Appliance) {
    appliance.type = this.currentType;
    const that = this;


    appliance.purchaseDate = moment(appliance.purchaseDate).format('YYYY/MM/DD');

    this.applianceService.updateAppliance(appliance.id.toString(), appliance).subscribe(
      res => this.gotoCustomerDetail(this.currentCustomer),
      error => this.errorMessage = error as any
    );
  }

  // tslint:disable-next-line:typedef
  gotoCustomerDetail(customer: Customer) {
    this.router.navigate(['/customers', customer.id]);
  }

}
