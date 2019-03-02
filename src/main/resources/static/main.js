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

/***/ "./src/app/_directives/alert/alert.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_directives/alert/alert.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19kaXJlY3RpdmVzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_directives/alert/alert.component.html":
/*!********************************************************!*\
  !*** ./src/app/_directives/alert/alert.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  alert works!\n</p>\n"

/***/ }),

/***/ "./src/app/_directives/alert/alert.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_directives/alert/alert.component.ts ***!
  \******************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/_directives/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/kongu.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/kongu.service.ts ***!
  \********************************************/
/*! exports provided: KonguService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonguService", function() { return KonguService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KonguService = /** @class */ (function () {
    function KonguService(_http) {
        this._http = _http;
        this.serviceURL = 'https://kmat.herokuapp.com';
    }
    KonguService.prototype.register = function (user) {
        return this._http.post(this.serviceURL + "/signUp", user);
    };
    KonguService.prototype.login = function (userId, password) {
        console.log('Test data in service', userId, password);
        return this._http.post(this.serviceURL + "/signIn", { mobile: userId, password: password });
    };
    KonguService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KonguService);
    return KonguService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "kongu-app";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/gallery/gallery.component */ "./src/app/pages/gallery/gallery.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _directives_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_directives/alert/alert.component */ "./src/app/_directives/alert/alert.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'services', component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"] },
    { path: 'profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"],
                _pages_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _directives_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"],
                _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _pages_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<header>\n  <div class=\"container\">\n    <!-- top header -->\n    <section class=\"row top_header pt-3\">\n      <div class=\"col-lg-6 buttons ml-auto\">\n        <p><span class=\"fa fa-phone\"></span> +91-424-2270227</p>\n        <a class=\"btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\"\n          href=\"/about#login-popup\">Login</a>\n        <a class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\"\n          href=\"/about#register-popup\">Register</a>\n      </div>\n    </section>\n    <!-- top header -->\n    <!-- nav -->\n    <nav class=\"py-3\">\n      <div id=\"logo\">\n        <h1>\n          <a class=\"navbar-brand\" href=\"index.html\">\n            <span class=\"fa fa-empire\"></span>Kongu Manamedai\n            <!-- <span><span class=\"line\"></span>Organizer</span> -->\n          </a>\n        </h1>\n      </div>\n\n      <label for=\"drop\" class=\"toggle\"><span class=\"fa fa-bars\"></span></label>\n      <input type=\"checkbox\" id=\"drop\" />\n      <ul class=\"menu mt-2\">\n        <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">Home</a>\n        </li>\n        <li class=\"mr-lg-3 mr-2 active\"><a href=\"#\" [routerLink]=\"['/about']\"\n            routerLinkActive=\"router-link-active\">About\n            Us</a></li>\n        <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/services']\"\n            routerLinkActive=\"router-link-active\">Services</a></li>\n        <!-- <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/gallery']\" routerLinkActive=\"router-link-active\">Gallery</a></li> -->\n        <!-- <li class=\"mr-lg-3 mr-2 pb-0\"> -->\n        <!-- First Tier Drop Down -->\n        <!-- <label for=\"drop-2\" class=\"toggle\"\n            >Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span>\n          </label>\n          <a href=\"#\"\n            >Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span\n          ></a>\n          <input type=\"checkbox\" id=\"drop-2\" />\n          <ul class=\"drop-down-ul\">\n            <li><a href=\"error.html\">Error Page</a></li>\n            <li><a href=\"events.html\">Events Page</a></li>\n          </ul>\n        </li> -->\n        <li><a href=\"#\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">Contact</a></li>\n      </ul>\n    </nav>\n    <!-- //nav -->\n  </div>\n</header>\n<!-- //header -->\n\n<!-- inner banner -->\n<div class=\"inner_banner layer\" id=\"home\">\n  <div class=\"container\">\n    <div class=\"agileinfo-inner\">\n      <h2 class=\"text-center text-white\">\n        About Us\n      </h2>\n    </div>\n  </div>\n</div>\n<!-- //inner banner -->\n<!-- breadcrumbs -->\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a href=\"index.html\">Home</a>\n    </li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">About Us</li>\n  </ol>\n</nav>\n<!-- //breadcrumbs -->\n\n<!-- welcome -->\n<!-- <section class=\"welcome py-5\" id=\"welcome\">\n  <div class=\"container py-md-5\">\n    <h3 class=\"heading text-capitalize text-center mb-lg-5 mb-4\">\n      we will plan every detail of your wedding\n    </h3>\n    <div class=\"row welcome-grids\">\n      <div class=\"col-lg-4 mb-lg-0 mb-5\">\n        <h4 class=\"left-heading\">Our Weddings Story</h4>\n        <p class=\"mb-3\">\n          Sed gravida dignissim magna idesn molestie. Nulla congue, ex init\n          dictum lacinia, nisl est posuere nulla, nec eges tas leo mi id lorem.\n          Maecenas sem nulla ex init dictu lacinia, Maecenas sem nulla. Sed\n          gravida dignissim magna idesn en molestie\n        </p>\n        <div class=\"welcome-button mt-4\">\n          <a href=\"about.html\">Read More</a>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <div class=\"image1 mb-4\">\n          <h4>Hair / Makeup</h4> -->\n<!-- <p class=\"mt-3\">Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init dictu lacinia, Maecenas sem nulla</P> -->\n<!-- </div>\n        <div class=\"image1\">\n          <h4>Venue & Catering</h4> -->\n<!-- <p class=\"mt-3\">Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init dictu lacinia, Maecenas sem nulla</P> -->\n<!-- </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6 mt-sm-0 mt-4\">\n        <div class=\"image1 mb-4\">\n          <h4>Photo / Video</h4> -->\n<!-- <p class=\"mt-3\">Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init dictu lacinia, Maecenas sem nulla</P> -->\n<!-- </div>\n        <div class=\"image1\">\n          <h4>Flowers & Music</h4> -->\n<!-- <p class=\"mt-3\">Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init dictu lacinia, Maecenas sem nulla</P> -->\n<!-- </div>\n      </div>\n    </div>\n  </div>\n</section> -->\n<!-- welcome -->\n\n<!-- about -->\n<section class=\"about py-5\">\n  <div class=\"container py-sm-3\">\n    <h3 class=\"heading text-capitalize mb-lg-5 mb-4\">Who We Are</h3>\n    <div class=\"row about-grids\">\n      <div class=\"col-lg-6\">\n        <h4>\n          We are committed to service excellence and quality on wedding & events\n        </h4>\n        <p class=\"mb-3\">\n          kongumanamedai.com is the Kongu Vellala Goundar community based portal\n          to search and fnd suitable profiles for life partner with the help of\n          experienced astrologers and elders in the community to identify a\n          perfect match to your life. It has dedicated to our Vellala Goundar\n          community people. It's the right destination for singles looking\n          for a life partner within their community. When you register on\n          kongumanamedai.com, based on our community, your profile will be\n          assigned to the relevant kootam and matching to astrological star.\n          Empowered by innovative tools and modern technologies,\n          kongumanamedai.com provides the widest choice of profiles,\n          that matches your criteria and expectations.\n        </p>\n      </div>\n      <div class=\"col-lg-6 mt-lg-0 mt-5\">\n        <img src=\"../../../assets/images/who.jpg\" alt=\"\" class=\"img-fluid\" />\n      </div>\n    </div>\n  </div>\n</section>\n<!-- //about -->\n\n<!-- contact query -->\n<!-- <section class=\"query\">\n  <div class=\"wthree-different-dot1 py-5\">\n    <div class=\"container py-sm-3\">\n      <div class=\"row query-grids\">\n        <div class=\"col-lg-5\">\n          <h4 class=\"mb-3\">Find Your Style</h4>\n          <p class=\"mb-3\">\n            Sed gravida dignissim magna idesn molestie. Nulla congue, ex init\n            dictu lacinia, nislen est posuere nulla, nec egestas leo miid sed\n            lorem. Maecenas sem nulla. Maecenas risus enim, pharetra accumsan\n            nulla vitae, mollis hendrerit orci. Pellentesque nec purus eurts\n            tortor molestie fringilla ut sit amet mauris. Maecenas mattis\n            eleifend lacus non condimentum.\n          </p>\n          <a href=\"contact.html\">Contact and Inquiry </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section> -->\n<!-- //contact query -->\n\n<!-- subscribe -->\n<!-- <section class=\"subscribe text-center bg-light py-5\">\n  <div class=\"container p-sm-3\">\n    <h3 class=\"heading mb-2\">Subscribe Newsletter</h3>\n    <p class=\"mb-5\">Signup and recieve 15% on your First Plan.</p>\n    <form action=\"#\" method=\"post\">\n      <input class=\"form-control\" type=\"email\" placeholder=\"Your Email Address\" name=\"Subscribe\" required=\"\" />\n      <button class=\"btn1\">\n        <span class=\"fa fa-paper-plane\"></span>\n      </button>\n    </form>\n  </div>\n</section> -->\n<!-- //subscribe -->\n\n<!-- footer -->\n<footer>\n  <!-- <div class=\"container py-5\">\n    <div class=\"row footer-gap\">\n      <div class=\"col-lg-4 col-sm-6\">\n        <h3 class=\"text-capitalize mb-3\">Address</h3>\n        <address class=\"mb-0\">\n          <p class=\"\">\n            <span class=\"fa fa-map-marker\"></span> 2466H 5th Street Parking,\n            King <br />Block, New York City.\n          </p>\n          <p><span class=\"fa fa-clock-o\"></span> Timings : 10 a.m to 6 p.m</p>\n          <p><span class=\"fa fa-phone\"></span> +12 8976 2334</p>\n          <p>\n            <span class=\"fa fa-envelope-open\"></span>\n            <a href=\"mailto:info@example.com\">info@example.com</a>\n          </p>\n        </address>\n      </div>\n      <div class=\"col-lg-4 col-sm-6 mt-lg-0 mt-sm-0 mt-4 p-md-0\">\n        <h3 class=\"text-capitalize mb-4\">Meanwhile On Instagram</h3>\n        <div class=\"images\">\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta2.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta3.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta4.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta5.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta6.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta7.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta8.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta9.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 offset-lg-1 col-sm-6 mt-lg-0 mt-sm-5 mt-4\">\n        <h3 class=\"text-capitalize mb-3\">Follow us</h3>\n        <p class=\"mb-4\">Follow us on social media</p>\n        <ul class=\"social mt-lg-0 mt-3\">\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-facebook\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-twitter\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-google-plus\"></span></a>\n          </li>\n          <li class=\"\">\n            <a href=\"#\"><span class=\"fa fa-linkedin\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-rss\"></span></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"copyright pb-5 text-center\">\n    <p>\n      <!-- © 2018 Wedding Organizer. All Rights Reserved | -->\n      Design by\n      <a href=\"http://www.W3Layouts.com\" target=\"_blank\">W3Layouts</a>\n    </p>\n  </div>\n</footer>\n<!-- footer -->\n\n<!-- popup for login -->\n<div id=\"login-popup\" class=\"popup-effect\">\n  <div class=\"popup\">\n    <h5 class=\"modal-title text-uppercase\">Login</h5>\n    <div class=\"login-form\">\n      <form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">User Name</label>\n          <input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name\" required=\"\" />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name1\" required=\"\" />\n        </div>\n        <div class=\"right-w3l\">\n          <input type=\"submit\" class=\"form-control\" value=\"Login\" />\n        </div>\n      </form>\n    </div>\n    <a class=\"close\" href=\"#\">&times;</a>\n  </div>\n</div>\n<!-- popup for login -->\n\n<!-- popup for register -->\n<div id=\"login-popup\" class=\"popup-effect\">\n  <div class=\"popup\">\n    <h5 class=\"modal-title text-uppercase\">Login</h5>\n    <app-login></app-login>\n  </div>\n</div>\n<!-- popup for register -->"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<header>\n\t<div class=\"container\">\n\t\t<!-- top header -->\n\t\t<section class=\"row top_header pt-3\">\n\t\t\t<div class=\"col-lg-6 buttons ml-auto\">\n\t\t\t\t<p><span class=\"fa fa-phone\"></span> +91-424-2270227</p>\n\t\t\t\t<a class=\"btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\"\n\t\t\t\t\thref=\"#login-popup\">Login</a>\n\t\t\t\t<a class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\"\n\t\t\t\t\thref=\"#register-popup\">Register</a>\n\t\t\t</div>\n\t\t</section>\n\t\t<!-- top header -->\n\t\t<!-- nav -->\n\t\t<nav class=\"py-3\">\n\t\t\t<div id=\"logo\">\n\t\t\t\t<h1>\n\t\t\t\t\t<a class=\"navbar-brand\" href=\"index.html\"> <span class=\"fa fa-empire\"></span>Kongu Manamedai\n\t\t\t\t\t\t<!-- <span><span class=\"line\"></span>Organizer</span> -->\n\t\t\t\t\t</a>\n\t\t\t\t</h1>\n\t\t\t</div>\n\n\t\t\t<label for=\"drop\" class=\"toggle\"><span class=\"fa fa-bars\"></span></label>\n\t\t\t<input type=\"checkbox\" id=\"drop\" />\n\t\t\t<ul class=\"menu mt-2\">\n\t\t\t\t<li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/home']\"\n\t\t\t\t\t\trouterLinkActive=\"router-link-active\">Home</a></li>\n\t\t\t\t<li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/about']\"\n\t\t\t\t\t\trouterLinkActive=\"router-link-active\">About Us</a></li>\n\t\t\t\t<li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/services']\"\n\t\t\t\t\t\trouterLinkActive=\"router-link-active\">Services</a></li>\n\t\t\t\t<!-- <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/gallery']\" routerLinkActive=\"router-link-active\">Gallery</a></li> -->\n\n\t\t\t\t<!-- <li class=\"mr-lg-3 mr-2 pb-0\"> -->\n\t\t\t\t<!-- First Tier Drop Down -->\n\t\t\t\t<!-- <label for=\"drop-2\" class=\"toggle\">Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span> </label>\n                <a href=\"#\">Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span></a>\n                <input type=\"checkbox\" id=\"drop-2\"/>\n                <ul class=\"drop-down-ul\">\n                    <li><a href=\"error.html\">Error Page</a></li>\n                    <li><a href=\"events.html\">Events Page</a></li>\n                </ul>\n                </li> -->\n\t\t\t\t<li class=\"active\"><a href=\"#\" [routerLink]=\"['/contact']\"\n\t\t\t\t\t\trouterLinkActive=\"router-link-active\">Contact</a></li>\n\t\t\t</ul>\n\t\t</nav>\n\t\t<!-- //nav -->\n\t</div>\n</header>\n<!-- //header -->\n\n<!-- inner banner -->\n<div class=\"inner_banner layer\" id=\"home\">\n\t<div class=\"container\">\n\t\t<div class=\"agileinfo-inner\">\n\t\t\t<h2 class=\"text-center text-white\">\n\t\t\t\tContact\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n</div>\n<!-- //inner banner -->\n<!-- breadcrumbs -->\n<nav aria-label=\"breadcrumb\">\n\t<ol class=\"breadcrumb\">\n\t\t<li class=\"breadcrumb-item\">\n\t\t\t<a href=\"index.html\">Home</a>\n\t\t</li>\n\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Contact Us</li>\n\t</ol>\n</nav>\n<!-- //breadcrumbs -->\n\n<!-- contact -->\n<section class=\"contact py-5\">\n\t<div class=\"container py-sm-3\">\n\t\t<h3 class=\"heading text-capitalize mb-lg-5 mb-4\"> Contact Us </h3>\n\t\t<div class=\"address row\">\n\t\t\t<div class=\"col-md-4 address-grid\">\n\t\t\t\t<div class=\"address-info\">\n\t\t\t\t\t<div class=\"address-left text-center\">\n\t\t\t\t\t\t<span class=\"fa fa-map-marker\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"address-right text-center\">\n\t\t\t\t\t\t<h6 class=\"ad-info text-uppercase mb-2\">Address</h6>\n\t\t\t\t\t\t<p> 205-A, SKC road, Surampatti Nal Road, Erode – 638009.\n\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 address-grid\">\n\t\t\t\t<div class=\"address-info\">\n\t\t\t\t\t<div class=\"address-left text-center\">\n\t\t\t\t\t\t<span class=\"fa fa-envelope\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"address-right text-center\">\n\t\t\t\t\t\t<h6 class=\"ad-info text-uppercase mb-2\">Email</h6>\n\t\t\t\t\t\t<a href=\"mailto:info@kongumanamedai.com\"> info@kongumanamedai.com</a>\n\t\t\t\t\t\t<!-- <a href=\"mailto:information@example1.com\"> information@example1.com</a> -->\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 address-grid\">\n\t\t\t\t<div class=\"address-info\">\n\t\t\t\t\t<div class=\"address-left text-center\">\n\t\t\t\t\t\t<span class=\"fa fa-phone\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"address-right text-center\">\n\t\t\t\t\t\t<h6 class=\"ad-info text-uppercase mb-2\">Phone</h6>\n\t\t\t\t\t\t<p>+91-424-2270227</p>\n\t\t\t\t\t\t<!-- <p>+1 234 567 8901</p> -->\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form row py-5\">\n\t\t\t<div class=\"col-lg-6 contact-form\">\n\t\t\t\t<form action=\"#\" method=\"post\">\n\t\t\t\t\t<div class=\"fields-grid\">\n\t\t\t\t\t\t<div class=\"styled-input agile-styled-input-top\">\n\t\t\t\t\t\t\t<input type=\"text\" name=\"First name\" required=\"\">\n\t\t\t\t\t\t\t<label>Full Name</label>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"styled-input\">\n\t\t\t\t\t\t\t<input type=\"email\" name=\"Email\" required=\"\">\n\t\t\t\t\t\t\t<label>Email Address</label>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"styled-input\">\n\t\t\t\t\t\t\t<input type=\"tel\" name=\"Phone\" required=\"\">\n\t\t\t\t\t\t\t<label>Phone Number</label>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"styled-input mt-5\">\n\t\t\t\t\t\t\t<textarea></textarea>\n\t\t\t\t\t\t\t<label class=\"text\">Your Message</label>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type=\"submit\" value=\"Submit\">\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-6 mt-lg-0 mt-5\">\n\t\t\t\t<div class=\"bg-img\">\n\t\t\t\t\t<div class=\"contact-layer\">\n\t\t\t\t\t\t<h3 class=\"mb-3\">Dont hesitate to contact us for any kind of information</h3>\n\t\t\t\t\t\t<p><i class=\"fas mr-2 fa-mobile-alt\"></i> +91-424-2270227</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"map\">\n\t\t\t<!-- <iframe\n\t\t\t\tsrc=\"https://www.google.com/maps/search/SKC+road,+Surampatti+Naal+Road,+Erode/@11.3357915,77.7173592,15.7z\"\n\t\t\t\tstyle=\"border:0\"></iframe> -->\n\t\t\t<iframe\n\t\t\t\tsrc=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387142.84010033106!2d-74.25819252532891!3d40.70583163828471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1475140387172\"\n\t\t\t\tstyle=\"border:0\"></iframe>\n\t\t</div>\n\t</div>\n</section>\n<!-- //contact -->\n\n<!-- footer -->\n<footer>\n\t<div class=\"container py-5\">\n\t\t<div class=\"row footer-gap\">\n\t\t\t<!-- <div class=\"col-lg-4 col-sm-6\">\n\t\t\t\t<h3 class=\"text-capitalize mb-3\">Address</h3>\n\t\t\t\t<address class=\"mb-0\">\n\t\t\t\t\t<p class=\"\"><span class=\"fa fa-map-marker\"></span> 2466H 5th Street Parking, King <br>Block, New\n\t\t\t\t\t\tYork City.</p>\n\t\t\t\t\t<p><span class=\"fa fa-clock-o\"></span> Timings : 10 a.m to 6 p.m</p>\n\t\t\t\t\t<p><span class=\"fa fa-phone\"></span> +12 8976 2334</p>\n\t\t\t\t\t<p><span class=\"fa fa-envelope-open\"></span> <a href=\"mailto:info@example.com\">info@example.com</a>\n\t\t\t\t\t</p>\n\t\t\t\t</address>\n\t\t\t</div> -->\n\t\t\t<!-- <div class=\"col-lg-4 col-sm-6 mt-lg-0 mt-sm-0 mt-4 p-md-0\">\n\t\t\t\t<h3 class=\"text-capitalize mb-4\">Meanwhile On Instagram</h3>\n\t\t\t\t<div class=\"images\">\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta2.jpg\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta3.jpg\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta4.jpg\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta5.jpg\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta6.jpg\" alt=\"\"\n\t\t\t\t\t\t\tclass=\"img-fluid\" /> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta7.jpg\" alt=\"\"\n\t\t\t\t\t\t\tclass=\"img-fluid\" /> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta8.jpg\" alt=\"\"\n\t\t\t\t\t\t\tclass=\"img-fluid\" /> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta9.jpg\" alt=\"\"\n\t\t\t\t\t\t\tclass=\"img-fluid\" /> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta1.jpg\" alt=\"\"\n\t\t\t\t\t\t\tclass=\"img-fluid\" /> </a>\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t\t<!-- <div class=\"col-lg-3 offset-lg-1 col-sm-6 mt-lg-0 mt-sm-5 mt-4\">\n\t\t\t\t<h3 class=\"text-capitalize mb-3\"> Follow us</h3>\n\t\t\t\t<p class=\"mb-4\">Follow us on social media</p>\n\t\t\t\t<ul class=\"social mt-lg-0 mt-3\">\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-facebook\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-twitter\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-google-plus\"></span></a></li>\n\t\t\t\t\t<li class=\"\"><a href=\"#\"><span class=\"fa fa-linkedin\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-rss\"></span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n\t<div class=\"copyright pb-5 text-center\">\n\t\t<!-- <p>© 2018 Wedding Organizer. All Rights Reserved |  -->\n\t\t<p>Design by <a href=\"http://www.W3Layouts.com\" target=\"_blank\">W3Layouts</a></p>\n\t</div>\n</footer>\n<!-- footer -->\n\n<!-- popup for login -->\n<div id=\"login-popup\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<h5 class=\"modal-title text-uppercase\">Login</h5>\n\t\t<div class=\"login-form\">\n\t\t\t<form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">User Name</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name1\"\n\t\t\t\t\t\trequired=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-w3l\">\n\t\t\t\t\t<input type=\"submit\" class=\"form-control\" value=\"Login\">\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t</div>\n\t\t<a class=\"close\" href=\"#\">&times;</a>\n\t</div>\n</div>\n<!-- popup for login -->\n\n<!-- popup for register -->\n<div id=\"login-popup\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<h5 class=\"modal-title text-uppercase\">Login</h5>\n\t\t<app-login></app-login>\n\t</div>\n</div>\n<!-- popup for register -->"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- header -->\n<header>\n\t<div class=\"container\">\n\t\t<!-- top header -->\n\t\t<section class=\"row top_header pt-3\">\n\t\t\t<div class=\"col-lg-6 buttons ml-auto\">\n\t\t\t\t<p><span class=\"fa fa-phone\"></span>  +91 98765 43210</p>\n\t\t\t\t<a class=\"btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\" href=\"#login-popup\">Login</a>\n\t\t\t\t<a class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\" href=\"#register-popup\">Register</a>\n\t\t\t</div>\n\t\t</section>\n\t\t<!-- top header -->\n\t\t<!-- nav -->\n\t\t<nav class=\"py-3\">\n        <div id=\"logo\">\n\t\t\t<h1>\n        <a class=\"navbar-brand\" href=\"index.html\"> <span class=\"fa fa-empire\"></span>Kongu Manamedai \n          <!-- <span><span class=\"line\"></span>Organizer</span> -->\n\t\t\t\t</a>\n\t\t\t</h1>\n\t\t</div>\n\n        <label for=\"drop\" class=\"toggle\"><span class=\"fa fa-bars\"></span></label>\n        <input type=\"checkbox\" id=\"drop\" />\n            <ul class=\"menu mt-2\">\n                <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">Home</a></li>\n                <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">About Us</a></li>\n                <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/services']\" routerLinkActive=\"router-link-active\">Services</a></li>\n                <li class=\"mr-lg-3 mr-2 active\"><a href=\"#\" [routerLink]=\"['/gallery']\" routerLinkActive=\"router-link-active\">Gallery</a></li>\n                <!-- <li class=\"mr-lg-3 mr-2 pb-0\"> -->\n                <!-- First Tier Drop Down -->\n                <!-- <label for=\"drop-2\" class=\"toggle\">Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span> </label>\n                <a href=\"#\">Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span></a>\n                <input type=\"checkbox\" id=\"drop-2\"/>\n                <ul class=\"drop-down-ul\">\n                    <li><a href=\"error.html\">Error Page</a></li>\n                    <li><a href=\"events.html\">Events Page</a></li>\n                </ul>\n                </li> -->\n                <li><a href=\"#\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">Contact</a></li>\n            </ul>\n        </nav>\n\t\t<!-- //nav -->\n\t</div>\n</header>\n<!-- //header -->\n\n<!-- inner banner -->\n<div class=\"inner_banner layer\" id=\"home\">\n\t<div class=\"container\">\n\t\t<div class=\"agileinfo-inner\">\n\t\t\t<h2 class=\"text-center text-white\">\n\t\t\t\tGallery Page\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n</div>\n<!-- //inner banner -->\n<!-- breadcrumbs -->\n<nav aria-label=\"breadcrumb\">\n\t<ol class=\"breadcrumb\">\n\t\t<li class=\"breadcrumb-item\">\n\t\t\t<a href=\"index.html\">Home</a>\n\t\t</li>\n\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Gallery Page</li>\n\t</ol>\n</nav>\n<!-- //breadcrumbs -->\n\n\n<!-- portfolio -->\n<section class=\"wthree-row w3-gallery py-sm-5 py-3\" id=\"gallery\">\n\t<div class=\"container py-lg-5 py-3\">\n\t\t<h3 class=\"heading text-center mb-lg-5 mb-4\">Our Gallery</h3>\n\t\t<div class=\"row portfolio-area\">\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup1\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g1.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup2\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g2.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup3\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g3.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup4\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g4.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup5\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g5.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup6\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g6.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup7\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g7.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup8\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g8.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup1\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g1.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup2\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g2.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup3\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g3.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3 col-sm-6 p-1\">\n\t\t\t\t<div class=\"portfolio-item2\">\n\t\t\t\t\t<a class=\"\" href=\"#popup4\" >\n\t\t\t\t\t\t<img src=\"../../../assets/images/g4.jpg\" class=\"img-fluid w3layouts agileits\" alt=\"Wedding\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<!--end portfolio-area -->\n\t</div>\n\t<!-- //gallery container -->\n</section>\n<!-- //portfolio -->\n\n<!-- footer -->\t\n<footer>\n\t<div class=\"container py-5\">\n\t\t<div class=\"row footer-gap\">\n\t\t\t<div class=\"col-lg-4 col-sm-6\">\n\t\t\t\t<h3 class=\"text-capitalize mb-3\">Address</h3>\n\t\t\t\t<address class=\"mb-0\">\n\t\t\t\t\t<p class=\"\"><span class=\"fa fa-map-marker\"></span> 2466H 5th Street Parking, King <br>Block, New York City.</p>\n\t\t\t\t\t<p><span class=\"fa fa-clock-o\"></span> Timings : 10 a.m to 6 p.m</p>\n\t\t\t\t\t<p><span class=\"fa fa-phone\"></span> +12 8976 2334</p>\n\t\t\t\t\t<p><span class=\"fa fa-envelope-open\"></span> <a href=\"mailto:info@example.com\">info@example.com</a></p>\n\t\t\t\t</address>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-sm-6 mt-lg-0 mt-sm-0 mt-4 p-md-0\">\n\t\t\t\t<h3 class=\"text-capitalize mb-4\">Meanwhile On Instagram</h3>\n\t\t\t\t<div class=\"images\">\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta2.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta3.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta4.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta5.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta6.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta7.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta8.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta9.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 offset-lg-1 col-sm-6 mt-lg-0 mt-sm-5 mt-4\">\n\t\t\t\t<h3 class=\"text-capitalize mb-3\"> Follow us</h3>\n\t\t\t\t<p class=\"mb-4\">Follow us on social media</p>\n\t\t\t\t<ul class=\"social mt-lg-0 mt-3\">\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-facebook\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-twitter\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-google-plus\"></span></a></li>\n\t\t\t\t\t<li class=\"\"><a href=\"#\"><span class=\"fa fa-linkedin\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-rss\"></span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"copyright pb-5 text-center\">\n\t\t<p>© 2018 Wedding Organizer. All Rights Reserved | Design by <a href=\"http://www.W3Layouts.com\" target=\"_blank\">W3Layouts</a></p>\n\t</div>\n</footer>\n<!-- footer -->\n\t\n<!-- popup1 -->\n<div id=\"popup1\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<img src=\"../../../assets/images/g1.jpg\" alt=\"Popup Image\" class=\"img-fluid\" />\n\t\t<a class=\"close\" href=\"#gallery\">&times;</a>\n\t</div>\n</div>\n<!-- //popup1 -->\n<!-- popup2 -->\n<div id=\"popup2\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<img src=\"../../../assets/images/g2.jpg\" alt=\"Popup Image\" class=\"img-fluid\" />\n\t\t<a class=\"close\" href=\"#gallery\">&times;</a>\n\t</div>\n</div>\n<!-- //popup2 -->\n<!-- popup3 -->\n<div id=\"popup3\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<img src=\"../../../assets/images/g3.jpg\" alt=\"Popup Image\" class=\"img-fluid\" />\n\t\t<a class=\"close\" href=\"#gallery\">&times;</a>\n\t</div>\n</div>\n<!-- //popu3 -->\n<!-- popup4 -->\n<div id=\"popup4\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<img src=\"../../../assets/images/g4.jpg\" alt=\"Popup Image\" class=\"img-fluid\" />\n\t\t<a class=\"close\" href=\"#gallery\">&times;</a>\n\t</div>\n</div>\n<!-- //popup4 -->\n<!-- popup5 -->\n<div id=\"popup5\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<img src=\"../../../assets/images/g5.jpg\" alt=\"Popup Image\" class=\"img-fluid\" />\n\t\t<a class=\"close\" href=\"#gallery\">&times;</a>\n\t</div>\n</div>\n<!-- //popup5 -->\n<!-- popup6 -->\n<div id=\"popup6\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<img src=\"../../../assets/images/g6.jpg\" alt=\"Popup Image\" class=\"img-fluid\" />\n\t\t<a class=\"close\" href=\"#gallery\">&times;</a>\n\t</div>\n</div>\n<!-- //popup6 -->\n<!-- popup7 -->\n<div id=\"popup7\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<img src=\"../../../assets/images/g7.jpg\" alt=\"Popup Image\" class=\"img-fluid\" />\n\t\t<a class=\"close\" href=\"#gallery\">&times;</a>\n\t</div>\n</div>\n<!-- //popup7 -->\n<!-- popup8 -->\n<div id=\"popup8\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<img src=\"../../../assets/images/g8.jpg\" alt=\"Popup Image\" class=\"img-fluid\" />\n\t\t<a class=\"close\" href=\"#gallery\">&times;</a>\n\t</div>\n</div>\n<!-- //popup8 -->\n\n<!-- popup for login -->\n<div id=\"login-popup\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<h5 class=\"modal-title text-uppercase\">Login</h5>\n\t\t<div class=\"login-form\">\n\t\t\t<form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">User Name</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name1\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-w3l\">\n\t\t\t\t\t<input type=\"submit\" class=\"form-control\" value=\"Login\">\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t</div>\n\t\t<a class=\"close\" href=\"#\">&times;</a>\n\t</div>\n</div>\n<!-- popup for login -->\n\n<!-- popup for register -->\n<div id=\"register-popup\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<h5 class=\"modal-title text-uppercase\">Register</h5>\n\t\t<div class=\"lregister-form\">\n\t\t\t<form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">First Name</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name2\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">Last Name</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name3\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">Email id</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name4\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">Mobile Number</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name5\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name6\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-w3l\">\n\t\t\t\t\t<input type=\"submit\" class=\"form-control\" value=\"Get Started\">\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<a class=\"close\" href=\"#\">&times;</a>\n\t</div>\n</div>\n<!-- popup for register -->"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.ts ***!
  \****************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/pages/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/pages/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown \r\n{\r\ncolor:  #555;\r\nmargin: -20px -22px 0 100%;\r\nwidth: 143px;\r\nposition: relative;\r\nheight: 17px;\r\ntext-align:left;\r\nfont-size: 14px;\r\nfont-weight: bold;\r\n}\r\n.submenu\r\n{\r\nbackground: #004b1a;/* #fff; */\r\nposition: absolute;\r\ntop: -12px;\r\nleft: -20px;\r\nz-index: 100;\r\nwidth: 135px;\r\ndisplay: none;\r\nmargin-left: 10px;\r\npadding: 40px 0 5px;\r\nborder-radius: 6px;\r\nbox-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);\r\n}\r\n.dropdown li a \r\n{\r\ncolor: #feed01; /* #555555;*/\r\ndisplay: block;\r\nfont-family: arial;\r\nfont-weight: bold;\r\npadding: 6px 15px;\r\ncursor: pointer;\r\ntext-decoration:none;\r\n}\r\n.dropdown li a:hover\r\n{\r\nbackground: #FFFFFF; /* #155FB0; */\r\ncolor:#555; /* #FFFFFF; */\r\ntext-decoration: none;\r\n}\r\na.account \r\n{\r\nfont-size: 14px;\r\nline-height: 16px;\r\ncolor: #feed01; /* #555; */\r\nposition: absolute;\r\nz-index: 110;\r\ndisplay: block;\r\npadding: 11px 0 0 20px;\r\nborder-radius: 6px;\r\nheight: 40px;\r\nwidth: 135px;\r\nmargin: -11px 0 0 -10px;\r\ntext-decoration: none;\r\nbackground: url('user.png') 102px 7px no-repeat;\r\ncursor:pointer;\r\nbackground-color: #004b1a;\r\n}\r\n.root\r\n{\r\nlist-style:none;\r\nmargin:0px;\r\npadding:0px;\r\nfont-size: 14px;\r\npadding: 11px 0 0 0px;\r\nborder-top:1px solid #dedede;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixrQkFBa0I7Q0FDakI7QUFDRDs7QUFFQSxvQkFBb0IsV0FBVztBQUMvQixtQkFBbUI7QUFDbkIsV0FBVztBQUNYLFlBQVk7QUFDWixhQUFhO0FBQ2IsYUFBYTtBQUNiLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQiwwQ0FBMEM7Q0FDekM7QUFDRDs7QUFFQSxlQUFlLENBQUMsYUFBYTtBQUM3QixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtDQUNwQjtBQUVEOztBQUVBLG9CQUFvQixDQUFDLGNBQWM7QUFDbkMsV0FBVyxDQUFDLGNBQWM7QUFDMUIsc0JBQXNCO0NBQ3JCO0FBQ0Q7O0FBRUEsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixlQUFlLENBQUMsV0FBVztBQUMzQixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLGVBQWU7QUFDZix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QixnREFBb0U7QUFDcEUsZUFBZTtBQUNmLDBCQUEwQjtDQUN6QjtBQUNEOztBQUVBLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixzQkFBc0I7QUFDdEIsNkJBQTZCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIFxyXG57XHJcbmNvbG9yOiAgIzU1NTtcclxubWFyZ2luOiAtMjBweCAtMjJweCAwIDEwMCU7XHJcbndpZHRoOiAxNDNweDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5oZWlnaHQ6IDE3cHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5mb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3VibWVudVxyXG57XHJcbmJhY2tncm91bmQ6ICMwMDRiMWE7LyogI2ZmZjsgKi9cclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IC0xMnB4O1xyXG5sZWZ0OiAtMjBweDtcclxuei1pbmRleDogMTAwO1xyXG53aWR0aDogMTM1cHg7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5wYWRkaW5nOiA0MHB4IDAgNXB4O1xyXG5ib3JkZXItcmFkaXVzOiA2cHg7XHJcbmJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xyXG59XHJcbi5kcm9wZG93biBsaSBhIFxyXG57XHJcbmNvbG9yOiAjZmVlZDAxOyAvKiAjNTU1NTU1OyovXHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5mb250LWZhbWlseTogYXJpYWw7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5wYWRkaW5nOiA2cHggMTVweDtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duIGxpIGE6aG92ZXJcclxue1xyXG5iYWNrZ3JvdW5kOiAjRkZGRkZGOyAvKiAjMTU1RkIwOyAqL1xyXG5jb2xvcjojNTU1OyAvKiAjRkZGRkZGOyAqL1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuYS5hY2NvdW50IFxyXG57XHJcbmZvbnQtc2l6ZTogMTRweDtcclxubGluZS1oZWlnaHQ6IDE2cHg7XHJcbmNvbG9yOiAjZmVlZDAxOyAvKiAjNTU1OyAqL1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnotaW5kZXg6IDExMDtcclxuZGlzcGxheTogYmxvY2s7XHJcbnBhZGRpbmc6IDExcHggMCAwIDIwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDZweDtcclxuaGVpZ2h0OiA0MHB4O1xyXG53aWR0aDogMTM1cHg7XHJcbm1hcmdpbjogLTExcHggMCAwIC0xMHB4O1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbnMvdXNlci5wbmcpIDEwMnB4IDdweCBuby1yZXBlYXQ7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDA0YjFhO1xyXG59XHJcbi5yb290XHJcbntcclxubGlzdC1zdHlsZTpub25lO1xyXG5tYXJnaW46MHB4O1xyXG5wYWRkaW5nOjBweDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5wYWRkaW5nOiAxMXB4IDAgMCAwcHg7XHJcbmJvcmRlci10b3A6MXB4IHNvbGlkICNkZWRlZGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- top header -->\n<section class=\"row top_header pt-3\">\n  <div class=\"col-lg-6 buttons ml-auto\">\n    <p style=\"color:#004b1a\"><span style=\"color:#004b1a\" class=\"fa fa-phone\"></span> +91-424-2270227</p>\n    <p *ngIf=\"currentUser\" style=\"color:#004b1a\"> Welcome <span class=\"fa fa-user\"></span>\n      <b>{{currentUser.firstname}}</b>\n    </p>\n    <a *ngIf=\"!currentUser\" class=\"btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\"\n      href=\"/home#login-popup\">Login</a>\n    <a *ngIf=\"!currentUser\" class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\"\n      href=\"/home#register-popup\">Register</a>\n  </div>\n\n  <!-- logout menu -->\n  <div *ngIf=\"currentUser\" class=\"dropdown\">\n    <a class=\"account\">My Account</a>\n    <div class=\"submenu\">\n      <ul class=\"root\">\n        <li><a href=\"#Dashboard\">Dashboard</a></li>\n        <li><a href=\"#Profile\">Profile</a></li>\n        <li><a href=\"#settings\">Settings</a></li>\n        <li><a href=\"#feedback\">Send Feedback</a></li>\n        <li><a href=\"/home\" (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n  <!-- logout menu -->\n</section>\n<!-- top header -->\n\n<div *ngIf=\"currentUser\" id=\"logo\">\n  <h1>\n    <a style=\"color:#004b1a\" class=\"navbar-brand\" href=\"index.html\">\n      <span class=\"fa fa-empire\"></span>Kongu Manamedai\n      <!-- <span><span class=\"line\"></span>Organizer</span> -->\n    </a>\n  </h1>\n</div>"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HeaderComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.account').click(function () {
                var X = jquery__WEBPACK_IMPORTED_MODULE_1__(this).attr('id');
                if (X == 1) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('.submenu').hide();
                    jquery__WEBPACK_IMPORTED_MODULE_1__(this).attr('id', '0');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('.submenu').show();
                    jquery__WEBPACK_IMPORTED_MODULE_1__(this).attr('id', '1');
                }
            });
            //Mouse click on sub menu
            jquery__WEBPACK_IMPORTED_MODULE_1__('.submenu').mouseup(function () {
                return false;
            });
            //Mouse click on my account link
            jquery__WEBPACK_IMPORTED_MODULE_1__('.account').mouseup(function () {
                return false;
            });
            //Document Click
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).mouseup(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.submenu').hide();
                jquery__WEBPACK_IMPORTED_MODULE_1__('.account').attr('id', '');
            });
        });
    };
    HeaderComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/pages/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown \r\n{\r\ncolor:  #555;\r\nmargin: -20px -22px 0 100%;\r\nwidth: 143px;\r\nposition: relative;\r\nheight: 17px;\r\ntext-align:left;\r\nfont-size: 14px;\r\nfont-weight: bold;\r\n}\r\n.submenu\r\n{\r\nbackground: #004b1a;/* #fff; */\r\nposition: absolute;\r\ntop: -12px;\r\nleft: -20px;\r\nz-index: 100;\r\nwidth: 135px;\r\ndisplay: none;\r\nmargin-left: 10px;\r\npadding: 40px 0 5px;\r\nborder-radius: 6px;\r\nbox-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);\r\n}\r\n.dropdown li a \r\n{\r\ncolor: #feed01; /* #555555;*/\r\ndisplay: block;\r\nfont-family: arial;\r\nfont-weight: bold;\r\npadding: 6px 15px;\r\ncursor: pointer;\r\ntext-decoration:none;\r\n}\r\n.dropdown li a:hover\r\n{\r\nbackground: rgb(61, 6, 6); /* #155FB0; */\r\ncolor:#555; /* #FFFFFF; */\r\ntext-decoration: none;\r\n}\r\na.account \r\n{\r\nfont-size: 14px;\r\nline-height: 16px;\r\ncolor: rgb(129, 10, 10); /* #555; */\r\nposition: absolute;\r\nz-index: 110;\r\ndisplay: block;\r\npadding: 11px 0 0 20px;\r\nheight: 50px;\r\nwidth: 160px;\r\nmargin: -11px 0 0 -10px;\r\ntext-decoration: none;\r\nbackground: url('user.png') 102px 7px no-repeat;\r\ncursor:pointer;\r\n}\r\n.root\r\n{\r\nlist-style:none;\r\nmargin:0px;\r\npadding:0px;\r\nfont-size: 14px;\r\npadding: 11px 0 0 0px;\r\nborder-top:1px solid #dedede;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsYUFBYTtBQUNiLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtDQUNqQjtBQUNEOztBQUVBLG9CQUFvQixXQUFXO0FBQy9CLG1CQUFtQjtBQUNuQixXQUFXO0FBQ1gsWUFBWTtBQUNaLGFBQWE7QUFDYixhQUFhO0FBQ2IsY0FBYztBQUNkLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLDBDQUEwQztDQUN6QztBQUNEOztBQUVBLGVBQWUsQ0FBQyxhQUFhO0FBQzdCLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIscUJBQXFCO0NBQ3BCO0FBRUQ7O0FBRUEsMEJBQTBCLENBQUMsY0FBYztBQUN6QyxXQUFXLENBQUMsY0FBYztBQUMxQixzQkFBc0I7Q0FDckI7QUFDRDs7QUFFQSxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLHdCQUF3QixDQUFDLFdBQVc7QUFDcEMsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYixhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QixnREFBb0U7QUFDcEUsZUFBZTtDQUNkO0FBQ0Q7O0FBRUEsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWCxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLHNCQUFzQjtBQUN0Qiw2QkFBNkI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93biBcclxue1xyXG5jb2xvcjogICM1NTU7XHJcbm1hcmdpbjogLTIwcHggLTIycHggMCAxMDAlO1xyXG53aWR0aDogMTQzcHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuaGVpZ2h0OiAxN3B4O1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnN1Ym1lbnVcclxue1xyXG5iYWNrZ3JvdW5kOiAjMDA0YjFhOy8qICNmZmY7ICovXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAtMTJweDtcclxubGVmdDogLTIwcHg7XHJcbnotaW5kZXg6IDEwMDtcclxud2lkdGg6IDEzNXB4O1xyXG5kaXNwbGF5OiBub25lO1xyXG5tYXJnaW4tbGVmdDogMTBweDtcclxucGFkZGluZzogNDBweCAwIDVweDtcclxuYm9yZGVyLXJhZGl1czogNnB4O1xyXG5ib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcclxufVxyXG4uZHJvcGRvd24gbGkgYSBcclxue1xyXG5jb2xvcjogI2ZlZWQwMTsgLyogIzU1NTU1NTsqL1xyXG5kaXNwbGF5OiBibG9jaztcclxuZm9udC1mYW1pbHk6IGFyaWFsO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxucGFkZGluZzogNnB4IDE1cHg7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93biBsaSBhOmhvdmVyXHJcbntcclxuYmFja2dyb3VuZDogcmdiKDYxLCA2LCA2KTsgLyogIzE1NUZCMDsgKi9cclxuY29sb3I6IzU1NTsgLyogI0ZGRkZGRjsgKi9cclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmEuYWNjb3VudCBcclxue1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5jb2xvcjogcmdiKDEyOSwgMTAsIDEwKTsgLyogIzU1NTsgKi9cclxucG9zaXRpb246IGFic29sdXRlO1xyXG56LWluZGV4OiAxMTA7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wYWRkaW5nOiAxMXB4IDAgMCAyMHB4O1xyXG5oZWlnaHQ6IDUwcHg7XHJcbndpZHRoOiAxNjBweDtcclxubWFyZ2luOiAtMTFweCAwIDAgLTEwcHg7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy91c2VyLnBuZykgMTAycHggN3B4IG5vLXJlcGVhdDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLnJvb3Rcclxue1xyXG5saXN0LXN0eWxlOm5vbmU7XHJcbm1hcmdpbjowcHg7XHJcbnBhZGRpbmc6MHB4O1xyXG5mb250LXNpemU6IDE0cHg7XHJcbnBhZGRpbmc6IDExcHggMCAwIDBweDtcclxuYm9yZGVyLXRvcDoxcHggc29saWQgI2RlZGVkZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<header>\n  <div class=\"container\">\n    <app-header></app-header>\n    <!-- top header -->\n    <!-- <section class=\"row top_header pt-3\">\n      <div class=\"col-lg-6 buttons ml-auto\">\n        <p><span class=\"fa fa-phone\"></span> +91-424-2270227</p>\n        <a *ngIf=\"!currentUser\" class=\"btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\"\n          href=\"/home#login-popup\">Login</a>\n        <a *ngIf=\"!currentUser\" class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\"\n          href=\"/home#register-popup\">Register</a>\n      </div>\n    </section> -->\n    <!-- top header -->\n\n    <!-- nav -->\n    <nav class=\"py-3\">\n      <div id=\"logo\">\n        <h1>\n          <a class=\"navbar-brand\" href=\"index.html\">\n            <span class=\"fa fa-empire\"></span>Kongu Manamedai\n            <!-- <span><span class=\"line\"></span>Organizer</span> -->\n          </a>\n        </h1>\n      </div>\n\n      <label for=\"drop\" class=\"toggle\"><span class=\"fa fa-bars\"></span></label>\n      <input type=\"checkbox\" id=\"drop\" />\n      <ul class=\"menu mt-2\">\n        <li class=\"mr-lg-3 mr-2 active\">\n          <a href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">Home</a>\n        </li>\n        <li class=\"mr-lg-3 mr-2\">\n          <a href=\"#\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">About Us</a>\n        </li>\n        <li class=\"mr-lg-3 mr-2\">\n          <a href=\"#\" [routerLink]=\"['/services']\" routerLinkActive=\"router-link-active\">Services</a>\n        </li>\n        <!-- <li class=\"mr-lg-3 mr-2\">\n          <a href=\"#\" [routerLink]=\"['/gallery']\" routerLinkActive=\"router-link-active\">Gallery</a>\n        </li> -->\n        <!-- <li class=\"mr-lg-3 mr-2\"><a href=\"gallery.html\">Gallery</a></li> -->\n        <!-- <li class=\"mr-lg-3 mr-2 pb-0\"> -->\n        <!-- First Tier Drop Down -->\n        <!-- <label for=\"drop-2\" class=\"toggle\"\n            >Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span>\n          </label>\n          <a href=\"#\"\n            >Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span\n          ></a>\n          <input type=\"checkbox\" id=\"drop-2\" />\n          <ul class=\"drop-down-ul\">\n            <li><a href=\"error.html\">Error Page</a></li>\n            <li><a href=\"events.html\">Events Page</a></li>\n          </ul>\n        </li> -->\n        <li>\n          <a href=\"#\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">Contact</a>\n        </li>\n      </ul>\n    </nav>\n    <!-- //nav -->\n  </div>\n</header>\n<!-- //header -->\n\n<!-- banner -->\n<section class=\"banner layer\" id=\"home\">\n  <div class=\"container\">\n    <div class=\"banner-text\">\n      <div class=\"slider-info mb-4\">\n        <div class=\"banner-heading\">\n          <h3>\n            Your wedding adventure starts here\n          </h3>\n        </div>\n        <!-- <a href=\"contact.html\"> Plan Your Wedding</a> -->\n      </div>\n      <!-- To bottom button-->\n      <div class=\"thim-click-to-bottom\">\n        <div class=\"rotate\">\n          <a href=\"home#welcome\" class=\"scroll\">\n            <span class=\"fa fa-angle-double-down\"></span>\n          </a>\n        </div>\n      </div>\n      <!-- //To bottom button-->\n    </div>\n  </div>\n</section>\n<!-- //banner -->\n\n<!-- welcome -->\n<section class=\"welcome py-5\" id=\"welcome\">\n  <div class=\"container py-md-5\">\n    <h3 class=\"heading text-capitalize text-center mb-lg-5 mb-4\">\n      we will plan every detail of your wedding\n    </h3>\n    <div class=\"row welcome-grids\">\n      <div class=\"col-lg-4 mb-lg-0 mb-5\">\n        <h4 class=\"left-heading\">Our Weddings Story</h4>\n        <p class=\"mb-3\">\n          Sed gravida dignissim magna idesn molestie. Nulla congue, ex init\n          dictum lacinia, nisl est posuere nulla, nec eges tas leo mi id lorem.\n          Maecenas sem nulla ex init dictu lacinia, Maecenas sem nulla. Sed\n          gravida dignissim magna idesn en molestie\n        </p>\n        <div class=\"welcome-button mt-4\">\n          <a href=\"about.html\">Read More</a>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <div class=\"image1 mb-4\">\n          <h4>Hair / Makeup</h4>\n          <p class=\"mt-3\">\n            Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init\n            dictu lacinia, Maecenas sem nulla\n          </p>\n        </div>\n        <div class=\"image1\">\n          <h4>Venue & Catering</h4>\n          <p class=\"mt-3\">\n            Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init\n            dictu lacinia, Maecenas sem nulla\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6 mt-sm-0 mt-4\">\n        <div class=\"image1 mb-4\">\n          <h4>Photo / Video</h4>\n          <p class=\"mt-3\">\n            Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init\n            dictu lacinia, Maecenas sem nulla\n          </p>\n        </div>\n        <div class=\"image1\">\n          <h4>Flowers & Music</h4>\n          <p class=\"mt-3\">\n            Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init\n            dictu lacinia, Maecenas sem nulla\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- welcome -->\n\n<!-- IMAGES -->\n<!-- <section class=\"images\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 col-md-4 col-sm-6  bg-img1\">\n        <h4>Perfect Planning</h4>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-sm-6 bg-img2\">\n        <h4>Wedding Ceremony</h4>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-sm-6 bg-img3\">\n        <h4>Entertainment Program</h4>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-sm-6 bg-img4\">\n        <h4>Engagement Ceremony</h4>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-sm-6 bg-img5\">\n        <h4>Birthday Celebrations</h4>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-sm-6 bg-img6\">\n        <h4>Anniversary Events</h4>\n      </div>\n    </div>\n  </div>\n</section> -->\n<!-- IMAGES -->\n\n<!-- services -->\n<!-- <section class=\"services py-5\">\n  <div class=\"container py-md-5\">\n    <h3 class=\"heading text-capitalize mb-lg-5 mb-4\">Our Services</h3>\n    <div class=\"row service-grids\">\n      <div class=\"col-lg-3 col-sm-6\">\n        <div class=\"service-grid1\">\n          <span class=\"fa fa-globe\"></span>\n          <h4 class=\"my-3\">Weddings</h4>\n          <p>\n            Aenean tristique, duiid sedet blandit elt ultricies, ligula elit\n            interd ures turpis, at bibendum lib dolor.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-sm-0 mt-sm-4 mt-4\">\n        <div class=\"service-grid1\">\n          <span class=\"fa fa-book\"></span>\n          <h4 class=\"my-3\">Parties</h4>\n          <p>\n            Aenean tristique, duiid sedet blandit elt ultricies, ligula elit\n            interd ures turpis, at bibendum lib dolor.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-lg-0 mt-sm-4 mt-4\">\n        <div class=\"service-grid1\">\n          <span class=\"fa fa-diamond\"></span>\n          <h4 class=\"my-3\">Entertainment</h4>\n          <p>\n            Aenean tristique, duiid sedet blandit elt ultricies, ligula elit\n            interd ures turpis, at bibendum lib dolor.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-lg-0 mt-sm-4 mt-4\">\n        <div class=\"service-grid1\">\n          <span class=\"fa fa-book\"></span>\n          <h4 class=\"my-3\">Celebrations</h4>\n          <p>\n            Aenean tristique, duiid sedet blandit elt ultricies, ligula elit\n            interd ures turpis, at bibendum lib dolor.\n          </p>\n        </div>\n      </div>\n      <div class=\"ser-button mt-4\">\n        <a href=\"services.html\">Explore all services</a>\n      </div>\n    </div>\n  </div>\n</section> -->\n<!-- //services -->\n\n<!-- wedding date -->\n<!-- <section class=\"section my-lg-5 py-5\">\n  <div class=\"container py-md-5\">\n    <h3 class=\"heading wedding text-light mb-2 text-center\">\n      Our Next Wedding Organizer Is On\n    </h3>\n    <p class=\"countdown-text mx-auto text-center text-light mb-lg-5 mb-4\">\n      Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd\n      ures turpis, at bibendum lib sed ipsum dolor.\n    </p>\n    <div class=\"row\">\n      <div class=\"col-lg-7 mx-auto\"> -->\n<!--date-->\n<!-- <div class=\"examples text-center\">\n          <h4>21 Dec, 2018.</h4>\n          <p>Venue : 2466H 5th Street Parking, King Block, New York City.</p>\n        </div> -->\n<!--//date-->\n<!-- </div>\n      <div class=\"position-img1\">\n        <img src=\"../../../assets/images/right.jpg\" alt=\"\" class=\"img-fluid\" />\n      </div>\n      <div class=\"position-img2\">\n        <img src=\"../../../assets/images/left.jpg\" alt=\"\" class=\"img-fluid\" />\n      </div>\n    </div>\n  </div>\n</section> -->\n<!-- //wedding date -->\n\n<!-- Clients -->\n<!-- <section class=\"clients-main\">\n  <div class=\"wthree-different-dot1 py-5\">\n    <div class=\"container py-sm-3\">\n      <h3 class=\"heading text-capitalize text-center mb-sm-5 mb-4\">\n        What They Say\n      </h3>\n      <div class=\"row cli-ent\">\n        <div class=\"col-lg-4 col-md-6 item g1\">\n          <div class=\"row agile-dish-caption\">\n            <div class=\"col-lg-11 text-center mx-auto\">\n              <h5>Michael Johnson</h5>\n              <p class=\"para-w3-agile\">\n                Phasellus iaculis sapien in tellus gravida, a placerat lacus\n                elementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc\n                lectus sapien in tellus.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 item g1\">\n          <div class=\"row agile-dish-caption\">\n            <div class=\"col-lg-11 text-center mx-auto\">\n              <h5>Mary elizabeth</h5>\n              <p class=\"para-w3-agile\">\n                Phasellus iaculis sapien in tellus gravida, a placerat lacus\n                elementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc\n                lectus sapien in tellus.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 item g1\">\n          <div class=\"row agile-dish-caption\">\n            <div class=\"col-lg-11 text-center mx-auto\">\n              <h5>Elisa kour</h5>\n              <p class=\"para-w3-agile\">\n                Phasellus iaculis sapien in tellus gravida, a placerat lacus\n                elementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc\n                lectus sapien in tellus.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section> -->\n<!--// Clients -->\n\n<!-- subscribe -->\n<!-- <section class=\"subscribe text-center bg-light py-5\">\n  <div class=\"container p-sm-3\">\n    <h3 class=\"heading mb-2\">Subscribe Newsletter</h3>\n    <p class=\"mb-5\">Signup and recieve 15% on your First Plan.</p>\n    <form action=\"#\" method=\"post\">\n      <input class=\"form-control\" type=\"email\" placeholder=\"Your Email Address\" name=\"Subscribe\" required=\"\" />\n      <button class=\"btn1\">\n        <span class=\"fa fa-paper-plane\"></span>\n      </button>\n    </form>\n  </div>\n</section> -->\n<!-- //subscribe -->\n\n<!-- footer -->\n<footer>\n  <div class=\"container py-5\">\n    <div class=\"row footer-gap\">\n      <div class=\"col-lg-4 col-sm-6\">\n        <h3 class=\"text-capitalize mb-3\">Address</h3>\n        <address class=\"mb-0\">\n          <p class=\"\">\n            <span class=\"fa fa-map-marker\"></span> 205-A, SKC road, Surampatti Nal Road, Erode – 638009\n          </p>\n          <p><span class=\"fa fa-clock-o\"></span> Timings : 10 a.m to 6 p.m</p>\n          <p><span class=\"fa fa-phone\"></span> +91-424-2270227</p>\n          <p>\n            <span class=\"fa fa-envelope-open\"></span>\n            <a href=\"mailto:info@kongumanamedai.com\">info@kongumanamedai.com</a>\n          </p>\n        </address>\n      </div>\n      <div class=\"col-lg-4 col-sm-6 mt-lg-0 mt-sm-0 mt-4 p-md-0\">\n        <h3 class=\"text-capitalize mb-4\">Meanwhile On Instagram</h3>\n        <div class=\"images\">\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta2.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta3.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta4.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta5.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta6.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta7.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta8.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta9.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 offset-lg-1 col-sm-6 mt-lg-0 mt-sm-5 mt-4\">\n        <h3 class=\"text-capitalize mb-3\">Follow us</h3>\n        <p class=\"mb-4\">Follow us on social media</p>\n        <ul class=\"social mt-lg-0 mt-3\">\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-facebook\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-twitter\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-google-plus\"></span></a>\n          </li>\n          <li class=\"\">\n            <a href=\"#\"><span class=\"fa fa-linkedin\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-rss\"></span></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyright pb-5 text-center\">\n    <p>\n      <!-- © 2018 Wedding Organizer. All Rights Reserved |  -->\n      Design by\n      <a href=\"http://www.W3Layouts.com\" target=\"_blank\">W3Layouts</a>\n    </p>\n  </div>\n</footer>\n<!-- footer -->\n\n<!-- popup for login -->\n<div id=\"login-popup\" class=\"popup-effect\">\n  <div class=\"popup\">\n    <app-login></app-login>\n    <!-- <div class=\"login-form\">\n      <form action=\"#\" [formGroup]=\"registerForm\" class=\"px-3 pt-3 pb-0\" (ngSubmit)=\"onLogin()\">\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">Mobile / Email</label>\n          <input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name\" required=\"\" />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name1\" required=\"\" />\n        </div>\n        <div class=\"right-w3l\">\n          <input type=\"submit\" class=\"form-control\" value=\"Login\" />\n          <img *ngIf=\"loading\"\n            src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n      </form>\n    </div> -->\n    <!-- <a class=\"close\" href=\"home#\">&times;</a> -->\n  </div>\n</div>\n<!-- popup for login -->\n\n\n\n\n<!-- popup for register -->\n<div id=\"register-popup\" class=\"popup-effect\">\n  <div class=\"popup\">\n    <app-register></app-register>\n    <!-- <div class=\"lregister-form\">\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\" class=\"px-3 pt-3 pb-0\">\n        <div class=\"form-group\">\n          <label for=\"firstName\" class=\"col-form-label\">First Name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"firstName\" required=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"lastName\" id=\"recipient-name3\"\n            required=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">Email id</label>\n          <input type=\"email\" class=\"form-control\" placeholder=\"\" formControlName=\"email\" id=\"recipient-name4\"\n            required=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email Id is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">Mobile Number</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"mobile\" id=\"recipient-name5\"\n            required=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\" />\n          <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.mobile.errors.required\">Mobile Number is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"\" formControlName=\"password\" id=\"recipient-name6\"\n            required=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n          </div>\n        </div>\n        <div class=\"right-w3l\">\n          <input type=\"submit\" class=\"form-control\" value=\"Get Started\" />\n        </div>\n      </form>\n    </div> -->\n    <!-- <a class=\"close\" (click)=\"close()\" href=\"home#\">&times;</a> -->\n  </div>\n</div>\n<!-- popup for register -->"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loginFrm\">\n  <h5 class=\"modal-title text-uppercase\">Login</h5>\n  <form action=\"#\" [formGroup]=\"loginForm\" class=\"px-3 pt-3 pb-0\">\n    <div class=\"form-group\">\n      <label for=\"recipient-name\" class=\"col-form-label\">Mobile / Email</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"emailMobile\" id=\"recipient-name\"\n        required=\"\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n      <input type=\"password\" class=\"form-control\" placeholder=\"\" formControlName=\"password\" id=\"recipient-name1\"\n        required=\"\" />\n    </div>\n    <!-- <div class=\"right-w3l\">\n          <input type=\"submit\" class=\"form-control\" value=\"Login\" />\n          <img *ngIf=\"loading\"\n            src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div> -->\n    <div class=\"col-lg-12  ml-auto\">\n      <!--buttons-->\n      <a class=\"btn btn-info1 btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\" href=\"home#\"\n        (click)=\"onLogin()\">Login</a>\n      <a class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\" id=\"forgot\">Forgot\n        Password</a>\n    </div>\n  </form>\n</div>\n<div id=\"forgotPWFrm\">\n  <h5 class=\"modal-title text-uppercase\">Forgot Password</h5>\n  <form action=\"#\" [formGroup]=\"forgotPasswordForm\" class=\"px-3 pt-3 pb-0\" (ngSubmit)=\"onForgot()\">\n    <div class=\"form-group\">\n      <label for=\"recipient-name\" class=\"col-form-label\">Email</label>\n      <input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name\" required=\"\" />\n    </div>\n    <div class=\"right-w3l\">\n      <input type=\"submit\" class=\"form-control\" value=\"Submit\" />\n      <img *ngIf=\"loading\"\n        src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n    </div>\n  </form>\n</div>\n\n<a class=\"close\" (click)=\"close()\" href=\"home#\">&times;</a>\n\n\n<!-- popup for login -->\n<div id=\"forgot-password-popup\" class=\"popup-effect\">\n  <div class=\"popup\">\n    <h5 class=\"modal-title text-uppercase\">Forgot Password</h5>\n    <div class=\"forgot-form\">\n      <!-- <form action=\"#\" [formGroup]=\"forgotPasswordForm\" class=\"px-3 pt-3 pb-0\" (ngSubmit)=\"onForgot()\">\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">Email</label>\n          <input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name\" required=\"\" />\n        </div>\n        <div class=\"right-w3l\">\n          <input type=\"submit\" class=\"form-control\" value=\"Login\" />\n          <img *ngIf=\"loading\"\n            src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n      </form> -->\n    </div>\n    <a class=\"close\" href=\"home#\">&times;</a>\n  </div>\n</div>\n<!-- popup for login -->"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_kongu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/_services/kongu.service */ "./src/app/_services/kongu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_service, _activateRoute, _router, formBuilder, alertService) {
        this._service = _service;
        this._activateRoute = _activateRoute;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this._activateRoute.snapshot.queryParams['returnUrl'] || '/profile';
        this.loginForm = this.formBuilder.group({
            emailMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
        });
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__('#forgotPWFrm').hide();
            jquery__WEBPACK_IMPORTED_MODULE_5__('#forgot').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_5__('#loginFrm').hide();
                jquery__WEBPACK_IMPORTED_MODULE_5__('#forgotPWFrm').show();
                // alert('test');
            });
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        console.log(this.loginForm.value);
        this.submitted = true;
        // console.log(this.registerForm.value);
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this._service.login(this.loginForm.value.emailMobile, this.loginForm.value.password).subscribe(function (userData) {
            console.log('Login successful :: ', userData);
            localStorage.setItem('currentUser', JSON.stringify(userData));
            _this._router.navigate([_this.returnUrl]);
            // this.alertService.success('Registration successful', true);
            // this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.close = function () {
        jquery__WEBPACK_IMPORTED_MODULE_5__('#forgotPWFrm').hide();
        jquery__WEBPACK_IMPORTED_MODULE_5__('#loginFrm').show();
        this.loginForm = this.formBuilder.group({
            userid: '',
            password: ''
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_kongu_service__WEBPACK_IMPORTED_MODULE_1__["KonguService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<header>\n  <div class=\"container\">\n    <!-- top header -->\n    <app-header></app-header>\n    <!-- top header -->\n  </div>\n</header>\n\n\n<!-- <h2>Profile</h2>\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form> -->"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lregister-form\">\n  <div id=\"regForm\">\n    <h5 class=\"modal-title text-uppercase\">Register</h5>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\" class=\"px-3 pt-3 pb-0\">\n      <div class=\"form-group\">\n        <label for=\"firstName\" class=\"col-form-label\">First Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"firstName\" required=\"\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"recipient-name\" class=\"col-form-label\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"lastName\" id=\"recipient-name3\"\n          required=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"recipient-name\" class=\"col-form-label\">Email id</label>\n        <input type=\"email\" class=\"form-control\" placeholder=\"\" formControlName=\"email\" id=\"recipient-name4\" required=\"\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">Email Id is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"recipient-name\" class=\"col-form-label\">Mobile Number</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"mobile\" id=\"recipient-name5\" required=\"\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\" />\n        <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.mobile.errors.required\">Mobile Number is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"\" formControlName=\"password\" id=\"recipient-name6\"\n          required=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </div>\n      <div class=\"right-w3l\">\n        <input type=\"submit\" class=\"form-control\" value=\"Get Started\" />\n      </div>\n    </form>\n  </div>\n\n  <div id=\"agreeForm\">\n    <form [formGroup]=\"agreeForm\" (ngSubmit)=\"onRegister()\" class=\"px-3 pt-3 pb-0\">\n      <h5 class=\"modal-title text-uppercase\">Terms and Conditions</h5>\n      <div class=\"right-w3l\">\n        <div style=\"border: 1px solid #e5e5e5; width: 450px; height: 350px; overflow: auto; padding: 10px;\">\n          <p>All information received by us from your registration on business-standard.com or other digital products\n            of Business Standard will be used by Business Standard in accordance with our Privacy Policy. Kindly\n            read the below mentioned details.</p>\n          <p>On registration, we expect you to provide Business Standard with an accurate and complete information of\n            the compulsory fields. We also expect you to keep the information secure, specifically access passwords\n            and payment information. Kindly update the information periodically to keep your account relevant.\n            Business Standard will rely on any information you provide to us.</p>\n          <p>Each registration is for a single user only. On registration, you will choose a user name and\n            password (\"ID\"). You are not allowed to share your ID or give access to your account to anyone else.\n            Business Standard Premium subscription does not allow multiple users on a network or within an organization\n            to use the same ID.</p>\n          <p>Eum ea quidam oportere imperdiet, facer oportere vituperatoribus eu vix, mea ei iisque legendos hendrerit.\n            Blandit comprehensam eu his, ad eros veniam ridens eum. Id odio lobortis elaboraret pro. Vix te fabulas\n            partiendo.</p>\n          <p>Natum oportere et qui, vis graeco tincidunt instructior an, autem elitr noster per et. Mea eu mundi\n            qualisque. Quo nemore nusquam vituperata et, mea ut abhorreant deseruisse, cu nostrud postulant dissentias\n            qui. Postea tincidunt vel eu.</p>\n          <p>Ad eos alia inermis nominavi, eum nibh docendi definitionem no. Ius eu stet mucius nonumes, no mea facilis\n            philosophia necessitatibus. Te eam vidit iisque legendos, vero meliore deserunt ius ea. An qui inimicus\n            inciderint.</p>\n        </div><br>\n        <!-- <input type=\"submit\" class=\"form-control\" value=\"Next\" /> -->\n        <div class=\"form-group\">\n          <div class=\"col-xs-6 col-xs-offset-3\">\n            <div class=\"radio\">\n              <label>\n                <input type=\"radio\" name=\"agree\" value=\"agree\" (click)=\"agreeCall()\" /> Agree\n                with the terms and\n                conditions\n              </label>\n            </div>\n            <div class=\"radio\">\n              <label>\n                <input type=\"radio\" name=\"agree\" value=\"disagree\" (click)=\"closeAgreePopup();\" /> DisAgree\n              </label>\n            </div>\n          </div>\n        </div>\n        <a class=\"btn btn-info1 btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\" id=\"next\">Next</a>\n      </div>\n    </form>\n  </div>\n\n  <div id=\"paymentFrm\">\n    <h5 class=\"modal-title text-uppercase\">Payment</h5>\n    <div class=\"px-3 pt-3 pb-0\">\n      <!-- <input type=\"submit\" class=\"form-control\" value=\"Complete\" /> -->\n      <div class=\"form-group\">\n        <label for=\"plan\" class=\"col-form-label\">Select a Plan</label>\n        <select class=\"form-control\">\n          <option value=\"\">Select a Plan</option>\n          <option value=\"silver\">Silver</option>\n          <option value=\"gold\">Gold</option>\n          <option value=\"platinum\">Platinum</option>\n        </select>\n      </div>\n      <!-- <div class=\"col-xs-6 col-xs-offset-3\"> -->\n      <div class=\"col-sm-8\">\n        <label>\n          <input type=\"radio\" name=\"paymentMode\" (click)=\"onLine()\" value=\"online\" /> Online\n        </label>&nbsp;&nbsp;&nbsp;\n        <label>\n          <input type=\"radio\" name=\"paymentMode\" (click)=\"offLine()\" value=\"offline\" />\n          Offline\n        </label>\n      </div>\n      <div class=\"form-group\">\n\n      </div>\n      <!-- </div> -->\n      <div id=\"offlineForm\">\n        <form [formGroup]=\"paymentForm\">\n          <div class=\"form-group\">\n            <label for=\"chequeNumber\" class=\"col-form-label\">Cheque number</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"chequeNumber\" required=\"\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.chequeNumber }\" />\n            <div *ngIf=\"submitted && f.chequeNumber\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.chequeNumber.required\">Cheque Number is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"bankName\" class=\"col-form-label\">Bank Name</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"bankName\" id=\"bankName\" required=\"\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.bankName}\" />\n            <div *ngIf=\"submitted && f.bankName\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.bankName.required\">Bank Name is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"branchName\" class=\"col-form-label\">Branch Name</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"branchName\" id=\"branchName\"\n              required=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.branchName }\" />\n            <div *ngIf=\"submitted && f.branchName\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.branchName.required\">Branch Name is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"amount\" class=\"col-form-label\">Amount</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"amount\" id=\"amount\" required=\"\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.amount }\" />\n            <div *ngIf=\"submitted && f.amount\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.amount.required\">Amount is required</div>\n            </div>\n          </div>\n\n          <div class=\"right-w3l\">\n            <input type=\"submit\" class=\"form-control\" value=\"Finish\" />\n          </div>\n        </form>\n      </div>\n      <!-- <a class=\"btn btn-info1 btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\" href=\"home#\"\n        id=\"finish\">Finish</a> -->\n    </div>\n  </div>\n</div>\n<a class=\"close\" (click)=\"close()\" id=\"closeBtn\" href=\"home#\">&times;</a>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_kongu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/_services/kongu.service */ "./src/app/_services/kongu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_service, _activateRoute, _router, formBuilder, router) {
        this._service = _service;
        this._activateRoute = _activateRoute;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.singUp = function (formValue) {
    };
    // onAboutButton(): void {
    //   this._router.navigate(['/about']);
    // }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            flag: true,
            role: 'admin'
        });
        this.agreeForm = this.formBuilder.group({});
        this.paymentForm = this.formBuilder.group({
            chequeNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            branchName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#agreeForm').hide();
            jquery__WEBPACK_IMPORTED_MODULE_4__('#paymentFrm').hide();
            jquery__WEBPACK_IMPORTED_MODULE_4__('#offlineForm').hide();
            jquery__WEBPACK_IMPORTED_MODULE_4__('#next').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#paymentFrm').show();
                jquery__WEBPACK_IMPORTED_MODULE_4__('#agreeForm').hide();
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__('#finish').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#paymentFrm').hide();
                jquery__WEBPACK_IMPORTED_MODULE_4__('#regForm').show();
                // redirect to profile page......
            });
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onRegister = function () {
        this.submitted = true;
        // console.log(this.registerForm.value);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        jquery__WEBPACK_IMPORTED_MODULE_4__('#agreeForm').show();
        jquery__WEBPACK_IMPORTED_MODULE_4__('#next').hide();
        jquery__WEBPACK_IMPORTED_MODULE_4__('#regForm').hide();
        this.close();
        this.loading = true;
        // this._service.register(this.registerForm.value).subscribe(
        //   data => {
        //     console.log('Registration successful');
        //     // this.alertService.success('Registration successful', true);
        //     // this.router.navigate(['/login']);
        //     $('#agreeForm').show();
        //     $('#regForm').hide();
        //   },
        //   error => {
        //     // this.alertService.error(error);
        //     this.loading = false;
        //   }
        // );
    };
    RegisterComponent.prototype.close = function () {
        this.registerForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            password: ''
        });
    };
    RegisterComponent.prototype.closeAgreePopup = function () {
        // console.log($('#closeBtn'));
        jquery__WEBPACK_IMPORTED_MODULE_4__('#agreeForm').hide();
        jquery__WEBPACK_IMPORTED_MODULE_4__('#regForm').show();
        this.agreeForm = this.formBuilder.group({
            agree: ''
        });
    };
    RegisterComponent.prototype.agreeCall = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('#next').show();
    };
    RegisterComponent.prototype.onLine = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('#offlineForm').hide();
    };
    RegisterComponent.prototype.offLine = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('#offlineForm').show();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_kongu_service__WEBPACK_IMPORTED_MODULE_1__["KonguService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<header>\n\t<div class=\"container\">\n\t\t<!-- top header -->\n\t\t<section class=\"row top_header pt-3\">\n\t\t\t<div class=\"col-lg-6 buttons ml-auto\">\n\t\t\t\t<p><span class=\"fa fa-phone\"></span> +91-424-2270227</p>\n\t\t\t\t<a class=\"btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\"\n\t\t\t\t\thref=\"#login-popup\">Login</a>\n\t\t\t\t<a class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\"\n\t\t\t\t\thref=\"#register-popup\">Register</a>\n\t\t\t</div>\n\t\t</section>\n\t\t<!-- top header -->\n\t\t<!-- nav -->\n\t\t<nav class=\"py-3\">\n\t\t\t<div id=\"logo\">\n\t\t\t\t<h1>\n\t\t\t\t\t<a class=\"navbar-brand\" href=\"index.html\">\n\t\t\t\t\t\t<span class=\"fa fa-empire\"></span>Kongu Manamedai\n\t\t\t\t\t\t<!-- </span>Organizer</span> -->\n\t\t\t\t\t</a>\n\t\t\t\t</h1>\n\t\t\t</div>\n\n\t\t\t<label for=\"drop\" class=\"toggle\"><span class=\"fa fa-bars\"></span></label>\n\t\t\t<input type=\"checkbox\" id=\"drop\" />\n\t\t\t<ul class=\"menu mt-2\">\n\t\t\t\t<li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/home']\"\n\t\t\t\t\t\trouterLinkActive=\"router-link-active\">Home</a></li>\n\t\t\t\t<li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/about']\"\n\t\t\t\t\t\trouterLinkActive=\"router-link-active\">About Us</a></li>\n\t\t\t\t<li class=\"mr-lg-3 mr-2 active\"><a href=\"#\" [routerLink]=\"['/services']\"\n\t\t\t\t\t\trouterLinkActive=\"router-link-active\">Services</a></li>\n\t\t\t\t<!-- <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/gallery']\"\n\t\t\t\t\t\trouterLinkActive=\"router-link-active\">Gallery</a></li> -->\n\t\t\t\t<!-- <li class=\"mr-lg-3 mr-2 pb-0\"> -->\n\t\t\t\t<!-- First Tier Drop Down -->\n\t\t\t\t<!-- <label for=\"drop-2\" class=\"toggle\">Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span> </label>\n                <a href=\"#\">Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span></a>\n                <input type=\"checkbox\" id=\"drop-2\"/>\n                <ul class=\"drop-down-ul\">\n                    <li><a href=\"error.html\">Error Page</a></li>\n                    <li><a href=\"events.html\">Events Page</a></li>\n                </ul>\n                </li> -->\n\t\t\t\t<li><a href=\"#\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">Contact</a></li>\n\t\t\t</ul>\n\t\t</nav>\n\t\t<!-- //nav -->\n\t</div>\n</header>\n<!-- //header -->\n\n<!-- inner banner -->\n<div class=\"inner_banner layer\" id=\"home\">\n\t<div class=\"container\">\n\t\t<div class=\"agileinfo-inner\">\n\t\t\t<h2 class=\"text-center text-white\">\n\t\t\t\tServices\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n</div>\n<!-- //inner banner -->\n<!-- breadcrumbs -->\n<nav aria-label=\"breadcrumb\">\n\t<ol class=\"breadcrumb\">\n\t\t<li class=\"breadcrumb-item\">\n\t\t\t<a href=\"index.html\">Home</a>\n\t\t</li>\n\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Services</li>\n\t</ol>\n</nav>\n<!-- //breadcrumbs -->\n\n\n<!-- services -->\n<!-- <section class=\"services py-5\">\n\t<div class=\"container py-sm-3\">\n\t\t<h3 class=\"heading text-capitalize mb-lg-5 mb-4\"> Our Services </h3>\n\t\t<div class=\"row service-grids\">\n\t\t\t<div class=\"col-lg-3 col-sm-6\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-globe\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Weddings</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum\n\t\t\t\t\t\tlib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6 \">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-book\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Parties</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum\n\t\t\t\t\t\tlib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-diamond\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Entertainment</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum\n\t\t\t\t\t\tlib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-book\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Celebrations</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum\n\t\t\t\t\t\tlib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6 mt-lg-5\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-globe\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Events</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum\n\t\t\t\t\t\tlib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6 mt-lg-mt-5\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-book\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Catering</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum\n\t\t\t\t\t\tlib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6 mt-lg-mt-5\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-diamond\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Makeup</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum\n\t\t\t\t\t\tlib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6 mt-lg-mt-5\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-book\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">photo / Video</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum\n\t\t\t\t\t\tlib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section> -->\n<section class=\"welcome py-5\" id=\"welcome\">\n\t<div class=\"container py-md-3\">\n\t\t<h3 class=\"heading text-capitalize mb-lg-5 mb-4\"> Our Services </h3>\n\t\t<div class=\"row welcome-grids\">\n\t\t\t<div class=\"col-lg-4 col-sm-6\">\n\t\t\t\t<div class=\"image1 mb-4\">\n\t\t\t\t\t<h4>Silver</h4>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>3-4 profiles in a week</li>\n\t\t\t\t\t\t<li>Research based profiles</li>\n\t\t\t\t\t\t<li>Desire matches will be served</li>\n\t\t\t\t\t\t<li>Highly confidential</li>\n\t\t\t\t\t\t<li>Status Matched profile</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-4 col-sm-6 mt-sm-0 mt-4\">\n\t\t\t\t<div class=\"image1 mb-4\">\n\t\t\t\t\t<h4>Gold</h4>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Manager Assistance</li>\n\t\t\t\t\t\t<li>3-4 profiles in a week</li>\n\t\t\t\t\t\t<li>Research based profiles</li>\n\t\t\t\t\t\t<li>Desire matches will be served</li>\n\t\t\t\t\t\t<li>Highly confidential</li>\n\t\t\t\t\t\t<li>Status Matched profile</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-sm-6 mt-sm-0 mt-4\">\n\t\t\t\t<div class=\"image1 mb-4\">\n\t\t\t\t\t<h4>Platinum</h4>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>online & Offline Service</li>\n\t\t\t\t\t\t<li>3-4 profiles in a week</li>\n\t\t\t\t\t\t<li>Research based profiles</li>\n\t\t\t\t\t\t<li>Desire matches will be served</li>\n\t\t\t\t\t\t<li>Highly confidential</li>\n\t\t\t\t\t\t<li>Status Matched profile</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- //services -->\n\n\n<!-- IMAGES -->\n<!-- <section class=\"images pb-5\">\n\t<div class=\"container-fluid py-md-5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6  bg-img1\">\n\t\t\t\t<h4>Perfect Planning</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6 bg-img2\">\n\t\t\t\t<h4>Wedding Ceremony</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6 bg-img3\">\n\t\t\t\t<h4>Entertainment Program</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6 bg-img4\">\n\t\t\t\t<h4>Engagement Ceremony</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6 bg-img5\">\n\t\t\t\t<h4>Birthday Celebrations</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6 bg-img6\">\n\t\t\t\t<h4>Anniversary Events</h4>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section> -->\n<!-- IMAGES -->\n\n\n<!-- Clients -->\n<!-- <section class=\"clients-main\">\n\t<div class=\"wthree-different-dot1 py-5\">\n\t\t<div class=\"container py-sm-3\">\n\t\t\t<h3 class=\"heading text-capitalize text-center mb-sm-5 mb-4\"> What They Say </h3>\n\t\t\t<div class=\"row cli-ent\">\n\t\t\t\t<div class=\"col-lg-4 col-md-6 item g1\">\n\t\t\t\t\t<div class=\"row agile-dish-caption\">\n\t\t\t\t\t\t<div class=\"col-lg-11 text-center mx-auto\">\n\t\t\t\t\t\t\t<h5>Michael Johnson</h5>\n\t\t\t\t\t\t\t<p class=\"para-w3-agile\"> Phasellus iaculis sapien in tellus gravida, a placerat lacus\n\t\t\t\t\t\t\t\telementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc lectus sapien in\n\t\t\t\t\t\t\t\ttellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-6 item g1\">\n\t\t\t\t\t<div class=\"row agile-dish-caption\">\n\t\t\t\t\t\t<div class=\"col-lg-11 text-center mx-auto\">\n\t\t\t\t\t\t\t<h5>Mary elizabeth</h5>\n\t\t\t\t\t\t\t<p class=\"para-w3-agile\"> Phasellus iaculis sapien in tellus gravida, a placerat lacus\n\t\t\t\t\t\t\t\telementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc lectus sapien in\n\t\t\t\t\t\t\t\ttellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-6 item g1\">\n\t\t\t\t\t<div class=\"row agile-dish-caption\">\n\t\t\t\t\t\t<div class=\"col-lg-11 text-center mx-auto\">\n\t\t\t\t\t\t\t<h5>Elisa kour</h5>\n\t\t\t\t\t\t\t<p class=\"para-w3-agile\"> Phasellus iaculis sapien in tellus gravida, a placerat lacus\n\t\t\t\t\t\t\t\telementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc lectus sapien in\n\t\t\t\t\t\t\t\ttellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section> -->\n<!--// Clients -->\n\n\n<!-- subscribe -->\n<!-- <section class=\"subscribe text-center bg-light py-5\">\n\t<div class=\"container p-sm-3\">\n\t\t<h3 class=\"heading mb-2\"> Subscribe Newsletter </h3>\n\t\t<p class=\"mb-5\">Signup and recieve 15% on your First Plan.</p>\n\t\t<form action=\"#\" method=\"post\">\n\t\t\t<input class=\"form-control\" type=\"email\" placeholder=\"Your Email Address\" name=\"Subscribe\" required=\"\">\n\t\t\t<button class=\"btn1\">\n\t\t\t\t<span class=\"fa fa-paper-plane\"></span>\n\t\t\t</button>\n\t\t</form>\n\t</div>\n</section> -->\n<!-- //subscribe -->\n\n<!-- footer -->\n<footer>\n\t<div class=\"container p-sm-5 py-5\">\n\t\t<div class=\"row footer-gap\">\n\t\t\t<!-- <div class=\"col-lg-4 col-sm-6\">\n\t\t\t\t<h3 class=\"text-capitalize mb-3\">Address</h3>\n\t\t\t\t<address class=\"mb-0\">\n\t\t\t\t\t<p class=\"\"><span class=\"fa fa-map-marker\"></span> 2466H 5th Street Parking, King <br>Block, New\n\t\t\t\t\t\tYork City.</p>\n\t\t\t\t\t<p><span class=\"fa fa-clock-o\"></span> Timings : 10 a.m to 6 p.m</p>\n\t\t\t\t\t<p><span class=\"fa fa-phone\"></span> +12 8976 2334</p>\n\t\t\t\t\t<p><span class=\"fa fa-envelope-open\"></span> <a href=\"mailto:info@example.com\">info@example.com</a>\n\t\t\t\t\t</p>\n\t\t\t\t</address>\n\t\t\t</div> -->\n\t\t\t<!-- <div class=\"col-lg-4 col-sm-6 mt-lg-0 mt-sm-0 mt-4 p-md-0\">\n\t\t\t\t<h3 class=\"text-capitalize mb-4\">Meanwhile On Instagram</h3>\n\t\t\t\t<div class=\"images\">\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta2.jpg\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta3.jpg\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta4.jpg\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta5.jpg\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta6.jpg\" alt=\"\"\n\t\t\t\t\t\t\tclass=\"img-fluid\" /> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta7.jpg\" alt=\"\"\n\t\t\t\t\t\t\tclass=\"img-fluid\" /> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta8.jpg\" alt=\"\"\n\t\t\t\t\t\t\tclass=\"img-fluid\" /> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta9.jpg\" alt=\"\"\n\t\t\t\t\t\t\tclass=\"img-fluid\" /> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta1.jpg\" alt=\"\"\n\t\t\t\t\t\t\tclass=\"img-fluid\" /> </a>\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t\t<!-- <div class=\"col-lg-3 offset-lg-1 col-md-4 col-sm-6 mt-lg-0 mt-sm-5 mt-4\">\n\t\t\t\t<h3 class=\"text-capitalize mb-3\"> Follow us</h3>\n\t\t\t\t<p class=\"mb-4\">Follow us on social media</p>\n\t\t\t\t<ul class=\"social mt-lg-0 mt-3\">\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-facebook\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-twitter\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-google-plus\"></span></a></li>\n\t\t\t\t\t<li class=\"\"><a href=\"#\"><span class=\"fa fa-linkedin\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-rss\"></span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n\t<div class=\"copyright pb-5 text-center\">\n\t\t<!-- <p>© 2018 Wedding Organizer. All Rights Reserved |  -->\n\t\t<p>Design by <a href=\"http://www.W3Layouts.com\" target=\"_blank\">W3Layouts</a></p>\n\t</div>\n</footer>\n<!-- footer -->\n\n<!-- popup for login -->\n<div id=\"login-popup\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<h5 class=\"modal-title text-uppercase\">Login</h5>\n\t\t<div class=\"login-form\">\n\t\t\t<form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">User Name</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name1\"\n\t\t\t\t\t\trequired=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-w3l\">\n\t\t\t\t\t<input type=\"submit\" class=\"form-control\" value=\"Login\">\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t</div>\n\t\t<a class=\"close\" href=\"#\">&times;</a>\n\t</div>\n</div>\n<!-- popup for login -->\n\n<!-- popup for register -->\n<div id=\"login-popup\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<h5 class=\"modal-title text-uppercase\">Login</h5>\n\t\t<app-login></app-login>\n\t</div>\n</div>\n<!-- popup for register -->"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/pages/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
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

module.exports = __webpack_require__(/*! C:\Software\Angular Demo\kongu-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map