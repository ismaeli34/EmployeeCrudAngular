import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from './material/snack-bar/snack-bar.component';
import { AlertDialogComponent } from './material/alert-dialog/alert-dialog.component';
import { SuccessDialogComponent } from './material/success-dialog/success-dialog.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    SnackBarComponent,
    AlertDialogComponent,
    SuccessDialogComponent,
    EditEmployeeComponent,
    ShowEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule
  ],
  entryComponents: [
    SnackBarComponent,
    AlertDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
