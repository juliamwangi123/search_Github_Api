import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ProfileComponent} from "./profile/profile.component";
// import{AllReposComponent} from './all-repos/all-repos.component'

const routes: Routes = [
    {path:"", redirectTo: "profile", pathMatch: "full"},
    {path: "profile" ,component:ProfileComponent},
    // {path: "allRepos" ,component:AllReposComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
