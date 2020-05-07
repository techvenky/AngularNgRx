import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';

import { EntityState } from '../reducers';
import { EmployeeState } from '../reducers/employee.reducer';

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getEmployeeState = createSelector(
  getEntityState,
  (state: EntityState) => state.employees
);

const getAllEmployees = createSelector(
  getEmployeeState,
  (state: EmployeeState) => state.employees
);

const getEmployee = createSelector(
  getEmployeeState,
  (state: EmployeeState) => state.employee
);

const getEmployeesLoading = createSelector(
  getEmployeeState,
  (state: EmployeeState) => state.loading
);

@Injectable()
export class EmployeeSelectors {

  constructor(private store: Store<EntityState>) {}

  employees$ = this.store.pipe(select(getAllEmployees));
  employee$ = this.store.pipe(select(getEmployee));
  employeeState$ = this.store.pipe(select(getEmployeeState));
  loading$ = this.store.pipe(select(getEmployeesLoading));

}
