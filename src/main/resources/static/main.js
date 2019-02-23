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

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/gallery/gallery.component */ "./src/app/pages/gallery/gallery.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "about", component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: "services", component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"] },
    { path: "gallery", component: _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"] },
    { path: "contact", component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "home",
        pathMatch: "full"
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"],
                _pages_services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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

module.exports = "<!-- header -->\n<header>\n  <div class=\"container\">\n    <!-- top header -->\n    <section class=\"row top_header pt-3\">\n      <div class=\"col-lg-6 buttons ml-auto\">\n        <p><span class=\"fa fa-phone\"></span> +91 98765 43210</p>\n        <a\n          class=\"btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\"\n          href=\"#login-popup\"\n          >Login</a\n        >\n        <a\n          class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\"\n          href=\"#register-popup\"\n          >Register</a\n        >\n      </div>\n    </section>\n    <!-- top header -->\n    <!-- nav -->\n    <nav class=\"py-3\">\n      <div id=\"logo\">\n        <h1>\n          <a class=\"navbar-brand\" href=\"index.html\">\n            <span class=\"fa fa-empire\"></span>Kongu Manamedai\n            <!-- <span><span class=\"line\"></span>Organizer</span> -->\n          </a>\n        </h1>\n      </div>\n\n      <label for=\"drop\" class=\"toggle\"><span class=\"fa fa-bars\"></span></label>\n      <input type=\"checkbox\" id=\"drop\" />\n      <ul class=\"menu mt-2\">\n        <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">Home</a></li>\n        <li class=\"mr-lg-3 mr-2 active\"><a href=\"#\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">About Us</a></li>\n        <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/services']\" routerLinkActive=\"router-link-active\">Services</a></li>\n        <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/gallery']\" routerLinkActive=\"router-link-active\">Gallery</a></li>\n        <!-- <li class=\"mr-lg-3 mr-2 pb-0\"> -->\n          <!-- First Tier Drop Down -->\n          <!-- <label for=\"drop-2\" class=\"toggle\"\n            >Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span>\n          </label>\n          <a href=\"#\"\n            >Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span\n          ></a>\n          <input type=\"checkbox\" id=\"drop-2\" />\n          <ul class=\"drop-down-ul\">\n            <li><a href=\"error.html\">Error Page</a></li>\n            <li><a href=\"events.html\">Events Page</a></li>\n          </ul>\n        </li> -->\n        <li><a href=\"#\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">Contact</a></li>\n      </ul>\n    </nav>\n    <!-- //nav -->\n  </div>\n</header>\n<!-- //header -->\n\n<!-- inner banner -->\n<div class=\"inner_banner layer\" id=\"home\">\n  <div class=\"container\">\n    <div class=\"agileinfo-inner\">\n      <h2 class=\"text-center text-white\">\n        About Page\n      </h2>\n    </div>\n  </div>\n</div>\n<!-- //inner banner -->\n<!-- breadcrumbs -->\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a href=\"index.html\">Home</a>\n    </li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">About Us</li>\n  </ol>\n</nav>\n<!-- //breadcrumbs -->\n\n<!-- welcome -->\n<section class=\"welcome py-5\" id=\"welcome\">\n  <div class=\"container py-md-5\">\n    <h3 class=\"heading text-capitalize text-center mb-lg-5 mb-4\">\n      we will plan every detail of your wedding\n    </h3>\n    <div class=\"row welcome-grids\">\n      <div class=\"col-lg-4 mb-lg-0 mb-5\">\n        <h4 class=\"left-heading\">Our Weddings Story</h4>\n        <p class=\"mb-3\">\n          Sed gravida dignissim magna idesn molestie. Nulla congue, ex init\n          dictum lacinia, nisl est posuere nulla, nec eges tas leo mi id lorem.\n          Maecenas sem nulla ex init dictu lacinia, Maecenas sem nulla. Sed\n          gravida dignissim magna idesn en molestie\n        </p>\n        <div class=\"welcome-button mt-4\">\n          <a href=\"about.html\">Read More</a>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <div class=\"image1 mb-4\">\n          <h4>Hair / Makeup</h4>\n          <!-- <p class=\"mt-3\">Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init dictu lacinia, Maecenas sem nulla</P> -->\n        </div>\n        <div class=\"image1\">\n          <h4>Venue & Catering</h4>\n          <!-- <p class=\"mt-3\">Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init dictu lacinia, Maecenas sem nulla</P> -->\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6 mt-sm-0 mt-4\">\n        <div class=\"image1 mb-4\">\n          <h4>Photo / Video</h4>\n          <!-- <p class=\"mt-3\">Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init dictu lacinia, Maecenas sem nulla</P> -->\n        </div>\n        <div class=\"image1\">\n          <h4>Flowers & Music</h4>\n          <!-- <p class=\"mt-3\">Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init dictu lacinia, Maecenas sem nulla</P> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- welcome -->\n\n<!-- about -->\n<section class=\"about py-5\">\n  <div class=\"container py-sm-3\">\n    <h3 class=\"heading text-capitalize mb-lg-5 mb-4\">Who We Are</h3>\n    <div class=\"row about-grids\">\n      <div class=\"col-lg-6\">\n        <h4>\n          We are committed to service excellence and quality on wedding & events\n        </h4>\n        <p class=\"mb-3\">\n          Sed gravida dignissim magna idesn molestie. Nulla congue, ex init\n          dictu lacinia, nislen est posuere nulla, nec egestas leo miid sed\n          lorem. Maecenas sem nulla. Maecenas risus enim, pharetra accumsan\n          nulla vitae, mollis hendrerit orci. Pellentesque nec purus eurts\n          tortor molestie fringilla ut sit amet mauris. Maecenas mattis eleifend\n          lacus non condimentum. Elit Donec fringilla nisi risus.\n        </p>\n        <p>\n          Sed gravida dignissim magna idesn molestie. Nulla congue, ex init\n          dictu lacinia, nislen est posuere nulla, nec egestas leo mid.\n        </p>\n      </div>\n      <div class=\"col-lg-6 mt-lg-0 mt-5\">\n        <img src=\"../../../assets/images/who.jpg\" alt=\"\" class=\"img-fluid\" />\n      </div>\n    </div>\n  </div>\n</section>\n<!-- //about -->\n\n<!-- contact query -->\n<section class=\"query\">\n  <div class=\"wthree-different-dot1 py-5\">\n    <div class=\"container py-sm-3\">\n      <div class=\"row query-grids\">\n        <div class=\"col-lg-5\">\n          <h4 class=\"mb-3\">Find Your Style</h4>\n          <p class=\"mb-3\">\n            Sed gravida dignissim magna idesn molestie. Nulla congue, ex init\n            dictu lacinia, nislen est posuere nulla, nec egestas leo miid sed\n            lorem. Maecenas sem nulla. Maecenas risus enim, pharetra accumsan\n            nulla vitae, mollis hendrerit orci. Pellentesque nec purus eurts\n            tortor molestie fringilla ut sit amet mauris. Maecenas mattis\n            eleifend lacus non condimentum.\n          </p>\n          <a href=\"contact.html\">Contact and Inquiry </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- //contact query -->\n\n<!-- subscribe -->\n<section class=\"subscribe text-center bg-light py-5\">\n  <div class=\"container p-sm-3\">\n    <h3 class=\"heading mb-2\">Subscribe Newsletter</h3>\n    <p class=\"mb-5\">Signup and recieve 15% on your First Plan.</p>\n    <form action=\"#\" method=\"post\">\n      <input\n        class=\"form-control\"\n        type=\"email\"\n        placeholder=\"Your Email Address\"\n        name=\"Subscribe\"\n        required=\"\"\n      />\n      <button class=\"btn1\">\n        <span class=\"fa fa-paper-plane\"></span>\n      </button>\n    </form>\n  </div>\n</section>\n<!-- //subscribe -->\n\n<!-- footer -->\n<footer>\n  <div class=\"container py-5\">\n    <div class=\"row footer-gap\">\n      <div class=\"col-lg-4 col-sm-6\">\n        <h3 class=\"text-capitalize mb-3\">Address</h3>\n        <address class=\"mb-0\">\n          <p class=\"\">\n            <span class=\"fa fa-map-marker\"></span> 2466H 5th Street Parking,\n            King <br />Block, New York City.\n          </p>\n          <p><span class=\"fa fa-clock-o\"></span> Timings : 10 a.m to 6 p.m</p>\n          <p><span class=\"fa fa-phone\"></span> +12 8976 2334</p>\n          <p>\n            <span class=\"fa fa-envelope-open\"></span>\n            <a href=\"mailto:info@example.com\">info@example.com</a>\n          </p>\n        </address>\n      </div>\n      <div class=\"col-lg-4 col-sm-6 mt-lg-0 mt-sm-0 mt-4 p-md-0\">\n        <h3 class=\"text-capitalize mb-4\">Meanwhile On Instagram</h3>\n        <div class=\"images\">\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta2.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta3.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta4.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta5.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta6.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta7.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta8.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta9.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 offset-lg-1 col-sm-6 mt-lg-0 mt-sm-5 mt-4\">\n        <h3 class=\"text-capitalize mb-3\">Follow us</h3>\n        <p class=\"mb-4\">Follow us on social media</p>\n        <ul class=\"social mt-lg-0 mt-3\">\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-facebook\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-twitter\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-google-plus\"></span></a>\n          </li>\n          <li class=\"\">\n            <a href=\"#\"><span class=\"fa fa-linkedin\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-rss\"></span></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyright pb-5 text-center\">\n    <p>\n      © 2018 Wedding Organizer. All Rights Reserved | Design by\n      <a href=\"http://www.W3Layouts.com\" target=\"_blank\">W3Layouts</a>\n    </p>\n  </div>\n</footer>\n<!-- footer -->\n\n<!-- popup for login -->\n<div id=\"login-popup\" class=\"popup-effect\">\n  <div class=\"popup\">\n    <h5 class=\"modal-title text-uppercase\">Login</h5>\n    <div class=\"login-form\">\n      <form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">User Name</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name1\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"right-w3l\">\n          <input type=\"submit\" class=\"form-control\" value=\"Login\" />\n        </div>\n      </form>\n    </div>\n    <a class=\"close\" href=\"#\">&times;</a>\n  </div>\n</div>\n<!-- popup for login -->\n\n<!-- popup for register -->\n<div id=\"register-popup\" class=\"popup-effect\">\n  <div class=\"popup\">\n    <h5 class=\"modal-title text-uppercase\">Register</h5>\n    <div class=\"lregister-form\">\n      <form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">First Name</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name2\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">Last Name</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name3\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">Email id</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name4\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\"\n            >Mobile Number</label\n          >\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name5\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name6\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"right-w3l\">\n          <input type=\"submit\" class=\"form-control\" value=\"Get Started\" />\n        </div>\n      </form>\n    </div>\n    <a class=\"close\" href=\"#\">&times;</a>\n  </div>\n</div>\n<!-- popup for register -->\n"

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

module.exports = "<!-- header -->\n<header>\n\t<div class=\"container\">\n\t\t<!-- top header -->\n\t\t<section class=\"row top_header pt-3\">\n\t\t\t<div class=\"col-lg-6 buttons ml-auto\">\n\t\t\t\t<p><span class=\"fa fa-phone\"></span> +91 98765 43210</p>\n\t\t\t\t<a class=\"btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\" href=\"#login-popup\">Login</a>\n\t\t\t\t<a class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\" href=\"#register-popup\">Register</a>\n\t\t\t</div>\n\t\t</section>\n\t\t<!-- top header -->\n\t\t<!-- nav -->\n\t\t<nav class=\"py-3\">\n        <div id=\"logo\">\n\t\t\t<h1>\n        <a class=\"navbar-brand\" href=\"index.html\"> <span class=\"fa fa-empire\"></span>Kongu Manamedai \n          <!-- <span><span class=\"line\"></span>Organizer</span> -->\n\t\t\t\t</a>\n\t\t\t</h1>\n\t\t</div>\n\n        <label for=\"drop\" class=\"toggle\"><span class=\"fa fa-bars\"></span></label>\n        <input type=\"checkbox\" id=\"drop\" />\n            <ul class=\"menu mt-2\">\n                <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">Home</a></li>\n                <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">About Us</a></li>\n                <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/services']\" routerLinkActive=\"router-link-active\">Services</a></li>\n                <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/gallery']\" routerLinkActive=\"router-link-active\">Gallery</a></li>\n        \n                <!-- <li class=\"mr-lg-3 mr-2 pb-0\"> -->\n                <!-- First Tier Drop Down -->\n                <!-- <label for=\"drop-2\" class=\"toggle\">Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span> </label>\n                <a href=\"#\">Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span></a>\n                <input type=\"checkbox\" id=\"drop-2\"/>\n                <ul class=\"drop-down-ul\">\n                    <li><a href=\"error.html\">Error Page</a></li>\n                    <li><a href=\"events.html\">Events Page</a></li>\n                </ul>\n                </li> -->\n                <li class=\"active\"><a href=\"#\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">Contact</a></li>\n            </ul>\n        </nav>\n\t\t<!-- //nav -->\n\t</div>\n</header>\n<!-- //header -->\n\n <!-- inner banner -->\n    <div class=\"inner_banner layer\" id=\"home\">\n        <div class=\"container\">\n            <div class=\"agileinfo-inner\">\n                <h2 class=\"text-center text-white\">\n                    Contact Page\n                </h2>\n            </div>\n        </div>\n    </div>\n    <!-- //inner banner -->\n    <!-- breadcrumbs -->\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <a href=\"index.html\">Home</a>\n            </li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Contact Us</li>\n        </ol>\n    </nav>\n    <!-- //breadcrumbs -->\n\n<!-- contact -->\n<section class=\"contact py-5\">\n\t<div class=\"container py-sm-3\">\n\t\t<h3 class=\"heading text-capitalize mb-lg-5 mb-4\"> Contact Us </h3>\n\t\t<div class=\"address row\">\n\t\t\t<div class=\"col-md-4 address-grid\">\n\t\t\t\t<div class=\"address-info\">\n\t\t\t\t\t<div class=\"address-left text-center\">\n\t\t\t\t\t\t<span class=\"fa fa-map-marker\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"address-right text-center\">\n\t\t\t\t\t\t<h6 class=\"ad-info text-uppercase mb-2\">Address</h6>\n\t\t\t\t\t\t<p> 2466H 5th Street Parking, King Block, New York City.\n\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 address-grid\">\n\t\t\t\t<div class=\"address-info\">\n\t\t\t\t\t<div class=\"address-left text-center\">\n\t\t\t\t\t\t<span class=\"fa fa-envelope\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"address-right text-center\">\n\t\t\t\t\t\t<h6 class=\"ad-info text-uppercase mb-2\">Email</h6>\n\t\t\t\t\t\t\t<a href=\"mailto:information@example.com\"> information@example.com</a>\n\t\t\t\t\t\t\t<a href=\"mailto:information@example1.com\"> information@example1.com</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 address-grid\">\n\t\t\t\t<div class=\"address-info\">\n\t\t\t\t\t<div class=\"address-left text-center\">\n\t\t\t\t\t\t<span class=\"fa fa-phone\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"address-right text-center\">\n\t\t\t\t\t\t<h6 class=\"ad-info text-uppercase mb-2\">Phone</h6>\n\t\t\t\t\t\t<p>+1 234 567 8901</p>\n\t\t\t\t\t\t<p>+1 234 567 8901</p>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form row py-5\">\n\t\t\t<div class=\"col-lg-6 contact-form\">\n\t\t\t\t<form action=\"#\" method=\"post\">\n\t\t\t\t\t<div class=\"fields-grid\">\n\t\t\t\t\t\t<div class=\"styled-input agile-styled-input-top\">\n\t\t\t\t\t\t\t<input type=\"text\" name=\"First name\" required=\"\"> \n\t\t\t\t\t\t\t<label>Full Name</label>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"styled-input\">\n\t\t\t\t\t\t\t<input type=\"email\" name=\"Email\" required=\"\">\n\t\t\t\t\t\t\t<label>Email Address</label>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"styled-input\">\n\t\t\t\t\t\t\t<input type=\"tel\" name=\"Phone\" required=\"\">\n\t\t\t\t\t\t\t<label>Phone Number</label>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"styled-input mt-5\">\n\t\t\t\t\t\t\t<textarea></textarea>\n\t\t\t\t\t\t\t<label class=\"text\">Your Message</label>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type=\"submit\" value=\"Submit\">\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-6 mt-lg-0 mt-5\">\n\t\t\t\t<div class=\"bg-img\">\n\t\t\t\t\t<div class=\"contact-layer\">\n\t\t\t\t\t\t<h3 class=\"mb-3\">Dont hesitate to contact us for any kind of information</h3>\n\t\t\t\t\t\t<p><i class=\"fas mr-2 fa-mobile-alt\"></i> +12 327 8976 2334</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"map\">\n\t\t\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387142.84010033106!2d-74.25819252532891!3d40.70583163828471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1475140387172\"\n\t\t\t\t\t\tstyle=\"border:0\"></iframe>\n\t\t</div>\n\t</div>\n</section>\t\n<!-- //contact -->\n\n<!-- footer -->\t\n<footer>\n\t<div class=\"container py-5\">\n\t\t<div class=\"row footer-gap\">\n\t\t\t<div class=\"col-lg-4 col-sm-6\">\n\t\t\t\t<h3 class=\"text-capitalize mb-3\">Address</h3>\n\t\t\t\t<address class=\"mb-0\">\n\t\t\t\t\t<p class=\"\"><span class=\"fa fa-map-marker\"></span> 2466H 5th Street Parking, King <br>Block, New York City.</p>\n\t\t\t\t\t<p><span class=\"fa fa-clock-o\"></span> Timings : 10 a.m to 6 p.m</p>\n\t\t\t\t\t<p><span class=\"fa fa-phone\"></span> +12 8976 2334</p>\n\t\t\t\t\t<p><span class=\"fa fa-envelope-open\"></span> <a href=\"mailto:info@example.com\">info@example.com</a></p>\n\t\t\t\t</address>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-sm-6 mt-lg-0 mt-sm-0 mt-4 p-md-0\">\n\t\t\t\t<h3 class=\"text-capitalize mb-4\">Meanwhile On Instagram</h3>\n\t\t\t\t<div class=\"images\">\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta2.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta3.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta4.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta5.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta6.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta7.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta8.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta9.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 offset-lg-1 col-sm-6 mt-lg-0 mt-sm-5 mt-4\">\n\t\t\t\t<h3 class=\"text-capitalize mb-3\"> Follow us</h3>\n\t\t\t\t<p class=\"mb-4\">Follow us on social media</p>\n\t\t\t\t<ul class=\"social mt-lg-0 mt-3\">\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-facebook\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-twitter\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-google-plus\"></span></a></li>\n\t\t\t\t\t<li class=\"\"><a href=\"#\"><span class=\"fa fa-linkedin\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-rss\"></span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"copyright pb-5 text-center\">\n\t\t<p>© 2018 Wedding Organizer. All Rights Reserved | Design by <a href=\"http://www.W3Layouts.com\" target=\"_blank\">W3Layouts</a></p>\n\t</div>\n</footer>\n<!-- footer -->\n\n<!-- popup for login -->\n<div id=\"login-popup\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<h5 class=\"modal-title text-uppercase\">Login</h5>\n\t\t<div class=\"login-form\">\n\t\t\t<form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">User Name</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name1\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-w3l\">\n\t\t\t\t\t<input type=\"submit\" class=\"form-control\" value=\"Login\">\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t</div>\n\t\t<a class=\"close\" href=\"#\">&times;</a>\n\t</div>\n</div>\n<!-- popup for login -->\n\n<!-- popup for register -->\n<div id=\"register-popup\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<h5 class=\"modal-title text-uppercase\">Register</h5>\n\t\t<div class=\"lregister-form\">\n\t\t\t<form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">First Name</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name2\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">Last Name</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name3\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">Email id</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name4\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">Mobile Number</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name5\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name6\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-w3l\">\n\t\t\t\t\t<input type=\"submit\" class=\"form-control\" value=\"Get Started\">\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<a class=\"close\" href=\"#\">&times;</a>\n\t</div>\n</div>\n<!-- popup for register -->"

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

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<header>\n  <div class=\"container\">\n    <!-- top header -->\n    <section class=\"row top_header pt-3\">\n      <div class=\"col-lg-6 buttons ml-auto\">\n        <p><span class=\"fa fa-phone\"></span> +91 98765 43210</p>\n        <a\n          class=\"btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\"\n          href=\"#login-popup\"\n          >Login</a\n        >\n        <a\n          class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\"\n          href=\"#register-popup\"\n          >Register</a\n        >\n      </div>\n    </section>\n    <!-- top header -->\n    <!-- nav -->\n    <nav class=\"py-3\">\n      <div id=\"logo\">\n        <h1>\n          <a class=\"navbar-brand\" href=\"index.html\">\n            <span class=\"fa fa-empire\"></span>Kongu Manamedai\n            <!-- <span><span class=\"line\"></span>Organizer</span> -->\n          </a>\n        </h1>\n      </div>\n\n      <label for=\"drop\" class=\"toggle\"><span class=\"fa fa-bars\"></span></label>\n      <input type=\"checkbox\" id=\"drop\" />\n      <ul class=\"menu mt-2\">\n        <li class=\"mr-lg-3 mr-2 active\"><a href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">Home</a></li>\n        <li class=\"mr-lg-3 mr-2\">\n          <a href=\"#\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\" >About Us</a>\n        </li>\n        <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/services']\" routerLinkActive=\"router-link-active\">Services</a></li>\n        <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/gallery']\" routerLinkActive=\"router-link-active\">Gallery</a></li>\n        <!-- <li class=\"mr-lg-3 mr-2\"><a href=\"gallery.html\">Gallery</a></li> -->\n        <!-- <li class=\"mr-lg-3 mr-2 pb-0\"> -->\n        <!-- First Tier Drop Down -->\n        <!-- <label for=\"drop-2\" class=\"toggle\"\n            >Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span>\n          </label>\n          <a href=\"#\"\n            >Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span\n          ></a>\n          <input type=\"checkbox\" id=\"drop-2\" />\n          <ul class=\"drop-down-ul\">\n            <li><a href=\"error.html\">Error Page</a></li>\n            <li><a href=\"events.html\">Events Page</a></li>\n          </ul>\n        </li> -->\n        <li><a href=\"#\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">Contact</a></li>\n      </ul>\n    </nav>\n    <!-- //nav -->\n  </div>\n</header>\n<!-- //header -->\n\n<!-- banner -->\n<section class=\"banner layer\" id=\"home\">\n  <div class=\"container\">\n    <div class=\"banner-text\">\n      <div class=\"slider-info mb-4\">\n        <div class=\"banner-heading\">\n          <h3>\n            Your wedding adventure starts here\n          </h3>\n        </div>\n        <a href=\"contact.html\"> Plan Your Wedding</a>\n      </div>\n      <!-- To bottom button-->\n      <div class=\"thim-click-to-bottom\">\n        <div class=\"rotate\">\n          <a href=\"#welcome\" class=\"scroll\">\n            <span class=\"fa fa-angle-double-down\"></span>\n          </a>\n        </div>\n      </div>\n      <!-- //To bottom button-->\n    </div>\n  </div>\n</section>\n<!-- //banner -->\n\n<!-- welcome -->\n<section class=\"welcome py-5\" id=\"welcome\">\n  <div class=\"container py-md-5\">\n    <h3 class=\"heading text-capitalize text-center mb-lg-5 mb-4\">\n      we will plan every detail of your wedding\n    </h3>\n    <div class=\"row welcome-grids\">\n      <div class=\"col-lg-4 mb-lg-0 mb-5\">\n        <h4 class=\"left-heading\">Our Weddings Story</h4>\n        <p class=\"mb-3\">\n          Sed gravida dignissim magna idesn molestie. Nulla congue, ex init\n          dictum lacinia, nisl est posuere nulla, nec eges tas leo mi id lorem.\n          Maecenas sem nulla ex init dictu lacinia, Maecenas sem nulla. Sed\n          gravida dignissim magna idesn en molestie\n        </p>\n        <div class=\"welcome-button mt-4\">\n          <a href=\"about.html\">Read More</a>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <div class=\"image1 mb-4\">\n          <h4>Hair / Makeup</h4>\n          <p class=\"mt-3\">\n            Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init\n            dictu lacinia, Maecenas sem nulla\n          </p>\n        </div>\n        <div class=\"image1\">\n          <h4>Venue & Catering</h4>\n          <p class=\"mt-3\">\n            Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init\n            dictu lacinia, Maecenas sem nulla\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6 mt-sm-0 mt-4\">\n        <div class=\"image1 mb-4\">\n          <h4>Photo / Video</h4>\n          <p class=\"mt-3\">\n            Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init\n            dictu lacinia, Maecenas sem nulla\n          </p>\n        </div>\n        <div class=\"image1\">\n          <h4>Flowers & Music</h4>\n          <p class=\"mt-3\">\n            Sed gravida dignissim magna idesn en molestie. Nulla congue, ex init\n            dictu lacinia, Maecenas sem nulla\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- welcome -->\n\n<!-- IMAGES -->\n<section class=\"images\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 col-md-4 col-sm-6  bg-img1\">\n        <h4>Perfect Planning</h4>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-sm-6 bg-img2\">\n        <h4>Wedding Ceremony</h4>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-sm-6 bg-img3\">\n        <h4>Entertainment Program</h4>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-sm-6 bg-img4\">\n        <h4>Engagement Ceremony</h4>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-sm-6 bg-img5\">\n        <h4>Birthday Celebrations</h4>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-sm-6 bg-img6\">\n        <h4>Anniversary Events</h4>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- IMAGES -->\n\n<!-- services -->\n<section class=\"services py-5\">\n  <div class=\"container py-md-5\">\n    <h3 class=\"heading text-capitalize mb-lg-5 mb-4\">Our Services</h3>\n    <div class=\"row service-grids\">\n      <div class=\"col-lg-3 col-sm-6\">\n        <div class=\"service-grid1\">\n          <span class=\"fa fa-globe\"></span>\n          <h4 class=\"my-3\">Weddings</h4>\n          <p>\n            Aenean tristique, duiid sedet blandit elt ultricies, ligula elit\n            interd ures turpis, at bibendum lib dolor.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-sm-0 mt-sm-4 mt-4\">\n        <div class=\"service-grid1\">\n          <span class=\"fa fa-book\"></span>\n          <h4 class=\"my-3\">Parties</h4>\n          <p>\n            Aenean tristique, duiid sedet blandit elt ultricies, ligula elit\n            interd ures turpis, at bibendum lib dolor.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-lg-0 mt-sm-4 mt-4\">\n        <div class=\"service-grid1\">\n          <span class=\"fa fa-diamond\"></span>\n          <h4 class=\"my-3\">Entertainment</h4>\n          <p>\n            Aenean tristique, duiid sedet blandit elt ultricies, ligula elit\n            interd ures turpis, at bibendum lib dolor.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-lg-0 mt-sm-4 mt-4\">\n        <div class=\"service-grid1\">\n          <span class=\"fa fa-book\"></span>\n          <h4 class=\"my-3\">Celebrations</h4>\n          <p>\n            Aenean tristique, duiid sedet blandit elt ultricies, ligula elit\n            interd ures turpis, at bibendum lib dolor.\n          </p>\n        </div>\n      </div>\n      <div class=\"ser-button mt-4\">\n        <a href=\"services.html\">Explore all services</a>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- //services -->\n\n<!-- wedding date -->\n<section class=\"section my-lg-5 py-5\">\n  <div class=\"container py-md-5\">\n    <h3 class=\"heading wedding text-light mb-2 text-center\">\n      Our Next Wedding Organizer Is On\n    </h3>\n    <p class=\"countdown-text mx-auto text-center text-light mb-lg-5 mb-4\">\n      Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd\n      ures turpis, at bibendum lib sed ipsum dolor.\n    </p>\n    <div class=\"row\">\n      <div class=\"col-lg-7 mx-auto\">\n        <!--date-->\n        <div class=\"examples text-center\">\n          <h4>21 Dec, 2018.</h4>\n          <p>Venue : 2466H 5th Street Parking, King Block, New York City.</p>\n        </div>\n        <!--//date-->\n      </div>\n      <div class=\"position-img1\">\n        <img src=\"../../../assets/images/right.jpg\" alt=\"\" class=\"img-fluid\" />\n      </div>\n      <div class=\"position-img2\">\n        <img src=\"../../../assets/images/left.jpg\" alt=\"\" class=\"img-fluid\" />\n      </div>\n    </div>\n  </div>\n</section>\n<!-- //wedding date -->\n\n<!-- Clients -->\n<section class=\"clients-main\">\n  <div class=\"wthree-different-dot1 py-5\">\n    <div class=\"container py-sm-3\">\n      <h3 class=\"heading text-capitalize text-center mb-sm-5 mb-4\">\n        What They Say\n      </h3>\n      <div class=\"row cli-ent\">\n        <div class=\"col-lg-4 col-md-6 item g1\">\n          <div class=\"row agile-dish-caption\">\n            <div class=\"col-lg-11 text-center mx-auto\">\n              <h5>Michael Johnson</h5>\n              <p class=\"para-w3-agile\">\n                Phasellus iaculis sapien in tellus gravida, a placerat lacus\n                elementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc\n                lectus sapien in tellus.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 item g1\">\n          <div class=\"row agile-dish-caption\">\n            <div class=\"col-lg-11 text-center mx-auto\">\n              <h5>Mary elizabeth</h5>\n              <p class=\"para-w3-agile\">\n                Phasellus iaculis sapien in tellus gravida, a placerat lacus\n                elementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc\n                lectus sapien in tellus.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 item g1\">\n          <div class=\"row agile-dish-caption\">\n            <div class=\"col-lg-11 text-center mx-auto\">\n              <h5>Elisa kour</h5>\n              <p class=\"para-w3-agile\">\n                Phasellus iaculis sapien in tellus gravida, a placerat lacus\n                elementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc\n                lectus sapien in tellus.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--// Clients -->\n\n<!-- subscribe -->\n<section class=\"subscribe text-center bg-light py-5\">\n  <div class=\"container p-sm-3\">\n    <h3 class=\"heading mb-2\">Subscribe Newsletter</h3>\n    <p class=\"mb-5\">Signup and recieve 15% on your First Plan.</p>\n    <form action=\"#\" method=\"post\">\n      <input\n        class=\"form-control\"\n        type=\"email\"\n        placeholder=\"Your Email Address\"\n        name=\"Subscribe\"\n        required=\"\"\n      />\n      <button class=\"btn1\">\n        <span class=\"fa fa-paper-plane\"></span>\n      </button>\n    </form>\n  </div>\n</section>\n<!-- //subscribe -->\n\n<!-- footer -->\n<footer>\n  <div class=\"container py-5\">\n    <div class=\"row footer-gap\">\n      <div class=\"col-lg-4 col-sm-6\">\n        <h3 class=\"text-capitalize mb-3\">Address</h3>\n        <address class=\"mb-0\">\n          <p class=\"\">\n            <span class=\"fa fa-map-marker\"></span> 2466H 5th Street Parking,\n            King <br />Block, New York City.\n          </p>\n          <p><span class=\"fa fa-clock-o\"></span> Timings : 10 a.m to 6 p.m</p>\n          <p><span class=\"fa fa-phone\"></span> +12 8976 2334</p>\n          <p>\n            <span class=\"fa fa-envelope-open\"></span>\n            <a href=\"mailto:info@example.com\">info@example.com</a>\n          </p>\n        </address>\n      </div>\n      <div class=\"col-lg-4 col-sm-6 mt-lg-0 mt-sm-0 mt-4 p-md-0\">\n        <h3 class=\"text-capitalize mb-4\">Meanwhile On Instagram</h3>\n        <div class=\"images\">\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta2.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta3.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta4.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta5.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta6.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta7.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta8.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta9.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n          <a class=\"mt-2 pr-2\" href=\"#\">\n            <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\" />\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 offset-lg-1 col-sm-6 mt-lg-0 mt-sm-5 mt-4\">\n        <h3 class=\"text-capitalize mb-3\">Follow us</h3>\n        <p class=\"mb-4\">Follow us on social media</p>\n        <ul class=\"social mt-lg-0 mt-3\">\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-facebook\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-twitter\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-google-plus\"></span></a>\n          </li>\n          <li class=\"\">\n            <a href=\"#\"><span class=\"fa fa-linkedin\"></span></a>\n          </li>\n          <li class=\"mr-1\">\n            <a href=\"#\"><span class=\"fa fa-rss\"></span></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyright pb-5 text-center\">\n    <p>\n      © 2018 Wedding Organizer. All Rights Reserved | Design by\n      <a href=\"http://www.W3Layouts.com\" target=\"_blank\">W3Layouts</a>\n    </p>\n  </div>\n</footer>\n<!-- footer -->\n\n<!-- popup for login -->\n<div id=\"login-popup\" class=\"popup-effect\">\n  <div class=\"popup\">\n    <h5 class=\"modal-title text-uppercase\">Login</h5>\n    <div class=\"login-form\">\n      <form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\"\n            >Mobile / Email</label\n          >\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name1\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"right-w3l\">\n          <input type=\"submit\" class=\"form-control\" value=\"Login\" />\n        </div>\n      </form>\n    </div>\n    <a class=\"close\" href=\"#\">&times;</a>\n  </div>\n</div>\n<!-- popup for login -->\n\n<!-- popup for register -->\n<div id=\"register-popup\" class=\"popup-effect\">\n  <div class=\"popup\">\n    <h5 class=\"modal-title text-uppercase\">Register</h5>\n    <div class=\"lregister-form\">\n      <form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">First Name</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name2\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">Last Name</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name3\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\">Email id</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name4\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name\" class=\"col-form-label\"\n            >Mobile Number</label\n          >\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name5\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\"\"\n            name=\"Name\"\n            id=\"recipient-name6\"\n            required=\"\"\n          />\n        </div>\n        <div class=\"right-w3l\">\n          <input type=\"submit\" class=\"form-control\" value=\"Get Started\" />\n        </div>\n      </form>\n    </div>\n    <a class=\"close\" href=\"#\">&times;</a>\n  </div>\n</div>\n<!-- popup for register -->\n"

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
/* harmony import */ var _app_services_kongu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/services/kongu.service */ "./src/app/services/kongu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HomeComponent(_service, _activateRoute, _router) {
        this._service = _service;
        this._activateRoute = _activateRoute;
        this._router = _router;
    }
    // singUp(formValue: string) {
    //   this._service.signUp(formValue);
    // }
    HomeComponent.prototype.onAboutButton = function () {
        this._router.navigate(["/about"]);
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_kongu_service__WEBPACK_IMPORTED_MODULE_1__["KonguService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
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

module.exports = "\n<!-- header -->\n<header>\n\t<div class=\"container\">\n\t\t<!-- top header -->\n\t\t<section class=\"row top_header pt-3\">\n\t\t\t<div class=\"col-lg-6 buttons ml-auto\">\n        <p><span class=\"fa fa-phone\"></span> +91 98765 43210</p>\n\t\t\t\t<a class=\"btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2\" href=\"#login-popup\">Login</a>\n\t\t\t\t<a class=\"btn btn-info1 btn-lg-block w3ls-btn1 px-sm-4 px-3 text-capitalize\" href=\"#register-popup\">Register</a>\n\t\t\t</div>\n\t\t</section>\n\t\t<!-- top header -->\n\t\t<!-- nav -->\n\t\t<nav class=\"py-3\">\n        <div id=\"logo\">\n\t\t\t<h1>\n\t\t\t\t<a class=\"navbar-brand\" href=\"index.html\">\n        <span class=\"fa fa-empire\"></span>Kongu Manamedai\n        <!-- </span>Organizer</span> -->\n\t\t\t\t</a>\n\t\t\t</h1>\n\t\t</div>\n\n        <label for=\"drop\" class=\"toggle\"><span class=\"fa fa-bars\"></span></label>\n        <input type=\"checkbox\" id=\"drop\" />\n            <ul class=\"menu mt-2\">\n                <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">Home</a></li>\n                <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">About Us</a></li>\n                <li class=\"mr-lg-3 mr-2 active\"><a href=\"#\" [routerLink]=\"['/services']\" routerLinkActive=\"router-link-active\">Services</a></li>\n                <li class=\"mr-lg-3 mr-2\"><a href=\"#\" [routerLink]=\"['/gallery']\" routerLinkActive=\"router-link-active\">Gallery</a></li>\n                <!-- <li class=\"mr-lg-3 mr-2 pb-0\"> -->\n                <!-- First Tier Drop Down -->\n                <!-- <label for=\"drop-2\" class=\"toggle\">Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span> </label>\n                <a href=\"#\">Pages <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span></a>\n                <input type=\"checkbox\" id=\"drop-2\"/>\n                <ul class=\"drop-down-ul\">\n                    <li><a href=\"error.html\">Error Page</a></li>\n                    <li><a href=\"events.html\">Events Page</a></li>\n                </ul>\n                </li> -->\n                <li><a href=\"#\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">Contact</a></li>\n            </ul>\n        </nav>\n\t\t<!-- //nav -->\n\t</div>\n</header>\n<!-- //header -->\n\n <!-- inner banner -->\n    <div class=\"inner_banner layer\" id=\"home\">\n        <div class=\"container\">\n            <div class=\"agileinfo-inner\">\n                <h2 class=\"text-center text-white\">\n                    Services Page\n                </h2>\n            </div>\n        </div>\n    </div>\n    <!-- //inner banner -->\n    <!-- breadcrumbs -->\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <a href=\"index.html\">Home</a>\n            </li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Services</li>\n        </ol>\n    </nav>\n    <!-- //breadcrumbs -->\n\n\n<!-- services -->\n<section class=\"services py-5\">\n\t<div class=\"container py-sm-3\">\n\t\t<h3 class=\"heading text-capitalize mb-lg-5 mb-4\"> Our Services  </h3>\n\t\t<div class=\"row service-grids\">\n\t\t\t<div class=\"col-lg-3 col-sm-6\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-globe\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Weddings</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum lib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6 \">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-book\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Parties</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum lib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-diamond\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Entertainment</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum lib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-book\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Celebrations</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum lib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6 mt-lg-5\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-globe\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Events</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum lib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6 mt-lg-mt-5\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-book\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Catering</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum lib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6 mt-lg-mt-5\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-diamond\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">Makeup</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum lib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-sm-6 mt-lg-mt-5\">\n\t\t\t\t<div class=\"service-grid1\">\n\t\t\t\t\t<span class=\"fa fa-book\"></span>\n\t\t\t\t\t<h4 class=\"my-3\">photo / Video</h4>\n\t\t\t\t\t<p>Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum lib dolor.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- //services -->\n\n\n<!-- IMAGES -->\n<section class=\"images pb-5\">\n\t<div class=\"container-fluid py-md-5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6  bg-img1\">\n\t\t\t\t<h4>Perfect Planning</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6 bg-img2\">\n\t\t\t\t<h4>Wedding Ceremony</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6 bg-img3\">\n\t\t\t\t<h4>Entertainment Program</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6 bg-img4\">\n\t\t\t\t<h4>Engagement Ceremony</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6 bg-img5\">\n\t\t\t\t<h4>Birthday Celebrations</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-4 col-sm-6 bg-img6\">\n\t\t\t\t<h4>Anniversary Events</h4>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- IMAGES -->\n\n\n<!-- Clients -->\n<section class=\"clients-main\">\n\t<div class=\"wthree-different-dot1 py-5\">\n\t\t<div class=\"container py-sm-3\">\n\t\t\t<h3 class=\"heading text-capitalize text-center mb-sm-5 mb-4\"> What They Say </h3>\n\t\t\t<div class=\"row cli-ent\">\n\t\t\t\t<div class=\"col-lg-4 col-md-6 item g1\">\n\t\t\t\t\t<div class=\"row agile-dish-caption\">\n\t\t\t\t\t\t<div class=\"col-lg-11 text-center mx-auto\">\n\t\t\t\t\t\t\t<h5>Michael Johnson</h5>\n\t\t\t\t\t\t\t<p class=\"para-w3-agile\"> Phasellus iaculis sapien in tellus gravida, a placerat lacus elementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc lectus sapien in tellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-6 item g1\">\n\t\t\t\t\t<div class=\"row agile-dish-caption\">\n\t\t\t\t\t\t<div class=\"col-lg-11 text-center mx-auto\">\n\t\t\t\t\t\t\t<h5>Mary elizabeth</h5>\n\t\t\t\t\t\t\t<p class=\"para-w3-agile\"> Phasellus iaculis sapien in tellus gravida, a placerat lacus elementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc lectus sapien in tellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-6 item g1\">\n\t\t\t\t\t<div class=\"row agile-dish-caption\">\n\t\t\t\t\t\t<div class=\"col-lg-11 text-center mx-auto\">\n\t\t\t\t\t\t\t<h5>Elisa kour</h5>\n\t\t\t\t\t\t\t<p class=\"para-w3-agile\"> Phasellus iaculis sapien in tellus gravida, a placerat lacus elementum. Nulla vitae lac nec elit mollis pretium. Sed sed nunc lectus sapien in tellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!--// Clients -->\n\n\n<!-- subscribe -->\n<section class=\"subscribe text-center bg-light py-5\">\n\t<div class=\"container p-sm-3\">\n\t\t<h3 class=\"heading mb-2\"> Subscribe Newsletter </h3>\n\t\t<p class=\"mb-5\">Signup and recieve 15% on your First Plan.</p>\n\t\t<form action=\"#\" method=\"post\">\n\t\t\t<input class=\"form-control\" type=\"email\" placeholder=\"Your Email Address\" name=\"Subscribe\" required=\"\">\n\t\t\t<button class=\"btn1\">\n\t\t\t\t<span class=\"fa fa-paper-plane\"></span>\n\t\t\t</button>\n\t\t</form>\n\t</div>\n</section>\n<!-- //subscribe -->\n\n<!-- footer -->\n<footer>\n\t<div class=\"container p-sm-5 py-5\">\n\t\t<div class=\"row footer-gap\">\n\t\t\t<div class=\"col-lg-4 col-sm-6\">\n\t\t\t\t<h3 class=\"text-capitalize mb-3\">Address</h3>\n\t\t\t\t<address class=\"mb-0\">\n\t\t\t\t\t<p class=\"\"><span class=\"fa fa-map-marker\"></span> 2466H 5th Street Parking, King <br>Block, New York City.</p>\n\t\t\t\t\t<p><span class=\"fa fa-clock-o\"></span> Timings : 10 a.m to 6 p.m</p>\n\t\t\t\t\t<p><span class=\"fa fa-phone\"></span> +12 8976 2334</p>\n\t\t\t\t\t<p><span class=\"fa fa-envelope-open\"></span> <a href=\"mailto:info@example.com\">info@example.com</a></p>\n\t\t\t\t</address>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-sm-6 mt-lg-0 mt-sm-0 mt-4 p-md-0\">\n\t\t\t\t<h3 class=\"text-capitalize mb-4\">Meanwhile On Instagram</h3>\n\t\t\t\t<div class=\"images\">\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta2.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta3.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta4.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta5.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta6.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta7.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta8.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta9.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t\t<a class=\"mt-2 pr-2\" href=\"#\"> <img src=\"../../../assets/images/insta1.jpg\" alt=\"\" class=\"img-fluid\"/> </a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 offset-lg-1 col-md-4 col-sm-6 mt-lg-0 mt-sm-5 mt-4\">\n\t\t\t\t<h3 class=\"text-capitalize mb-3\"> Follow us</h3>\n\t\t\t\t<p class=\"mb-4\">Follow us on social media</p>\n\t\t\t\t<ul class=\"social mt-lg-0 mt-3\">\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-facebook\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-twitter\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-google-plus\"></span></a></li>\n\t\t\t\t\t<li class=\"\"><a href=\"#\"><span class=\"fa fa-linkedin\"></span></a></li>\n\t\t\t\t\t<li class=\"mr-1\"><a href=\"#\"><span class=\"fa fa-rss\"></span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"copyright pb-5 text-center\">\n\t\t<p>© 2018 Wedding Organizer. All Rights Reserved | Design by <a href=\"http://www.W3Layouts.com\" target=\"_blank\">W3Layouts</a></p>\n\t</div>\n</footer>\n<!-- footer -->\n\n<!-- popup for login -->\n<div id=\"login-popup\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<h5 class=\"modal-title text-uppercase\">Login</h5>\n\t\t<div class=\"login-form\">\n\t\t\t<form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">User Name</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name1\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-w3l\">\n\t\t\t\t\t<input type=\"submit\" class=\"form-control\" value=\"Login\">\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t</div>\n\t\t<a class=\"close\" href=\"#\">&times;</a>\n\t</div>\n</div>\n<!-- popup for login -->\n\n<!-- popup for register -->\n<div id=\"register-popup\" class=\"popup-effect\">\n\t<div class=\"popup\">\n\t\t<h5 class=\"modal-title text-uppercase\">Register</h5>\n\t\t<div class=\"lregister-form\">\n\t\t\t<form action=\"#\" method=\"post\" class=\"px-3 pt-3 pb-0\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">First Name</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name2\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">Last Name</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name3\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">Email id</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name4\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name\" class=\"col-form-label\">Mobile Number</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name5\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"recipient-name1\" class=\"col-form-label\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"Name\" id=\"recipient-name6\" required=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-w3l\">\n\t\t\t\t\t<input type=\"submit\" class=\"form-control\" value=\"Get Started\">\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<a class=\"close\" href=\"#\">&times;</a>\n\t</div>\n</div>\n<!-- popup for register -->\n"

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

/***/ "./src/app/services/kongu.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/kongu.service.ts ***!
  \*******************************************/
/*! exports provided: KonguService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonguService", function() { return KonguService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { Observable } from "rxjs";
// import { map } from "rxjs/operators";
// import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
// import { Configuration } from "../configuration/app.constants";
var KonguService = /** @class */ (function () {
    function KonguService() {
    }
    KonguService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], KonguService);
    return KonguService;
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