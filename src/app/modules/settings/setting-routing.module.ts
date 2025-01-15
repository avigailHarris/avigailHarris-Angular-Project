import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { ProfileComponent } from "./profile/profile.component";
import { FavoritesComponent } from "./favorites/favorites.component";


const APPROTES: Route[]=[
    {"path": "", redirectTo: "accountComponent", "pathMatch": "full"},
    {"path": "accountComponent", component: AccountComponent},
    {"path": "favoritesComponent", component: FavoritesComponent},
    {"path": "profileComponent", component: ProfileComponent},
]

@NgModule({

    imports: [RouterModule.forChild(APPROTES)],
    exports: [RouterModule]

})

export class SettingRoutingModule {


}