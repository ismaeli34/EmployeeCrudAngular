import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RestApiService } from 'src/app/service/rest-api.service';


@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  id: any;

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private restApiService:RestApiService) {

      this.id = data;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  deleteRow(){
    this.restApiService.deleteEmployee(this.id).subscribe(
      res=>{
      console.log("Deleted successfully ");
      this.dialogRef.close();

    })
  }


}
