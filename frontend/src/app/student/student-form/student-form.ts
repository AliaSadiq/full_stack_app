import { Component } from '@angular/core';
import { StudentService } from '../student-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.html',
  standalone: true,
  imports:[FormsModule]
})
export class StudentForm {

  constructor(public studentService: StudentService) {}

  get student() {
    return this.studentService.selectedStudent;
  }

  save() {
    this.studentService.saveStudent(this.student);
    this.studentService.resetSelection();
  }
}