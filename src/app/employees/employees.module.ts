import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, EmployeesRoutingModule
  ],
  declarations: [EmployeesListComponent, EmployeesComponent, EmployeesEditComponent],
  providers: [FormBuilder]
})
export class EmployeesModule { }
