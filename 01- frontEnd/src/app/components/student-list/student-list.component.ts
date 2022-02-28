import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[]=[];
  constructor(private studentService : StudentService,
              private router : Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe(data =>{
      this.students = data;
    })
  }

  updateStudent(id: number){
    this.router.navigate(['update-student', id])
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(
      data => {
        
        this.getStudents();
      }
    )
  }

  detailStudent(id: number){
    this.router.navigate(['student-detail', id]);


  }
}
