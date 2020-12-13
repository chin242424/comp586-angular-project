import {RouterModule, Routes} from '@angular/router';
import {AppliancetypeListComponent} from './appliancetype-list/appliancetype-list.component';
// import {AppliancetypeAddComponent} from './appliancetype-add/appliancetype-add.component';
// import {AppliancetypeEditComponent} from './appliancetype-edit/appliancetype-edit.component';
import {NgModule} from '@angular/core';

const appliancetypesRoutes: Routes = [
  {path: 'appliancetypes', component: AppliancetypeListComponent},
  // {path: 'appliancetypes/add', component: AppliancetypeAddComponent},
  // {path: 'appliancetypes/:id/edit', component: AppliancetypeEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(appliancetypesRoutes)],
  exports: [RouterModule]
})

export class AppliancetypesRoutingModule {
}
