import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {tokenNotExpired} from 'angular2-jwt';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Observer } from 'rxjs/Observer';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev:boolean;
  isLoggedIn = new BehaviorSubject<boolean>(false);
  userSession = this.isLoggedIn.asObservable();
  //xx: Observable<boolean> = Observable.of(true);

  constructor(private http:Http) {
    this.isLoggedIn.next(this.loggedIn());
    this.isDev = false; // Change to false before deployment
  }

  ngOninit(){
    
  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/register');
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/authenticate');
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    console.log('get profile')
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/profile');
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    console.log('load token')
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    this.setUserSession(false);
  }

  prepEndpoint(ep){
    if(this.isDev){
      return ep;
    } else {
      return 'https://movie-master.herokuapp.com/'+ep;
    }
  }

  setUserSession(value: boolean){
    this.isLoggedIn.next(value);
  }

  
}
