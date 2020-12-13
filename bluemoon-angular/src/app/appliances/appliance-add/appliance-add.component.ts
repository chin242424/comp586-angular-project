import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../customers/customer';
import {ApplianceService} from '../appliance.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../customers/customer.service';
import {Appliance} from '../appliance';
import {ApplianceType} from '../../appliancetypes/appliancetype';
import {ApplianceTypeService} from '../../appliancetypes/appliancetype.service';
import * as moment from 'moment';

@Component({
  selector: 'app-appliance-add',
  templateUrl: './appliance-add.component.html',
  styleUrls: ['./appliance-add.component.css']
})
export class ApplianceAddComponent implements OnInit {

  appliance: Appliance;
  @Input() currentType: ApplianceType;
  currentCustomer: Customer;
  applianceTypes: ApplianceType[];
  addedSuccess = false;
  errorMessage: string;


  constructor(private customerService: CustomerService, private applianceService: ApplianceService,
              private applianceTypeService: ApplianceTypeService, private router: Router, private route: ActivatedRoute) {
    this.appliance = {} as Appliance;
    this.currentCustomer = {} as Customer;
    this.currentType = {} as ApplianceType;
    this.applianceTypes = [];
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.applianceTypeService.getApplianceTypes().subscribe(
      appliancetypes => this.applianceTypes = appliancetypes,
      error => this.errorMessage = error as any);

    const customerId = this.route.snapshot.params.id;
    this.customerService.getCustomerById(customerId).subscribe(
      response => {
        this.currentCustomer = response;
      },
      error => this.errorMessage = error as any);
  }

  // tslint:disable-next-line:typedef
  onSubmit(appliance: Appliance) {
    appliance.id = null;
    appliance.customer = this.currentCustomer;
    // format output from datepicker to short string yyyy/mm/dd format
    appliance.purchaseDate = moment(appliance.purchaseDate).format('YYYY/MM/DD');
    this.applianceService.addAppliance(appliance).subscribe(
      newAppliance => {
        this.appliance = newAppliance;
        this.addedSuccess = true;
        this.gotoCustomerDetail();
      },
      error => this.errorMessage = error as any);
  }

  // tslint:disable-next-line:typedef
  gotoCustomerDetail() {
    this.router.navigate(['/customers', this.currentCustomer.id]);
  }

}
