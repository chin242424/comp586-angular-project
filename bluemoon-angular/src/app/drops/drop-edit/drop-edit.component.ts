import { Component, OnInit } from '@angular/core';
import {Drop} from '../drop';
import {Appliance} from '../../appliances/appliance';
import {Customer} from '../../customers/customer';
import {ApplianceType} from '../../appliancetypes/appliancetype';
import {DropService} from '../drop.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-drop-edit',
  templateUrl: './drop-edit.component.html',
  styleUrls: ['./drop-edit.component.css']
})
export class DropEditComponent implements OnInit {

  drop: Drop;
  currentAppliance: Appliance;
  currentCustomer: Customer;
  currentApplianceType: ApplianceType;
  updateSuccess = false;
  errorMessage: string;


  constructor(private dropService: DropService, private route: ActivatedRoute, private router: Router) {
    this.drop = {} as Drop;
    this.currentAppliance = {} as Appliance;
    this.currentCustomer = {} as Customer;
    this.currentApplianceType = {} as ApplianceType;
  }



  // tslint:disable-next-line:typedef
  ngOnInit(){
    const dropId = this.route.snapshot.params.id;
    this.dropService.getDropById(dropId).subscribe(
      response => {
        this.drop = response;

        this.currentAppliance = this.drop.appliance;
        this.currentApplianceType = this.currentAppliance.type;
        this.currentCustomer = this.currentAppliance.customer;
      },
      error => this.errorMessage = error as any);
  }
// tslint:disable-next-line:typedef
  onSubmit(drop: Drop) {
    drop.appliance = this.currentAppliance;


    drop.date = moment(drop.date).format('YYYY/MM/DD');

    this.dropService.updateDrop(drop.id.toString(), drop).subscribe(
      res => this.gotoCustomerDetail(),
      error => this.errorMessage = error as any);

  }
// tslint:disable-next-line:typedef
  gotoCustomerDetail() {
    this.router.navigate(['/customers', this.currentCustomer.id]);
  }
}
