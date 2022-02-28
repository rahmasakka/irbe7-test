import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: number = 0;
  student: Student = new Student();
  constructor(private studentService : StudentService,
              private route: ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(
      data => {
        this.student = data;
      }
    )
    console.log("--------------------")
  }

  onSubmit(){
    this.studentService.updateStudent(this.id, this.student).subscribe(
      data => {
        this.student = data;
        this.goToStudentList();
      },
      error => console.log(error));
      console.log("--************------")

  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }

}
