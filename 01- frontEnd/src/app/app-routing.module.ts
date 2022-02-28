import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: 'update-student/:id', component:UpdateStudentComponent},
  {path: 'student-detail/:id', component:StudentDetailComponent},
  {path: '', redirectTo: 'students', pathMatch:'full'},
  {path: '**', redirectTo: 'students', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
