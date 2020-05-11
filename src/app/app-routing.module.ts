import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [
  { path: '',  component: EmployeesComponent},
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
 { path: 'employees', component: EmployeesComponent },
  //{ path: '', pathMatch: 'full', redirectTo: 'employees' },
  { path: 'employees', loadChildren: './employees/employees.module#EmployeesModule'},
  //{ path: 'employees', loadChildren: () => import('app/employees/employees.module').then(m => m.EmployeesModule) }
  //{ path: 'orders/:id', loadChildren: () => import('app/orders/orders.module').then(m => m.OrdersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
