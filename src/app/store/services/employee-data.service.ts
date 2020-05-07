import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { Employee } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  apiUrlBase = environment.apiUrlBase;
  
  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrlBase}/employees`)
    .pipe(
      catchError(this.HandleError())
    );
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrlBase}/employees/${id}`)
    .pipe(
      catchError(this.HandleError())
    );
  }
  
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrlBase}/employees/`, employee)
    .pipe(
      catchError(this.HandleError(employee))
    );
  }

  deleteEmployee(employee: Employee): Observable<Employee> {
    return this.http.delete(`${this.apiUrlBase}/employees/${employee.id}`)
    .pipe(
      map(() => employee),
      catchError(this.HandleError(employee))
    );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrlBase}/employees/${employee.id}`, employee)
    .pipe(
      map(() => employee),
      catchError(this.HandleError(employee))
    );
  }

  private HandleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
        console.error(res.error);      
      return throwError(res.error);
    };
  }
}
