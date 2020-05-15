import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';


const routes: Routes = [
  { path: '', redirectTo: 'add-employee', pathMatch: 'full' },
  {path:'employee-list', component:EmployeeListComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path: 'edit-employee/:id', component: EditEmployeeComponent},
  {path:'show-employee/:id',component: ShowEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
