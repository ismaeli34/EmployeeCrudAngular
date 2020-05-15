import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { RestApiService } from 'src/app/service/rest-api.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/material/snack-bar/snack-bar.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee[];
  durationInSeconds = 5;

  constructor(
    private restApiService:RestApiService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.employee =[];
  }

  onSubmit(formValue: NgForm, event){
    console.log("FORM VALUE",formValue);
    const postBody ={};
         postBody['empName']= formValue.value['empName'];
         postBody['address']= formValue.value['address'];
         postBody['deptNames']= formValue.value['deptNames'];
         postBody['phoneNumber']= formValue.value['phoneNumber'];
    this.restApiService.createEmployee(postBody).subscribe(
      data=>{
      console.log("created successfully",data ),
      formValue.resetForm();
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: this.durationInSeconds * 1000, 
        data : "Sucessfully created"
      });

      error=>{
        console.log(error);
      }
      
    })

  }

}
