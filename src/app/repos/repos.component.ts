import { Component, OnInit } from '@angular/core';
import{HttpServiceService} from '../http-service.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:any =""
   i:number =0;
   

  constructor(private httpservice:HttpServiceService) { 
   
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

