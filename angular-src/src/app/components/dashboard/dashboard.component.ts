import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {genres} from './genresModel';
import {BrowserModule} from '@angular/platform-browser';
import {ModalService} from '../../services/modal.service';
import { OnDestroy } from "@angular/core";
import { ISubscription } from "rxjs/Subscription";
import "rxjs/add/operator/takeWhile";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  currentUser=null;
  userList=[];
  allAdded;
  allUserMovies=[];
  allUserGenres=genres;
  moviesByGenre=[];
  selectedGenre=null;
  bestRated=[];
  genresReady = false;
  selectedMovie =null;
  ratesReady = false;
  top10Ready = false;
  top10Genres;
  single: any[];
  multi: any[];
  added=false;

  view: any[] = [700, 600];
  view2: any[] = [1100, 300];
  view3: any[] = [400, 490];

  // options
  showLegend = true;
  

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#F44336', '#3F51B5', '#8BC34A', '#2196F3', '#009688', '#FF5722', '#CDDC39', '#00BCD4', '#FFC107', '#795548', '#607D8B','#F43836', '#3A5125', '#85F34A', '#2496A3']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
 
  private alive: boolean = true;

  constructor(private authService:AuthService,
              private router:Router,
              private flashMessage:FlashMessagesService,
              private userService:UserService,
              private modalService: ModalService ) {
                
                  this.setUserList();
                  
                  //Object.assign(this, {single, multi})
                  //this.single=this.allUserGenres;
              }

  ngOnDestroy() {
  
  this.alive = false;
  }

  ngOnInit() {
    console.log('profile onInit')
    this.authService.getProfile().takeWhile(() => this.alive).subscribe(profile => {
      this.currentUser = profile.user;
      this.flashMessage.show('Welcome Root', {
          cssClass: 'login-root',
          timeout: 2000});
    },
    err => {
      console.log(err);
      return false;
    });

  }

   setUserList(){
    this.userService.getUserList().takeWhile(() => this.alive).subscribe(userList => {
      this.userList = userList;
      this.setAllUserMovies();
      //this.setAllAdded();
    },
    err => {
      console.log(err);
      return false;
    });
 
  }

  setAllAdded(){
    this.allAdded= this.userList
    for(let i = 0; i <this.allAdded.length; i++){
      this.allAdded[i].series = this.allAdded[i].movies
      this.allAdded[i].name = this.allAdded[i].username
      console.log(this.allAdded[i].series.length)
    }
    for(let i = 0; i <this.allAdded.length; i++){
        for(let j = 0; j < this.allAdded[i].series.length; j++){
          this.allAdded[i].series[j].value=this.allAdded[i].series[j].added_at
        }
    }
    this.added =true;
    }
  

  setAllUserMovies(){
    let newArray = this.userList[0].movies;
    for(var i=1; i< this.userList.length; i++){
      if(this.userList[i].movies.length >0){
        newArray.concat(this.userList[i].movies)
      }
    }
    this.allUserMovies = newArray;
    this.setBestRated(this.allUserMovies);
    this.setAllUserGenres();
  }

  setBestRated(movies){
    let orderedArray = new Array<any>(movies.length);
    let moviescopy = movies;

    orderedArray = moviescopy.sort((n1, n2) => {
      if(n1.vote_average > n2.vote_average){
        return -1;
      }
      if(n1.vote_average < n2.vote_average){
        return 1;
      }

      return 0;
    });
    this.bestRated = orderedArray;
    this.makeChartFormat(this.bestRated);


  }

   makeChartFormat(movies){
    
    for(var i=0; i<movies.length; i++){
      movies[i].name = movies[i].title;
      movies[i].value = movies[i].vote_average
    }
    this.bestRated = movies;
    this.ratesReady=true;
  }

   setAllUserGenres(){
  
    for(let i = 0; i <this.allUserMovies.length; i++){
      if(this.allUserMovies[i].genre_ids.length > 0){
        for(let j = 0; j < this.allUserMovies[i].genre_ids.length; j++){
       
          for(let k = 0; k < this.allUserGenres.length; k++){
              
            if(this.allUserGenres[k].id === this.allUserMovies[i].genre_ids[j]){
              this.allUserGenres[k].value ++;
            }
          }
        }
      }

    }
    this.setTop10Genres();
    this.genresReady = true;
  }

 setTop10Genres(){
    let orderedArray = new Array<any>(this.allUserGenres.length);
    orderedArray = this.allUserGenres.sort((n1, n2) => {
      if(n1.value > n2.value){
        return -1;
      }
      if(n1.value < n2.value){
        return 1;
      }

      return 0;
    });

    this.top10Genres = orderedArray.slice(0,6);
    this.top10Ready=true;
  }


