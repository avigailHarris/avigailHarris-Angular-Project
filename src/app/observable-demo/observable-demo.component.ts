import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { from, interval, map, Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent {

  studentSource: Observable<string> = new Observable((observer)=>{
    observer.next("Jane"),
    observer.next("Joh"),
    observer.next("Emily"),
    observer.next("Michael"),
    observer.next("Sophia")
  }
);

  stdSourceByFrom: Observable<string> = from(this._studentService.getStudents()).pipe(map(value => value.firstName+" "+value.lastName) );

  timerValue: string = "";

  timerByOperatorValue: string = "";

  timer: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  timerByOperator: Observable<Date> = interval(1000).pipe(map(x=> new Date()));

  constructor(private _studentService: StudentService){
    this.studentSource.subscribe((val)=>{
      console.log(val);
      
    })

    console.log("Print from stdSourceByFrom");
    

    this.stdSourceByFrom.subscribe(value => {
      console.log(value);  
    });

    this.timer.subscribe((val)=>{
      this.timerValue = val.toLocaleTimeString();
    })
    
    this.timerByOperator.subscribe((val) => {
      this.timerByOperatorValue = val.toLocaleTimeString();
    });
    
  }
  }
