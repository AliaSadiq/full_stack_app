// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Student } from './student.interface';

// @Injectable({ providedIn: 'root' })
// export class StudentService {
//   private apiUrl = 'http://localhost:3000/users';

//   students: Student[] = [];

//   s: Student = {
//     id: '',
//     name: '',
//     email: '',
//     age: 0,
//   };

//   selectedStudent: Student = { ...this.s };

//   constructor(private http: HttpClient) {
    
//   }

//   async loadStudents() {
//     const students = await this.http.get<Student[]>(this.apiUrl).toPromise();
//     this.students = students ?? [];
//   }

//   selectStudent(student: Student) {
//     this.selectedStudent = { ...student };
//   }

//   reset() {
//     this.selectedStudent = { ...this.s };
//   }

//   async submit() {
//     if (!this.selectedStudent.id) {
    
//       await this.http.post(this.apiUrl, {
//         name: this.selectedStudent.name,
//         email: this.selectedStudent.email,
//         age: this.selectedStudent.age,
//       }).toPromise();
//     } else {
  
//       await this.http.patch(`${this.apiUrl}/${this.selectedStudent.id}`, {
//         name: this.selectedStudent.name,
//         email: this.selectedStudent.email,
//         age: this.selectedStudent.age,
//       }).toPromise();
//     }

//     await this.loadStudents();
//     this.reset();
//   }

//   async delete(id: string) {
//     await this.http.delete(`${this.apiUrl}/${id}`).toPromise();
//     await this.loadStudents();
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  BehaviorSubject } from 'rxjs';
import { Student } from './student.interface';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = 'http://localhost:3000/students'; 
 

  public students$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
  public selectedStudent: Student = { id: -1, name: '', email: '', age: 0 };
  private editedIndex: number = -1;

  constructor(private http: HttpClient) {
    this.loadStudents();
  }

  loadStudents() {
    this.http.get<Student[]>(this.apiUrl).subscribe(
      (data) => this.students$.next(data),
      (err) => console.error('Failed to fetch students', err)
    );
  }

  selectStudent(student: Student, index: number) {
    this.editedIndex = index;
    this.selectedStudent = { ...student };
  }

  saveStudent(student: Student) {
    if (this.editedIndex === -1) {
      const payload = {
        name: student.name,
        email: student.email,
        age: student.age
      };
      return this.http.post<Student>(this.apiUrl, payload).subscribe({
        next: () => this.loadStudents(),
        error: (err) => console.error('Failed to add student', err)
      });
    } else {
      const payload = {
        name: student.name,
        email: student.email,
        age: student.age
      };
      return this.http.patch<Student>(`${this.apiUrl}/${student.id}`, payload).subscribe({
        next: () => this.loadStudents(),
        error: (err) => console.error('Failed to update student', err)
      });
    }
  }

  deleteStudent(studentId: number) {
    return this.http.delete(`${this.apiUrl}/${studentId}`).subscribe({
      next: () => this.loadStudents(),
      error: (err) => console.error('Failed to delete student', err)
    });
  }

  resetSelection() {
    this.editedIndex = -1;
    this.selectedStudent = { id: 0, name: '', email: '', age: 0 };
  }
}
