import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppliancetypeListComponent} from './appliancetype-list/appliancetype-list.component';
// import {AppliancetypeAddComponent} from './appliancetype-add/appliancetype-add.component';
// import {AppliancetypeEditComponent} from './appliancetype-edit/appliancetype-edit.component';
import {AppliancetypesRoutingModule} from './appliancetypes-routing.module';
import {ApplianceTypeService} from './appliancetype.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppliancetypesRoutingModule
  ],
  declarations: [
    AppliancetypeListComponent
    // AppliancetypeAddComponent,
    // AppliancetypeEditComponent
    ],
  exports: [
    AppliancetypeListComponent
  ],
  providers: [ApplianceTypeService]
})

export class ApplianceTypesModule {
}
