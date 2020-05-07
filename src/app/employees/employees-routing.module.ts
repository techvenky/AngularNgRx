import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';

const routes: Routes = [
    { path: '', component: EmployeesComponent },
    { path: ':id', component: EmployeesEditComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class EmployeesRoutingModule {}
