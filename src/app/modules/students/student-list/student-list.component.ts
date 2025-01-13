import { Component, Output, EventEmitter } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Observable, from, filter, Subject, debounceTime, switchMap, distinctUntilChanged, mergeMap, catchError, of } from 'rxjs';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentsListComponent {
  studentsList: Student[] = [];
  selectedStudentDetails?: Student;
  selectedStudentTests?: Student;
  typeDetais: string = "add";

  @Output() 
  onShowTests: EventEmitter<Student> = new EventEmitter<Student>(); 

  @Output() 
  onAddStudent: EventEmitter<Student> = new EventEmitter<Student>(); 

  @Output() 
  onEditStudent: EventEmitter<Student> = new EventEmitter<Student>();  

  searchTerm: string = ''; 
  private searchSubject: Subject<string> = new Subject();

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this._studentService.getStudentsByPromise().then((data) => {
      this.studentsList = data;
    }).catch(err => {
      console.error("Error loading students:", err);
      alert("There was an issue loading the students data.");
    });
  //   this._studentService.getStudentsFromServer().subscribe(data => {
  //     this.studentsList = data;
  //   }, err =>{
  //     alert("Sory, Something Worng with Students List");
  //       console.log(err);
  // })

  this.searchSubject.pipe(
    debounceTime(1000), 
    distinctUntilChanged(),
    switchMap((term: string) => {
      return this._studentService.search(term).pipe(
        catchError((err) => {
          console.error('Search error:', err);
          alert("Sorry, there was an error while searching students with the server.");
          return of(this.studentsList);
        })
      );
    })
  ).subscribe((data: Student[]) => {
    this.studentsList = data;
  });
  
  }

  showActiveStudents(checked: boolean){
    this._studentService.getStudentsFromServer(checked).subscribe(data => {
      this.studentsList = data;
    });
  }

  deleteStudent(id: number) {
    let index = this.studentsList.findIndex(student => student.id === id);
    if (index !== -1) {
      this.studentsList.splice(index, 1); 
    }
  }

  deleteStudentToServer(id: number) {
    this._studentService.deleteStudentToServer(id).subscribe(data => {
      if( data){
        let index = this.studentsList.findIndex(student => student.id === id);
        if (index !== -1) {
          this.studentsList.splice(index, 1); }
        }
      else {
        console.error("There was an issue removing the student to the server.");
        alert("There was an issue removing the student to the server.");
      }}
    ,
    err => {
      console.error("Error while saving student to server: ", err);
      alert("Sorry, there was an error while adding the student to the server.");
    })
  
  }

  clickEditStudent(selectedStudent: Student) {
    this.typeDetais = "update";
    this.selectedStudentDetails = selectedStudent;
  }

  clickEditStudentToServer(updatedStudent: Student) {
    this.typeDetais = "updateToServer";
    this.selectedStudentDetails = updatedStudent;
  }

  clickAddStudent() {
    this.typeDetais = "add";
    this.selectedStudentDetails = new Student();
  }

  addStudentToServer() {
    this.typeDetais = "addToServer";
    this.selectedStudentDetails = new Student();
  }

  addStdtInList(student: Student) {
    this.studentsList.push(student);
    this.selectedStudentDetails = undefined;
  }

  saveNewStdToServer(student: Student): void {
    this._studentService.addStudentToServer(student).subscribe(
      data => {
        if (data) {
          this.studentsList.push(student);
          alert("Hi " + student.firstName + ", Your details have been updated in the system :)");
        } else {
          console.error("There was an issue adding the student to the server.");
          alert("There was an issue adding the student to the server.");
        }
      },
      err => {
        console.error("Error while saving student to server: ", err);
        alert("Sorry, there was an error while adding the student to the server.");
      }
    );
  }

  updateStdtInList(updatedStudent: Student) {
    const index = this.studentsList.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.studentsList[index] = updatedStudent;  
    }
  }
  
  updateStdtToServer(updatedStudent: Student) {
    this._studentService.updateStudentToServer(updatedStudent).subscribe(
      data => {
        if (data) {
          const index = this.studentsList.findIndex(student => student.id === updatedStudent.id);
          if (index !== -1) {
            this.studentsList[index] = updatedStudent;  
          }
          alert("Hi " + updatedStudent.firstName + ", Your details have been updated in the system :)");
        } 
        else {
          console.error("There was an issue updating the student to the server.");
          alert("There was an issue updating the student to the server.");
        }
      },
      err => {
        console.error("Error while updating student to server: ", err);
        alert("Sorry, there was an error while updating the student to the server.");
      }
    );
  }

  selectStdShowTests(selectedStudent: Student) {
    this.selectedStudentTests = selectedStudent;
    this.onShowTests.emit(this.selectedStudentTests);
  }

  numMissingDays(id: number): number {
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
      filter((value: Student): value is Student => value.active === true)
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

  handleAddStudent(newStudent: Student): void {
    this.studentsList.push(newStudent); 
  }

  handleEditStudent(updatedStudent: Student): void {
    const index = this.studentsList.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.studentsList[index] = updatedStudent;  
    }
  }

  handleEditStudentToServer(updatedStudent: Student): void {
    const index = this.studentsList.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.studentsList[index] = updatedStudent;  
    }
  }

  handleSaveStudentToServer(updatedList: Student[]): void {
    this.studentsList = updatedList; 
  }

  onSearchChange(value: string): void {
    this.searchSubject.next(value); 
  }
  
  
}
