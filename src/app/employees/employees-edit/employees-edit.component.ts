import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as EmployeeAction from '../../store/actions';
import { Employee } from 'src/app/shared/interfaces';
import { EmployeeSelectors } from 'src/app/store/services/employee.selectors';
import { EntityState } from 'src/app/store/reducers';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.scss']
})
export class EmployeesEditComponent implements OnInit, OnDestroy {

  employeeForm = this.formBuilder.group({
    id: [],
    name: ['', Validators.required],
    email: ['', Validators.required]
  });

  employee: Employee;
  loading$: Observable<boolean>;
  sub: Subscription;

  constructor(
    private store: Store<EntityState>,
    private employeeSelectors: EmployeeSelectors,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    this.sub = this.employeeSelectors.employee$.subscribe(emp => {
      if (emp) {
        this.employee = emp;
        this.employeeForm.patchValue(this.employee);
      }
    });
    this.loading$ = this.employeeSelectors.loading$;
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new EmployeeAction.GetEmployee(id));
  }

  submit() {
    if (this.employeeForm.valid) {
      const employeeValue = { ...this.employee, ...this.employeeForm.value };
      this.store.dispatch(new EmployeeAction.UpdateEmployee(employeeValue));
      this.router.navigate(['/employees']);
    }
  }

  add(employee: Employee) {
    this.store.dispatch(new EmployeeAction.AddEmployee(employee));
  }

  delete(employee: Employee) {
    this.store.dispatch(new EmployeeAction.DeleteEmployee(employee));
  }

  update(employee: Employee) {
    this.store.dispatch(new EmployeeAction.UpdateEmployee(employee));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
