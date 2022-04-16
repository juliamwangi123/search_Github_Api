import { Injectable } from '@angular/core';
import{environment} from '../environments/environment'
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

username= "juliamwangi123";
  constructor(private http:HttpClient) {    console.log("service is working");
}


  // get user profile
  getUser():any{
    
    const promise = new Promise((resolve, reject)=>{
      resolve(this.http.get(`https://api.github.com/users/${this.username}?client_id${environment.clientID}&client_id${environment.clientSecret}`).toPromise())
    })
    return promise
  }

  //get user repos
  getRepos():any{
    const promise = new Promise((resolve, reject)=>{
      resolve(this.http.get(`https://api.github.com/users/${this.username}/repos`).toPromise())

    })
    return promise
  }


}
