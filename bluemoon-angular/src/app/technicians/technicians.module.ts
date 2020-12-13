import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {TechniciansRoutingModule} from './technicians-routing.module';
import {TechnicianListComponent} from './technician-list/technician-list.component';
import {TechnicianService} from './technician.service';
import {TechnicianResolver} from './technician-resolver';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    TechniciansRoutingModule
  ],
  declarations: [
    TechnicianListComponent,

  ],
  exports: [
    TechnicianListComponent,

  ],
  providers: [TechnicianService, TechnicianResolver]
})

export class TechniciansModule {
}
