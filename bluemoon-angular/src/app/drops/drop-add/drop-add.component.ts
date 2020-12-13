import { Component, OnInit } from '@angular/core';
import {Drop} from '../drop';
import {Appliance} from '../../appliances/appliance';
import {Customer} from '../../customers/customer';
import {ApplianceType} from '../../appliancetypes/appliancetype';
import {DropService} from '../drop.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplianceService} from '../../appliances/appliance.service';
import * as moment from 'moment';

@Component({
  selector: 'app-drop-add',
  templateUrl: './drop-add.component.html',
  styleUrls: ['./drop-add.component.css']
})
export class DropAddComponent implements OnInit {

  drop: Drop;
  currentAppliance: Appliance;
  currentCustomer: Customer;
  currentApplianceType: ApplianceType;
  addedSuccess = false;
  errorMessage: string;

  // tslint:disable-next-line:max-line-length
  constructor(private dropService: DropService, private applianceService: ApplianceService, private router: Router, private route: ActivatedRoute) {
    this.drop = {} as Drop;
    this.currentAppliance = {} as Appliance;
    this.currentCustomer = {} as Customer;
    this.currentApplianceType = {} as ApplianceType;
  }

  // ngOnInit(): void {
  // tslint:disable-next-line:typedef
    ngOnInit() {
      console.log(this.route.parent);
      const applianceId = this.route.snapshot.params.id;
      this.applianceService.getApplianceById(applianceId).subscribe(
        response => {
          this.currentAppliance = response;
          this.drop.appliance = this.currentAppliance;
          this.currentApplianceType = this.currentAppliance.type;
          this.currentCustomer = this.currentAppliance.customer;
        },
        error => this.errorMessage = error as any);
  }
// tslint:disable-next-line:typedef
  onSubmit(drop: Drop) {
    drop.id = null;
    const that = this;

    // format output from datepicker to short string yyyy/mm/dd format
    drop.date = moment(drop.date).format('YYYY/MM/DD');


    this.dropService.addDrop(drop).subscribe(
      newDrop => {
        this.drop = newDrop;
        this.addedSuccess = true;
        that.gotoCustomerDetail();
      },
      error => this.errorMessage = error as any
    );
  }

// tslint:disable-next-line:typedef
  gotoCustomerDetail() {
    this.router.navigate(['/customers', this.currentCustomer.id]);
  }
}
