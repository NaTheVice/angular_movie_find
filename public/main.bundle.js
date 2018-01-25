webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <router-outlet></router-outlet>\n  \n  \n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_doughnutChart__ = __webpack_require__("../../../../../src/app/components/profile/doughnutChart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_line_chart__ = __webpack_require__("../../../../../src/app/components/profile/line-chart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_tmdbSearch__ = __webpack_require__("../../../../../src/app/services/tmdbSearch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_slider_slider_component__ = __webpack_require__("../../../../../src/app/components/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_favorites_favorites_component__ = __webpack_require__("../../../../../src/app/components/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_ArraySortPipe__ = __webpack_require__("../../../../../src/app/pipes/ArraySortPipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'searchpage', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_slider_slider_component__["a" /* SliderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_doughnutChart__["a" /* DoughnutChartComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_line_chart__["a" /* LineChartComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_ArraySortPipe__["a" /* ArraySortPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_30__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyDosofHw7LvkRsGvheOTwTXyD4zHY0wJC8",
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_28__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_29_ng2_charts__["ChartsModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_14__services_tmdbSearch__["a" /* TmdbSearch */], __WEBPACK_IMPORTED_MODULE_21__services_pager_service__["a" /* PagerService */], __WEBPACK_IMPORTED_MODULE_23__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_25__services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_26__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\n    text-align: left;\n    background-color: #2F3238\n}\n#icons i{\n    margin-right: 10px;\n}\n.dashboard{\n    border-style: none;\n}\n.login-root{\n    width: 150px;\n    height: 40px;\n    color:green;\n    font-size: 15px;\n\n\n}\n#genre-movies{\n    float:left;\n    text-align: left;\n    margin-bottom: -10px;\n    vertical-align: middle;\n}\n#genre-movies img{\n    width: 92px;\n    \n}\n#genre-movie-title{\n    color: goldenrod;\n    font-size: 14px;\n}\n.left{\n    text-align: left;\n}\n#left{\n    text-align: left;\n}\n#left .col-md-2 .col-md-3{\n    text-align: left;\n}\n#hr1{\n    position:absolute;\n    border-top: 1px solid #eee !important;\n}\n#title-mg{\n    font-size: 0.8em;\n}\n.col-xs-10 {\n    width: 12%;\n    float: left;\n}\n@media (min-width: 768px) {\n.col-sm-10 {\n        width: 12%;\n        float: left;\n    }\n}\n@media (min-width: 992px) {\n    .col-md-10 {\n        width: 12%;\n        float: left;\n    }\n}\n@media (min-width: 1200px) {\n    .col-lg-10 {\n        width: 10%;\n        float: left;\n    }\n}\n@media (max-width: 420px) {\n    .col-xs-6 {\n        width: 50%;\n       \n    }\n    .search-nav #filters>li>a {\n    display: none;\n   \n}\n}\n.coverlist2 img{\n    height: 114px;\n}\n#mg{\n    text-align: left;\n    margin-top: -60px;\n    margin-bottom: 25px;\n}\n#mg-inside{\n    text-align: center;\n    margin-left: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n <app-nav></app-nav>\n<div class=\"container\">\n  \n    <h2 class=\"page-header left\">Dashboard</h2>\n\n    <p class=\"left\"><b>All User</b></p>\n    <hr>\n    <div class=\"row\" id=\"left\">\n        <div class=\"col-md-3\">User ID</div>\n        <div class=\"col-md-1\">Name</div>\n        <div class=\"col-md-2\">Username</div>\n        <div class=\"col-md-3\">E-Mail</div>\n        <div class=\"col-md-1\">Movies</div>\n    </div>\n    <div class=\"row\" id=\"left\" *ngFor=\"let user of userList\">\n        <div class=\"col-md-3\" id=\"left\">{{user._id}}</div>\n        <div class=\"col-md-1\" id=\"left\"><input  id=\"left\" type=\"text\" [ngClass]=\"'dashboard' +' '+ user.username\" value={{user.name}} disabled=\"true\"></div>\n        <div class=\"col-md-2\" id=\"left\"><input  id=\"left\" type=\"text\" [ngClass]=\"'dashboard' +' '+ user.username\" value={{user.username}} disabled=\"true\"></div>\n        <div class=\"col-md-3\" id=\"left\"><input  id=\"left\" type=\"text\" [ngClass]=\"'dashboard' +' '+ user.username\" value={{user.email}} disabled=\"true\"></div>\n        <div class=\"col-md-1\" id=\"left\">{{user.movies.length}} </div>\n        <div class=\"col-md-2\" id=\"icons\">  \n            \n            <a (click)=\"deleteUser(user)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>\n            <a (click)=\"makeEditable(user.username)\"><i  class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n            <a (click)=\"updateUser(user)\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></a>\n        </div>\n       \n    </div>\n    <br>\n    \n    <div id=\"left\"><b>All Genres</b></div>\n   <hr>\n    <div *ngIf=genresReady class=\"col-md-12\" id=\"pie-chart-genre\">\n        <div class=\"col-md-8\">\n            <ngx-charts-pie-chart\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [results]=\"allUserGenres\"\n            [legend]=\"showLegend\"\n            [explodeSlices]=\"explodeSlices\"\n            [labels]=\"showLabels\"\n            [doughnut]=\"doughnut\"\n            [gradient]=\"gradient\"\n            (select)=\"onSelect($event)\">\n            </ngx-charts-pie-chart>\n        </div>\n        <div class=\"col-md-4\"><br><b>Top 6 Genres</b>\n           <ngx-charts-number-card\n                    *ngIf=\"top10Ready\"\n                    class=\"chart-container\"\n                    [view]=\"view3\"\n                    (legendLabelClick)=\"onLegendLabelClick($event)\"\n                    [scheme]=\"colorScheme\"\n                    cardColor=\"#232837\"\n                    emptyColor=\"#1e222e\"\n                    [results]=\"top10Genres\"\n                    (select)=\"onSelect($event)\">\n            </ngx-charts-number-card>\n        </div>\n        <div id=\"mg\" class=\"col-md-12\"><br><p>Movies by <b>Genre: {{selectedGenre}}</b></p>    \n            <div  id=\"mg-inside\" *ngIf=\"moviesByGenre.length>0\">\n                    <div class=\"col-lg-10 col-md-3 col-sm-4 col-xs-6 \" *ngFor=\"let movie of moviesByGenre\" id=\"genre-movies\">\n                                <div id=\"image-genre-movies\" class='cover coverlist2'> \n                                    <img (click)=\"movieClicked('custom-modal-2', movie)\" class=\"img-rounded img-responsive center-block\" [src]=\"'https://image.tmdb.org/t/p/w92/' + movie.poster_path\" onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">       \n                                </div>\n                    </div>\n            </div>\n        </div>        \n    </div>\n    <br>\n    <br>\n    <br>\n    <div id=\"left\"><b>All Rates</b></div>\n   <hr>\n    <div *ngIf=ratesReady class=\"col-md-12\" id=\"pie-chart-rates\">\n                <ngx-charts-advanced-pie-chart\n                [view]=\"view2\"\n                [scheme]=\"colorScheme\"\n                [results]=\"bestRated\"\n                [gradient]=\"gradient\"\n                (select)=\"onSelect2($event)\">\n                </ngx-charts-advanced-pie-chart>\n    </div>\n    \n\n</div>   \n\n<!-- Modal -->\n<modal id=\"custom-modal-2\" >\n        <div class=\"modal\">\n            <div class=\"modal-body\">\n                <div  *ngIf=\"selectedMovie\" class=\"container centered\" id=\"detailView\">\n                    <div id='ersteSpalte' class='col-md-4'>\n                        <div class='details'>\n                        <h4>Story:</h4>\n                        <h6>Title: {{selectedMovie.overview}}</h6>  \n                        </div>\n                    </div>\n                    \n                    <div id='zweiteSpalte' class='col-md-4'>\n                        <img class='img-rounded img-responsive center-block' [src]=\"'https://image.tmdb.org/t/p/w300/' + selectedMovie.poster_path\" alt=\"movie.overview\" onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n                    </div>\n                    \n                    <div id='dritteSpalte' class='col-md-4'>\n                        <div class='details'>\n                            <br>\n                            <h4>Details:</h4>\n                            <h6>Title: {{selectedMovie.title}}</h6>\n                            <h6>Homepage: {{selectedMovie.homepage}}</h6>\n                            <div class=\"paginate paginate-dark wrapper\">\n                                <li >\n                                    <a (click)= \"closeModal('custom-modal-2')\">Back</a>\n                                </li>\n                             \n                            </div>\n                            <br />\n                            <br />\n                        </div>\n                    </div>\n                   \n                </div><!--container ende-->\n            \n            </div><!--modal body ende-->\n        </div>\n        <div class=\"modal-background\"></div>\n    </modal>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__genresModel__ = __webpack_require__("../../../../../src/app/components/dashboard/genresModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, flashMessage, userService, modalService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.userService = userService;
        this.modalService = modalService;
        this.currentUser = null;
        this.userList = [];
        this.allUserMovies = [];
        this.allUserGenres = __WEBPACK_IMPORTED_MODULE_5__genresModel__["a" /* genres */];
        this.moviesByGenre = [];
        this.selectedGenre = null;
        this.bestRated = [];
        this.genresReady = false;
        this.selectedMovie = null;
        this.ratesReady = false;
        this.top10Ready = false;
        this.added = false;
        this.view = [700, 600];
        this.view2 = [1100, 300];
        this.view3 = [400, 490];
        // options
        this.showLegend = true;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#F44336', '#3F51B5', '#8BC34A', '#2196F3', '#009688', '#FF5722', '#CDDC39', '#00BCD4', '#FFC107', '#795548', '#607D8B', '#F43836', '#3A5125', '#85F34A', '#2496A3']
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.alive = true;
        this.setUserList();
        //Object.assign(this, {single, multi})
        //this.single=this.allUserGenres;
    }
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('profile onInit');
        this.authService.getProfile().takeWhile(function () { return _this.alive; }).subscribe(function (profile) {
            _this.currentUser = profile.user;
            _this.flashMessage.show('Welcome Root', {
                cssClass: 'login-root',
                timeout: 2000
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.setUserList = function () {
        var _this = this;
        this.userService.getUserList().takeWhile(function () { return _this.alive; }).subscribe(function (userList) {
            _this.userList = userList;
            _this.setAllUserMovies();
            //this.setAllAdded();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.setAllAdded = function () {
        this.allAdded = this.userList;
        for (var i = 0; i < this.allAdded.length; i++) {
            this.allAdded[i].series = this.allAdded[i].movies;
            this.allAdded[i].name = this.allAdded[i].username;
            console.log(this.allAdded[i].series.length);
        }
        for (var i = 0; i < this.allAdded.length; i++) {
            for (var j = 0; j < this.allAdded[i].series.length; j++) {
                this.allAdded[i].series[j].value = this.allAdded[i].series[j].added_at;
            }
        }
        this.added = true;
    };
    DashboardComponent.prototype.setAllUserMovies = function () {
        var newArray = this.userList[0].movies;
        for (var i = 1; i < this.userList.length; i++) {
            if (this.userList[i].movies.length > 0) {
                newArray.concat(this.userList[i].movies);
            }
        }
        this.allUserMovies = newArray;
        this.setBestRated(this.allUserMovies);
        this.setAllUserGenres();
    };
    DashboardComponent.prototype.setBestRated = function (movies) {
        var orderedArray = new Array(movies.length);
        var moviescopy = movies;
        orderedArray = moviescopy.sort(function (n1, n2) {
            if (n1.vote_average > n2.vote_average) {
                return -1;
            }
            if (n1.vote_average < n2.vote_average) {
                return 1;
            }
            return 0;
        });
        this.bestRated = orderedArray;
        this.makeChartFormat(this.bestRated);
    };
    DashboardComponent.prototype.makeChartFormat = function (movies) {
        for (var i = 0; i < movies.length; i++) {
            movies[i].name = movies[i].title;
            movies[i].value = movies[i].vote_average;
        }
        this.bestRated = movies;
        this.ratesReady = true;
    };
    DashboardComponent.prototype.setAllUserGenres = function () {
        for (var i = 0; i < this.allUserMovies.length; i++) {
            if (this.allUserMovies[i].genre_ids.length > 0) {
                for (var j = 0; j < this.allUserMovies[i].genre_ids.length; j++) {
                    for (var k = 0; k < this.allUserGenres.length; k++) {
                        if (this.allUserGenres[k].id === this.allUserMovies[i].genre_ids[j]) {
                            this.allUserGenres[k].value++;
                        }
                    }
                }
            }
        }
        this.setTop10Genres();
        this.genresReady = true;
    };
    DashboardComponent.prototype.setTop10Genres = function () {
        var orderedArray = new Array(this.allUserGenres.length);
        orderedArray = this.allUserGenres.sort(function (n1, n2) {
            if (n1.value > n2.value) {
                return -1;
            }
            if (n1.value < n2.value) {
                return 1;
            }
            return 0;
        });
        this.top10Genres = orderedArray.slice(0, 6);
        this.top10Ready = true;
    };
    DashboardComponent.prototype.setMoviesByGenre = function (genre) {
        this.moviesByGenre.length = 0;
        for (var i = 0; i < this.allUserMovies.length; i++) {
            if (this.allUserMovies[i].genre_ids.length > 0) {
                for (var j = 0; j < this.allUserMovies[i].genre_ids.length; j++) {
                    if (genre != "") {
                        if (genre === this.allUserMovies[i].genre_ids[j]) {
                            this.moviesByGenre.push(this.allUserMovies[i]);
                        }
                    }
                }
            }
        }
    };
    DashboardComponent.prototype.onSelect = function (event) {
        if (event.name) {
            var x = this.allUserGenres.filter(function (x) { return x.name === event.name; });
            this.selectedGenre = event.name;
        }
        else {
            var x = this.allUserGenres.filter(function (x) { return x.name === event; });
            this.selectedGenre = event;
        }
        this.setMoviesByGenre(x[0].id);
    };
    DashboardComponent.prototype.onSelect2 = function (event) {
        var x = this.allUserMovies.filter(function (x) { return x.title === event.name; });
        this.movieClicked('custom-modal-2', x[0]);
    };
    DashboardComponent.prototype.makeEditable = function (username) {
        var inputs = document.getElementsByClassName(username);
        for (var i = inputs.length, n = 0; n < i; n++) {
            if (inputs[n].hasAttribute("disabled")) {
                inputs[n].setAttribute("style", "background-color:#ffffff;");
                inputs[n].removeAttribute("disabled");
            }
            else {
                inputs[n].setAttribute("style", "background-color:#2F3238;");
                inputs[n].setAttribute("disabled", "true");
            }
        }
    };
    DashboardComponent.prototype.movieClicked = function (id, movie) {
        this.selectMovie(movie);
        this.openModal(id);
    };
    DashboardComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    DashboardComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    DashboardComponent.prototype.selectMovie = function (movie) {
        this.selectedMovie = movie;
    };
    DashboardComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (confirm("Soll der User wirklich geupdated werden?")) {
            this.userService.deleteUser(user).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
                if (data) {
                    console.log('user deleted');
                    _this.setUserList();
                }
                else {
                    console.log('delete user error');
                }
            });
        }
    };
    DashboardComponent.prototype.updateUser = function (user) {
        var _this = this;
        var userToUpdate = user;
        var inputs = document.getElementsByClassName(user.username);
        for (var i = inputs.length, n = 0; n < i; n++) {
            if (n == 0) {
                var input1 = inputs[n].value;
                userToUpdate.name = input1;
            }
            if (n == 1) {
                userToUpdate.username = inputs[n].value;
            }
            if (n == 2) {
                userToUpdate.email = inputs[n].value;
            }
        }
        this.makeEditable(userToUpdate.username);
        if (confirm("Soll der User wirklich geupdated werden?")) {
            this.userService.updateUser(userToUpdate).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
                if (data) {
                    console.log('update user ok');
                }
                else {
                    console.log('update user error');
                }
            });
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__services_modal_service__["a" /* ModalService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/genresModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genres; });
var genres = [
    {
        "id": 28,
        "name": "Action",
        "value": 0
    },
    {
        "id": 12,
        "name": "Adventure",
        "value": 0
    },
    {
        "id": 16,
        "name": "Animation",
        "value": 0
    },
    {
        "id": 35,
        "name": "Comedy",
        "value": 0
    },
    {
        "id": 80,
        "name": "Crime",
        "value": 0
    },
    {
        "id": 99,
        "name": "Documentary",
        "value": 0
    },
    {
        "id": 18,
        "name": "Drama",
        "value": 0
    },
    {
        "id": 10751,
        "name": "Family",
        "value": 0
    },
    {
        "id": 14,
        "name": "Fantasy",
        "value": 0
    },
    {
        "id": 36,
        "name": "History",
        "value": 0
    },
    {
        "id": 27,
        "name": "Horror",
        "value": 0
    },
    {
        "id": 10402,
        "name": "Music",
        "value": 0
    },
    {
        "id": 9648,
        "name": "Mystery",
        "value": 0
    },
    {
        "id": 10749,
        "name": "Romance",
        "value": 0
    },
    {
        "id": 878,
        "name": "Science Fiction",
        "value": 0
    },
    {
        "id": 10770,
        "name": "TV Movie",
        "value": 0
    },
    {
        "id": 53,
        "name": "Thriller",
        "value": 0
    },
    {
        "id": 10752,
        "name": "War",
        "value": 0
    },
    {
        "id": 37,
        "name": "Western",
        "value": 0
    }
];


/***/ }),

/***/ "../../../../../src/app/components/favorites/favorites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#my-movies {\n    margin-bottom: 20px;\n    margin-top:30px;\n}\n\n.type-search{\n    list-style: none;\n}\n\n#movie-table{\n    text-align: left;\n}\n\n#table-headlines {\n    color: white;\n}\n\n.favpage{\n    padding-top: 80px;\n    background: #2F3238;\n\tpadding: 10px 0;\n}\n\n.not-watched{\n    color:red;\n    font-size: 11px;\n}\n\n.watched{\n    color:green;\n    font-size: 11px;\n}\n\n.col-md-3 b{\n    color: goldenrod;\n}\n\n#watched{\n   float:left;\n}\n\n#watched2{\n   float:left;\n   margin-left: 6px;\n   margin-top: -8px;\n}\n\n#lefty{\n    float: left;\n}\n\n#lefty2{\n    float: left;\n    margin-left:5px;\n}\n\n.cover2 img{\n    width: 92px;\n    filter: gray;\n    -webkit-filter: grayscale(0.8);\n    -webkit-box-shadow: 0px 2px 6px 2px rgba(0,0,0,0.75);\n            box-shadow: 0px 2px 6px 2px rgba(0,0,0,0.75);\n    margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"favpage\" id=\"favpage\">\n  <div class=\"container\">\n  <div class=\"row\" *ngIf=\"dbList.length>0\">\n                      <div class=\"col-md-2\">\n                      <li  class=\"type-search\">MY MOVIES</li>\n                      </div>\n      <div class=\"col-md-10\" id=\"movie-table\">\n          <div class=\"row\" id=\"table-headlines\">\n              <div class=\"col-md-3\">Title</div>\n              <div class=\"col-md-5\">Overview</div>\n              <div class=\"col-md-2\">Release Date</div>\n              <div class=\"col-md-2\">Poster</div>\n          </div>\n          <div id=\"my-movies\" class=\"row\" *ngFor=\"let movie of dbList | sort:'addedAt'\">\n              <div class=\"col-md-3\"><b>{{movie.title}}</b> <br><br>addet:<br>{{movie.addedAt | date:'medium' }}</div>\n              <div class=\"col-md-5\">{{movie.overview}}</div>\n              <div class=\"col-md-2\">{{movie.release_date}}</div> \n              <div class=\"col-md-2 cover2\" id=\"watched\" >\n                <img id=\"lefty\" class=\"img-rounded img-responsive\" [src]=\"'https://image.tmdb.org/t/p/w92/' + movie.poster_path\" onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n                <div id=\"watched2\" (click)=\"deleteMovieFromDb(movie.id)\">X</div>\n                \n                <div id=\"watched\"><input type=\"checkbox\" id=\"lefty\" [checked]= movie.watched (change)= updateMovie(movie) /><p id=\"lefty2\" class=\"not-watched\" *ngIf=\"!movie.watched, else other\">unwatched</p></div>\n                <ng-template #other><p id=\"lefty2\" class=\"watched\">watched</p></ng-template>\n              </div>\n          </div>\n      </div>\n  </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(authService, movieService, userService) {
        this.authService = authService;
        this.movieService = movieService;
        this.userService = userService;
        this.dbList = [];
        this.alive = true;
        this.login = false;
    }
    FavoritesComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.dbList.takeWhile(function () { return _this.alive; }).subscribe(function (movies) { return _this.dbList = movies; });
        this.movieService.getFavorites();
        //this.authService.isLoggedIn.subscribe(status => {this.login = status});
    };
    FavoritesComponent.prototype.deleteMovieFromDb = function (id) {
        var _this = this;
        console.log('Id to delete: ' + id);
        if (confirm("Realy want to delete from db?")) {
            this.movieService.deleteMovieFromDb(id).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
                _this.movieService.getFavorites();
                if (data) {
                    console.log('Movie deleted from DB successfuly for user: ' + data.name);
                }
                else {
                    console.log('Movie not deleted from DB: error');
                }
            });
            this.movieService.getFavorites();
        }
    };
    FavoritesComponent.prototype.updateMovie = function (movie) {
        var _this = this;
        if (movie.watched) {
            movie.watched = false;
        }
        else {
            movie.watched = true;
        }
        console.log('movie gesehene' + movie.watched);
        this.movieService.updateMovie(movie).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
            if (data) {
                console.log('Movie geupdatet: ' + data.name);
            }
            else {
                console.log('Movie update: error');
            }
        });
    };
    FavoritesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__("../../../../../src/app/components/favorites/favorites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/favorites/favorites.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-slider></app-slider>\n<app-nav></app-nav>\n<app-search></app-search>\n<app-favorites ></app-favorites>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class='container'>\n<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnDestroy = function () {
        //this.subscription.unsubscribe();
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.subscription = this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                //this.authService.setUserSession(true);
                if (data.user.username == 'root') {
                    _this.router.navigate(['dashboard']);
                }
                if (data.user.username != 'root') {
                    _this.router.navigate(['profile']);
                }
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'login-error',
                    timeout: 3000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = $(el.nativeElement);
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');
        // close modal on background click
        this.element.on('click', function (e) {
            var target = $(e.target);
            if (!target.closest('.login-html').length) {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.show();
        $('body').addClass('modal-open');
        $(".modal").css("display", "block");
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.hide();
        $('body').removeClass('modal-open');
        $(".modal").css("display", "none");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#search-nav{\n \n    max-width: 300px;\n    margin-top:8.5px;\n   \n}\n\n#search-nav .input-group{\n float: right;   \n}\n\n.col-md-8{\n    margin:0;\n    padding: 0;\n}\n\n.col-md-10{\n    margin:0;\n    padding:0;\n\n}\n\ndiv#navbar.collapse.navbar-collapse{\n    margin:0;\n    padding: 0;\n}\n\n.navbar-toggle .icon-bar{\n    background: ghostwhite;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "    <nav id=\"menu\" class=\"navbar\">\n        <div class=\"container\" id=\"nav-container\">\n            <div class=\"col-md-2\" id=\"nvbar-head\">\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" id=\"logo\" href=\"#\">MOVIEMASTER</a>\n            </div>\n            </div>\n            <div class=\"col-md-10\">  \n               \n                    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n                         <div class=\"col-md-8\">\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"active\"><a  [routerLink]=\"['/']\" (click)=\"gotoHashtag('home-slider')\" fragment=\"home-slider\">HOME</a></li>\n                        <li><a  [routerLink]=\"['/']\" (click)=\"gotoHashtag('searchpage')\" fragment=\"searchpage\" >SEARCH</a></li>\n                        <li *ngIf=\"loggedIn\"><a  [routerLink]=\"['/profile']\">PROFILE</a></li>\n                        <li *ngIf=\"loggedIn\"><a  [routerLink]=\"['/']\" (click)=\"gotoHashtag('favpage')\" fragment=\"favpage\">MY MOVIES</a></li>\n                        <li><a  [routerLink]=\"['/']\" (click)=\"gotoHashtag('contact')\" fragment=\"contact\" >CONTACT</a></li>\n                        <li *ngIf=\"!loggedIn\"><a [routerLink]=\"['/login']\">LOGIN</a></li>\n                        <li *ngIf=\"!loggedIn\"><a [routerLink]=\"['/register']\">REGISTER</a></li>\n                        <li *ngIf=\"loggedIn\"><a (click)=\"onLogoutClick()\" >LOGOUT</a></li>\n                    </ul>\n\n                      </div>                             \n                    <div class=\"col-md-4 right\" id=\"search-nav\">\n                        <div class=\"input-group\">\n                            <input  [(ngModel)]=\"this.movieService.searchstring\" type=\"text\" class=\"form-control\" placeholder=\"type movie name\" name=\"q\">\n                            <div class=\"input-group-btn\">\n                                <a  [routerLink]=\"['/']\" fragment=\"searchpage\"><button (click)=\"this.movieService.getData()\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-search\"></i></button></a>\n                            </div>\n                        </div>\n                    </div>\n                \n                </div>\n            </div><!--/.nav-collapse -->\n\n            \n        </div>\n       \n        \n    </nav>\n\n    <div class=\"messageholder\">\n     <flash-messages></flash-messages>\n    </div>\n\n\n   \n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tmdbSearch__ = __webpack_require__("../../../../../src/app/services/tmdbSearch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavComponent = /** @class */ (function () {
    function NavComponent(tmdbSearch, authService, router, flashMessage, movieService, route) {
        this.tmdbSearch = tmdbSearch;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.movieService = movieService;
        this.route = route;
        this.scrollExecuted = false;
        this.searchstringnav = '';
    }
    NavComponent.prototype.ngOnInit = function () {
        this.loggedIn = this.authService.loggedIn();
    };
    NavComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.scrollExecuted) {
            var routeFragmentSubscription_1;
            routeFragmentSubscription_1 = this.route.fragment.subscribe(function (fragment) {
                if (fragment) {
                    var element = document.getElementById(fragment);
                    if (element) {
                        element.scrollIntoView();
                        _this.scrollExecuted = true;
                        // Free resources
                        setTimeout(function () {
                            console.log('routeFragmentSubscription unsubscribe');
                            routeFragmentSubscription_1.unsubscribe();
                        }, 0);
                    }
                }
            });
        }
    };
    NavComponent.prototype.gotoHashtag = function (fragment) {
        var element = document.querySelector("#" + fragment);
        if (element)
            element.scrollIntoView();
    };
    NavComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        //this.router.navigate(['/']);
        this.flashMessage.show('You are logged out', {
            cssClass: 'login-root',
            timeout: 2000
        });
        this.loggedIn = this.authService.loggedIn();
        this.router.navigate(['/']);
        return false;
    };
    NavComponent.prototype.getData = function () {
        this.movieService.getData();
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_tmdbSearch__["a" /* TmdbSearch */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/doughnut-chart.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#rated-header{\n    color:white;\n}\n\n#prim-chart{\n    margin-top:10px;\n    margin-bottom: 145px;\n    display: inline-block;\n    position: relative;\n    width:250px;\n}\n\n#min-charts{\n    position: relative;\n}\n\n#min-chart{\n    position:absolute;\n    width:100px;\n    top:50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\n.min-chart-container{\n    float:left;\n    position: relative;\n    width:220px;\n    height:200px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.charts{\n    position: relative;\n}\n\n.prim-rating, .min-rating{\n    position: absolute;\n    top:50%;\n    left:50%;\n    color:white;\n    -webkit-transform: translate(-50%,-35%);\n            transform: translate(-50%,-35%);\n}\n\n.prim-rating{\n    font-size: 2.5em;\n}\n\n.min-rating{\n    font-size: 1em;\n}\n\n.prim-movie-info{\n    margin-left:20px;\n    position: absolute;\n    top: 0px;\n    display: inline-block;\n}\n\n.prim-movie-info p {\n     margin-bottom: 5px;\n     color: white;\n}\n\n.min-movie-info{\n    position: absolute;\n    left:50%;\n}\n\n.min-movie-info p {\n    height: 35px;\n    width:150px;\n    overflow-x: visible;\n    margin-bottom: 5px;\n    font-size: 0.9em;\n    line-height: 1.0em;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/doughnut-chart.html":
/***/ (function(module, exports) {

module.exports = "<h3 id=\"rated-header\">Best Rated Movies in your List:</h3>\n<div class=\"charts\" style=\"display: block\">\n    <div id=\"prim-chart\" *ngIf=\"rated[0]\">\n        \n        <p class=\"prim-rating\" >{{rated[0].vote_average}}</p>\n        <canvas  baseChart\n                [data]=\"[rated[0].vote_average, 10 - rated[0].vote_average]\"\n                [labels]=\"doughnutChartLabels\"\n                [colors]=\"doughnutChartColor\"\n                [options]=\"doughnutOptions\"\n                [chartType]=\"doughnutChartType\"\n        ></canvas>\n        \n    </div>\n    <div class=\"prim-movie-info\" *ngIf=\"rated[0]\">\n        <p >{{rated[0].title}}</p>\n        <img class=\"img-rounded img-responsive\" [src]=\"'https://image.tmdb.org/t/p/w154/' + rated[0].poster_path\" onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n    </div>\n\n    <div id=\"min-charts\">\n        <div class=\"min-chart-container\" *ngIf=\"rated[1]\">\n            <div id=\"min-chart\">\n                <p class=\"min-rating\" >{{rated[1].vote_average}}</p>\n                <canvas baseChart\n                        [data]=\"[rated[1].vote_average, 10 - rated[1].vote_average]\"\n                        [labels]=\"doughnutChartLabels\"\n                        [colors]=\"doughnutChartColor\"\n                        [options]=\"doughnutOptions\"\n                        [chartType]=\"doughnutChartType\"\n                ></canvas>\n            </div>\n            <div class=\"min-movie-info\">\n                <p >{{rated[1].title}}</p>\n                <img class=\"img-rounded img-responsive\" [src]=\"'https://image.tmdb.org/t/p/w92/' + rated[1].poster_path\" onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n            </div>\n        </div>\n\n        <div class=\"min-chart-container\" *ngIf=\"rated[2]\">\n            <div id=\"min-chart\">\n                <p class=\"min-rating\" >{{rated[2].vote_average}}</p>\n                <canvas baseChart\n                        [data]=\"[rated[2].vote_average, 10 - rated[2].vote_average]\"\n                        [labels]=\"doughnutChartLabels\"\n                        [colors]=\"doughnutChartColor\"\n                        [options]=\"doughnutOptions\"\n                        [chartType]=\"doughnutChartType\"\n                ></canvas>\n            </div>\n            <div class=\"min-movie-info\">\n                <p >{{rated[2].title}}</p>\n                <img class=\"img-rounded img-responsive\" [src]=\"'https://image.tmdb.org/t/p/w92/' + rated[2].poster_path\" onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n            </div>\n        </div>\n\n        <div class=\"min-chart-container\" *ngIf=\"rated[3]\">\n            <div id=\"min-chart\">\n                <p class=\"min-rating\" >{{rated[3].vote_average}}</p>\n                <canvas baseChart\n                        [data]=\"[rated[3].vote_average, 10 - rated[3].vote_average]\"\n                        [labels]=\"doughnutChartLabels\"\n                        [colors]=\"doughnutChartColor\"\n                        [options]=\"doughnutOptions\"\n                        [chartType]=\"doughnutChartType\"\n                ></canvas>\n            </div>\n            <div class=\"min-movie-info\">\n                <p >{{rated[3].title}}</p>\n                <img class=\"img-rounded img-responsive\" [src]=\"'https://image.tmdb.org/t/p/w92/' + rated[3].poster_path\" onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n            </div>\n        </div>\n\n        <div class=\"min-chart-container\" *ngIf=\"rated[4]\">\n            <div id=\"min-chart\">\n                <p class=\"min-rating\" >{{rated[4].vote_average}}</p>\n                <canvas baseChart\n                        [data]=\"[rated[4].vote_average, 10 - rated[4].vote_average]\"\n                        [labels]=\"doughnutChartLabels\"\n                        [colors]=\"doughnutChartColor\"\n                        [options]=\"doughnutOptions\"\n                        [chartType]=\"doughnutChartType\"\n                ></canvas>\n            </div>\n            <div class=\"min-movie-info\">\n                <p >{{rated[4].title}}</p>\n                <img class=\"img-rounded img-responsive\" [src]=\"'https://image.tmdb.org/t/p/w92/' + rated[4].poster_path\" onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n            </div>\n        </div>\n\n        <div class=\"min-chart-container\" *ngIf=\"rated[5]\">\n            <div id=\"min-chart\" >\n                <p class=\"min-rating\">{{rated[5].vote_average}}</p>\n                <canvas baseChart\n                        [data]=\"[rated[5].vote_average, 10 - rated[5].vote_average]\"\n                        [labels]=\"doughnutChartLabels\"\n                        [colors]=\"doughnutChartColor\"\n                        [options]=\"doughnutOptions\"\n                        [chartType]=\"doughnutChartType\"\n                ></canvas>\n            </div>\n            <div class=\"min-movie-info\">\n                <p >{{rated[5].title}}</p>\n                <img class=\"img-rounded img-responsive\" [src]=\"'https://image.tmdb.org/t/p/w92/' + rated[5].poster_path\" onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--(chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"-->"

/***/ }),

/***/ "../../../../../src/app/components/profile/doughnutChart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoughnutChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DoughnutChartComponent = /** @class */ (function () {
    function DoughnutChartComponent() {
        // Doughnut
        //public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.rated = __WEBPACK_IMPORTED_MODULE_1__profile_component__["b" /* bestRated */];
        //public firstRated = [bestRated[0].vote_average, 10 - bestRated[0].vote_average];
        //public doughnutChartData:number[] = [7, 3];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartColor = [
            {
                backgroundColor: [
                    'goldenrod',
                    'lightgray'
                ],
                borderColor: '#2F3238'
            },
        ];
        this.doughnutOptions = {
            events: [],
            //Boolean - Whether we should show a stroke on each segment
            // set to false to hide the space/line between segments
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        };
    }
    // events
    DoughnutChartComponent.prototype.chartClicked = function (e) {
    };
    DoughnutChartComponent.prototype.chartHovered = function (e) {
    };
    DoughnutChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'doughnut-chart',
            template: __webpack_require__("../../../../../src/app/components/profile/doughnut-chart.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/doughnut-chart.css")]
        })
    ], DoughnutChartComponent);
    return DoughnutChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/genresModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genres; });
