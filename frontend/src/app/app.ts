import { Component, signal } from '@angular/core';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  imports: [Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
