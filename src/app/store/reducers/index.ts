import { ActionReducerMap } from '@ngrx/store';

import * as actions from '../actions';
import * as employeesReducers from './employee.reducer';


export type Action = actions.EmployeeAction;

export interface EntityState {
  employees: employeesReducers.EmployeeState;
  employee: employeesReducers.EmployeeState;  
}

export const reducers: ActionReducerMap<EntityState> = {
  employees: employeesReducers.reducer,
  employee: employeesReducers.reducer  
};
