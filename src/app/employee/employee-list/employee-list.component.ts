import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/service/rest-api.service';
import { Employee } from 'src/app/model/employee.model';
import { Router } from '@angular/router';
import { AlertDialogComponent } from 'src/app/material/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';



export interface EmployeeElement {
  empId: number;
  empName: string;
  deptNames: string;
  address: string;
  phoneNumber: string;
}

const ELEMENT_DATA: EmployeeElement[] = [
  {empId: 1, empName: 'Ronney', deptNames: 'Informatik', address: 'Odisha',phoneNumber:'90909090'},
  {empId: 2, empName: 'Saurav', deptNames: 'Informatik', address: 'New Delhi',phoneNumber:'90909090'},

  {empId: 1, empName: 'Prajwal', deptNames: 'Mechatronics', address: 'Bengaluru',phoneNumber:'90909090'},


];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['empId', 'empName', 'deptNames', 'address','phoneNumber','actions'];
  dataSource: Employee[];
  employee : Employee[];

  constructor(
    private restApiService: RestApiService,
    private router:Router,
    public dialog: MatDialog
    ) {
    this.employee = [];
   }

  ngOnInit() {
    this.getEmployeeList();

  }


  getEmployeeList(){
    this.restApiService.getEmployeesList().subscribe(res=>{
      this.dataSource = res;
      console.log("Employee list",this.employee);
    })
  }

  onEdit(id: any){
    console.log(id);
    this.router.navigate(['/edit-employee',id]);
    

  }

  onDelete(id: number){

    const dialogRef=this.dialog.open(AlertDialogComponent,{
      'width':'300px',
      data:id

    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log('dialog is closed');
      this.getEmployeeList();
    })


  }

  onLaunch(id: number){
    this.router.navigate(['/show-employee',id]);
  }

}
