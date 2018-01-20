import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TmdbSearch {
    constructor(private _http: Http) { }

    getData(searchtext){
            

            return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=a650bc23f071e894a70bacf516a840a3&query=' + searchtext)
            .map(res => res.json())

            
    }

    getNewestMovies(page){
        var heute = new Date().toISOString().slice(0,10);
        
        var monatVorher = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1, 
        new Date().getDate()
        );

        var vorher = new Date(monatVorher).toISOString().slice(0,10);
        
        return this._http.get(' https://api.themoviedb.org/3/discover/movie?api_key=a650bc23f071e894a70bacf516a840a3&primary_release_date.gte='+vorher+'&primary_release_date.lte='+heute+'&sort_by=popularity.desc&page='+page)
            .map(res => res.json())
    }

    getMoreData(searchtext,page){
                
            return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=a650bc23f071e894a70bacf516a840a3&query=' + searchtext+'&page='+page)
                .map(res => res.json())
    }

    getPlot(title){

        if(title===undefined){
                return "";
        }
        if(title!==undefined){
        return fetch('http://www.omdbapi.com/?t='+title+'&plot=full')
            .then((response) => response.json())
        }
    }

    getDetail(id){
                
            return fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=a650bc23f071e894a70bacf516a840a3')
                .then((response) => response.json())
    }
    
}

