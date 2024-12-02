import { Component } from '@angular/core';
import {Student} from '../student.model'

@Component({
  selector: 'students-list',
  templateUrl: './students-list.component.html',
})
export class StudentsListComponent {
  studentsList: Student[] = [
    new Student(1, "John", "Doe", true, 85),
    new Student(2, "Jane", "Smith", true, 92),
    new Student(3, "Michael", "Johnson", false, 78),
    new Student(4, "Emily", "Davis", true, 88),
    new Student(5, "James", "Wilson", false, 74),
  ];
  constructor() { }

  ngOnInit(): void {

  }
}


