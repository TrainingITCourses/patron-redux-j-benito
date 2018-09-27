import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import * as service from 'app/services';
import * as component from 'app/components';

@NgModule({
  declarations: [
    AppComponent,
    component.LaunchesSearchComponent,
    component.LaunchesCriteriaComponent,
    component.LaunchesCounterComponent,
    component.LaunchesListComponent,
    component.CriterionTypesComponent,
    component.CriterionResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // service.LaunchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
