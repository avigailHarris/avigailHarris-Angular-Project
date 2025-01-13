import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // הוספת הייבוא של ReactiveFormsModule
import { StudentsListComponent } from './modules/students/student-list/student-list.component';
import { TestListComponent } from './test-list/test-list.component'; 
import { StudentService } from "./modules/students/student.service";
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsModule } from "./modules/students/students.module";


@NgModule({
    declarations: [
        AppComponent,
        TestListComponent,
        ObservableDemoComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule, 
        FormsModule,
        StudentsModule
    ],
    providers:[StudentService],
    bootstrap: [AppComponent]
})
export class AppModule {}
