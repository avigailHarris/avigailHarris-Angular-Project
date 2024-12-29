import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from '@angular/forms'; // הוספת הייבוא של ReactiveFormsModule
import { StudentsListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TestListComponent } from './test-list/test-list.component'; 
import { StudentService } from "./student.service";
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        StudentsListComponent,
        StudentDetailsComponent,
        TestListComponent,
        ObservableDemoComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule 
    ],
    providers:[StudentService],
    bootstrap: [AppComponent]
})
export class AppModule {}
