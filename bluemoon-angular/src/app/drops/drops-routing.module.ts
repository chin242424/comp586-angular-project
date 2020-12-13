import {RouterModule, Routes} from '@angular/router';
import {DropListComponent} from './drop-list/drop-list.component';
import {DropAddComponent} from './drop-add/drop-add.component';
import {DropEditComponent} from './drop-edit/drop-edit.component';
import {NgModule} from '@angular/core';

const dropRoutes: Routes = [
  {path: 'drops', component: DropListComponent},
  {path: 'drops/add', component: DropAddComponent},
  {path: 'drops/:id/edit', component: DropEditComponent}

];


@NgModule({
  imports: [
    RouterModule.forChild(dropRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DropsRoutingModule {
}
