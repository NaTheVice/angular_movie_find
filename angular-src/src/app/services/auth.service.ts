import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev:boolean;
  isLoggedIn: Observable<boolean>;
  private userSession: Observer<boolean>;

  constructor(private http:Http) {
    this.isDev = false; // Change to false before deployment
    this.isLoggedIn = new Observable<boolean>(value => this.userSession = value).share();
    
  }

  ngOninit(){
     this.setUserSession(false);
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

  storeUserData(token, user):void {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(): void{
    const token = localStorage.getItem('id_token');
    console.log('load token')
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
     
  }

  logout(): void{
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

  setUserSession(value:boolean){
    
    this.userSession.next(value);
  }

  
}
