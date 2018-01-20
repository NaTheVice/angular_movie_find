import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Subject,  } from 'rxjs/Subject';
import { BehaviorSubject,  } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private http:Http) {}


  updateUser(user){
    console.log('update user in userservice')
    let headers = new Headers();
    const token = localStorage.getItem('id_token');
    headers.append('Authorization', token);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/userupdate');
    return this.http.post(ep,user, {headers: headers})
      .map(res => res.json());
      
  }

  deleteUser(user){
    console.log('delete user in userservice')
    let headers = new Headers();
    const token = localStorage.getItem('id_token');
    headers.append('Authorization', token);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/userdelete');
    return this.http.post(ep,user, {headers: headers})
      .map(res => res.json());
  }

  getUserList(){
    console.log('get userlist')
    let headers = new Headers();
    const token = localStorage.getItem('id_token');
    headers.append('Authorization', token);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/userList');
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
      
  }

  
    prepEndpoint(ep){
      return 'http://localhost:8080/'+ep;
    }
  

}
