import {RouterModule, Routes} from '@angular/router';
import {ExpertiseListComponent} from './expertise-list/expertise-list.component';
import {NgModule} from '@angular/core';

const expertiseRoutes: Routes = [
  {path: 'expertises', component: ExpertiseListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(expertiseRoutes)],
  exports: [RouterModule]
})

export class ExpertisesRoutingModule {
}
