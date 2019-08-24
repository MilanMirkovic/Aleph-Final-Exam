(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _projekat_details_projekat_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projekat-details/projekat-details.component */ "./src/app/projekat-details/projekat-details.component.ts");






var routes = [
    { path: 'main/projekat/:id', component: _projekat_details_projekat_details_component__WEBPACK_IMPORTED_MODULE_5__["ProjekatDetailsComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n\t\r\n\t\r\n\t\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t</button>\r\n\t\t\t<a class=\"navbar-brand\" href=\"#\">PH</a>\r\n\t\t</div>\r\n\t\t<div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n\t\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t<li class=\"active\"><a [routerLink]=\"['main']\">Home</a></li>\r\n\t\t\t\t<li><a >About</a></li>\r\n\t\t\t\t<li><a href=\"#contact\">Contact</a></li>\r\n\t\t\r\n\t\t\t</ul>\r\n\r\n\t\t <ul class=\"nav navbar-nav pull-right\">\r\n\t\t\t\t<li><a id=\"logOut\" *ngIf=\"isLoggedIn()\" (click)=\"logout()\">LogOut</a></li>\r\n\t\t\t\t<li><a id=\"logOut\" [routerLink]=\"['login']\" *ngIf=\"!isLoggedIn()\">LogIn</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n\t\r\n\r\n\t\r\n\t\t\r\n</nav>\r\n<div class=\"container\" role=\"main\">\r\n\t\r\n\t<div class=\"jumbotron\">\r\n\t\t<h1>Project Helper</h1>\r\n\t\t<p>An example of Angular application styled with Bootstrap.</p>\r\n\t</div>\r\n\t</div>\r\n<router-outlet></router-outlet> \r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./security/can-activate-auth.guard */ "./src/app/security/can-activate-auth.guard.ts");
/* harmony import */ var _security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./security/token-interceptor.service */ "./src/app/security/token-interceptor.service.ts");
/* harmony import */ var _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./security/jwt-utils.service */ "./src/app/security/jwt-utils.service.ts");
/* harmony import */ var _registracija_registracija_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./registracija/registracija.component */ "./src/app/registracija/registracija.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _projekat_details_projekat_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projekat-details/projekat-details.component */ "./src/app/projekat-details/projekat-details.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _registracija_registracija_component__WEBPACK_IMPORTED_MODULE_13__["RegistracijaComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                _projekat_details_projekat_details_component__WEBPACK_IMPORTED_MODULE_15__["ProjekatDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptorService"],
                    multi: true
                },
                _security_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
                _security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_10__["CanActivateAuthGuard"],
                _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_12__["JwtUtilsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n<form class=\"form-signin\" (ngSubmit)=\"login()\">\r\n  <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n  <label for=\"username\" class=\"sr-only\">Username</label>\r\n  <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required autofocus>\r\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required>\r\n  <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n</form>\r\n<div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\r\n  Wrong username or password.\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router, http) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.http = http;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/main']);
            }
        });
    };
    LoginComponent.prototype.getUsers = function () {
        var _this = this;
        this.http.get('api/users').subscribe(function (res) {
            _this.usersInSystem = res;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons{\r\n    float: right;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n  }\r\n\r\n.sacuvaj-reset{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0VBQ3ZCOztBQUVGO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnN7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcblxyXG4uc2FjdXZhai1yZXNldHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col input-group\">\n\n    <span>Name:  <input class=\"search\" type=\"text\" name=\"naziv\" id=\"\" [(ngModel)]=\"naziv\">\n    </span>\n\n    <button (click)=\"filter()\">Filter</button>\n     <button (click)=\"resetFilter()\">Clear</button> \n  </div>\n\n\n  <div class=\"row\">\n   \n   \n    <div *ngIf=\"page\" class=\"col col-lg-9\">\n      <div class=\"buttons\">\n        <button [disabled]=\"page.first\" (click)=\"previousPage()\" class=\"glyphicon glyphicon-arrow-left\"></button>\n        <button [disabled]=\"page.last\" (click)=\"nextPage()\" class=\"glyphicon glyphicon-arrow-right\"></button>\n      </div>\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\"> Description</th>\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let p of page.content\">\n          <tr>\n            <td>{{p.naziv}}</td>\n            <td>{{p.opis}}</td>\n            <ul>\n             <li> <a [routerLink]=\"['projekat',p.id]\"><button  class=\"btn btn-primary\">Details</button></a></li>\n            <li> <button *ngIf=\"loggedIn\" (click)=\"izmeniProjekat(p)\" class=\"btn btn-default\"> Edit</button> </li>  \n            <li> <button *ngIf=\"loggedIn\" (click)=\"obrisi(p)\" class=\"btn btn-danger\"> Delete</button> </li>  \n          </ul>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n\n    \n  <div *ngIf=\"loggedIn\"  class=\"col col-lg-2\">\n      <form action=\"\">\n        <label for=\"label\">Name</label>\n        <input name=\"naziv\"  type=\"text\" [(ngModel)]=\"projekatZaIzmenu.naziv\"/>\n        <br/>\n\n          <label for=\"opis\">Description</label>\n          <input name=\"opis\"  type=\"text\" [(ngModel)]=\"projekatZaIzmenu.opis\"  />\n        <br/>\n        <label for=\"read\">Read Me</label>\n        <textarea name=\"readMe\"  type=\"text\" [(ngModel)]=\"projekatZaIzmenu.readMe\"></textarea>\n        <!-- <input class=\"btn btn-primary\" type=\"submit\" value=\"Sacuvaj\"/> -->\n     \n      </form>\n      <br>\n      <div class=\"sacuvaj-reset\">\n      <button  class=\"btn btn-warning\" (click)=\"reset()\">Reset</button>\n      <button  class=\"btn btn-primary\" (click)=\"sacuvajProjekat()\">Save</button>\n    </div>\n    \n    </div>\n    \n  \n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projekat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projekat.service */ "./src/app/projekat.service.ts");
/* harmony import */ var _models_projekat_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/projekat.model */ "./src/app/models/projekat.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");






var MainComponent = /** @class */ (function () {
    function MainComponent(projekatService, http, authenticationService) {
        this.projekatService = projekatService;
        this.http = http;
        this.authenticationService = authenticationService;
        this.izmeni = false;
        this.projekatZaIzmenu = new _models_projekat_model__WEBPACK_IMPORTED_MODULE_3__["Projekat"]({
            id: 0,
            naziv: '',
            opis: '',
            readMe: '',
        });
        this.naziv = '';
    }
    MainComponent.prototype.ngOnInit = function () {
        this.loggedIn = this.authenticationService.isLoggedIn();
        this.getPage(0);
    };
    MainComponent.prototype.getPage = function (pageNumber) {
        var _this = this;
        this.projekatService.getAll(pageNumber).subscribe(function (res) {
            _this.page = res;
        });
    };
    MainComponent.prototype.filter = function () {
        var _this = this;
        this.projekatService.filterPoNazivu(this.naziv).subscribe(function (res) {
            _this.page = res;
        });
    };
    MainComponent.prototype.resetFilter = function () {
        this.naziv = '';
        this.getPage(0);
    };
    MainComponent.prototype.previousPage = function () {
        this.getPage(this.page.number - 1);
    };
    MainComponent.prototype.nextPage = function () {
        this.getPage(this.page.number + 1);
    };
    MainComponent.prototype.izmeniClick = function () {
        this.izmeni = !this.izmeni;
    };
    MainComponent.prototype.izmeniProjekat = function (p) {
        this.projekatZaIzmenu = p;
        this.izmeniClick();
    };
    MainComponent.prototype.sacuvajProjekat = function () {
        var _this = this;
        if (this.projekatZaIzmenu.id === 0) {
            this.projekatService.save(this.projekatZaIzmenu).subscribe(function (res) {
                _this.getPage(0);
            });
        }
        else {
            this.projekatService.izmena(this.projekatZaIzmenu.id, this.projekatZaIzmenu).subscribe(function (res) {
                _this.getPage(0);
                _this.projekatZaIzmenu = new _models_projekat_model__WEBPACK_IMPORTED_MODULE_3__["Projekat"]({
                    id: 0,
                    naziv: '',
                    opis: '',
                    readMe: '',
                });
            });
        }
    };
    MainComponent.prototype.obrisi = function (p) {
        var _this = this;
        this.http.delete("api/projekti/" + p.id).subscribe(function (res) {
            _this.page = res;
            _this.getPage(0);
        });
    };
    MainComponent.prototype.reset = function () {
        this.projekatZaIzmenu = new _models_projekat_model__WEBPACK_IMPORTED_MODULE_3__["Projekat"]({
            id: 0,
            naziv: '',
            opis: '',
            readMe: '',
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projekat_service__WEBPACK_IMPORTED_MODULE_2__["ProjekatService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _security_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/models/komentar.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/komentar.model.ts ***!
  \******************************************/
/*! exports provided: KomentarKlasa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomentarKlasa", function() { return KomentarKlasa; });
var KomentarKlasa = /** @class */ (function () {
    function KomentarKlasa(k) {
        this.downVote = k.downVote;
        this.id = k.id;
        this.imeKorisnika = k.imeKorisnika;
        this.komentar = k.komentar;
        this.projekat = k.projekat;
        this.upVote = k.upVote;
    }
    return KomentarKlasa;
}());



/***/ }),

/***/ "./src/app/models/projekat.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/projekat.model.ts ***!
  \******************************************/
/*! exports provided: Projekat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projekat", function() { return Projekat; });
var Projekat = /** @class */ (function () {
    function Projekat(p) {
        this.id = p.id;
        this.naziv = p.naziv;
        this.opis = p.opis;
        this.readMe = p.readMe;
        this.komentari = p.komentari;
    }
    return Projekat;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(ucf) {
        this.id = ucf.id;
        this.firstName = ucf.firstName;
        this.lastName = ucf.lastName;
        this.username = ucf.username;
        this.password = ucf.password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  There is nothing here!\r\n</h1>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/projekat-details/projekat-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/projekat-details/projekat-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2pla2F0LWRldGFpbHMvcHJvamVrYXQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/projekat-details/projekat-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/projekat-details/projekat-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=projekat>\n    <h2>{{projekat.naziv}}</h2>\n    <p>{{projekat.opis}}</p>\n    <br>\n    <br>\n    <p>{{projekat.readMe}}</p>\n    <br>\n    <br>\n    <div>\n      Komentari \n\n      <br>\n      <br>\n      <button (click)=\"komentarToggle()\"> Dodaj Komentar</button>\n      <div class =\"lg-2\" *ngIf=dodajKomentar>\n      <form (ngSubmit)=\"addComment()\">\n          <div>\n            <label for=\"\">Komentar</label>\n            <textarea class=\"form-control\" name=\"input-project\" id=\"input-commentar\" [(ngModel)]=\"noviKomentar.komentar\" ></textarea>\n            <label for=\"\">Ime Korisnika</label>\n            <input class=\"form-control\" name=\"ime-korisnika\" id=\"input-commentar\" style=\"width:30%\" [(ngModel)]=\"noviKomentar.imeKorisnika\" />\n            <span>\n              \n              <input class=\"btn btn-success\" type=\"submit\" value=\"Dodaj\" />\n            </span>\n          </div>\n        </form>\n      </div>\n        <br>\n        <br>\n      <div *ngFor=\"let k of projekat.komentari\">\n       <div id=\"kometar\"> \n         <p> {{k.komentar}}</p>\n         <p>By: {{k.imeKorisnika}}</p>\n         <button class=\"glyphicon glyphicon-thumbs-up\"></button> \n              <button class=\"glyphicon glyphicon-thumbs-down\"></button>\n        <!-- <button>upVote</button> -->\n      </div>\n      <hr style=\"width: 100%; color: black; height: 1px; background-color:black;\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projekat-details/projekat-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/projekat-details/projekat-details.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjekatDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjekatDetailsComponent", function() { return ProjekatDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projekat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projekat.service */ "./src/app/projekat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_komentar_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/komentar.model */ "./src/app/models/komentar.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");







var ProjekatDetailsComponent = /** @class */ (function () {
    function ProjekatDetailsComponent(route, projekatService, http, atuhetntication) {
        this.route = route;
        this.projekatService = projekatService;
        this.http = http;
        this.atuhetntication = atuhetntication;
    }
    ProjekatDetailsComponent.prototype.ngOnInit = function () {
        //this.getUserName();
        // this.completeUser();
        this.getProjekat();
        this.noviKomentar = new _models_komentar_model__WEBPACK_IMPORTED_MODULE_4__["KomentarKlasa"]({
            id: 0,
            imeKorisnika: '',
            projekat: {},
            komentar: '',
            upVote: 0,
            downVote: 0,
        });
    };
    ProjekatDetailsComponent.prototype.komentarToggle = function () {
        this.dodajKomentar = !this.dodajKomentar;
    };
    ProjekatDetailsComponent.prototype.getProjekat = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.projekatService.getOne(_this.id).subscribe(function (res) {
                _this.projekat = res;
            });
        });
    };
    ProjekatDetailsComponent.prototype.addComment = function () {
        var _this = this;
        var k = this.noviKomentar;
        k.projekat = this.projekat;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.http.post('api/projekti/komentar', k, { headers: headers }).subscribe(function (res) {
            _this.getProjekat();
        });
    };
    ProjekatDetailsComponent.prototype.getUserName = function () {
        this.korisnikUsername = this.atuhetntication.getUser();
    };
    ProjekatDetailsComponent.prototype.completeUser = function () {
        var _this = this;
        this.projekatService.getUser(this.korisnikUsername).subscribe(function (rets) {
            _this.user = rets;
        });
    };
    ProjekatDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projekat-details',
            template: __webpack_require__(/*! ./projekat-details.component.html */ "./src/app/projekat-details/projekat-details.component.html"),
            styles: [__webpack_require__(/*! ./projekat-details.component.css */ "./src/app/projekat-details/projekat-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _projekat_service__WEBPACK_IMPORTED_MODULE_2__["ProjekatService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _security_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], ProjekatDetailsComponent);
    return ProjekatDetailsComponent;
}());



/***/ }),

/***/ "./src/app/projekat.service.ts":
/*!*************************************!*\
  !*** ./src/app/projekat.service.ts ***!
  \*************************************/
/*! exports provided: ProjekatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjekatService", function() { return ProjekatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProjekatService = /** @class */ (function () {
    function ProjekatService(http) {
        this.http = http;
    }
    ProjekatService.prototype.getAll = function (pageNumber) {
        return this.http.get("api/projekti?page=" + pageNumber + "&size=3");
    };
    ProjekatService.prototype.getUser = function (user) {
        return this.http.get("/users/" + user);
    };
    ProjekatService.prototype.getOne = function (id) {
        return this.http.get("api/projekti/" + id);
    };
    ProjekatService.prototype.filterPoNazivu = function (naziv) {
        return this.http.get("api/projekti/filter?naziv=" + naziv);
    };
    ProjekatService.prototype.save = function (projekat) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('api/projekti', JSON.stringify(projekat), { headers: headers });
    };
    ProjekatService.prototype.izmena = function (id, projekat) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put("api/projekti/" + id, projekat, { headers: headers });
    };
    ProjekatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjekatService);
    return ProjekatService;
}());



/***/ }),

/***/ "./src/app/registracija/registracija.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registracija/registracija.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    width: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmFjaWphL3JlZ2lzdHJhY2lqYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmFjaWphL3JlZ2lzdHJhY2lqYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/registracija/registracija.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registracija/registracija.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<form  class=\"form-signin\" (ngSubmit) = \"register()\">\n    <h2 class=\"form-signin-heading\">Register Here</h2>\n  <label for=\"student-number\">Name </label>\n  <input class=\"form-control\" name=\"name\"  type=\"text\" [(ngModel)]=\"newUser.firstName\"/>\n  <br/>\n  <label for=\"student-number\">LastName</label>\n  <input class=\"form-control\" name=\"surname\"  type=\"text\" [(ngModel)]=\"newUser.lastName\"/>\n  <br/>\n  <label for=\"student-number\">Username</label>\n  <input class=\"form-control\" name=\"username\"  type=\"text\" [(ngModel)]=\"newUser.username\"  />\n  <br/>\n  <label for=\"student-number\">Password</label>\n  <input  class=\"form-control\"name=\"pass\"  type=\"text\" [(ngModel)]=\"newUser.password\"/>\n  <input  class=\"btn btn-primary btn-block\" type=\"submit\" value=\"Register\"/>\n\n\n  <div *ngIf=existingUser class=\"alert alert-warning box-msg\" role=\"alert\">\n    Choose diferent username\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/registracija/registracija.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registracija/registracija.component.ts ***!
  \********************************************************/
/*! exports provided: RegistracijaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistracijaComponent", function() { return RegistracijaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistracijaComponent = /** @class */ (function () {
    function RegistracijaComponent(http, router) {
        this.http = http;
        this.router = router;
        this.newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]({
            firstName: '',
            lastName: '',
            username: '',
            password: '',
        });
        this.existingUser = false;
    }
    RegistracijaComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    RegistracijaComponent.prototype.getUsers = function () {
        var _this = this;
        this.http.get('api/users').subscribe(function (res) {
            _this.usersInSystem = res;
        });
    };
    RegistracijaComponent.prototype.register = function () {
        var _this = this;
        this.chechUser(this.newUser.username);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.http.post('api/register', this.newUser, { headers: headers }).subscribe(function (res) {
            if (!_this.existingUser) {
                _this.router.navigate(['/main']);
            }
            else {
                _this.existingUser = true;
            }
        });
    };
    RegistracijaComponent.prototype.chechUser = function (username) {
        for (var _i = 0, _a = this.usersInSystem; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.username !== username) {
                this.existingUser = false;
            }
            else {
                this.existingUser = true;
            }
        }
    };
    RegistracijaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registracija',
            template: __webpack_require__(/*! ./registracija.component.html */ "./src/app/registracija/registracija.component.html"),
            styles: [__webpack_require__(/*! ./registracija.component.css */ "./src/app/registracija/registracija.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistracijaComponent);
    return RegistracijaComponent;
}());



/***/ }),

/***/ "./src/app/security/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/security/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/jwt-utils.service */ "./src/app/security/jwt-utils.service.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        }));
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService.prototype.getUser = function () {
        if (localStorage.currentUser) {
            var user = JSON.parse(localStorage.getItem('currentUser'));
            return user.username;
        }
        else {
            return undefined;
        }
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__["JwtUtilsService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/security/can-activate-auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/security/can-activate-auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: CanActivateAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateAuthGuard", function() { return CanActivateAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CanActivateAuthGuard = /** @class */ (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    CanActivateAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "./src/app/security/jwt-utils.service.ts":
/*!***********************************************!*\
  !*** ./src/app/security/jwt-utils.service.ts ***!
  \***********************************************/
/*! exports provided: JwtUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUtilsService", function() { return JwtUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtUtilsService = /** @class */ (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());



/***/ }),

/***/ "./src/app/security/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/security/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");




var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Milan\Desktop\MirkovicMilan\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map