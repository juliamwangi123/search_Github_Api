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
repos:any =''
showpr =true; 
allrepos =true
username:string;
show =false

//inject hhtpserive
  constructor(private httpservice:HttpServiceService,
    private router:Router) { }

  ngOnInit(): void {
    //add getprofile method for it to get loade when the app loads
    this.getProfile();
    this.  getUserRepo()
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
  // navigateRepos(){
    
  //   this.router.navigate(['/allRepos'])
  // }
  // navigateRepos2(){
  //   this.router.navigate(['/profile'])
  // }
 
  show1(){
    this.showpr= true;
    this.allrepos =false
  }

  show2(){
    this.showpr= false
    this.allrepos =true



  }
  

  

  getUserRepo(){
    this.httpservice.getRepos().then((repo)=>{
      
      console.log(repo);
      
      
      this.repos =repo
      

    })
  }


  // find user

  findUser(){
    this.httpservice.upadateprofile(this.username);
        this.getProfile()
        this.getUserRepo()


  }

}
