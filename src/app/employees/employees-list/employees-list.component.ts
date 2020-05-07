import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  @Input() public employees: Employee[]; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
