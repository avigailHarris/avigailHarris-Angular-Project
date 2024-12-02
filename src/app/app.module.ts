import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { StudentsListComponent } from './students-list/students-list.component'; 


@NgModule({
    declarations:[AppComponent,StudentsListComponent  ],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})

export class AppModule{

}