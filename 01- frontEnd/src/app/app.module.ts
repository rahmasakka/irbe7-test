import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