var genres = [
    {
        id: 28,
        name: "Action",
        count: 0
    },
    {
        id: 12,
        name: "Adventure",
        count: 0
    },
    {
        id: 16,
        name: "Animation",
        count: 0
    },
    {
        id: 35,
        name: "Comedy",
        count: 0
    },
    {
        id: 80,
        name: "Crime",
        count: 0
    },
    {
        id: 99,
        name: "Documentary",
        count: 0
    },
    {
        id: 18,
        name: "Drama",
        count: 0
    },
    {
        id: 10751,
        name: "Family",
        count: 0
    },
    {
        id: 14,
        name: "Fantasy",
        count: 0
    },
    {
        id: 36,
        name: "History",
        count: 0
    },
    {
        id: 27,
        name: "Horror",
        count: 0
    },
    {
        id: 10402,
        name: "Music",
        count: 0
    },
    {
        id: 9648,
        name: "Mystery",
        count: 0
    },
    {
        id: 10749,
        name: "Romance",
        count: 0
    },
    {
        id: 878,
        name: "Science Fiction",
        count: 0
    },
    {
        id: 10770,
        name: "TV Movie",
        count: 0
    },
    {
        id: 53,
        name: "Thriller",
        count: 0
    },
    {
        id: 10752,
        name: "War",
        count: 0
    },
    {
        id: 37,
        name: "Western",
        count: 0
    }
];


