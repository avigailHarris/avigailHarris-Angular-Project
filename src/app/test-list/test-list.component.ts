import { Component, Input } from '@angular/core';
import { Test } from '../models/test.model';
import { StudentService } from '../student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent {

  @Input()
  StdehowTests: Student | undefined;


  constructor(private _studentService: StudentService){}

  getMarkAvg(id: number): number{
    return this._studentService.getAvg(id);
  }
}


