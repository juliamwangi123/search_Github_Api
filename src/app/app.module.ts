import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';


import{HttpServiceService} from './http-service.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ReposComponent } from './repos/repos.component';
import { DateCountPipe } from './date-count.pipe';
// import { AllReposComponent } from './all-repos/all-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReposComponent,
    DateCountPipe,
    // AllReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
