import { Component, OnInit } from '@angular/core';
import{HttpServiceService} from '../http-service.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:any =""
   

  constructor(private httpservice:HttpServiceService) { 
    console.log("hi");

   
  }

  ngOnInit(): void {
    this.getUserRepo()
    
  }


  //get repos from the api response

  getUserRepo(){
    this.httpservice.getRepos().then((repo)=>{
      
      console.log(repo);
      
      
      this.repos =repo
      

    })
  }

// loop 


}

