import { Component, OnInit } from '@angular/core';
import {TmdbSearch} from '../../services/tmdbSearch';
import {AuthService} from '../../services/auth.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from 'underscore';
import {ModalService} from '../../services/modal.service';
import { PagerService } from '../../services/pager.service';
import { MovieService } from '../../services/movie.service';
import { UserService } from '../../services/user.service';
import {ArraySortPipe} from '../../pipes/ArraySortPipe';
import { OnDestroy } from "@angular/core";
import { ISubscription } from "rxjs/Subscription";
import "rxjs/add/operator/takeWhile";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
  
})
export class SearchComponent implements OnInit, OnDestroy {

 
  //jsonex={"vote_count":5780,"id":11,"video":false,"vote_average":8,"title":"Star Wars","popularity":8.923744,"poster_path":"\/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg","original_language":"en","original_title":"Star Wars","genre_ids":[12,28,878],"backdrop_path":"\/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg","adult":false,"overview":"Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.","release_date":"1977-05-25"};
  newsShow;
  favorites = [];
  selectedMovie =null;
  private subscription: ISubscription;
  private alive: boolean = true;

  constructor(private tmdbSearch: TmdbSearch, 
              private AuthService: AuthService, 
              private HttpService: Http,
              private pagerService: PagerService,
              private modalService: ModalService,
              private movieService: MovieService,
              private userService: UserService) 
              {

                this.movieService.news.takeWhile(() => this.alive).subscribe(news => this.newsShow);
   }

  ngOnDestroy() {
  //this.subscription.unsubscribe();
      this.alive = false;

  }

  ngOnInit() {
    if(!this.movieService.searchstring)
    this.getNewestMovies(); 
  }

  handleFilterClick(genre){
    
    this.movieService.setGenre(genre);

  }

  movieClicked(id: string, movie){
    this.selectMovie(movie);
    this.openModal(id);
  }

  selectMovie(movie){
    this.selectedMovie = movie;
  }

  addMovieToFavorites(movie){ 
    this.favorites.push(movie);
  }

  addMovieToDB(movie){ 
    this.favorites.push(movie);
  }

  getNewestMovies(){
    this.movieService.getNewestMovies();
  }

  getMoreData(page){
    this.movieService.getMoreData(page);
  }

  sendMovieToDb(movie){
    movie.watched = false;
    movie.addedAt = new Date();
    console.log('setMovie with json: '+ movie)
    this.movieService.addMovieToDb(movie).takeWhile(() => this.alive).subscribe(data => {
      this.movieService.getFavorites();
      if(data){
        console.log('Movie added to DB successfuly for user: ' + data.name);
        
      } else {
        console.log('Movie not added to DB: error' )
      }
    });
    this.movieService.getFavorites();

  }

  saveFavoritesAsText(){
    var textFile = null;
    window.URL.revokeObjectURL(textFile);
    var txt = [];
    for (var i = 0; i < this.favorites.length; i++) {
    txt.push(this.favorites[i].title) 
    }
    var data = new Blob(txt, {type: 'text/plain'});
    textFile = window.URL.createObjectURL(data);
    document.getElementById("downloadlink").className="";
    //console.log(doc.getAttribute('class'));
    var link = <HTMLElement>document.getElementById('downloadlink');
    link.setAttribute('href',textFile);

  }

  openModal(id: string){
        this.modalService.open(id);
  }

  closeModal(id: string){
        this.modalService.close(id);
  }


  

}//clas END



   
/*
  getImageAsBlob(pic_url){

    return this.HttpService.get(pic_url).map(function(response){ 
                     var arrayBufferView = new Uint8Array(response);
                     var urlCreator = window.URL;
                     var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
                     var imageUrl = urlCreator.createObjectURL( blob );
                     var img = document.querySelector( "#photo" );
                     img.setAttribute('src',imageUrl);
                    
            }))
  }

   getAllMovies(){
    for(var i = 0; i<=this.totalPages.length; i++){
       this.tmdbSearch.getMoreData(this.searchstring,i).subscribe(
          (data)=> {
            //this.allMovies.push(data.results);
            //console.log('allMovies: '+ this.allMovies.length)
          })
    }
  }

*/