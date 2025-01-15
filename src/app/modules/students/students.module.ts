import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { StudentsListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TestListComponent } from '../../test-list/test-list.component'; 
import { StudentService } from "./student.service";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "src/app/app-routing.module";  // תיקון כאן

@NgModule({
    declarations: [
        StudentsListComponent,  
        StudentDetailsComponent,
        TestListComponent

    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule, 
        HttpClientModule, 
        FormsModule, 
        AppRoutingModule 
    ],
    providers: [StudentService],
    exports: [StudentsListComponent]
})
export class StudentsModule {}