/***/ }),

/***/ "../../../../../src/app/components/profile/line-chart.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#added-header {\n    color:white;\n    margin-left:15px;\n    margin-bottom:10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/line-chart.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<h3 id=\"added-header\">Movies added per Month:</h3>\n  <div class=\"col-md-12\">\n    <div style=\"display: block;\">\n    <canvas baseChart width=\"800\" height=\"250\"\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n  <!--<div class=\"col-md-12\" style=\"margin-bottom: 10px\">\n    <table class=\"table table-responsive table-condensed\">\n      <tr>\n        <th *ngFor=\"let label of lineChartLabels\">{{label}}</th>\n      </tr>\n      <tr *ngFor=\"let d of lineChartData\">\n        <td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\n      </tr>\n    </table>\n  </div>-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/line-chart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
        // lineChart
        this.lineChartData = [
            { data: [5, 8, 7, 12, 3, 4, 9, 15, 7, 2, 10, 6] },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];
        this.lineChartOptions = {
            events: [],
            responsive: true,
            scales: {
                xAxes: [{
                        display: true,
                        ticks: {
                            fontColor: 'lightgray'
                        },
                        gridLines: {
                            display: true,
                            color: 'lightgray'
                        },
                    }],
                yAxes: [{
                        display: true,
                        ticks: {
                            fontColor: 'lightgray'
                        },
                        gridLines: {
                            display: true,
                            color: 'lightgray'
                        }
                    }]
            }
        };
        this.lineChartColors = [
            {
                defaultFontColor: 'white',
                backgroundColor: 'goldenrod',
                borderColor: 'white',
                pointBackgroundColor: 'white',
                pointBorderColor: 'white',
                pointHoverBackgroundColor: 'goldenrod',
                pointHoverBorderColor: 'goldenrod'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
    }
    // events
    LineChartComponent.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    LineChartComponent.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    LineChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'line-chart',
            template: __webpack_require__("../../../../../src/app/components/profile/line-chart.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/line-chart.css")]
        })
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#user-info{\n    text-align: left;\n    margin-top: 40px;\n}\n\n#user-img{\n    width:100px;\n    height:100px;\n    background: goldenrod;\n    color: white;\n    border-radius: 50%;\n    font-size: 4.6em;\n    text-align: center;\n    position: relative;\n    float:left;\n    margin-right: 20px;\n}\n\n#user-img p {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -60%);\n            transform: translate(-50%, -60%);\n}\n\n.user-name{\n    display: block;\n    color: white;\n}\n\n.user-name a{\n    float:right;\n    margin: 0 5px;\n}\n\n.user-name span{\n    font-size: 1.7em;\n}\n\n#line{\n    border-top: 1px solid white;\n    margin: 5px 0;\n}\n\n#genres{\n    color:white;\n    font-size: 0.8em;\n    height:40px;\n    width: 100%;\n    background: lightgray;\n    text-align: center;\n}\n\n#genres p {\n    float:left;\n    z-index: 300;\n}\n\n#genrepercent, #watchedpercent, #ratingpercent{\n    height:40px;\n    background: goldenrod;\n    width:0%;\n    -webkit-transition: all ease 1.5s;\n    transition: all ease 1.5s;\n}\n\n#percent-bar {\n    display: inline-block;\n}\n\n#percent-bar h3{\n    margin: 0px;\n    margin-bottom: 5px;\n    color:white;\n}\n\n#break{\n    clear:both;\n    display: block;\n    height:50px;\n    width: 100%;\n}\n\n#not-watched{\n    margin-top:30px;\n    color:white;\n}\n\n#not-watched h3{\n    margin-left:15px;\n}\n\n.dashboard{\n    text-align: left;\n    background-color: #2F3238;\n    border: none;\n}\n\nagm-map {\n      height: 300px;\n    }\n\n#map {\n        height: 500px;\n      }\n\n/* Optional: Makes the sample page fill the window. */\n\n.controls {\n        margin-top: 10px;\n        border: 1px solid transparent;\n        border-radius: 2px 0 0 2px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        height: 32px;\n        outline: none;\n        -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n      }\n\n#pac-input {\n        background-color: #fff;\n        font-family: Roboto;\n        font-size: 15px;\n        font-weight: 300;\n        margin-left: 12px;\n        padding: 0 11px 0 13px;\n        text-overflow: ellipsis;\n        width: 300px;\n      }\n\n#pac-input:focus {\n        border-color: #4d90fe;\n      }\n\n.pac-container {\n        font-family: Roboto;\n      }\n\n#type-selector {\n        color: #fff;\n        background-color: #4d90fe;\n        padding: 5px 11px 0px 11px;\n      }\n\n#type-selector label {\n        font-family: Roboto;\n        font-size: 13px;\n        font-weight: 300;\n      }\n\n#target {\n        width: 345px;\n      }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class= \"container\">\n<div *ngIf=\"user\" id=\"user-info\">\n  <div id=\"user-img\"><p>{{firstChar}}</p></div>\n  <div class=\"row\">\n    <div class=\"user-name col-md-4\">\n      <span>{{user.name}}</span>\n      <a (click)=\"updateUser(user)\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></a>\n      <a (click)=\"makeEditable()\"><i  class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n      <br>\n      <hr id=\"line\">\n      <b>Username: </b><input typ=\"text\" class=\"user dashboard username\" disabled=\"true\" value={{user.username}}> <br>\n      <b>Email: </b><input typ=\"text\" class=\"user dashboard username\" disabled=\"true\" value={{user.email}}> \n    </div>\n  </div>\n  \n  <hr>\n<div *ngIf=\"movies.length >0\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\" id=\"percent-bar\">\n      <h3>Favorite Genre: </h3>\n      <div id=\"genres\">\n        \n        <div id=\"genrepercent\"> </div>\n        <p>{{genrepercent}}% {{genrename}}</p>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\" id=\"percent-bar\">\n      <h3>Average Rating: </h3>\n      <div id=\"genres\">\n        \n        <div id=\"ratingpercent\"> </div>\n        <p>{{ratingpercent}}/10</p>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\" id=\"percent-bar\">\n      <h3>Watched Movies: </h3>\n      <div id=\"genres\">\n        \n        <div id=\"watchedpercent\"> </div>\n        <p>{{watched}}/{{movies.length}}</p>\n      </div>\n    </div>\n  </div>\n\n  \n  <doughnut-chart ></doughnut-chart>\n  <div id=\"break\">\n  </div>\n  <line-chart></line-chart>\n\n  <div class=\"row\" id=\"not-watched\">\n    <h3>Movies You Have Not Watched Yet: </h3>\n    <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let m of moviesNotWatched\">\n      {{m.title}}\n    </div>\n  </div>\n  \n</div>\n\n  <!--<div id=\"user-movies\">\n    <span>{{user.movies.length}} Movies</span>\n    <br>\n    <p *ngFor=\"let genre of userGenres\">{{genre.name}} : {{genre.count}}</p>\n    <br>\n    <span *ngIf=\"genrecount\" >Favorite Genre: {{genrename}} with {{genrecount}} of {{genreAllCounts}} Genres ({{genrepercent}}%)</span>\n  </div>-->\n\n  \n</div>\n</div>\n\n\n<br>\n\n <div class=\"container\">\n   \n    <div class=\"input-group\">\n        <input  [(ngModel)]=\"searchstring\" type=\"text\" class=\"form-control\" placeholder=\"addresse...\" name=\"q\">\n        <div class=\"input-group-btn\">\n          <button (click)=\"setCoordinates()\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-search\"></i></button>\n        </div>\n    </div>\n    <div id=\"map\"></div>\n </div>\n    \n \n\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bestRated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__genresModel__ = __webpack_require__("../../../../../src/app/components/profile/genresModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var bestRated = [];
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, flashMessage, movieService, userService, authService, mapsAPILoader, ngZone) {
        var _this = this;
        this.router = router;
        this.flashMessage = flashMessage;
        this.movieService = movieService;
        this.userService = userService;
        this.authService = authService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.searchstring = "";
        this.alive = true;
        this.movies = [];
        this.moviesNotWatched = [];
        this.movieCount = 0;
        this.userGenres = __WEBPACK_IMPORTED_MODULE_3__genresModel__["a" /* genres */];
        this.genrecount = 0;
        this.genreAllCounts = 0;
        this.watched = 0;
        if (!this.user) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.firstChar = profile.user.name.charAt(0).toUpperCase();
                _this.user = profile.user;
            });
        }
        else {
            this.firstChar = this.user.name.charAt(0).toUpperCase();
        }
    }
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.alive = false;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.movieService.dbList.subscribe(function (movies) {
            _this.movies = movies;
            _this.movieCount = _this.movies.length;
            _this.initializeMovieData();
        });
        this.setCurrentPosition();
    };
    ProfileComponent.prototype.initializeMovieData = function () {
        this.countWatched(this.movies);
        this.countGenre(this.movies);
        this.favoriteGenre();
        this.countRating(this.movies);
        this.setMoviesNotWatched(this.movies);
        this.setBestRated(this.movies);
    };
    ProfileComponent.prototype.ngAfterViewChecked = function () {
        this.progress();
    };
    ProfileComponent.prototype.makeEditable = function (username) {
        var inputs = document.getElementsByClassName("user");
        for (var i = inputs.length, n = 0; n < i; n++) {
            if (inputs[n].hasAttribute("disabled")) {
                inputs[n].removeAttribute("disabled");
                inputs[n].setAttribute("style", "border: 1px solid #ffffff ;");
            }
            else {
                inputs[n].setAttribute("style", "background-color:#2F3238;");
                inputs[n].setAttribute("disabled", "true");
                inputs[n].setAttribute("style", "border: none ;");
            }
        }
    };
    ProfileComponent.prototype.updateUser = function (user) {
        var _this = this;
        var userToUpdate = user;
        var inputs = document.getElementsByClassName("username");
        for (var i = inputs.length, n = 0; n < i; n++) {
            if (n == 0) {
                var input1 = inputs[n].value;
                userToUpdate.username = input1;
            }
            if (n == 1) {
                userToUpdate.email = inputs[n].value;
            }
        }
        this.makeEditable(userToUpdate.username);
        if (confirm("Soll der User wirklich geupdated werden?")) {
            this.user = userToUpdate;
            this.userService.updateUser(userToUpdate).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
                if (data) {
                    console.log('update user success');
                }
                else {
                    console.log('update user error');
                }
            });
        }
    };
    ProfileComponent.prototype.setMoviesNotWatched = function (movies) {
        for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
            var m = movies_1[_i];
            if (!m.watched) {
                this.moviesNotWatched.push(m);
            }
        }
    };
    ProfileComponent.prototype.countWatched = function (movies) {
        this.watched = 0;
        for (var _i = 0, movies_2 = movies; _i < movies_2.length; _i++) {
            var m = movies_2[_i];
            if (m.watched) {
                this.watched++;
            }
        }
        var v = 100 / (movies.length / this.watched);
        this.watchedpercent = v.toFixed(2);
    };
    ProfileComponent.prototype.setBestRated = function (movies) {
        var orderedArray = new Array(movies.length);
        var moviescopy = movies;
        orderedArray = moviescopy.sort(function (n1, n2) {
            if (n1.vote_average > n2.vote_average) {
                return -1;
            }
            if (n1.vote_average < n2.vote_average) {
                return 1;
            }
            return 0;
        });
        bestRated = orderedArray;
    };
    ProfileComponent.prototype.countRating = function (movies) {
        var counter = 0;
        var added = 0;
        for (var _i = 0, movies_3 = movies; _i < movies_3.length; _i++) {
            var m = movies_3[_i];
            added = added + m.vote_average;
            counter++;
        }
        this.ratingpercent = (added / counter).toFixed(2);
    };
    ProfileComponent.prototype.countGenre = function (movies) {
        for (var i = 0; i < movies.length; i++) {
            if (movies[i].genre_ids.length > 0) {
                for (var j = 0; j < movies[i].genre_ids.length; j++) {
                    for (var k = 0; k < this.userGenres.length; k++) {
                        if (this.userGenres[k].id === movies[i].genre_ids[j]) {
                            this.userGenres[k].count++;
                        }
                    }
                }
            }
        }
    };
    ProfileComponent.prototype.favoriteGenre = function () {
        for (var i = 0; i < this.userGenres.length; i++) {
            this.genreAllCounts = this.genreAllCounts + this.userGenres[i].count;
            if (this.userGenres[i].count > this.genrecount) {
                this.genrecount = this.userGenres[i].count;
                this.genrename = this.userGenres[i].name;
                var v = this.genreAllCounts / this.genrecount;
            }
        }
        var v = 100 / (this.genreAllCounts / this.genrecount);
        this.genrepercent = v.toFixed(2);
    };
    ProfileComponent.prototype.isvisible = function (obj) {
        return obj.offsetWidth > 0 && obj.offsetHeight > 0;
    };
    ProfileComponent.prototype.progress = function () {
        console.log('in progress genrepercent value : ' + this.genrepercent);
        var percent = document.getElementById("percent-bar");
        var genre = document.getElementById("genrepercent");
        var rating = document.getElementById("ratingpercent");
        var watched = document.getElementById("watchedpercent");
        if (percent) {
            genre.setAttribute('style', 'width :' + this.genrepercent + '%');
            rating.setAttribute('style', 'width :' + Number.parseFloat(this.ratingpercent) * 10 + '%');
            watched.setAttribute('style', 'width :' + 100 / (this.movieCount / this.watched) + '%');
        }
    };
    ProfileComponent.prototype.setMap2 = function () {
        var _this = this;
        //this.setCurrentPosition();
        this.mapsAPILoader.load().then(function () {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(_this.latitude, _this.longitude),
                zoom: 12
            });
            var circle = new google.maps.Circle({
                center: new google.maps.LatLng(_this.latitude, _this.longitude),
                radius: 2500,
                fillColor: "goldenrod",
                fillOpacity: 0.5,
                strokeOpacity: 0.0,
                strokeWeight: 0,
                map: map
            });
            var request = {
                location: new google.maps.LatLng(_this.latitude, _this.longitude),
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
                    markers.forEach(function (marker) {
                        marker.setMap(null);
                    });
                    markers = [];
                    // For each place, get the icon, name and location.
                    var bounds = new google.maps.LatLngBounds();
                    results.forEach(function (place) {
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
                        }
                        else {
                            bounds.extend(place.geometry.location);
                        }
                    });
                    map.fitBounds(bounds);
                }
            }
        });
    };
    ProfileComponent.prototype.setCoordinates = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': _this.searchstring }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log('hallllooooo geocoder' + results[0].geometry.location.lat() + '  ' + results[0].geometry.location.lng());
                    _this.latitude = results[0].geometry.location.lat();
                    _this.longitude = results[0].geometry.location.lng();
                    _this.setMap2();
                }
                else {
                    alert("Something got wrong " + status);
                }
            });
        });
    };
    ProfileComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
                _this.setMap2();
            });
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class='container'>\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.subscription = this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".type-search{\n    list-style: none;\n}\n.title-page h4{\n    display: table;\n    font-size: 1em;\n}\n#searching .input-group{\n    max-width: 300px;\n}\n.title-page{\nmargin-bottom: 37px;\nmargin-top:30px;\nmargin-right: 14px;\nmargin-left: 14px;\n}\n#searching{\n    float: right;\n}\n#searchpage{\n    padding-top: 80px;\n}\n.search-nav #filters{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    margin-left: 5px;\n    font-size: 0.8em;\n}\n.search-nav #filters>li>a {\n    \n    margin-left: 10px;\n    font-size: 1.2em;\n   \n}\n.col-xs-15,\n.col-sm-15,\n.col-md-15,\n.col-lg-15 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 10px;\n    padding-left: 10px;\n}\n@media (min-width: 992px){\n#filter-section{\n   height: 100vh;}\n.search-nav #filters{\n    display:block;}\n.search-nav #filters li a{   \n    margin: 0;\n    font-size: 16px;\n}\n}\n.col-xs-15 {\n    width: 20%;\n    float: left;\n}\n@media (min-width: 768px) {\n.col-sm-15 {\n        width: 20%;\n        float: left;\n    }\n}\n@media (min-width: 992px) {\n    .col-md-15 {\n        width: 20%;\n        float: left;\n    }\n}\n@media (min-width: 1200px) {\n    .col-lg-15 {\n        width: 20%;\n        float: left;\n    }\n}\n@media (max-width: 420px) {\n    .col-xs-6 {\n        width: 100%;\n       \n    }\n    .search-nav #filters>li>a {\n    display: none;\n   \n}\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"searchpage\" class=\"page\">\n    <div class=\"container\">\n        <!-- search section -->\n\n        <!-- movie section -->\n\n        <div class=\"col-md-2\" id=\"filter-section\">\n            <!-- Filter -->\n            <nav id=\"options\" class=\"search-nav\">\n                <ul id=\"filters\" class=\"option-set\" data-option-key=\"filter\">\n                    <li class=\"type-search\">GENRE FILTER</li>\n                    <li>\n                        <a (click)=\"getNewestMovies()\" id=\"new\" data-option-value=\".news\">New this month</a>\n                    </li>\n                    <li>\n                        <a (click)=\"handleFilterClick('all')\">All Genres</a>\n                    </li>\n                    <li>\n                        <a (click)=\"handleFilterClick('28')\" data-option-value=\".action\">Action</a>\n                    </li>\n                    <li>\n                        <a (click)=\"handleFilterClick('53')\" href=\"#filter\" data-option-value=\".drama\">Thriller</a>\n                    </li>\n                    <li>\n                        <a (click)=\"handleFilterClick('35')\" href=\"#filter\" data-option-value=\".comedy\">Comedy</a>\n                    </li>\n                </ul>\n            </nav>\n\n            <!-- End Filter -->\n        </div>\n        <div class=\"col-md-10\" id=\"filmliste\">\n            <!--Filme liste-->\n\n\n            <div class=\"col-lg-15 col-md-3 col-sm-4 col-xs-6 \" id='proFilmSpalte' *ngFor=\"let movie of this.movieService.movies\">\n                <div (click)=\"movieClicked('custom-modal-2', movie)\" class='cover coverlist'>\n                    <img class='img-rounded img-responsive center-block' [src]=\"'https://image.tmdb.org/t/p/w185/' + movie.poster_path\" alt=\"movie.overview\"\n                        onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n                </div>\n            </div>\n\n\n            <div class=\"col-md-12\">\n                <!--col für pager-->\n                <div class=\"col-md-2\"></div>\n                <div *ngIf=\"this.movieService.totalPages.length>1\" class=\"paginate paginate-dark wrapper\">\n                    <!-- pager -->\n                    <ul *ngIf=\"this.movieService.pager.pages && this.movieService.pager.pages.length\">\n                        <li [ngClass]=\"{disabled:this.movieService.pager.currentPage === 1}\">\n                            <a (click)=\"this.movieService.setPage(1)\">First</a>\n                        </li>\n                        <li [ngClass]=\"{disabled:this.movieService.pager.currentPage === 1}\">\n                            <a (click)=\"this.movieService.setPage(this.movieService.pager.currentPage - 1)\">Previous</a>\n                        </li>\n                        <li *ngFor=\"let page of this.movieService.pager.pages\" [ngClass]=\"{active:this.movieService.pager.currentPage === page}\">\n                            <a (click)=\"this.movieService.setPage(page)\">{{page}}</a>\n                        </li>\n                        <li [ngClass]=\"{disabled:this.movieService.pager.currentPage === this.movieService.pager.totalPages}\">\n                            <a (click)=\"this.movieService.setPage(this.movieService.pager.currentPage + 1)\">Next</a>\n                        </li>\n                        <li [ngClass]=\"{disabled:this.movieService.pager.currentPage === this.movieService.pager.totalPages}\">\n                            <a (click)=\"this.movieService.setPage(this.movieService.pager.totalPages)\">Last</a>\n                        </li>\n                    </ul>\n                </div>\n\n            </div>\n            <!--ende pager-->\n        </div>\n        <!--Ende filmliste-->\n\n\n\n\n        <!-- favoritesnliste-->\n        <div class=\"row\" *ngIf=\"favorites.length>0 && guestmode\">\n            <div class=\"col-md-2\">\n                <br />\n                <li class=\"type-search\">YOUR LIST</li>\n            </div>\n\n            <div class=\"col-md-10\">\n                <br />\n                <div *ngFor=\"let movie of favorites\">\n                    <div key={i} class='col-md-1'>\n\n                        <div id='listcover' class='cover listcover'>\n                            <img class='img-rounded img-responsive ' alt='Filmcover' [src]=\"'https://image.tmdb.org/t/p/w92/' + movie.poster_path\" alt=\"movie.overview\"\n                                onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n                        </div>\n\n                    </div>\n                </div>\n\n\n                <div class='col-md-12 file paginate paginate-dark wrapper' >\n                    <a download=\"mymovielist.txt\" id=\"downloadlink\" class='hidden'>Download list</a>\n                    <br />\n                    <li>\n                        <a (click)=\"saveFavoritesAsText()\" id=\"createfile\" class=\"paginate paginate-dark wrapper\">Create file</a>\n                    </li>\n                    <br />\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End search section-->\n\n</div>\n<!-- ende Page -->\n\n<!-- Modal -->\n<modal id=\"custom-modal-2\">\n    <div class=\"modal\">\n        <div class=\"modal-body\">\n            <div *ngIf=\"selectedMovie\" class=\"container centered\" id=\"detailView\">\n                <div id='ersteSpalte' class='col-md-4'>\n                    <div class='details'>\n                        <h4>Story:</h4>\n                        <h6>Title: {{selectedMovie.overview}}</h6>\n                    </div>\n                </div>\n\n                <div id='zweiteSpalte' class='col-md-4'>\n                    <img class='img-rounded img-responsive center-block' [src]=\"'https://image.tmdb.org/t/p/w300/' + selectedMovie.poster_path\"\n                        alt=\"movie.overview\" onError=\"this.src='/assets/img/movies/full/no-found.jpg'\">\n                </div>\n\n                <div id='dritteSpalte' class='col-md-4'>\n                    <div class='details'>\n                        <br>\n                        <h4>Details:</h4>\n                        <h6>Title: {{selectedMovie.title}}</h6>\n                        <h6>Homepage: {{selectedMovie.homepage}}</h6>\n                        <div class=\"paginate paginate-dark wrapper\">\n                            <li>\n                                <a href=\"/#search\">Back</a>\n                            </li>\n                            <li>\n                                <a (click)=\"addMovieToFavorites(selectedMovie)\">Add to list</a>\n                            </li>\n                            <li>\n                                <a (click)=\"sendMovieToDb(selectedMovie)\">Add to DB</a>\n                            </li>\n                        </div>\n                        <br />\n                        <br />\n                    </div>\n                </div>\n\n            </div>\n            <!--container ende-->\n\n        </div>\n        <!--modal body ende-->\n    </div>\n    <div class=\"modal-background\"></div>\n</modal>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tmdbSearch__ = __webpack_require__("../../../../../src/app/services/tmdbSearch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SearchComponent = /** @class */ (function () {
    function SearchComponent(tmdbSearch, authService, HttpService, pagerService, modalService, movieService, userService) {
        var _this = this;
        this.tmdbSearch = tmdbSearch;
        this.authService = authService;
        this.HttpService = HttpService;
        this.pagerService = pagerService;
        this.modalService = modalService;
        this.movieService = movieService;
        this.userService = userService;
        this.favorites = [];
        this.selectedMovie = null;
        this.alive = true;
        this.movieService.news.takeWhile(function () { return _this.alive; }).subscribe(function (news) { return _this.newsShow; });
        //this.authService.isLoggedIn.subscribe(status => {this.guestmode = !status});
    }
    SearchComponent.prototype.ngOnDestroy = function () {
        //this.subscription.unsubscribe();
        this.alive = false;
    };
    SearchComponent.prototype.ngOnInit = function () {
        if (!this.movieService.searchstring)
            this.getNewestMovies();
    };
    SearchComponent.prototype.handleFilterClick = function (genre) {
        this.movieService.setGenre(genre);
    };
    SearchComponent.prototype.movieClicked = function (id, movie) {
        this.selectMovie(movie);
        this.openModal(id);
    };
    SearchComponent.prototype.selectMovie = function (movie) {
        this.selectedMovie = movie;
    };
    SearchComponent.prototype.addMovieToFavorites = function (movie) {
        this.favorites.push(movie);
    };
    SearchComponent.prototype.addMovieToDB = function (movie) {
        this.favorites.push(movie);
    };
    SearchComponent.prototype.getNewestMovies = function () {
        this.movieService.getNewestMovies();
    };
    SearchComponent.prototype.getMoreData = function (page) {
        this.movieService.getMoreData(page);
    };
    SearchComponent.prototype.sendMovieToDb = function (movie) {
        var _this = this;
        movie.watched = false;
        movie.addedAt = new Date();
        console.log('setMovie with json: ' + movie);
        this.movieService.addMovieToDb(movie).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
            _this.movieService.getFavorites();
            if (data) {
                console.log('Movie added to DB successfuly for user: ' + data.name);
            }
            else {
                console.log('Movie not added to DB: error');
            }
        });
        this.movieService.getFavorites();
    };
    SearchComponent.prototype.saveFavoritesAsText = function () {
        var textFile = null;
        window.URL.revokeObjectURL(textFile);
        var txt = [];
        for (var i = 0; i < this.favorites.length; i++) {
            txt.push(this.favorites[i].title);
        }
        var data = new Blob(txt, { type: 'text/plain' });
        textFile = window.URL.createObjectURL(data);
        document.getElementById("downloadlink").className = "";
        //console.log(doc.getAttribute('class'));
        var link = document.getElementById('downloadlink');
        link.setAttribute('href', textFile);
    };
    SearchComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    SearchComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tmdbSearch__["a" /* TmdbSearch */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_6__services_pager_service__["a" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_5__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_7__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */]])
    ], SearchComponent);
    return SearchComponent;
}()); //clas END

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


