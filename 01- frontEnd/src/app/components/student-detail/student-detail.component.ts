import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  id: number = 0;
  student!: Student
  constructor(private router: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.student = new Student();
    this.studentService.getStudentById(this.id).subscribe(
      data =>
      this.student = data
    )
  }

}
