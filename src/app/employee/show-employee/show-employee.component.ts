import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/service/rest-api.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  id: any;
  employee: Employee;
  constructor(private route: ActivatedRoute,
    private restApiService: RestApiService) { 
     this.id=this.route.snapshot.paramMap.get('id');
    console.log("show id",this.id);
    this.employee = {};
  }

  ngOnInit() {
    this.getEmployeeById(this.id)
 
  }
  getEmployeeById(id: any) {
    this.restApiService.getEmployee(id).subscribe(res=>{
      this.employee = res;
      console.log("show details",this.employee);

    })

    

  }

}
