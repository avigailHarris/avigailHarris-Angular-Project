
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student, Type, Year } from '../../students/student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../students/student.service';
import { MissimgDays } from '../missimgDays.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  studentForm: FormGroup = new FormGroup({});
  studiesType = Type;
  missingFromDate?: Date;
  numOfDays?: number;
  isUpdate: boolean = false;

  @Input() type: string | undefined;

  ngOnInit(): void {
    this._acr.paramMap.subscribe( paramMap => {
      if(paramMap.has("id")) {
        const id = paramMap.get("id");
        if (id !== null) {
          this.isUpdate = true;
          this.student = this._studentService.getStudentById(+id);          
        }
      }
    })
  }

  getStudiesType() {
    let typeOptions = Object.keys(Type)
      .filter(key => isNaN(Number(key)))  
      .map(key => ({ name: key, id: Type[key as keyof typeof Type] }));
    return typeOptions;
  }

  studiesYear = Year;
  private _student?: Student;
  totalMissingDays: number = 0;

  public get student(): Student | undefined {
    return this._student;
  }

  @Input()
  public set student(value: Student | undefined) {
    this._student = value;
    
    if (this.student != undefined) {
      this.studentForm = new FormGroup({
        id: new FormControl({ value: this.student.id, disabled: this.type === 'update' }, Validators.required),        
        "firstName": new FormControl(this.student.firstName, [Validators.required, Validators.minLength(2)]),
        "lastName": new FormControl(this.student.lastName, Validators.maxLength(20)),
        "phone": new FormControl(this.student.phone, Validators.required),
        "marksAvg": new FormControl(this.student.marksAvg),
        "active": new FormControl(this.student.active),
        "leaveDate": new FormControl(this.student.leaveDate),
        "studiesType": new FormControl(this.student.studiesType),
        "studiesYear": new FormControl(this.student.studiesYear),
        "missingDate": new FormControl(),
        "numOfMsgDays": new FormControl()
      });
      this.updateIdControl();
    }
    this.totalMissingDays = (this.student?.id !== undefined) ? this._studentService.getSumMissingDays(this.student.id) : 0;
  }

  private updateIdControl(): void {
    const idControl = this.studentForm.get('id');
    if (this.type === 'add') {
      idControl?.disable();
    } else {
      idControl?.enable();
    }
  }

  @Output() 
  onAddStudent: EventEmitter<Student> = new EventEmitter<Student>();

  @Output()
  onAddStudentToServer: EventEmitter<Student> = new EventEmitter<Student>();

  @Output()
  onEditStudentToServer: EventEmitter<Student> = new EventEmitter<Student>();

  constructor(private _studentService: StudentService, private _acr: ActivatedRoute, private _router: Router) { }

  onSubmit(): void {
    if (!this.studentForm.valid) {
      console.log('Form is invalid');
      return;
    }

    const formValues = this.studentForm.value;

    let studentToSave: Student;

    if (this.isUpdate) {
      studentToSave = {
        ...formValues,
        id: this.student?.id,
        missimgDays: this.student?.missimgDays || []
      };
    } else {
      studentToSave = {
        ...formValues,
        id: this._studentService.getStudents()[this._studentService.getNumOfStudents() - 1].id + 1,
        missimgDays: []
      };
    }

    if (formValues.missingDate && formValues.numOfMsgDays) {
      const newMissimgDay = new MissimgDays(formValues.missingDate, formValues.numOfMsgDays);
      studentToSave.missimgDays.push(newMissimgDay);
    }

    if (this.isUpdate) {
      this.saveUpdatedStudent(studentToSave);
    } else {
      if( this.type == 'addToServer')
        this.saveNewStudentToServer(studentToSave);
      else
        this.saveNewStudent(studentToSave);
    }
  }

  saveNewStudent(newStudent: Student): void {
    this.onAddStudent.emit(newStudent);
    alert("Hi " + newStudent.firstName + ", Your details have been added in the system :)");
  }


  saveNewStudentToServer(newStudent: Student): void {
    
    this.onAddStudentToServer.emit(newStudent); 
    alert("Hi " + newStudent.firstName + ", Your details have been added in the system :)"); 
    
  }  
  saveUpdatedStudent(updatedStudent: Student): void {
  this._studentService.updateStudent(updatedStudent);  
    alert("Hi " + updatedStudent.firstName + ", Your details have been updated in the system :)");
    this._router.navigate(["/studentsList"]);
  }
}

