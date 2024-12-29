import { Component, Output, EventEmitter } from '@angular/core';
import {Student} from '../models/student.model'
import { StudentService } from '../student.service';
import { filter, from, Observable } from 'rxjs';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentsListComponent {
  studentsList: Student[] = [];

  selectedStudentDetails?: Student;
  selectedStudentTests?: Student;

  typeDetais:string = "add";

  @Output() 
  onShowTests: EventEmitter<Student> = new EventEmitter<Student>(); 



  constructor(private _studentService: StudentService){ }


  deleteStudent(id: number){
    let index = this.studentsList.findIndex(student => student.id === id);
    this.studentsList.splice(index, 1); 
  }

  clickEditStudent(selectedStudent: Student){
    this.typeDetais = "update";
    this.selectedStudentDetails = selectedStudent;
  }

  clickAddStudent(){
    this.typeDetais = "add";
    this.selectedStudentDetails=new Student();

  }
  addStdtInList(student: Student){
    this.studentsList.push(student)
    this.selectedStudentDetails=undefined;
  }

  updateStdtInList(updatedStudent: Student){
    const index = this.studentsList.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) 
      this.studentsList[index] = updatedStudent;
  
}
    
  selectStdShowTests(selectedStudent: Student){
    this.selectedStudentTests=selectedStudent;
    this.onShowTests.emit(this.selectedStudentTests);
  }

  numMissingDays(id: number): number{
    
    return this._studentService.getSumMissingDays(id);
  }

  sendEmail(): void {

    let studentSource: Observable<Student> = new Observable(obs => {
      for (let i = 0; i < this._studentService.getNumOfStudents(); i++) {
        let std = this._studentService.getStudents()[i];
        if (std.active)
          obs.next(std);
      }
      obs.complete(); 
    });

    let toAlert: string = ""; 
  
    studentSource.subscribe({
      next: (student) => {
        toAlert += `${student.firstName} ${student.lastName} got the email.\n`;
      },
      complete: () => {
        alert(toAlert);
      }
    });
  }
  
  sendEmailByFrom(): void {

    let studentSourceByFrom: Observable<Student> = from(this._studentService.getStudents()).pipe(
      filter((value: Student): value is Student =>  value.active === true) 
    );

    let toAlert: string = ""; 

    studentSourceByFrom.subscribe({
      next: (student) => {
        toAlert += `${student.firstName} ${student.lastName} got the email.\n`;
      },
      complete: () => {
        alert(toAlert);
      }
    });
  }
  

  ngOnInit(): void {
    this._studentService.getStudentsByPromise().then((data)=>{
    this.studentsList = data;
    });

  }
}