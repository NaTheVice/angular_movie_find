import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DoughnutChartComponent } from './components/profile/doughnutChart';
import { LineChartComponent } from './components/profile/line-chart';
import { NavComponent } from './components/nav/nav.component';
import { TmdbSearch } from './services/tmdbSearch';
import { SliderComponent } from './components/slider/slider.component';
import { SearchComponent } from './components/search/search.component'

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';

import { PagerService } from './services/pager.service';
import { ModalComponent } from './components/modal/modal.component';
import {ModalService} from './services/modal.service';
import { FavoritesComponent } from './components/favorites/favorites.component';
import {MovieService} from './services/movie.service';
import {UserService} from './services/user.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ChartsModule} from 'ng2-charts';
import { AgmCoreModule } from "@agm/core";
import {ArraySortPipe} from './pipes/ArraySortPipe'


const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'searchpage', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    
    NavComponent,
    SliderComponent,
    SearchComponent,
    ModalComponent,
    FavoritesComponent,
    DoughnutChartComponent,
    LineChartComponent,
    ArraySortPipe
   
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDosofHw7LvkRsGvheOTwTXyD4zHY0wJC8",
      libraries: ["places"]
    }),
    BrowserAnimationsModule, 
    NgxChartsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ChartsModule,
    
  ],
  providers: [ValidateService, AuthService, AuthGuard, TmdbSearch, PagerService, ModalService, MovieService,UserService ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
