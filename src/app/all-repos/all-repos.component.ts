import { Component, OnInit } from '@angular/core';
import{HttpServiceService} from '../http-service.service'

@Component({
  selector: 'app-all-repos',
  templateUrl: './all-repos.component.html',
  styleUrls: ['./all-repos.component.css']
})
export class AllReposComponent implements OnInit {

  repos:any = ""

  constructor(private httpservice:HttpServiceService) { }

  ngOnInit(): void {
    this.getAllRepos()
  }

  getAllRepos(){
    this.httpservice.getRepos().then((data)=>{
      console.log('heyyyy');
      
      this.repos=data

    })
  }

}