setMoviesByGenre(genre){
  this.moviesByGenre.length = 0;
    for(let i = 0; i <this.allUserMovies.length; i++){
      if(this.allUserMovies[i].genre_ids.length > 0){
        for(let j = 0; j < this.allUserMovies[i].genre_ids.length; j++){
          if(genre != ""){
                  if(genre === this.allUserMovies[i].genre_ids[j]){
                  this.moviesByGenre.push(this.allUserMovies[i])
                  }
               }
        }
      }

    }
}


  

 onSelect(event) {
   
    if(event.name){
      var x:any  = this.allUserGenres.filter(x => x.name=== event.name)
      this.selectedGenre=event.name;
    }
    else{
    var x:any  = this.allUserGenres.filter(x => x.name=== event)
    this.selectedGenre=event;
    }
    this.setMoviesByGenre(x[0].id)

  }

  onSelect2(event) {
    var x:any  = this.allUserMovies.filter(x => x.title=== event.name)
    this.movieClicked('custom-modal-2', x[0]);
  }


  makeEditable(username){
   
    var inputs = document.getElementsByClassName(username);
    for (var i = inputs.length, n = 0; n < i; n++) {
      if(inputs[n].hasAttribute("disabled")){
        inputs[n].setAttribute("style", "background-color:#ffffff;") ;
        inputs[n].removeAttribute("disabled") ;
      }
      else{
        inputs[n].setAttribute("style", "background-color:#2F3238;") ;
        inputs[n].setAttribute("disabled", "true") ;
      }
    }
  }

   movieClicked(id: string, movie){
    this.selectMovie(movie);
    this.openModal(id);
  }

   openModal(id: string){
        this.modalService.open(id);
  }

   closeModal(id: string){
        this.modalService.close(id);
  }

   selectMovie(movie){
    this.selectedMovie = movie;
  }
  
  deleteUser(user){
    if(confirm("Soll der User wirklich geupdated werden?")){
         
          this.userService.deleteUser(user).takeWhile(() => this.alive).subscribe(data => {
            if(data){
              console.log('user deleted')
              this.setUserList();
            } else {
              console.log('delete user error')
            }
          
        })
      }

  }

    updateUser(user){
      let userToUpdate = user;
      var inputs = document.getElementsByClassName(user.username);
      
    for (var i = inputs.length, n = 0; n < i; n++) {
        if(n==0){
          let input1 = (inputs[n] as HTMLInputElement).value;
          userToUpdate.name = input1;
        }
        if(n==1){
          userToUpdate.username = (inputs[n] as HTMLInputElement).value;
        }
        if(n==2){
          userToUpdate.email= (inputs[n] as HTMLInputElement).value;
        }
    }
    this.makeEditable(userToUpdate.username);
    
    if(confirm("Soll der User wirklich geupdated werden?")){
         
          this.userService.updateUser(userToUpdate).takeWhile(() => this.alive).subscribe(data => {
            if(data){
             
              console.log('update user ok')
            } else {
              console.log('update user error')
            }
          
        })
      }
        
    }
}
  


