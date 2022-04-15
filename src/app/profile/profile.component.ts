import { Component, OnInit } from '@angular/core';
import{HttpServiceService} from '../http-service.service'
import{User} from '../user';
import{Repo} from '../repo'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
users:any=""


//inject hhtpserive
  constructor(private httpservice:HttpServiceService) { }

  ngOnInit(): void {
    //add getprofile method for it to get loade when the app loads
    this.getProfile()
  }

// method that gets datafrom the service
  getProfile(){

    this.httpservice.getUser().then((data:any)=>{
      console.log(data);
      this.users =data}
      
    )

  }

}
