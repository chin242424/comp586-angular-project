import {RouterModule, Routes} from '@angular/router';
import {TechnicianListComponent} from './technician-list/technician-list.component';
import {NgModule} from '@angular/core';

const technicianRoutes: Routes = [
  {path: 'technicians', component: TechnicianListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(technicianRoutes)],
  exports: [RouterModule]
})

export class TechniciansRoutingModule {
}

