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
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule  } from "./app-routing.module";
import { AccountComponent } from './modules/settings/account/account.component';
import { FavoritesComponent } from './modules/settings/favorites/favorites.component';
import { ProfileComponent } from './modules/settings/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { PulseDirective } from "./directives/ltr.directive";


@NgModule({
    declarations: [
        AppComponent,
        ObservableDemoComponent,
        HomeComponent,
        PageNotFoundComponent,
        AccountComponent,
        FavoritesComponent,
        ProfileComponent,
        LoginComponent,
        PulseDirective
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule, 
        FormsModule,
        StudentsModule,
        AppRoutingModule 
    ],
    providers:[StudentService],
    bootstrap: [AppComponent]
})
export class AppModule {}
