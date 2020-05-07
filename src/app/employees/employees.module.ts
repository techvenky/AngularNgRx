import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesRoutingModule } from './employees-routing.module';



@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent, EmployeesEditComponent],
  imports: [
    CommonModule, EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
