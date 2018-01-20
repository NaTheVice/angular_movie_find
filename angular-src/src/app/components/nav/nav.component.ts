import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {TmdbSearch} from '../../services/tmdbSearch';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

private scrollExecuted: boolean = false;
searchstringnav='';
loggedIn: boolean;

  constructor(
    private tmdbSearch: TmdbSearch, 
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private movieService: MovieService,
    private route:ActivatedRoute) { 
      
    }

    

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
  }

  ngAfterViewChecked() {
            if (!this.scrollExecuted) {
              let routeFragmentSubscription: Subscription;
              routeFragmentSubscription = this.route.fragment.subscribe(fragment => {
                if (fragment) {
                  let element = document.getElementById(fragment);
                  if (element) {
                    element.scrollIntoView();
                    this.scrollExecuted = true;
                    // Free resources
                    setTimeout(
                      () => {
                        console.log('routeFragmentSubscription unsubscribe');
                        routeFragmentSubscription.unsubscribe();
                      }, 0);
                  }
                }
              });
            }
  }

    gotoHashtag(fragment: string) {
            const element = document.querySelector("#" + fragment);
            if (element) element.scrollIntoView();
        }

   onLogoutClick(){
    this.authService.logout();
    //this.router.navigate(['/']);
    this.flashMessage.show('You are logged out', {
      cssClass:'login-root',
      timeout: 2000
    });
    this.loggedIn = this.authService.loggedIn();
    this.router.navigate(['/']);

    return false;
  }


   getData(){
    this.movieService.getData();
  }


}


  


