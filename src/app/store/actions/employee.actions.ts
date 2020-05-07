import { Action } from '@ngrx/store';


import { DataAction, DataErrorAction } from './data.actions';
import { Employee } from 'src/app/shared/interfaces';
import { DataServiceError } from '../services/data-error.service';

export const ADD_EMPLOYEE = '[Employee] ADD_EMPLOYEE';
export const ADD_EMPLOYEE_ERROR = '[Employee] ADD_EMPLOYEE_ERROR';
export const ADD_EMPLOYEE_SUCCESS = '[Employee] ADD_EMPLOYEE_SUCCESS';

export const GET_EMPLOYEE = '[Employee] GET_EMPLOYEE';
export const GET_EMPLOYEE_SUCCESS = '[Employee] GET_EMPLOYEE_SUCCESS';
export const GET_EMPLOYEE_ERROR = '[Employee] GET_EMPLOYEE_ERROR';

export const UPDATE_EMPLOYEE = '[Employee] UPDATE_EMPLOYEE';
export const UPDATE_EMPLOYEE_SUCCESS = '[Employee] UPDATE_EMPLOYEE_SUCCESS';
export const UPDATE_EMPLOYEE_ERROR = '[Employee] UPDATE_EMPLOYEE_ERROR';

export const GET_EMPLOYEES = '[Employee] GET_EMPLOYEEES';
export const GET_EMPLOYEES_SUCCESS = '[Employee] GET_EMPLOYEEES_SUCCESS';
export const GET_EMPLOYEES_ERROR = '[Employee] GET_EMPLOYEEES_ERROR';

export const DELETE_EMPLOYEE = '[Employee] DELETE_EMPLOYEE';
export const DELETE_EMPLOYEE_SUCCESS = '[Employee] DELETE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_ERROR = '[Employee] DELETE_EMPLOYEE_ERROR';

export const SET_EMPLOYEE_LOADING = '[Employee] SET_EMPLOYEE_LOADING';

export abstract class EmployeeAction implements DataAction<Employee> {
  readonly type: string;
  constructor(public readonly payload: Employee) {}
}

export abstract class EmployeeErrorAction implements DataErrorAction<Employee> {
  readonly type: string;
  constructor(public readonly payload: DataServiceError<Employee>) {}
}

export class GetEmployees implements Action {
  readonly type = GET_EMPLOYEES;
}

export class GetEmployeesSuccess implements Action {
  readonly type = GET_EMPLOYEES_SUCCESS;
  constructor(public readonly payload: Employee[]) {}
}

export class GetEmployeesError implements Action {
  readonly type = GET_EMPLOYEES_ERROR;
  constructor(public readonly payload: any) {}
}

export class GetEmployee implements Action {
  readonly type = GET_EMPLOYEE;
  constructor(public readonly payload: number) {}
}

export class GetEmployeeSuccess implements Action {
  readonly type = GET_EMPLOYEE_SUCCESS;
  constructor(public readonly payload: Employee) {}
}

export class GetEmployeeError extends EmployeeErrorAction {
  readonly type = GET_EMPLOYEE_ERROR;
}

export class AddEmployee extends EmployeeAction {
  readonly type = ADD_EMPLOYEE;
}

export class AddEmployeeSuccess extends EmployeeAction {
  readonly type = ADD_EMPLOYEE_SUCCESS;
}

export class AddEmployeeError extends EmployeeErrorAction {
  readonly type = ADD_EMPLOYEE_ERROR;
}

export class UpdateEmployee extends EmployeeAction {
  readonly type = UPDATE_EMPLOYEE;
}

export class UpdateEmployeeSuccess extends EmployeeAction {
  readonly type = UPDATE_EMPLOYEE_SUCCESS;
}

export class UpdateEmployeeError extends EmployeeErrorAction {
  readonly type = UPDATE_EMPLOYEE_ERROR;
}

export class DeleteEmployee extends EmployeeAction {
  readonly type = DELETE_EMPLOYEE;
}

export class DeleteEmployeeSuccess extends EmployeeAction {
  readonly type = DELETE_EMPLOYEE_SUCCESS;
}

export class DeleteEmployeeError extends EmployeeErrorAction {
  readonly type = DELETE_EMPLOYEE_ERROR;
}

export class SetEmployeeLoading {
  readonly type = SET_EMPLOYEE_LOADING;
  constructor(public payload = true) {}
}

export type AllEmployeeActions =
  | GetEmployee
  | GetEmployeeSuccess
  | GetEmployeeError
  | UpdateEmployee
  | UpdateEmployeeSuccess
  | UpdateEmployeeError
  | GetEmployees
  | GetEmployeesSuccess
  | GetEmployeesError
  | AddEmployee
  | AddEmployeeSuccess
  | AddEmployeeError
  | DeleteEmployee
  | DeleteEmployeeSuccess
  | DeleteEmployeeError
  | SetEmployeeLoading;
