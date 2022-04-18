import { Component, OnInit } from '@angular/core';
import{HttpServiceService} from '../http-service.service'
import { ActivatedRoute ,Router} from '@angular/router'

import{User} from '../user';
import{Repo} from '../repo'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
users:any="";
showRepos= true;
username:string;

//inject hhtpserive
  constructor(private httpservice:HttpServiceService,
    private router:Router) { }

  ngOnInit(): void {
    //add getprofile method for it to get loade when the app loads
    this.getProfile();
    // this.findUser()
  }

// method that gets datafrom the service
  getProfile(){

    this.httpservice.getUser().then((data:any)=>{
      console.log(data);
      this.users =data}
      
    )


  }

  //navigate to repo page
  navigateRepos(){
    
    this.router.navigate(['/allRepos'])
  }
  navigateRepos2(){
    this.router.navigate(['/profile'])
  }
 
  hide(){
    this.showRepos = false;
  }

  show(){
    this.showRepos =true;
  }
  

  //find user

  // findUser(){
  //   this.httpservice.upadateprofile(this.username);
  //       this.getProfile()


  // }

}
