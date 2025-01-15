import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { StudentsListComponent } from "./modules/students/student-list/student-list.component";
import { StudentDetailsComponent } from "./modules/students/student-details/student-details.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginService } from "./login/login.service";

const APPROTES: Route[]=[
    {"path": "", redirectTo: "home", "pathMatch": "full"},
    {"path": "home", component: HomeComponent},
    {"path": "studentsList", component: StudentsListComponent},
    {"path": "studentDetails", component: StudentDetailsComponent},
    {"path": "studentDetails/:id", component: StudentDetailsComponent},
    {"path": "setting", loadChildren: ()=> import("./modules/settings/setting-routing.module").then(m => m.SettingRoutingModule),canActivate: [LoginService] },
    {"path": "**", component: PageNotFoundComponent},
]

@NgModule({

    imports: [RouterModule.forRoot(APPROTES)],
    exports: [RouterModule]

})

export class AppRoutingModule {


}