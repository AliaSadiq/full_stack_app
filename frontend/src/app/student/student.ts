import { Component } from '@angular/core';
import { StudentForm } from './student-form/student-form';
import { StudentTable } from './student-table/student-table';
import { StudentService } from './student-service';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentForm, StudentTable],
  templateUrl: './student.html',
})
export class Student {

  constructor(public studentService: StudentService) {}


}
