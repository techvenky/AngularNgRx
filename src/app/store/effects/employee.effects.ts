import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import * as EmployeeActions from '../actions';
import { EmployeeDataService } from '../services/employee-data.service';


const toAction = EmployeeActions.toAction();
type EmployeeAction = EmployeeActions.EmployeeAction;
type GetEmployeeAction = EmployeeActions.GetEmployee;

@Injectable()
export class EmployeeEffects {

  @Effect()
  getEmployees$: Observable<Action> = this.actions$
    .pipe(
      ofType(EmployeeActions.GET_EMPLOYEES),
      switchMap(() =>
        toAction(
          this.employeeDataService.getEmployees(),
          EmployeeActions.GetEmployeesSuccess,
          EmployeeActions.GetEmployeesError
        )
      )
    );

    @Effect()
    getEmployee$: Observable<Action> = this.actions$
      .pipe(
        ofType(EmployeeActions.GET_EMPLOYEE),
        switchMap((action: GetEmployeeAction) =>
          toAction(
            this.employeeDataService.getEmployee(action.payload),
            EmployeeActions.GetEmployeeSuccess,
            EmployeeActions.GetEmployeeError
          )
        )
      );

  @Effect()
  addEmployee$: Observable<Action> = this.actions$
    .pipe(
      ofType(EmployeeActions.ADD_EMPLOYEE),
      concatMap((action: EmployeeAction) =>
        toAction(
          this.employeeDataService.addEmployee(action.payload),
          EmployeeActions.AddEmployeeSuccess,
          EmployeeActions.AddEmployeeError
        )
      )
    );

  @Effect()
  deleteEmployee$: Observable<Action> = this.actions$
    .pipe(
      ofType(EmployeeActions.DELETE_EMPLOYEE),
      concatMap((action: EmployeeAction) =>
        toAction(
          this.employeeDataService.deleteEmployee(action.payload),
          EmployeeActions.DeleteEmployeeSuccess,
          EmployeeActions.DeleteEmployeeError
        )
      )
    );

  @Effect()
  updateEmployee$: Observable<Action> = this.actions$
    .pipe(
      ofType<EmployeeActions.UpdateEmployee>(EmployeeActions.UPDATE_EMPLOYEE),
      concatMap((action: EmployeeAction) =>
        toAction(
          this.employeeDataService.updateEmployee(action.payload),
          EmployeeActions.UpdateEmployeeSuccess,
          EmployeeActions.UpdateEmployeeError
        )
      )
    );

  constructor(
    private actions$: Actions,
    private employeeDataService: EmployeeDataService
  ) {}

}
