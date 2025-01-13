import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { StudentsListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TestListComponent } from '../../test-list/test-list.component'; 
import { StudentService } from "./student.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        StudentsListComponent,  
        StudentDetailsComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule, 
        HttpClientModule, 
        FormsModule, 
    ],
    providers: [StudentService],
    exports: [StudentsListComponent]
})
export class StudentsModule {}
