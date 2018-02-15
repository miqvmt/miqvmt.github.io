webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<miqvmt-header></miqvmt-header>\r\n\r\n<miqvmt-content></miqvmt-content>\r\n\r\n<miqvmt-footer></miqvmt-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_content_component__ = __webpack_require__("./src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MiQVMTComponents = [
    __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* MiQVMTHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_4__content_content_component__["a" /* MiQVMTContent */],
    __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* MiQVMTFooterComponent */]
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ].concat(MiQVMTComponents),
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n    <div class=\"row\">\r\n        <h1>Dia #1</h1>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\n  width: 100%;\n  background: grey;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 50px 0px 50px;\n  height: 500px; }\n  #container .row {\n    width: 50%; }\n    #container .row h1 {\n      text-align: center;\n      border-bottom: 1px solid white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiQVMTContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MiQVMTContent = (function () {
    function MiQVMTContent() {
    }
    return MiQVMTContent;
}());
MiQVMTContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'miqvmt-content',
        template: __webpack_require__("./src/app/content/content.component.html"),
        styles: [__webpack_require__("./src/app/content/content.component.scss")]
    })
], MiQVMTContent);

//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n    <div id=\"story-container\">\r\n        <div id=\"story\">\r\n            <p>Esta es la historia de amistad entre dos naciones, la rusa y la catalana. Una historia de un viaje increíble hacía los recuerdos de nuestra adolescencia. Porque somos amigos, qué digo amigos, somos <b>hermanos</b>.</p>\r\n        </div>\r\n        <div id=\"social-media\">\r\n            <i class=\"miqvmt-col-2 fa fa-facebook\"></i>\r\n            <i class=\"miqvmt-col-2 fa fa-twitter\"></i>\r\n            <i class=\"miqvmt-col-2 fa fa-youtube\"></i>\r\n            <i class=\"miqvmt-col-2 fa fa-instagram\"></i>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"contact\">\r\n        <div class=\"contact-inner-container\">\r\n            <i class=\"fa fa-envelope\"></i>\r\n            <p>info@miqvmt.es</p>\r\n        </div>\r\n        <div class=\"contact-inner-container\">\r\n            <i class=\"fa fa-phone\"></i>\r\n            <p>(34) 697-745-056</p>\r\n        </div>\r\n        <div class=\"contact-inner-container\">\r\n            <i class=\"fa fa-map\"></i>\r\n            Mis huevos \r\n        </div>\r\n    </div>\r\n        \r\n    <!-- <div id=\"signup\">\r\n\r\n    </div> -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\n  background: #3A3A3A;\n  color: white;\n  width: 100%;\n  padding: 50px 0px 50px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  font-size: 0.8em; }\n  #container #story-container {\n    width: 25%; }\n    #container #story-container #story {\n      width: 50%; }\n    #container #story-container #social-media {\n      padding-top: 10px;\n      width: 50%; }\n      #container #story-container #social-media i {\n        padding-right: 10px; }\n  #container #contact {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: justify;\n        justify-content: space-between; }\n    #container #contact .contact-inner-container {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center; }\n      #container #contact .contact-inner-container i {\n        padding-right: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiQVMTFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MiQVMTFooterComponent = (function () {
    function MiQVMTFooterComponent() {
    }
    return MiQVMTFooterComponent;
}());
MiQVMTFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'miqvmt-footer',
        template: __webpack_require__("./src/app/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
    })
], MiQVMTFooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n\r\n    <!-- background -->\r\n    <div class=\"img-container miqvmt-col-2\">\r\n        <img src=\"assets/imgs/conversation-1-1st.jpeg\" alt=\"\">\r\n    </div>\r\n    <div class=\"img-container miqvmt-col-2\">\r\n        <img src=\"assets/imgs/conversation-1-2nd.jpeg\" alt=\"\">\r\n    </div>\r\n    <div class=\"img-container miqvmt-col-2\">\r\n        <img src=\"assets/imgs/conversation-2-1st.jpeg\" alt=\"\">\r\n    </div>\r\n    <div class=\"img-container miqvmt-col-2\">\r\n        <img src=\"assets/imgs/conversation-2-2nd.jpeg\" alt=\"\">\r\n    </div>\r\n    <div class=\"img-container miqvmt-col-2\">\r\n        <img src=\"assets/imgs/conversation-3-1st.jpeg\" alt=\"\">\r\n    </div>\r\n    <div class=\"img-container miqvmt-col-2\">\r\n        <img src=\"assets/imgs/conversation-3-2nd.jpeg\" alt=\"\">\r\n    </div>\r\n\r\n    <div id=\"title-outer-container\">\r\n        <div id=\"title-inner-container\">\r\n            <h1>Mi QVMT</h1>\r\n            <p>{{sentence}}</p>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#container {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative; }\n  div#container div.img-container {\n    opacity: 0.5; }\n    div#container div.img-container img {\n      width: 100%;\n      display: block; }\n  div#container div#title-outer-container {\n    position: absolute;\n    left: 50%;\n    top: 30%; }\n    div#container div#title-outer-container div#title-inner-container {\n      position: relative;\n      left: -50%; }\n      div#container div#title-outer-container div#title-inner-container p {\n        text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiQVMTHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiQVMTHeaderComponent = (function () {
    function MiQVMTHeaderComponent() {
        var _this = this;
        this.sentences = ["Que no le da...",
            "Menudo siroco...",
            "El puto amo..."];
        this.sentence = this.sentences[0];
        this.index = 0;
        this.grow = false;
        setInterval(function () {
            var sentence = _this.sentence, length = sentence.length;
            if (length == 0) {
                _this.grow = true;
                ++_this.index;
                _this.index = _this.index % _this.sentences.length;
                _this.sentence = _this.sentences[_this.index].substring(0, 1);
            }
            else {
                if (length == _this.sentences[_this.index].length)
                    _this.grow = false;
                if (_this.grow)
                    _this.sentence = _this.sentences[_this.index].substring(0, length + 1);
                else
                    _this.sentence = sentence.substring(0, length - 1);
            }
        }, 100);
    }
    return MiQVMTHeaderComponent;
}());
MiQVMTHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'miqvmt-header',
        template: __webpack_require__("./src/app/header/header.component.html"),
        styles: [__webpack_require__("./src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MiQVMTHeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map