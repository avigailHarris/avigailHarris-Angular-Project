import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { StudentsListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component'; 


@NgModule({
    declarations:[AppComponent,StudentsListComponent, StudentDetailsComponent  ],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})

export class AppModule{

}