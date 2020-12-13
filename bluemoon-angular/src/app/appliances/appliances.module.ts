import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {ApplianceListComponent} from './appliance-list/appliance-list.component';
import {ApplianceEditComponent} from './appliance-edit/appliance-edit.component';
import {ApplianceAddComponent} from './appliance-add/appliance-add.component';
import {DropsModule} from '../drops/drops.module';
import {ApplianceService} from './appliance.service';
import {AppliancesRoutingModule} from './appliances-routing.module';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'MM YYYY'
  }
};


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    AppliancesRoutingModule,
    DropsModule
  ],
  declarations: [
    ApplianceListComponent,
    ApplianceEditComponent,
    ApplianceAddComponent
  ],
  exports: [
    ApplianceListComponent,
    ApplianceEditComponent,
    ApplianceAddComponent
  ],
  providers: [
    ApplianceService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
  ]
})
export class AppliancesModule {
}
