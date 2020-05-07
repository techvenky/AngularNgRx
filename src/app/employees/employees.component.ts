import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/interfaces';
import { EmployeeDataService } from '../core/services/data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EntityState } from '../store/reducers';
import { EmployeeSelectors } from '../store/services/employee.selectors';
import { EmployeeAction } from '../store/actions';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  [x: string]: any;
  
  title = 'Employees';
  employees$: Observable<Employee[]>;
  loading$: Observable<boolean>;

  constructor(
      private store: Store<EntityState>,
      private employeeSelectors: EmployeeSelectors) {
      this.employees$ = this.employeeSelectors.employees$;
      this.loading$ = this.employeeSelectors.loading$;
  }

  ngOnInit() {
      this.getEmployees();
  }

  getEmployees() {
    console.log('Inside test');
      this.store.dispatch(new EmployeeAction.GetEmployees());

  }

}
