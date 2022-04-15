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
users:User[];


//inject hhtpserive
  constructor(private httpservice:HttpServiceService) { }

  ngOnInit(): void {
  }

}
