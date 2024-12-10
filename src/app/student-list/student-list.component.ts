import { Component, Output, EventEmitter } from '@angular/core';
import {Student} from '../models/student.model'
import { Test } from '../models/test.model';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
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
      testList:[
        new Test(1, new Date('2024-01-15'), 'ComputerScience', 85),
        new Test(2, new Date('2024-02-20'), 'BusinessAdministration', 90),
        new Test(3, new Date('2024-03-10'), 'CivilEngineering', 78),
        new Test(7, new Date('2024-07-15'), 'BusinessAdministration', 87)]
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      phone: "234-567-8901",
      active: false,
      marksAvg: 96,
      leaveDate: new Date("2024-11-22"),
      testList:[new Test(4, new Date('2024-04-05'), 'EducationPsychology', 92),
      new Test(5, new Date('2024-05-01'), 'Law', 88),
      new Test(6, new Date('2024-06-10'), 'ComputerScience', 80)]
    },
    {
      id: 3,
      firstName: "Emily",
      lastName: "Johnson",
      phone: "345-678-9012",
      active: true,
      marksAvg: 92,
      testList:[new Test(4, new Date('2024-04-05'), 'EducationPsychology', 99),
        new Test(5, new Date('2024-05-01'), 'Law', 93),
        new Test(6, new Date('2024-06-10'), 'ComputerScience', 90)]
    },
    {
      id: 4,
      firstName: "Michael",
      lastName: "Brown",
      phone: "456-789-0123",
      active: false,
      marksAvg: 88,
      leaveDate: new Date("2024-12-01")
      ,
      testList:[
        new Test(1, new Date('2024-01-15'), 'ComputerScience', 71),
        new Test(2, new Date('2024-02-20'), 'BusinessAdministration', 80),
        ]
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

  selectedStudentDetails?: Student;
  selectedStudentTests?: Student;


    @Output() 
  onSelectStudent: EventEmitter<Student> = new EventEmitter<Student>(); 



  constructor() { }


  deleteStudent(id: number){
    let index = this.studentsList.findIndex(student => student.id === id);
    this.studentsList.splice(index, 1); 
  }

  editStudent(selectedStudent: Student){
    this.selectedStudentDetails=selectedStudent
  }

  addStudent(){
    this.selectedStudentDetails=new Student();

  }
  saveStdtInList(student: Student){
    this.studentsList.push(student)
    this.selectedStudentDetails=undefined;
  }

  
  
  selectStdShowTests(selectedStudent: Student){
    this.selectedStudentTests=selectedStudent;
    this.onSelectStudent.emit(this.selectedStudentTests);
  }
  ngOnInit(): void {

  }
}


