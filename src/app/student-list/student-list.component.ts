import { Component, Output, EventEmitter } from '@angular/core';
import {Student} from '../models/student.model'
import { StudentService } from '../student.service';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentsListComponent {
  studentsList: Student[] = this._studentService.getStudents();

  selectedStudentDetails?: Student;
  selectedStudentTests?: Student;


  @Output() 
  onShowTests: EventEmitter<Student> = new EventEmitter<Student>(); 



  constructor(private _studentService: StudentService){ }


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
    this.onShowTests.emit(this.selectedStudentTests);
  }
  ngOnInit(): void {

  }
}


