import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DropsRoutingModule} from './drops-routing.module';
import {AppliancesRoutingModule} from '../appliances/appliances-routing.module';
import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {DropListComponent} from './drop-list/drop-list.component';
import {DropEditComponent} from './drop-edit/drop-edit.component';
import {DropAddComponent} from './drop-add/drop-add.component';
import {DropService} from './drop.service';

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
    DropsRoutingModule,
    AppliancesRoutingModule
  ],
  declarations: [
    DropListComponent,
    DropEditComponent,
    DropAddComponent
  ],
  exports: [
    DropListComponent,
    DropEditComponent,
    DropAddComponent
  ],
  providers: [
      DropService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
  ]
})
export class DropsModule {
}

