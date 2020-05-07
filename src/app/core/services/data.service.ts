import { Injectable } from '@angular/core';
import { Employee } from 'src/app/shared/interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

employees: Employee[] = [
  {
    id: 1,
    name: 'Test Name1',
    email: 'Test1@test.com'
  },
  {
    id: 1,
    name: 'Test Name2',
    email: 'Test2@test.com'
  },
  {
    id: 1,
    name: 'Test Name3',
    email: 'Test3@test.com'
  }
];

getEmployees(): Observable<Employee[]> {
  return of(this.employees);
}

}
