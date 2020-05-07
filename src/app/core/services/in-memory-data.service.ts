import { Injectable } from '@angular/core';
import { RequestInfo, InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee, Address } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo) {
    return { employees,addresses };
  }  

}

const employees: Employee[] = [
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

const addresses: Address[]= [
  {
    id: 1,
    addressDetails: "test Address",
    employeeId: 1
  },
  {
    id: 2,
    addressDetails: "test Address one",
    employeeId: 1
  },
  {
    id: 3,
    addressDetails: "test Address three",
    employeeId: 2
  },
  {
    id: 4,
    addressDetails: "test Address four",
    employeeId: 3
  } 
];