import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { MovieService } from '../../services/movie.service';
import { UserService } from '../../services/user.service';
import {ArraySortPipe} from '../../pipes/ArraySortPipe';
import { DatePipe } from "@angular/common";
import "rxjs/add/operator/takeWhile";
import { OnDestroy } from "@angular/core";


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  
})
export class FavoritesComponent implements OnInit, OnDestroy {

  
  dbList: Array<any> =[];
  private alive: boolean = true;

  constructor(private authService:AuthService,
              private movieService: MovieService,
              private userService:UserService) { }


  ngOnDestroy() {
  //this.subscription.unsubscribe();
  this.alive = false;
  }
  ngOnInit() {
    this.movieService.dbList.takeWhile(() => this.alive).subscribe(movies => this.dbList = movies);
    this.movieService.getFavorites();
  }

  deleteMovieFromDb(id){
    console.log('Id to delete: ' + id);
    if(confirm("Realy want to delete from db?")){
    this.movieService.deleteMovieFromDb(id).takeWhile(() => this.alive).subscribe(data => {
      this.movieService.getFavorites();
      if(data){
        console.log('Movie deleted from DB successfuly for user: ' + data.name);
        
      } else {
        console.log('Movie not deleted from DB: error' )
      }
    });
    this.movieService.getFavorites();
    }
  } 

  updateMovie(movie ){
    if(movie.watched){
      movie.watched = false
    }
    else{
      movie.watched=true;
    }
    console.log('movie gesehene' +movie.watched)
    this.movieService.updateMovie(movie).takeWhile(() => this.alive).subscribe(data => {
      if(data){
        console.log('Movie geupdatet: ' + data.name);
        
      } else {
        console.log('Movie update: error' )
      }
    });
    

  }
  

}
