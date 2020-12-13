import {RouterModule, Routes} from '@angular/router';
import {ApplianceListComponent} from './appliance-list/appliance-list.component';
import {ApplianceAddComponent} from './appliance-add/appliance-add.component';
import {ApplianceEditComponent} from './appliance-edit/appliance-edit.component';
import {DropAddComponent} from '../drops/drop-add/drop-add.component';

import {NgModule} from '@angular/core';

const applianceRoutes: Routes = [
  {path: 'appliances', component: ApplianceListComponent},
  {path: 'appliances/add', component: ApplianceAddComponent},
  {path: 'appliances/:id',
    children: [
      {
        path: 'edit',
        component: ApplianceEditComponent
      },
      {
        path: 'drops\/add',
        component: DropAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(applianceRoutes)],
  exports: [RouterModule]
})

export class AppliancesRoutingModule {
}
