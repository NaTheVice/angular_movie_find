import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { OnDestroy } from "@angular/core";
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  username: String;
  password: String;
  private subscription: ISubscription;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnDestroy() {
    if(this.subscription)
  this.subscription.unsubscribe()
 
  }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.subscription = this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.authService.setUserSession(true);
        if(data.user.username == 'root'){
          console.log("navigate to dashboard while root")
          this.router.navigate(['dashboard']);
        }
        if(data.user.username != 'root'){
          console.log("navigate to profile while not root")
          this.router.navigate(['profile']);
        }
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'login-error',
          timeout: 3000});
        this.router.navigate(['login']);
      }
    });
  }

}
