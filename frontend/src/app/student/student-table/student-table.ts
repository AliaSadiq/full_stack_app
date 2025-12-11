
import { Component, inject } from '@angular/core';

import { Student } from '../student.interface';
import { StudentService } from '../student-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.html',
  imports:[CommonModule]
})
export class StudentTable {
  studentService = inject(StudentService);

  edit(student: Student,index:number) {
    
    this.studentService.selectStudent(student, index);
  }

  async delete(id: number) {
    await this.studentService.deleteStudent(id);
  }
}
