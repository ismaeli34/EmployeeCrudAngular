import { Component, OnInit } from '@angular/core';
import { SnackBarComponent } from 'src/app/material/snack-bar/snack-bar.component';
import { Employee } from 'src/app/model/employee.model';
import { RestApiService } from 'src/app/service/rest-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee[];
  durationInSeconds = 5;
  empId : any;

  constructor(
    private restApiService:RestApiService,
    private _snackBar: MatSnackBar,
    private route:ActivatedRoute
    ) {
      this.empId=this.route.snapshot.paramMap.get('id');

     }

  ngOnInit() {
    this.employee =[];
    this.getEmployee()
  }

   getEmployee(){
    this.restApiService.getEmployee(this.empId).subscribe(res=>{
      console.log("Get employee by id",res);
      this.employee = res;
    })
  }

  onUpdate(formValue: NgForm, event){

    const putBody ={};
    putBody['empId'] = this.empId;
    putBody['empName']= formValue.value.empName;
    putBody['deptNames']= formValue.value.deptNames;
    putBody['address']= formValue.value.address;
    putBody['phoneNumber']= formValue.value.phoneNumber;
    console.log("PutBody",putBody);

    this.restApiService.updateEmployee(this.empId,putBody).subscribe(
      res=>{
      console.log("updated sucessfully");
      formValue.resetForm();
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: this.durationInSeconds * 1000, 
        data : "Updated successfully"
      });
    })


  }

}
