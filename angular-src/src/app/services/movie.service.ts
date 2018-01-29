import { Injectable, OnDestroy } from '@angular/core';
import {TmdbSearch} from './tmdbSearch';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import { PagerService } from './pager.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject,  } from 'rxjs/BehaviorSubject';
import {Http, Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import { ISubscription } from "rxjs/Subscription";
import "rxjs/add/operator/takeWhile";



@Injectable()
export class MovieService implements OnDestroy {

    searchstring = '';
    newsShow;
    news;
    movies;
    moviesCopy=[];
    allMovies = [];
    favorites = [];
    totalPages = [];
    pager: any = {};
    pagedItems: any[];
    dbList: Subject<Array<any>> 
    genreMovies =[];
    private alive: boolean = true;
   
   

  constructor(private tmdbSearch: TmdbSearch, 
              private AuthService: AuthService, 
              private HttpService: Http,
              private pagerService: PagerService,
              private router:Router) 
              {
                
                this.dbList = new BehaviorSubject<Array<any>>([]);
                this.newsShow = new Subject<boolean>();
                this.news = this.newsShow.asObservable();
             
              }

ngOnDestroy() {
  this.alive = false;
}

ngOnInit(){
    if(this.AuthService.loggedIn()){
    this.getFavorites();
    }
    this.moviesCopy = this.movies;
}

getData(){
    console.log("get data in movieservice call");
    this.totalPages.length =0;
    this.tmdbSearch.getData(this.searchstring).takeWhile(() => this.alive).subscribe(
                (data)=> {
                    this.movies = data.results;
                    this.moviesCopy = data.results;
                    this.totalPages.length = data.total_pages;
                    this.newsShow = false; 
                    this.setPage(1);
                    //this.router.navigate(['home']);
                })
              
  }

  getMoreData(page){
    this.movies.length = 0;
    if (!this.newsShow)
    this.tmdbSearch.getMoreData(this.searchstring,page).takeWhile(() => this.alive).subscribe(
                (data)=> {
                    this.movies = data.results;
                    this.moviesCopy = data.results;
                 })
    else{
    this.tmdbSearch.getNewestMovies(page).takeWhile(() => this.alive).subscribe(
                (data)=> {
                    this.movies = data.results;
                    this.moviesCopy = data.results;
                 })
    }

  }

  getAllMovies(){
    for(var i = 0; i<=this.totalPages.length; i++){
       this.tmdbSearch.getMoreData(this.searchstring,i).takeWhile(() => this.alive).subscribe(
                (data)=> {
                    this.allMovies.push(data.results);
                 })
    }
  }

  getNewestMovies(){

    this.totalPages.length =0;
    this.tmdbSearch.getNewestMovies(1).takeWhile(() => this.alive).subscribe(
                (data)=> {
                    this.newsShow= true;
                    this.movies = data.results;
                    this.moviesCopy = data.results;
                    this.totalPages.length = data.total_pages;
                    this.setPage(1);
                 })
  }

  sendMovieToDb(movie){
    var movie_exist = this.favorites.some(item => item.id == movie.id);
    if(movie_exist){
      confirm("allready in your database");
    }
    else{
    movie.watched = false;
    movie.addedAt = new Date();
    this.addMovieToDb(movie).takeWhile(() => this.alive).subscribe(data => {
      this.getFavorites();
      if(data){
        console.log('Movie added to DB successfuly for user: ' + data.name);
        
      } else {
        console.log('Movie not added to DB: error' )
      }
    });
    this.getFavorites();
  }
  }

  addMovieToDb(movie){
  
    let headers = new Headers();
    const token = localStorage.getItem('id_token');
    headers.append('Authorization', token);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/movieadd');
    return this.HttpService.post(ep,movie,{headers: headers})
      .map(res => res.json());
    
  }

  deleteMovieFromDb(id){
    let headers = new Headers();
    const token = localStorage.getItem('id_token');
    headers.append('Authorization', token);
    headers.append('Content-Type','text/html');
    let ep = this.prepEndpoint('users/moviedelete/'+id);
    return this.HttpService.post(ep, id, {headers: headers})
      .map(res => res.json());

  }

 

  updateMovie(movie){
    console.log('update movie in userservice call')
    let headers = new Headers();
    const token = localStorage.getItem('id_token');
    headers.append('Authorization', token);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/movieupdate');
    return this.HttpService.post(ep,movie, {headers: headers})
      .map(res => res.json());
      
  }

  getFavorites(){
    
    console.log('get userFavorites')


      let headers = new Headers();
      const token = localStorage.getItem('id_token');
      headers.append('Authorization', token);
      headers.append('Content-Type','application/json');
      let ep = this.prepEndpoint('users/userFavorites');
      this.HttpService.get(ep,{headers: headers})
      .map(res => {return res.json()})
      .takeWhile(() => this.alive)
      .subscribe(movies => {this.dbList.next(movies); this.favorites = movies},
      (err => console.error("load movieslist error"))
      );
    
   
  }

  setGenre(genre?){
  
    if(genre === 'all'){
      this.movies=this.moviesCopy;
    }
    else{
      this.genreMovies.length = 0;
      this.movies=this.moviesCopy;
      for(let i = 0; i <this.movies.length; i++){

        if(this.movies[i].genre_ids.length > 0){
        
          for(let j = 0; j < this.movies[i].genre_ids.length; j++){
            if(genre != ""){
                    if(genre == this.movies[i].genre_ids[j]){
                    this.genreMovies.push(this.movies[i])
                    }
                }  
          }
        }

      }
      this.movies = this.genreMovies;
    }
  }

  setPage(page: number) {
        this.getMoreData(page);
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        console.log("current page: " +page)
        // get pager object from service
        this.pager = this.pagerService.getPager(this.totalPages.length, page);

        // get current page of items
        this.pagedItems = this.totalPages.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

   prepEndpoint(ep){
      return 'https://movie-master.herokuapp.com/'+ep;
    }


}
