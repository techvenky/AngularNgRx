import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDataService } from './services/employee-data.service';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './effects/employee.effects';
import { EmployeeSelectors } from './services/employee.selectors';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('entityCache', reducers),
    EffectsModule.forFeature([ EmployeeEffects ])
  ],
  providers: [
    EmployeeDataService,
    EmployeeSelectors,
  ],
  exports: [StoreModule, EffectsModule]
})

export class AppStoreModule { }
