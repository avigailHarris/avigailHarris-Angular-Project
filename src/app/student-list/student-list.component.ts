import { Component } from '@angular/core';
import {Student} from '../student.model'

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
})
export class StudentsListComponent {
  studentsList: Student[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      phone: "123-456-7890",
      active: true,
      marksAvg: 85,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      phone: "234-567-8901",
      active: false,
      marksAvg: 78,
      leaveDate: new Date("2024-11-22")
    },
    {
      id: 3,
      firstName: "Emily",
      lastName: "Johnson",
      phone: "345-678-9012",
      active: true,
      marksAvg: 92,
    },
    {
      id: 4,
      firstName: "Michael",
      lastName: "Brown",
      phone: "456-789-0123",
      active: false,
      marksAvg: 88,
      leaveDate: new Date("2024-12-01")
    },
    {
      id: 5,
      firstName: "Sophia",
      lastName: "Davis",
      phone: "567-890-1234",
      active: true,
      marksAvg: 76,
    }
  ];

  selectedStudent?: Student;

  constructor() { }

  deleteStudent(id: number){
    let index = this.studentsList.findIndex(student => student.id === id);
    this.studentsList.splice(index, 1); 
  }

  editStudent(selectedStudent: Student){
    this.selectedStudent=selectedStudent
  }

  addStudent(){
    this.selectedStudent=new Student();

  }
  saveStdtInList(student: Student){
    this.studentsList.push(student)
    this.selectedStudent=undefined;
  }
  ngOnInit(): void {

  }
}


