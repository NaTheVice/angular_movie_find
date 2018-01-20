import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router){

  }

  canActivate(){
    console.log('auth Guard')
    var user = localStorage.getItem('user');
    var newUser = JSON.parse(user);
    if(this.authService.loggedIn() && newUser.username =='root'){
      console.log(newUser.username)
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