/***/ }),

/***/ "../../../../../src/app/components/slider/slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- slider platzhalter, wird sonst standardmäßig dem body appended-->\n\n\n<div id=\"home-slider\">\t\n    <div class=\"overlay\"></div>\n\n    <div class=\"slider-text\">\n        <h5>MAGIC</h5>\n    \t<div id=\"slidecaption\"></div>\n\n    </div>   \n\t\n\t<div class=\"control-nav\" id=\"slider-nav\">\n        <a id=\"prevslide\" class=\"load-item\"><i class=\"font-icon-arrow-simple-left\"></i></a>\n        <a id=\"nextslide\" class=\"load-item\"><i class=\"font-icon-arrow-simple-right\"></i></a>\n        <ul id=\"slide-list\"></ul>\n        <a  href='#menu' id=\"nextsection\"><i class=\"font-icon-arrow-simple-down\"></i></a>\n       \n    </div>\n    \n</div>\n\n<main></main>\n\n<!--<script src=\"../../assets/js/supersized.3.2.7.min.js\"></script>\n<script src=\"../../assets/js/slider.js\"></script>-->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = /** @class */ (function () {
    function SliderComponent(router) {
        this.router = router;
    }
    SliderComponent.prototype.ngOnInit = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "../../assets/js/supersized.3.2.7.min.js";
        $("main").append(s);
        var d = document.createElement("script");
        d.type = "text/javascript";
        d.src = "../../assets/js/slider.js";
        $("main").append(d);
    };
    SliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__("../../../../../src/app/components/slider/slider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/slider/slider.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('auth Guard');
        var user = localStorage.getItem('user');
        var newUser = JSON.parse(user);
        if (this.authService.loggedIn() && newUser.username == 'root') {
            console.log(newUser.username);
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/ArraySortPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArraySortPipe = /** @class */ (function () {
    function ArraySortPipe() {
    }
    ArraySortPipe.prototype.transform = function (array, args) {
        //console.log('huhu, die args: ' +args)
        if (typeof args[0] === "undefined") {
            return array;
        }
        array.sort(function (a, b) {
            //console.log(a[args])
            var left = Number(new Date(a[args]));
            var right = Number(new Date(b[args]));
            //console.log('left: '+left)
            return right - left;
        });
        return array;
    };
    ArraySortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "sort"
        })
    ], ArraySortPipe);
    return ArraySortPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    AuthService.prototype.ngOninit = function () {
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        console.log('get profile');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        console.log('load token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'https://movie-master.herokuapp.com/' + ep;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        var modalToRemove = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        this.modals = __WEBPACK_IMPORTED_MODULE_0_underscore__["without"](this.modals, modalToRemove);
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this.modals, { id: id });
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tmdbSearch__ = __webpack_require__("../../../../../src/app/services/tmdbSearch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MovieService = /** @class */ (function () {
    function MovieService(tmdbSearch, AuthService, HttpService, pagerService, router) {
        this.tmdbSearch = tmdbSearch;
        this.AuthService = AuthService;
        this.HttpService = HttpService;
        this.pagerService = pagerService;
        this.router = router;
        this.searchstring = '';
        this.moviesCopy = [];
        this.allMovies = [];
        this.favorites = [];
        this.totalPages = [];
        this.pager = {};
        this.genreMovies = [];
        this.alive = true;
        console.log('copy movies länge in construct: ' + this.moviesCopy.length);
        this.dbList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.newsShow = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.news = this.newsShow.asObservable();
        this.getFavorites();
    }
    MovieService.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MovieService.prototype.ngOnInit = function () {
        this.getFavorites();
        this.moviesCopy = this.movies;
    };
    MovieService.prototype.getData = function () {
        var _this = this;
        this.totalPages.length = 0;
        this.tmdbSearch.getData(this.searchstring).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
            _this.movies = data.results;
            _this.moviesCopy = data.results;
            _this.totalPages.length = data.total_pages;
            _this.newsShow = false;
            _this.setPage(1);
            //this.router.navigate(['home']);
        });
    };
    MovieService.prototype.getMoreData = function (page) {
        var _this = this;
        this.movies.length = 0;
        if (!this.newsShow)
            this.tmdbSearch.getMoreData(this.searchstring, page).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
                _this.movies = data.results;
                _this.moviesCopy = data.results;
            });
        else {
            this.tmdbSearch.getNewestMovies(page).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
                _this.movies = data.results;
                _this.moviesCopy = data.results;
            });
        }
    };
    MovieService.prototype.getAllMovies = function () {
        var _this = this;
        for (var i = 0; i <= this.totalPages.length; i++) {
            this.tmdbSearch.getMoreData(this.searchstring, i).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
                _this.allMovies.push(data.results);
            });
        }
    };
    MovieService.prototype.getNewestMovies = function () {
        var _this = this;
        this.totalPages.length = 0;
        this.tmdbSearch.getNewestMovies(1).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
            _this.newsShow = true;
            _this.movies = data.results;
            _this.moviesCopy = data.results;
            _this.totalPages.length = data.total_pages;
            _this.setPage(1);
        });
    };
    MovieService.prototype.addMovieToDb = function (movie) {
        console.log('setMovie' + JSON.stringify(movie));
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        var token = localStorage.getItem('id_token');
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/movieadd');
        return this.HttpService.post(ep, movie, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.deleteMovieFromDb = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        var token = localStorage.getItem('id_token');
        headers.append('Authorization', token);
        headers.append('Content-Type', 'text/html');
        var ep = this.prepEndpoint('users/moviedelete/' + id);
        return this.HttpService.post(ep, id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.updateMovie = function (movie) {
        console.log('update movie in userservice call');
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        var token = localStorage.getItem('id_token');
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/movieupdate');
        return this.HttpService.post(ep, movie, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getFavorites = function () {
        var _this = this;
        console.log('get userFavorites');
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        var token = localStorage.getItem('id_token');
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/userFavorites');
        this.HttpService.get(ep, { headers: headers })
            .map(function (res) { return res.json(); })
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (movies) { _this.dbList.next(movies); }, (function (err) { return console.error("load movieslist error"); }));
    };
    MovieService.prototype.setGenre = function (genre) {
        if (genre === 'all') {
            this.movies = this.moviesCopy;
        }
        else {
            this.genreMovies.length = 0;
            this.movies = this.moviesCopy;
            for (var i = 0; i < this.movies.length; i++) {
                if (this.movies[i].genre_ids.length > 0) {
                    for (var j = 0; j < this.movies[i].genre_ids.length; j++) {
                        if (genre != "") {
                            if (genre == this.movies[i].genre_ids[j]) {
                                this.genreMovies.push(this.movies[i]);
                            }
                        }
                    }
                }
            }
            this.movies = this.genreMovies;
        }
    };
    MovieService.prototype.setPage = function (page) {
        this.getMoreData(page);
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        console.log("current page: " + page);
        // get pager object from service
        this.pager = this.pagerService.getPager(this.totalPages.length, page);
        // get current page of items
        this.pagedItems = this.totalPages.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    MovieService.prototype.prepEndpoint = function (ep) {
        return 'https://movie-master.herokuapp.com/' + ep;
    };
    MovieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tmdbSearch__["a" /* TmdbSearch */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_4__pager_service__["a" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "../../../../../src/app/services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_0_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tmdbSearch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmdbSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TmdbSearch = /** @class */ (function () {
    function TmdbSearch(_http) {
        this._http = _http;
    }
    TmdbSearch.prototype.getData = function (searchtext) {
        return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=a650bc23f071e894a70bacf516a840a3&query=' + searchtext)
            .map(function (res) { return res.json(); });
    };
    TmdbSearch.prototype.getNewestMovies = function (page) {
        var heute = new Date().toISOString().slice(0, 10);
        var monatVorher = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate());
        var vorher = new Date(monatVorher).toISOString().slice(0, 10);
        return this._http.get(' https://api.themoviedb.org/3/discover/movie?api_key=a650bc23f071e894a70bacf516a840a3&primary_release_date.gte=' + vorher + '&primary_release_date.lte=' + heute + '&sort_by=popularity.desc&page=' + page)
            .map(function (res) { return res.json(); });
    };
    TmdbSearch.prototype.getMoreData = function (searchtext, page) {
        return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=a650bc23f071e894a70bacf516a840a3&query=' + searchtext + '&page=' + page)
            .map(function (res) { return res.json(); });
    };
    TmdbSearch.prototype.getPlot = function (title) {
        if (title === undefined) {
            return "";
        }
        if (title !== undefined) {
            return fetch('http://www.omdbapi.com/?t=' + title + '&plot=full')
                .then(function (response) { return response.json(); });
        }
    };
    TmdbSearch.prototype.getDetail = function (id) {
        return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=a650bc23f071e894a70bacf516a840a3')
            .then(function (response) { return response.json(); });
    };
    TmdbSearch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], TmdbSearch);
    return TmdbSearch;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.updateUser = function (user) {
        console.log('update user in userservice');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var token = localStorage.getItem('id_token');
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/userupdate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (user) {
        console.log('delete user in userservice');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var token = localStorage.getItem('id_token');
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/userdelete');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserList = function () {
        console.log('get userlist');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var token = localStorage.getItem('id_token');
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/userList');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.prepEndpoint = function (ep) {
        return 'https://movie-master.herokuapp.com/' + ep;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map