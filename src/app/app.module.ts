import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from '@angular/forms'; // הוספת הייבוא של ReactiveFormsModule
import { StudentsListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component'; 

@NgModule({
    declarations: [
        AppComponent,
        StudentsListComponent,
        StudentDetailsComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule 
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
