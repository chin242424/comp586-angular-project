import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ExpertiseListComponent} from './expertise-list/expertise-list.component';
import {ExpertisesRoutingModule} from './expertises-routing.module';
import {NgModule} from '@angular/core';
import {ExpertiseService} from './expertise.service';
import {ExperResolver} from './exper-resolver';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExpertisesRoutingModule
  ],
  declarations: [
    ExpertiseListComponent
  ],
  exports: [
    ExpertiseListComponent
  ],
  providers: [ExpertiseService, ExperResolver]
})
export class ExpertisesModule {
}
