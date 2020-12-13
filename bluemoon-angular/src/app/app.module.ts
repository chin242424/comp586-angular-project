
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpErrorHandler} from './error.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersModule } from './customers/customers.module';
import {DropsModule} from './drops/drops.module';
import {AppliancesModule} from './appliances/appliances.module';
import {ApplianceTypesModule} from './appliancetypes/appliancetypes.module';
import {PartsModule} from './parts/parts.module';
import {TechniciansModule} from './technicians/technicians.module';
import {ExpertisesModule} from './expertises/expertises.module';
import {OAuthModule} from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CustomersModule,
    AppliancesModule,
    DropsModule,
    ApplianceTypesModule,
    TechniciansModule,
    ExpertisesModule,
    PartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OAuthModule.forRoot()
  ],
  providers: [HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
