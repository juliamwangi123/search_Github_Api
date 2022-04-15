import { Component, OnInit } from '@angular/core';
import{HttpServiceService} from '../http-service.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:any[]

  constructor() { }

  ngOnInit(): void {
  }

}
