import { Component } from '@angular/core';
import { Student } from './models/student.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-app';

  selectedStudent?: Student;

  timeCalculation(){
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if(currentHour>5 && currentHour<12)
      return "Good morning:)"
    if(currentHour>11 && currentHour<18)
      return "Good afternoon:)"
    else
      return "Good evening:)"
  }

  showTests(student: Student){
    this.selectedStudent = student;

  }
  
}
