import { Component, ElementRef, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {genres} from './genresModel';
import { MovieService } from '../../services/movie.service';
import { UserService } from '../../services/user.service';
import { OnDestroy } from "@angular/core";
import { ISubscription } from "rxjs/Subscription";
import "rxjs/add/operator/takeWhile";
import {AuthService} from '../../services/auth.service';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';


export let bestRated = [];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit,OnDestroy {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  public searchstring :string = "";

  private alive: boolean = true;
  private subscription: ISubscription;

  firstChar: string;
  movies = [];
  moviesNotWatched = [];
  user;
  movieCount: number = 0;
  userGenres = genres;
  genrename: string;
  genrecount : number = 0;
  genreAllCounts: number = 0;
  genrepercent;
  watched: number = 0;
  watchedpercent: string;
  ratingpercent: string;
  

  

  constructor(
              private router:Router,
              private flashMessage:FlashMessagesService,
              private movieService: MovieService,
              private userService: UserService,
              private authService: AuthService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) { 

                if(!this.user){
                  this.authService.getProfile().subscribe(profile => {
                    this.firstChar = profile.user.name.charAt(0).toUpperCase();
                    this.user = profile.user;
                  });
                }
                else{
                  this.firstChar = this.user.name.charAt(0).toUpperCase();
                }
              
            }

  ngOnDestroy() {
  this.subscription.unsubscribe();
  this.alive = false;
  }

  ngOnInit() {
    this.subscription = this.movieService.dbList.subscribe(movies => {
      this.movies = movies;
      this.movieCount = this.movies.length;
      this.initializeMovieData();
    }); 
    this.setCurrentPosition();
  
    
  }

  

  initializeMovieData(){
    this.countWatched(this.movies);
    this.countGenre(this.movies);
    this.favoriteGenre();
    this.countRating(this.movies);
    this.setMoviesNotWatched(this.movies);
    this.setBestRated(this.movies);
    
  }

  ngAfterViewChecked(){
    this.progress();
  }

   makeEditable(username){
   
    var inputs = document.getElementsByClassName("user");
    for (var i = inputs.length, n = 0; n < i; n++) {
      if(inputs[n].hasAttribute("disabled")){
      
        inputs[n].removeAttribute("disabled") ;
        inputs[n].setAttribute("style", "border: 1px solid #ffffff ;") ;
      }
      else{
        inputs[n].setAttribute("style", "background-color:#2F3238;") ;
        inputs[n].setAttribute("disabled", "true") ;
        inputs[n].setAttribute("style", "border: none ;") ;
        
      }
    }
  }

  updateUser(user){
      let userToUpdate = user;
      var inputs = document.getElementsByClassName("username");
      
    for (var i = inputs.length, n = 0; n < i; n++) {
        if(n==0){
          let input1 = (inputs[n] as HTMLInputElement).value;
          userToUpdate.username = input1;
        }
        if(n==1){
          userToUpdate.email = (inputs[n] as HTMLInputElement).value;
        }
    
    }
    this.makeEditable(userToUpdate.username);
    
    if(confirm("Soll der User wirklich geupdated werden?")){
          this.user = userToUpdate;
          this.userService.updateUser(userToUpdate).takeWhile(() => this.alive).subscribe(data => {
            if(data){
              console.log('update user success')
              
            } else {
              console.log('update user error')
            }
          
        })
      }
        
    }


  setMoviesNotWatched(movies){
    for(let m of movies){
      if(!m.watched){
        this.moviesNotWatched.push(m);
      }
    }
  }

  countWatched(movies){
    this.watched = 0;
    for(let m of movies){
      if(m.watched){
        this.watched++;
      }
    }
    let v = 100/(movies.length/this.watched);
    this.watchedpercent = v.toFixed(2);
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
    bestRated = orderedArray;

  }

  countRating(movies){
    let counter: number = 0;
    let added: number = 0;
    for(let m of movies){
      added = added + m.vote_average;
      counter++;
    }
    this.ratingpercent = (added/counter).toFixed(2);
  }

  countGenre(movies){
    for(let i = 0; i <movies.length; i++){
      if(movies[i].genre_ids.length > 0){
        for(let j = 0; j < movies[i].genre_ids.length; j++){
          for(let k = 0; k < this.userGenres.length; k++){
            if(this.userGenres[k].id === movies[i].genre_ids[j]){
              this.userGenres[k].count ++;
            }
          }
        }
      }
    }
  }

  favoriteGenre(){
    for(let i = 0; i < this.userGenres.length; i++){
      this.genreAllCounts = this.genreAllCounts + this.userGenres[i].count;

      if(this.userGenres[i].count > this.genrecount){
        this.genrecount = this.userGenres[i].count;
        this.genrename = this.userGenres[i].name;
        var v = this.genreAllCounts/this.genrecount;
      }
    }
    var v = 100/(this.genreAllCounts/this.genrecount);
    this.genrepercent = v.toFixed(2);
  }

  isvisible(obj) {
    return obj.offsetWidth > 0 && obj.offsetHeight > 0;
  }

  progress(){
    
    let percent = document.getElementById("percent-bar");
    let genre = document.getElementById("genrepercent");
    let rating = document.getElementById("ratingpercent");
    let watched = document.getElementById("watchedpercent");
    if(percent){
        genre.setAttribute('style', 'width :' + this.genrepercent+'%');
        rating.setAttribute('style', 'width :' + Number.parseFloat(this.ratingpercent)*10+'%');
        watched.setAttribute('style', 'width :' + 100/(this.movieCount/this.watched) +'%');
    }
  }

  setMap2(){
    //this.setCurrentPosition();
    this.mapsAPILoader.load().then(() => {

       var map = new google.maps.Map(document.getElementById('map'),
       {
          center: new google.maps.LatLng(this.latitude, this.longitude),
          zoom: 12
        });
        
        var circle = new google.maps.Circle({
            center: new google.maps.LatLng(this.latitude, this.longitude),
            radius: 2500,
            fillColor: "goldenrod",
            fillOpacity: 0.5,
            strokeOpacity: 0.0,
            strokeWeight: 0,
            map: map
        });

          var request = {
          location:  new google.maps.LatLng(this.latitude, this.longitude),
          radius: '2500',
          types: ['movie_theater']
        };
        var service;
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

        function callback(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {


               var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        
          
          if (results.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          results.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
      
              
             }
        }
        
    });

   

  }
  
  setCoordinates(){

    this.mapsAPILoader.load().then(() => {
      var geocoder =  new google.maps.Geocoder();
      geocoder.geocode( { 'address': this.searchstring}, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
            
             this.latitude = results[0].geometry.location.lat(); 
             this.longitude=  results[0].geometry.location.lng(); 
             this.setMap2();
             
            } else {
              alert("Something got wrong " + status);
            }
      });
    })
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
        this.setMap2();
      });
    }
    
  }

}
