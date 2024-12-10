import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Student, Type, Year } from '../models/student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']

})



export class StudentDetailsComponent {

  studentForm: FormGroup = new FormGroup({})

  studiesType= Type;

  getStudiesType(){
    // Converting ENUM to an array of type and I
    let typeOptions = Object.keys(Type)
      .filter(key => isNaN(Number(key)))  
      .map(key => ({ name: key, id: Type[key as keyof typeof Type] }));
    return typeOptions;
    }
  studiesYear= Year;

  private _student?: Student;

  public get student(): Student | undefined{
    return this._student;
  }

  @Input()
  public set student(value: Student | undefined){
    this._student = value;
    if (this.student != undefined){
      this.studentForm = new FormGroup({
        "id": new FormControl(this.student.id,Validators.required),
        "firstName": new FormControl(this.student.firstName,[Validators.required, Validators.minLength(2)]),
        "lastName": new FormControl(this.student.lastName, Validators.maxLength(20)),
        "phone": new FormControl(this.student.phone,Validators.required),
        "marksAvg": new FormControl(this.student.marksAvg),
        "active": new FormControl(this.student.active),
        "leaveDate": new FormControl(this.student.leaveDate),
        "studiesType": new FormControl(this.student.studiesType),
        "studiesYear": new FormControl(this.student.studiesYear),
      })
    }
  }
  

  @Output() 
  onSaveStudent: EventEmitter<Student> = new EventEmitter<Student>(); 


  saveNewStudent(){
    this.student = this.studentForm.value;
    this.onSaveStudent.emit(this.student);
    alert("Hi "+this.student?.firstName+", Your details have been updated in the system:)")
    
  }

}
