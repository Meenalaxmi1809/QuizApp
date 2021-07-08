(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header ></app-header>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n<div id=\"bg\">\n    <div class=\"module\">\n        <form class=\"form\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n            <div class=\"card-content\"> <strong>LOGIN</strong></div>\n            <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" ngModel #emailInput=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" class=\"textbox\" />\n            <mat-error *ngIf=\"emailInput.hasError('required')&& (emailInput.dirty || emailInput.touched)\">field must not be empty</mat-error>\n            <mat-error *ngIf=\"emailInput.errors && emailInput.errors.pattern\">email is invalid</mat-error>\n        <br>\n            <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" ngModel #pwInput=\"ngModel\" minlength=\"6\" required class=\"textbox\" />\n\n            <mat-error *ngIf=\"pwInput.errors && pwInput.errors.minlength\">should be at least 6 characters long.</mat-error>\n            <br>\n            <button [class.spinner]=\"isLoading\" [disabled]=\"f.invalid || isLoading\" type=\"submit\" mat-raised-button color=\"primary\" class=\"button\">LOGIN</button>\n            Not Yet register? Join us now <a [routerLink]=\"'/Auth/signup'\">Signup</a> \n        </form>\n        \n    </div>\n  \n</div>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n<div id=\"bg\">\n    <div class=\"module\">\n       \n        <form class=\"form space\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"card-content\"> <strong>SIGNUP</strong>\n            </div>\n            <input type=\"email\" matInput placeholder=\"Email\" formControlName=\"userName\" [(ngModel)]=\"logininformation.userName\" name=\"userName\" class=\"spaceBetweenControllers textbox\" />\n\n            <mat-error *ngIf=\"ctrl.userName.errors && ctrl.userName?.errors?.pattern\">email is invalid</mat-error>\n\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"logininformation.password\" name=\"password\" class=\"textbox spaceBetweenControllers\" />\n\n            <mat-error *ngIf=\"ctrl.password.errors && (ctrl.password?.dirty || ctrl.password.touched)  && ctrl.password.errors.minlength\">should be at least 6 characters long.</mat-error>\n\n            <div class=\"row \">\n                <div class=\"col s12 m9 l10\">\n                    <input matInput placeholder=\"your birthdate\" [matDatepicker]=\"dp\" formControlName=\"birthdate\" [(ngModel)]=\"logininformation.birthDate\" name=\"birthdate\">\n                </div>\n                <div class=\"col s12 m3 l2\">\n                    <mat-datepicker-toggle class=\"spaceBetweenControllers\" matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n                    <mat-datepicker #dp class=\"spaceBetweenControllers\"></mat-datepicker>\n                </div>\n                <mat-checkbox formControlName=\"rememberMe\" [(ngModel)]=\"logininformation.rememberMe\" name=\"rememberMe\" ngModel>Agree to terms and conditions</mat-checkbox>\n            </div>\n\n            <button [class.spinner]=\"isLoading\" [disabled]=\"form.invalid || isLoading\" type=\"submit\" mat-raised-button color=\"primary\" class=\"button spaceBetweenControllers\">SIGN UP</button>\n\n        </form>\n    </div>\n</div></body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n    <div>\n        <span > TESTPRESS QUIZZ </span>\n    </div>\n        \n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\" fxHide.xs=\"true\">\n            <ul fxLayout fxLayoutGap=\"10px\" class=\"navigation-items header-font\">\n                <li *ngIf=\"!isAuth\">\n                    <a [routerLink]=\"'/Auth/signup'\">\n                        \n                        Signup\n                    </a>\n                </li>\n                <li *ngIf=\"!isAuth\">\n                    <a [routerLink]=\"'/Auth/login'\">\n                        \n                        Login\n                    </a>\n                </li>\n                <li *ngIf=\"isAuth\">\n                    <a class=\"logout\" (click)=\"onLogout()\">\n                        \n                        Logout\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" required>\n    <mat-radio-button class=\"space-options\" *ngFor=\"let option of currentOptions\" (click)=\"onClick(option)\" [value]=\"option.id\">\n        {{option.text}}\n    </mat-radio-button>\n</mat-radio-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-stepper/quiz-stepper.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-stepper/quiz-stepper.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"slack\" *ngIf=\"!pageLoaded\">\n    <span class=\"slack-dot slack-dot--a\">\n    \n        </span><span class=\"slack-dot slack-dot--b\">\n    \n        </span><span class=\"slack-dot slack-dot--c\">\n    \n        </span><span class=\"slack-dot slack-dot--d\"></span>\n</div>\n\n<div class=\"row\" *ngIf=\"pageLoaded\">\n    <div class=\"col s9 push-s3\">\n        <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n    \n            <mat-step *ngFor=\"let question of questions;let i=index\">\n                <form>\n                    <ng-template matStepLabel>Question{{i+1}}</ng-template>\n                    <p> {{question.text}}</p>\n                    <app-option [questionId]=\"question.id\" (optionValueChanged)=\"selectOption($event)\" ></app-option>\n\n                    <div> \n                        <button   mat-flat-button matStepperPrevious  color=\"primary\" *ngIf=\"i+1!=questions.length && i!=0\" (click)=\"prevStep(i-1)\">\n                            <mat-icon>navigate_before</mat-icon>\n                            Back\n                        </button>\n                        <button  mat-flat-button color=\"primary\" mat-button matStepperNext *ngIf=\"i+1!=questions.length\" (click)=\"nextStep(i+1)\">\n                                Next\n                                <mat-icon>navigate_next</mat-icon>\n                        </button>\n                        <button  mat-flat-button matStepperNext [color]=\"'success'\" *ngIf=\"i+1==questions.length\" (click)=\"showResult(i+1)\" [class.spinner]=\"fetchedResult\" [disabled]=\"fetchedResult\">\n                            <a [routerLink]=\"'/Auth/login'\"> Result</a>\n                                <mat-icon>done_all</mat-icon>\n                        </button>\n                    </div>\n                </form>\n            </mat-step>\n\n\n        </mat-vertical-stepper>\n    </div>\n\n    <div class=\"col s3 pull-s9\" >\n        \n<div>Time Ellapsed: {{ellapsedTime}}<br>\n     Total Time: 10 mins\n</div>\n        <app-progress></app-progress>\n\n    </div>\n   \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/not-found/not-found.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/not-found/not-found.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board\">\n    <p id=\"error\">\n      error\n    </p>\n    <p id=\"code\">\n      404\n    </p>\n  </div>\n  \n<div class=\"container\">\n\n    <div class=\"error404page\">\n        <div class=\"newcharacter404\">\n            <div class=\"chair404\"></div>\n            <div class=\"leftshoe404\"></div>\n            <div class=\"rightshoe404\"></div>\n            <div class=\"legs404\"></div>\n            <div class=\"torso404\">\n                <div class=\"body404\"></div>\n                <div class=\"leftarm404\"></div>\n                <div class=\"rightarm404\"></div>\n                <div class=\"head404\">\n                    <div class=\"eyes404\"></div>\n                </div>\n            </div>\n            <div class=\"laptop404\"></div>\n        </div>\n    </div>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utility/progress/progress.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility/progress/progress.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card class=\"example-card\">\n    <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Summary</mat-card-title>\n\n    </mat-card-header>\n    <!-- TO DO... -->\n    <img mat-card-image src=\"../../../assets/img/56990-middle.png\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n        <p class=\"message\">\n            {{message}}\n        </p>\n\n        <span class=\"percentage\">{{percentage}}% Completed</span>\n        <mat-progress-bar mode=\"determinate\" [value]=\"percentage\" #progressbar></mat-progress-bar>\n    </mat-card-content>\n    <mat-card-actions>\n\n    </mat-card-actions>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n<div class=\"row center\">\n        <div class=\"slide-container\">\n            <div class=\"wrapper\">\n                <div class=\"clash-card barbarian\">\n                    <div class=\"clash-card__unit-description\">\n                        click start to start your quiz\n                    </div>\n                    \n                    <div class=\"clash-card__unit-name\">\n                        <a [routerLink]=\"'/quizStepper'\">\n                            start \n                        </a>\n                    </div>\n                    \n\n                    <div class=\"clash-card__unit-stats clash-card__unit-stats--archer clearfix\">\n                        <div class=\"one-third\">\n                            <div class=\"stat\">20<sup>S</sup></div>\n                            <div class=\"stat-value\">Time</div>\n                        </div>\n\n                        <div class=\"one-third\">\n                            <div class=\"stat\">10</div>\n                            <div class=\"stat-value\">Questions</div>\n                        </div>\n\n                        <div class=\"one-third no-border\">\n                            <div class=\"stat\">4</div>\n                            <div class=\"stat-value\">Options</div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>\n</html>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _quiz_stepper_quiz_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz-stepper/quiz-stepper.component */ "./src/app/quiz-stepper/quiz-stepper.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");






const routes = [
    { path: '', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'quizStepper', component: _quiz_stepper_quiz_stepper_component__WEBPACK_IMPORTED_MODULE_4__["QuizStepperComponent"] },
    {
        path: 'Auth',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(m => m.AuthModule),
    },
    {
        path: '**',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./shared/shared/shared.module */ "./src/app/shared/shared/shared.module.ts")).then(m => m.SharedModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".displayGrid{\n    display: grid\n}\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheUdyaWR7XG4gICAgZGlzcGxheTogZ3JpZFxufVxuICJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'quiz';
    }
    ngOnInit() {
        this.authService.initAuthListener();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _quiz_stepper_quiz_stepper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-stepper/quiz-stepper.component */ "./src/app/quiz-stepper/quiz-stepper.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared/shared.module */ "./src/app/shared/shared/shared.module.ts");
/* harmony import */ var _utility_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utility/progress/progress.component */ "./src/app/utility/progress/progress.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./option/option.component */ "./src/app/option/option.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/ui.service */ "./src/app/services/ui.service.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
            _quiz_stepper_quiz_stepper_component__WEBPACK_IMPORTED_MODULE_9__["QuizStepperComponent"],
            _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _utility_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__["ProgressComponent"],
            _option_option_component__WEBPACK_IMPORTED_MODULE_15__["OptionComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({ positionClass: 'toast-top-center', timeOut: 5000 }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_18__["AuthModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_ui_service__WEBPACK_IMPORTED_MODULE_22__["UIService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");










const routes = [
    { path: '', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
];
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* mat-form-field {\n    width: 300px;\n} */\n\n.space{\n    margin-top: 20px !important;\n}\n\n.card-content h3 {\n    font-size: 30px;\n    margin-bottom: 0;\n    color: #303F9F;\n    font-family: 'Montserrat', sans-serif;\n    margin: revert;\n  }\n\n* { \n    margin: 0;\n    padding: 0;\n    \n}\n\nbody {\n    font-family: helvetica;\n    background-image: url('J4o.gif');\n}\n\na {\n    display: block;\n    color: blue;\n    text-decoration: none;\n    font-weight: bold;\n    text-align: right;\n}\n\n#bg {\n    position: relative;\n    top: 20px;\n    height: 600px;\n    width: 800px;\n    background-size: cover;\n    margin-left: auto;\n    margin-right: auto;  \n}\n\n.module {\n    position: relative;\n    top: 15%;\n    height: 70%;\n    width: 450px;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 5px;\n    background-color: slategray;\n   \n    color: white;\n    font-size: 100%;\n    font-weight: 500;\n}\n\n.module ul {\n    list-style-type: none;\n    margin: 0;\n}\n\n.tab {\n    float: left;\n    height: 60px;\n    width: 25%;\n    padding-top: 20px;\n    box-sizing: border-box;\n    background: #eeeeee;\n    text-align: center;\n    cursor: pointer;\n     \n}\n\n.tab:first-child {\n    border-radius: 5px 0px 0px 0px;\n}\n\n.tab:last-child {\n    border-radius: 0px 5px 0px 0px;\n}\n\n.tab:hover {\n    background-color: rgba(0, 0, 0, .1);\n}\n\n.activeTab {\n    background: #fff;\n}\n\n.activeTab .icon {\n    opacity: 1;\n}\n\n.icon {\n    height: 24px;\n    width: 24px;\n    opacity: .2;\n}\n\n.form {\n    float: left;\n    height: 86%;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 40px;\n    \n}\n\n.textbox {\n    height: 50px;\n    width: 100%;\n    border-radius: 3px;\n    border: rgba(0, 0, 0, .3) 2px solid;\n    box-sizing: border-box;\n    padding: 10px;\n    margin-bottom: 30px;\n}\n\n.textbox:focus {\n    outline: none;\n    border: rgba(24, 149, 215, 1) 2px solid;\n    color: rgba(24, 149, 215, 1);\n}\n\n.button {\n    height: 50px;\n    width: 100%;\n    border-radius: 3px;\n    border: rgba(0, 0, 0, .3) 0px solid;\n    box-sizing: border-box;\n    padding: 10px;\n    margin-bottom: 30px;\n    background: blue;\n    color: #FFF;\n    font-weight: bold;\n    font-size: 12pt;\n    cursor: pointer;\n}\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBQ0ksMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGNBQWM7RUFDaEI7O0FBR0Y7SUFDSSxTQUFTO0lBQ1QsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjs7SUFFM0IsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7O0FBRW5COztBQUVBO0lBRUksOEJBQThCO0FBQ2xDOztBQUVBO0lBRUksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMzAwcHg7XG59ICovXG5cbi5zcGFjZXtcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1jb250ZW50IGgzIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjogIzMwM0Y5RjtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogcmV2ZXJ0O1xuICB9XG5cblxuKiB7IFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIFxufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL0o0by5naWYpO1xufVxuXG5hIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogYmx1ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNiZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgIFxufVxuXG4ubW9kdWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNSU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xuICAgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubW9kdWxlIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udGFiIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgXG59XG5cbi50YWI6Zmlyc3QtY2hpbGQge1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDBweDtcbn1cblxuLnRhYjpsYXN0LWNoaWxkIHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCA1cHggMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDBweCAwcHg7XG59XG5cbi50YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xufVxuXG4uYWN0aXZlVGFiIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uYWN0aXZlVGFiIC5pY29uIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uaWNvbiB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIG9wYWNpdHk6IC4yO1xufVxuXG4uZm9ybSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiA4NiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIFxufVxuXG4udGV4dGJveCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IHJnYmEoMCwgMCwgMCwgLjMpIDJweCBzb2xpZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRleHRib3g6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiByZ2JhKDI0LCAxNDksIDIxNSwgMSkgMnB4IHNvbGlkO1xuICAgIGNvbG9yOiByZ2JhKDI0LCAxNDksIDIxNSwgMSk7XG59XG5cbi5idXR0b24ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiByZ2JhKDAsIDAsIDAsIC4zKSAwcHggc29saWQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4gIl19 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, uiService) {
        this.authService = authService;
        this.uiService = uiService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoaded => {
            this.isLoading = isLoaded;
        });
    }
    onSubmit(form) {
        this.isLoading = true;
        this.authService.login({
            email: form.value.email,
            password: form.value.password
        });
    }
    ngOnDestroy() {
        if (this.loadingSubs) {
            this.loadingSubs.unsubscribe();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UIService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("                                    /* ffinal */\n                                    .space{\n                                        margin-top: 20px !important;\n                                    }\n                                    .card-content h3 {\n                                        font-size: 25px;\n                                        margin-bottom: 0;\n                                        color: #303F9F;\n                                        font-family: 'Montserrat', sans-serif;\n                                        margin: revert;\n                                      }\n                                    .spaceBetweenControllers{\n                                            margin: 20px 0px !important;\n                                    }\n                                    mat-form-field {\n                                        width: 300px;\n                                    }\n                                    * {\n                                        margin: 0;\n                                        padding: 0;\n                                    }\n                                    body {\n                                        background-image: url('J4o.gif');\n                                        font-family: helvetica;\n                                    }\n                                    a {\n                                        display: block;\n                                        color: #ad5482;\n                                        text-decoration: none;\n                                        font-weight: bold;\n                                        margin-top: 40px;\n                                        text-align: center;\n                                    }\n                                    #bg {\n                                        position: relative;\n                                        top: 20px;\n                                        height: 600px;\n                                        width: 800px;\n                                        background-size: cover;\n                                        margin-left: auto;\n                                        margin-right: auto;\n        \n                                    }\n                                    .module {\n                                        position: relative;\n                                        top: 15%;\n                                        height: 70%;\n                                        width: 450px;\n                                        margin-left: auto;\n                                        margin-right: auto;\n                                        border-radius: 5px;\n                                        background-color: slategray;\n   \n                                        color: white;\n                                        font-size: 100%;\n                                        font-weight: 500;\n                                    }\n                                    .module ul {\n                                        list-style-type: none;\n                                        margin: 0;\n                                    }\n                                    .tab {\n                                        float: left;\n                                        height: 60px;\n                                        width: 25%;\n                                        padding-top: 20px;\n                                        box-sizing: border-box;\n                                        background: #eeeeee;\n                                        text-align: center;\n                                        cursor: pointer;\n                                        \n                                    }\n                                    .tab:first-child {\n                                        border-radius: 5px 0px 0px 0px;\n                                    }\n                                    .tab:last-child {\n                                        border-radius: 0px 5px 0px 0px;\n                                    }\n                                    .tab:hover {\n                                        background-color: rgba(0, 0, 0, .1);\n                                    }\n                                    .activeTab {\n                                        background: #fff;\n                                    }\n                                    .activeTab .icon {\n                                        opacity: 1;\n                                    }\n                                    .icon {\n                                        height: 24px;\n                                        width: 24px;\n                                        opacity: .2;\n                                    }\n                                    .form {\n                                        float: left;\n                                        height: 86%;\n                                        width: 100%;\n                                        box-sizing: border-box;\n                                        padding: 40px;\n                                    }\n                                    .textbox {\n                                        height: 50px;\n                                        width: 100%;\n                                        border-radius: 3px;\n                                        border: rgba(0, 0, 0, .3) 2px solid;\n                                        box-sizing: border-box;\n                                        padding: 10px;\n                                        margin-bottom: 30px;\n                                    }\n                                    .textbox:focus {\n                                        outline: none;\n                                        border: rgba(24, 149, 215, 1) 2px solid;\n                                        color: rgba(24, 149, 215, 1);\n                                    }\n                                    .button {\n                                        height: 50px;\n                                        width: 100%;\n                                        border-radius: 3px;\n                                        border: rgba(0, 0, 0, .3) 0px solid;\n                                        box-sizing: border-box;\n                                        padding: 10px;\n                                        margin-bottom: 30px;\n                                        background: blue;\n                                        color: #FFF;\n                                        font-weight: bold;\n                                        font-size: 12pt;\n                                        cursor: pointer;\n                                    }\n                                    .submit {\n                                        margin-top: 20px;\n                                    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9DQUFvQyxXQUFXO29DQUNYO3dDQUNJLDJCQUEyQjtvQ0FDL0I7b0NBQ0E7d0NBQ0ksZUFBZTt3Q0FDZixnQkFBZ0I7d0NBQ2hCLGNBQWM7d0NBQ2QscUNBQXFDO3dDQUNyQyxjQUFjO3NDQUNoQjtvQ0FHRjs0Q0FDUSwyQkFBMkI7b0NBQ25DO29DQUVBO3dDQUNJLFlBQVk7b0NBQ2hCO29DQUVBO3dDQUNJLFNBQVM7d0NBQ1QsVUFBVTtvQ0FDZDtvQ0FFQTt3Q0FDSSxnQ0FBa0Q7d0NBQ2xELHNCQUFzQjtvQ0FDMUI7b0NBRUE7d0NBQ0ksY0FBYzt3Q0FDZCxjQUFjO3dDQUNkLHFCQUFxQjt3Q0FDckIsaUJBQWlCO3dDQUNqQixnQkFBZ0I7d0NBQ2hCLGtCQUFrQjtvQ0FDdEI7b0NBRUE7d0NBQ0ksa0JBQWtCO3dDQUNsQixTQUFTO3dDQUNULGFBQWE7d0NBQ2IsWUFBWTt3Q0FDWixzQkFBc0I7d0NBQ3RCLGlCQUFpQjt3Q0FDakIsa0JBQWtCOztvQ0FFdEI7b0NBRUE7d0NBQ0ksa0JBQWtCO3dDQUNsQixRQUFRO3dDQUNSLFdBQVc7d0NBQ1gsWUFBWTt3Q0FDWixpQkFBaUI7d0NBQ2pCLGtCQUFrQjt3Q0FDbEIsa0JBQWtCO3dDQUNsQiwyQkFBMkI7O3dDQUUzQixZQUFZO3dDQUNaLGVBQWU7d0NBQ2YsZ0JBQWdCO29DQUNwQjtvQ0FFQTt3Q0FDSSxxQkFBcUI7d0NBQ3JCLFNBQVM7b0NBQ2I7b0NBRUE7d0NBQ0ksV0FBVzt3Q0FDWCxZQUFZO3dDQUNaLFVBQVU7d0NBQ1YsaUJBQWlCO3dDQUNqQixzQkFBc0I7d0NBQ3RCLG1CQUFtQjt3Q0FDbkIsa0JBQWtCO3dDQUNsQixlQUFlOztvQ0FFbkI7b0NBRUE7d0NBRUksOEJBQThCO29DQUNsQztvQ0FFQTt3Q0FFSSw4QkFBOEI7b0NBQ2xDO29DQUVBO3dDQUNJLG1DQUFtQztvQ0FDdkM7b0NBRUE7d0NBQ0ksZ0JBQWdCO29DQUNwQjtvQ0FFQTt3Q0FDSSxVQUFVO29DQUNkO29DQUVBO3dDQUNJLFlBQVk7d0NBQ1osV0FBVzt3Q0FDWCxXQUFXO29DQUNmO29DQUVBO3dDQUNJLFdBQVc7d0NBQ1gsV0FBVzt3Q0FDWCxXQUFXO3dDQUNYLHNCQUFzQjt3Q0FDdEIsYUFBYTtvQ0FDakI7b0NBRUE7d0NBQ0ksWUFBWTt3Q0FDWixXQUFXO3dDQUNYLGtCQUFrQjt3Q0FDbEIsbUNBQW1DO3dDQUNuQyxzQkFBc0I7d0NBQ3RCLGFBQWE7d0NBQ2IsbUJBQW1CO29DQUN2QjtvQ0FFQTt3Q0FDSSxhQUFhO3dDQUNiLHVDQUF1Qzt3Q0FDdkMsNEJBQTRCO29DQUNoQztvQ0FFQTt3Q0FDSSxZQUFZO3dDQUNaLFdBQVc7d0NBQ1gsa0JBQWtCO3dDQUNsQixtQ0FBbUM7d0NBQ25DLHNCQUFzQjt3Q0FDdEIsYUFBYTt3Q0FDYixtQkFBbUI7d0NBQ25CLGdCQUFnQjt3Q0FDaEIsV0FBVzt3Q0FDWCxpQkFBaUI7d0NBQ2pCLGVBQWU7d0NBQ2YsZUFBZTtvQ0FDbkI7b0NBSUE7d0NBQ0ksZ0JBQWdCO29DQUNwQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZmZpbmFsICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BhY2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtY29udGVudCBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMDNGOUY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHJldmVydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGFjZUJldHdlZW5Db250cm9sbGVyc3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvSjRvLmdpZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhZDU0ODI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjYmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9kdWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xuICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9kdWxlIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFiIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRhYjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFiOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4IDVweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRhYjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmVUYWIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmVUYWIgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg2JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Ym94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogcmdiYSgwLCAwLCAwLCAuMykgMnB4IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dGJveDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHJnYmEoMjQsIDE0OSwgMjE1LCAxKSAycHggc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjQsIDE0OSwgMjE1LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHJnYmEoMCwgMCwgMCwgLjMpIDBweCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJtaXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Il19 */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_loginInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/loginInfo */ "./src/app/models/loginInfo.ts");






let SignupComponent = class SignupComponent {
    constructor(authService, uiService, formBuilder) {
        this.authService = authService;
        this.uiService = uiService;
        this.formBuilder = formBuilder;
        this.isLoading = false;
        this.logininformation = new src_app_models_loginInfo__WEBPACK_IMPORTED_MODULE_5__["LoginInfo"]();
    }
    get ctrl() { return this.form.controls; }
    ngOnInit() {
        this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoaded => {
            this.isLoading = isLoaded;
        });
        this.logininformation = new src_app_models_loginInfo__WEBPACK_IMPORTED_MODULE_5__["LoginInfo"]();
        this.form = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            birthdate: ['',],
            rememberMe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    onSubmit() {
        this.isLoading = true;
        this.authService.register({
            email: this.logininformation.userName,
            password: this.logininformation.password
        });
    }
    ngOnDestroy() {
        if (this.loadingSubs) {
            this.loadingSubs.unsubscribe();
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UIService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");



















let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"]
        ],
        exports: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/models/loginInfo.ts":
/*!*************************************!*\
  !*** ./src/app/models/loginInfo.ts ***!
  \*************************************/
/*! exports provided: LoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInfo", function() { return LoginInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

//ffinal
class LoginInfo {
    constructor() {
        this.userName = '';
        this.password = '';
    }
}


/***/ }),

/***/ "./src/app/models/progress.ts":
/*!************************************!*\
  !*** ./src/app/models/progress.ts ***!
  \************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Progress {
}


/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container,\nmat-sidenav-content,\nmat-sidenav {\n    height: 100%;\n}\n\nmat-sidenav {\n    width: 250px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\na:hover,\na:active {\n    color: lightgray;\n}\n\n.navigation-items {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.nav-caption {\n    display: inline-block;\n    padding-left: 6px;\n}\n\n.logout {\n    cursor: pointer;\n    font-size: 15px;\n}\n\n.header-font {\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsXG5tYXQtc2lkZW5hdi1jb250ZW50LFxubWF0LXNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYge1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlcixcbmE6YWN0aXZlIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubmF2aWdhdGlvbi1pdGVtcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm5hdi1jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5sb2dvdXQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5oZWFkZXItZm9udCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.isAuth = false;
    }
    ngOnInit() {
        this.authSubscription = this.authService.authChange.subscribe(authStatus => {
            this.isAuth = authStatus;
        });
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/option/option.component.css":
/*!*********************************************!*\
  !*** ./src/app/option/option.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".space-options {\n    margin: 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9uL29wdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvb3B0aW9uL29wdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlLW9wdGlvbnMge1xuICAgIG1hcmdpbjogMTBweCAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/option/option.component.ts":
/*!********************************************!*\
  !*** ./src/app/option/option.component.ts ***!
  \********************************************/
/*! exports provided: OptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionComponent", function() { return OptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let OptionComponent = class OptionComponent {
    constructor(quizService, toastr) {
        this.quizService = quizService;
        this.toastr = toastr;
        this.activeState = 'Draft';
        this.optionValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.fillCurrentOptions(this.questionId);
    }
    fillCurrentOptions(questionId) {
        this.optionSubscription = this.quizService.getOptions().subscribe(result => {
            this.allAptions = result;
            this.currentOptions = this.allAptions.filter(item => item.questionId == questionId);
        }, (error) => {
            this.toastr.error("error in loading question's options");
        });
    }
    onClick(option) {
        this.optionValueChanged.emit(option);
    }
    ngOnDestroy() {
        this.optionSubscription.unsubscribe();
    }
};
OptionComponent.ctorParameters = () => [
    { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OptionComponent.prototype, "questionId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OptionComponent.prototype, "optionValueChanged", void 0);
OptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-option',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./option.component.css */ "./src/app/option/option.component.css")).default]
    })
], OptionComponent);



/***/ }),

/***/ "./src/app/quiz-stepper/quiz-stepper.component.css":
/*!*********************************************************!*\
  !*** ./src/app/quiz-stepper/quiz-stepper.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n    margin: 10px\n}\n.row{\n    align-items: center;\n}\n.iscorrect {\n    background: #9ACD32;\n    color: white;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1zdGVwcGVyL3F1aXotc3RlcHBlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBR0U7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvcXVpei1zdGVwcGVyL3F1aXotc3RlcHBlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHhcbn1cbi5yb3d7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuICBcbiAgLmlzY29ycmVjdCB7XG4gICAgYmFja2dyb3VuZDogIzlBQ0QzMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/quiz-stepper/quiz-stepper.component.ts":
/*!********************************************************!*\
  !*** ./src/app/quiz-stepper/quiz-stepper.component.ts ***!
  \********************************************************/
/*! exports provided: QuizStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizStepperComponent", function() { return QuizStepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _models_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/progress */ "./src/app/models/progress.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let QuizStepperComponent = class QuizStepperComponent {
    constructor(quizService, progressService, toastr) {
        this.quizService = quizService;
        this.progressService = progressService;
        this.toastr = toastr;
        this.isLinear = false;
        this.fetchedResult = false;
        this.pageLoaded = false;
        this.selectedOptions = new Array();
        this.timer = null;
        this.ellapsedTime = '00:00';
    }
    ngOnInit() {
        this.getQuestions();
    }
    getQuestions() {
        this.quizSubscription = this.quizService.getQuestions().subscribe(result => {
            this.questions = result;
            this.pageLoaded = true;
            this.startTime = new Date();
            this.ellapsedTime = '00:00';
            this.timer = setInterval(() => { this.tick(); }, 1000);
            this.duration = this.parseTime(this.durations);
        }, (error) => {
            this.pageLoaded = true;
            this.toastr.error("error in loading questions");
        }
        // ,()=>{
        //   this.pageLoaded = true;
        // }
        );
    }
    tick() {
        const now = new Date();
        const diff = (now.getTime() - this.startTime.getTime()) / 1000;
        this.ellapsedTime = this.parseTime(diff);
    }
    parseTime(totalSeconds) {
        let mins = Math.floor(totalSeconds / 60);
        let secs = Math.round(totalSeconds % 60);
        mins = (mins < 10 ? '0' : '') + mins;
        secs = (secs < 10 ? '0' : '') + secs;
        return `${mins}:${secs}`;
    }
    showResult(step) {
        this.nextStep(step);
        this.fetchedResult = true;
        var correct = 0;
        var totalQuestions = this.questions.length;
        setTimeout(() => {
            for (let index = 0; index < this.selectedOptions.length; index++) {
                if (this.selectedOptions[index].isCorrectAnswer == true)
                    correct++;
            }
            //tostr result
            if (correct == totalQuestions) {
                this.toastr.success(`congratulation!your score is: ${correct}/${totalQuestions} 
        Time taken is ${this.ellapsedTime}`);
            }
            else {
                this.toastr.info(`your score is: ${correct}/${totalQuestions} 
         Time taken is ${this.ellapsedTime}`);
            }
        }, 2000);
    }
    ngOnDestroy() {
        this.quizSubscription.unsubscribe();
    }
    /////////////////////////////Card Methods///////////////////////////////
    nextStep(step) {
        this.sendProgressInfo(step);
    }
    prevStep(step) {
        this.sendProgressInfo(step);
    }
    sendProgressInfo(step) {
        var progress = new _models_progress__WEBPACK_IMPORTED_MODULE_4__["Progress"]();
        progress.stepNumber = step;
        progress.totalSteps = this.questions.length;
        this.progressService.isProgressing.next(progress);
    }
    ///////////////////////Option Event/////////////////////////////////////
    selectOption(newOption) {
        let availableOption = this.checkAvailability(newOption);
        if (availableOption == undefined || availableOption.length == 0) { //if new option does not exist in list, add it to list
            this.selectedOptions.push(newOption);
        }
        else { //if exists and user change the answer, new answer will be overwrite on it
            const existedOption = this.selectedOptions.find(option => option.questionId == option.questionId);
            const existedOptionIndex = this.selectedOptions.indexOf(existedOption);
            if (existedOptionIndex !== -1) {
                this.selectedOptions.splice(existedOptionIndex, 1);
                this.selectedOptions.push(newOption);
            }
            let index = this.selectedOptions.indexOf(newOption);
            this.selectedOptions[index] = newOption;
        }
    }
    checkAvailability(item) {
        return this.selectedOptions.filter(option => option.questionId == item.questionId);
    }
};
QuizStepperComponent.ctorParameters = () => [
    { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"] },
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_3__["ProgressService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
QuizStepperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz-stepper',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quiz-stepper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-stepper/quiz-stepper.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quiz-stepper.component.css */ "./src/app/quiz-stepper/quiz-stepper.component.css")).default]
    })
], QuizStepperComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui.service */ "./src/app/services/ui.service.ts");






let AuthService = class AuthService {
    constructor(router, fireAuth, uiService) {
        this.router = router;
        this.fireAuth = fireAuth;
        this.uiService = uiService;
        this.isAuthenticated = false;
        this.authChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    register(user) {
        this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(result => {
            this.uiService.loadingStateChanged.next(false);
        })
            .catch(error => {
            this.uiService.loadingStateChanged.next(false);
            this.uiService.showSnackbar(error.message, null, 3000);
        });
    }
    login(user) {
        this.uiService.loadingStateChanged.next(true);
        this.fireAuth.auth
            .signInWithEmailAndPassword(user.email, user.password)
            .then(result => {
            this.uiService.loadingStateChanged.next(false);
        })
            .catch(error => {
            this.uiService.loadingStateChanged.next(false);
            this.uiService.showSnackbar(error.message, null, 3000);
        });
    }
    logout() {
        this.fireAuth.auth.signOut();
    }
    isAuth() {
        return this.isAuthenticated;
    }
    initAuthListener() {
        this.fireAuth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/welcome']);
            }
            else {
                this.authChange.next(false);
                this.router.navigate(['/']);
                this.isAuthenticated = false;
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ui_service__WEBPACK_IMPORTED_MODULE_5__["UIService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/progress.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/progress.service.ts ***!
  \**********************************************/
/*! exports provided: ProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressService", function() { return ProgressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ProgressService = class ProgressService {
    constructor() {
        this.isProgressing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
};
ProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProgressService);



/***/ }),

/***/ "./src/app/services/quiz.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/quiz.service.ts ***!
  \******************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let QuizService = class QuizService {
    constructor(http) {
        this.http = http;
    }
    getQuestions() {
        return this.http.get(" https://demo7538098.mockable.io/quizquestio");
    }
    getOptions() {
        return this.http.get("https://demo3245670.mockable.io/quizoptio");
    }
};
QuizService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuizService);



/***/ }),

/***/ "./src/app/services/ui.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/ui.service.ts ***!
  \****************************************/
/*! exports provided: UIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIService", function() { return UIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let UIService = class UIService {
    constructor(snackbar) {
        this.snackbar = snackbar;
        this.loadingStateChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    showSnackbar(message, action, duration) {
        this.snackbar.open(message, action, {
            duration: duration
        });
    }
};
UIService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
UIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], UIService);



/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \na, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-weight: inherit;\n    font-style: inherit;\n    font-family: inherit;\n    vertical-align: baseline;\n  }\n  \n  body {\n    line-height: 1;\n  }\n  \n  ol, ul {\n    list-style: none;\n  }\n  \n  blockquote, q {\n    quotes: none;\n  }\n  \n  blockquote:after, blockquote:before, q:after, q:before {\n    content: '';\n    content: none;\n  }\n  \n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  \n  :focus {\n    outline: 0;\n  }\n  \n  html {\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n  \n  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section {\n    display: block;\n  }\n  \n  audio, canvas, picture, progress, video {\n    display: inline-block;\n  }\n  \n  template {\n    display: none;\n  }\n  \n  input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration, input[type=search]::-webkit-search-results-button, input[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n  }\n  \n  input[type=search] {\n    -webkit-appearance: none;\n    box-sizing: content-box;\n  }\n  \n  textarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n  }\n  \n  ::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n  \n  body {\n    background-color: #333;\n    font-family: 'Quicksand', sans-serif;\n  }\n  \n  .hidden {\n    display: none;\n  }\n  \n  .u-isVisuallyHidden {\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    border: 0;\n    position: absolute;\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n  \n  .footer {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n  \n  .withanes {\n    display: block;\n    position: absolute;\n    right: 5px;\n    bottom: 5px;\n    width: 24px;\n    height: 32px;\n  }\n  \n  .withanes:after {\n    content: '';\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    width: 2px;\n    height: 2px;\n    box-shadow: 8px 2px #795f41, 10px 2px #795f41, 12px 2px #795f41, 14px 2px #795f41, 16px 2px #795f41, 18px 2px #795f41, 6px 4px #795f41, 8px 4px #795f41, 10px 4px #795f41, 12px 4px #795f41, 14px 4px #795f41, 16px 4px #795f41, 18px 4px #795f41, 20px 4px #795f41, 4px 6px #795f41, 6px 6px #795f41, 8px 6px #e9d8bc, 10px 6px #795f41, 12px 6px #795f41, 14px 6px #795f41, 16px 6px #795f41, 18px 6px #cbb490, 20px 6px #795f41, 22px 6px #795f41, 4px 8px #795f41, 6px 8px #e9d8bc, 8px 8px #e0c9a4, 10px 8px #e0c9a4, 12px 8px #e0c9a4, 14px 8px #e0c9a4, 16px 8px #e0c9a4, 18px 8px #cbb490, 20px 8px #cbb490, 22px 8px #795f41, 2px 10px #7e6f5d, 4px 10px #e9d8bc, 6px 10px #e0c9a4, 8px 10px #e0c9a4, 10px 10px #e0c9a4, 12px 10px #e0c9a4, 14px 10px #e0c9a4, 16px 10px #e0c9a4, 18px 10px #e0c9a4, 20px 10px #cbb490, 22px 10px #cbb490, 24px 10px #7e6f5d, 2px 12px #7e6f5d, 4px 12px #e9d8bc, 6px 12px #e0c9a4, 8px 12px #e0c9a4, 10px 12px #e0c9a4, 12px 12px #e0c9a4, 14px 12px #e0c9a4, 16px 12px #e0c9a4, 18px 12px #e0c9a4, 20px 12px #e0c9a4, 22px 12px #cbb490, 24px 12px #7e6f5d, 2px 14px #7e6f5d, 4px 14px #e9d8bc, 6px 14px #e0c9a4, 8px 14px #cbb490, 10px 14px #cbb490, 12px 14px #e0c9a4, 14px 14px #e0c9a4, 16px 14px #cbb490, 18px 14px #cbb490, 20px 14px #e0c9a4, 22px 14px #cbb490, 24px 14px #7e6f5d, 2px 16px #b6a281, 4px 16px #e9d8bc, 6px 16px #e0c9a4, 8px 16px #000000, 10px 16px #000000, 12px 16px #e9d8bc, 14px 16px #e0c9a4, 16px 16px #000000, 18px 16px #000000, 20px 16px #e0c9a4, 22px 16px #cbb490, 24px 16px #b6a281, 2px 18px #cbb490, 4px 18px #e9d8bc, 6px 18px #e0c9a4, 8px 18px #e0c9a4, 10px 18px #e0c9a4, 12px 18px #e9d8bc, 14px 18px #e0c9a4, 16px 18px #e0c9a4, 18px 18px #e0c9a4, 20px 18px #e0c9a4, 22px 18px #cbb490, 24px 18px #cbb490, 4px 20px #795f41, 6px 20px #e0c9a4, 8px 20px #e0c9a4, 10px 20px #e0c9a4, 12px 20px #e9d8bc, 14px 20px #e0c9a4, 16px 20px #e0c9a4, 18px 20px #e0c9a4, 20px 20px #e0c9a4, 22px 20px #795f41, 4px 22px #795f41, 6px 22px #e0c9a4, 8px 22px #e0c9a4, 10px 22px #e0c9a4, 12px 22px #cbb490, 14px 22px #cbb490, 16px 22px #e0c9a4, 18px 22px #e0c9a4, 20px 22px #cbb490, 22px 22px #795f41, 4px 24px #795f41, 6px 24px #795f41, 8px 24px #795f41, 10px 24px #795f41, 12px 24px #795f41, 14px 24px #795f41, 16px 24px #795f41, 18px 24px #795f41, 20px 24px #795f41, 22px 24px #795f41, 6px 26px #795f41, 8px 26px #795f41, 10px 26px #e0c9a4, 12px 26px #e0c9a4, 14px 26px #e0c9a4, 16px 26px #b6a281, 18px 26px #795f41, 20px 26px #795f41, 8px 28px #7e6f5d, 10px 28px #e0c9a4, 12px 28px #7e6f5d, 14px 28px #7e6f5d, 16px 28px #b6a281, 18px 28px #7e6f5d, 8px 30px #7e6f5d, 10px 30px #795f41, 12px 30px #7e6f5d, 14px 30px #7e6f5d, 16px 30px #795f41, 18px 30px #7e6f5d, 10px 32px #7e6f5d, 12px 32px #7e6f5d, 14px 32px #7e6f5d, 16px 32px #7e6f5d;\n  }\n  \n  .withanes-name {\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 4px;\n    right: 16px;\n    padding: 5px 7px;\n    /*     width: 0; */\n    text-align: center;\n    font-size: 12px;\n    font-weight: 700;\n    background-color: white;\n    opacity: 0;\n    transform: translateX(0);\n    color: black;\n    white-space: nowrap;\n    overflow: hidden;\n    transition: opacity 250ms ease-in-out, width 0 linear 250ms, transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  }\n  \n  .withanes-name:after {\n    width: 0;\n    height: 0;\n    content: '';\n    position: absolute;\n    z-index: 2;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-left: 8px solid white;\n    position: absolute;\n    top: calc(50% - 5px);\n    right: -6px;\n  }\n  \n  .withanes:hover .withanes-name {\n    /*     width: 120px; */\n    overflow: visible;\n    opacity: 1;\n    transform: translateX(-20px) rotate(0deg);\n    box-shadow: 0 0 16px rgba(0, 0, 0, 0.33);\n    transition: opacity 125ms ease-in-out 100ms, transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  }\n  \n  .withanes:hover:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: -20px;\n  }\n  \n  .withanes-name > .heart {\n    margin: 0 3px;\n    position: relative;\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    background-color: #D13E35;\n    transform: rotate(45deg);\n  }\n  \n  .withanes-name > .heart:before, .withanes-name > .heart:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    top: 0;\n    left: 0;\n    background-color: #D13E35;\n    border-radius: 50%;\n  }\n  \n  .withanes-name > .heart:before {\n    left: -3px;\n  }\n  \n  .withanes-name > .heart:after {\n    top: -3px;\n  }\n  \n  .grid {\n    display: block;\n    /* IE9 fallback for Flex */\n    display: flex;\n    /* Using Flex for equal height containers */\n    flex-wrap: wrap;\n    /* Children need to wrap */\n    margin-top: -20px;\n    margin-left: -20px;\n    align-items: stretch;\n    /* For equal height */\n    font-size: 0;\n    /* Horiontal gap fix for inline-block fallback */\n  }\n  \n  .grid + .grid {\n    margin-top: 0;\n    /* reset margin on stacked grids */\n  }\n  \n  .grid-col {\n    box-sizing: border-box;\n    /* Using box-sizing so padding doesn't affect width */\n    display: inline-block;\n    /* IE9 fallback */\n    width: 100%;\n    padding-top: 20px;\n    padding-left: 20px;\n    vertical-align: top;\n    font-size: 16px;\n    /* Resetting font-size for horizontal gap fix */\n  }\n  \n  .grid-col_1of12 {\n    width: 8.3333333333%;\n  }\n  \n  .grid-col_2of12 {\n    width: 16.6666666667%;\n  }\n  \n  .grid-col_3of12 {\n    width: 25%;\n  }\n  \n  .grid-col_4of12 {\n    width: 33.3333333333%;\n  }\n  \n  .grid-col_5of12 {\n    width: 41.6666666667%;\n  }\n  \n  .grid-col_6of12 {\n    width: 50%;\n  }\n  \n  .grid-col_7of12 {\n    width: 58.3333333333%;\n  }\n  \n  .grid-col_8of12 {\n    width: 66.6666666667%;\n  }\n  \n  .grid-col_9of12 {\n    width: 75%;\n  }\n  \n  .grid-col_10of12 {\n    width: 83.3333333333%;\n  }\n  \n  .grid-col_11of12 {\n    width: 91.6666666667%;\n  }\n  \n  .grid-col_12of12 {\n    width: 100%;\n  }\n  \n  @media (min-width: 768px) {\n    .grid-col_1of12SM {\n      width: 8.3333333333%;\n    }\n  \n    .grid-col_2of12SM {\n      width: 16.6666666667%;\n    }\n  \n    .grid-col_3of12SM {\n      width: 25%;\n    }\n  \n    .grid-col_4of12SM {\n      width: 33.3333333333%;\n    }\n  \n    .grid-col_5of12SM {\n      width: 41.6666666667%;\n    }\n  \n    .grid-col_6of12SM {\n      width: 50%;\n    }\n  \n    .grid-col_7of12SM {\n      width: 58.3333333333%;\n    }\n  \n    .grid-col_8of12SM {\n      width: 66.6666666667%;\n    }\n  \n    .grid-col_9of12SM {\n      width: 75%;\n    }\n  \n    .grid-col_10of12SM {\n      width: 83.3333333333%;\n    }\n  \n    .grid-col_11of12SM {\n      width: 91.6666666667%;\n    }\n  \n    .grid-col_12of12SM {\n      width: 100%;\n    }\n  }\n  \n  @media (min-width: 960px) {\n    .grid-col_1of12MD {\n      width: 8.3333333333%;\n    }\n  \n    .grid-col_2of12MD {\n      width: 16.6666666667%;\n    }\n  \n    .grid-col_3of12MD {\n      width: 25%;\n    }\n  \n    .grid-col_4of12MD {\n      width: 33.3333333333%;\n    }\n  \n    .grid-col_5of12MD {\n      width: 41.6666666667%;\n    }\n  \n    .grid-col_6of12MD {\n      width: 50%;\n    }\n  \n    .grid-col_7of12MD {\n      width: 58.3333333333%;\n    }\n  \n    .grid-col_8of12MD {\n      width: 66.6666666667%;\n    }\n  \n    .grid-col_9of12MD {\n      width: 75%;\n    }\n  \n    .grid-col_10of12MD {\n      width: 83.3333333333%;\n    }\n  \n    .grid-col_11of12MD {\n      width: 91.6666666667%;\n    }\n  \n    .grid-col_12of12MD {\n      width: 100%;\n    }\n  }\n  \n  .blocks {\n    margin: -30px 0 0 -30px;\n    /* offset blocks horizontal and vertical spacing - must match padding of blocks items */\n    font-size: 0;\n    /* remove inline block whitespace */\n  }\n  \n  .blocks > * {\n    box-sizing: border-box;\n    display: inline-block;\n    padding: 30px 0 0 30px;\n    /* space blocks horizontally and vertically - offset is handled by .blocks */\n    font-size: 16px;\n    /* return the font size */\n  }\n  \n  .blocks_2up > * {\n    width: 50%;\n  }\n  \n  .blocks_3up > * {\n    width: 33.33333%;\n  }\n  \n  .blocks_4up > * {\n    width: 25%;\n  }\n  \n  .u-srOnly {\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    border: 0;\n    position: absolute;\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n  \n  .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n  }\n  \n  body {\n    background-color: white;\n    overflow: hidden;\n  }\n  \n  .error404page {\n    \n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  .body404,\n  .head404,\n  .eyes404,\n  .leftarm404,\n  .rightarm404,\n  .chair404,\n  .leftshoe404,\n  .rightshoe404,\n  .legs404,\n  .laptop404 {\n    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/15979/404-character-new.png) 0 0 no-repeat;\n    width: 200px;\n    height: 200px;\n  }\n  \n  .newcharacter404,\n  .torso404,\n  .body404,\n  .head404,\n  .eyes404,\n  .leftarm404,\n  .rightarm404,\n  .chair404,\n  .leftshoe404,\n  .rightshoe404,\n  .legs404,\n  .laptop404 {\n    background-size: 750px;\n    position: absolute;\n    display: block;\n  }\n  \n  .newcharacter404 {\n   \n    left: 50%;\n    top: 20px;\n    margin-left: -200px;\n  }\n  \n  .torso404 {\n    position: absolute;\n    display: block;\n    top: 138px;\n    left: 0px;\n    width: 389px;\n    height: 252px;\n    animation: sway 20s ease infinite;\n    transform-origin: 50% 100%;\n  }\n  \n  .body404 {\n    position: absolute;\n    display: block;\n    top: 0px;\n    left: 0px;\n    width: 389px;\n    height: 253px;\n  }\n  \n  .head404 {\n    position: absolute;\n    top: -148px;\n    left: 106px;\n    width: 160px;\n    height: 194px;\n    background-position: 0px -265px;\n    transform-origin: 50% 85%;\n    animation: headTilt 20s ease infinite;\n  }\n  \n  .eyes404 {\n    position: absolute;\n    top: 92px;\n    left: 34px;\n    width: 73px;\n    height: 18px;\n    background-position: -162px -350px;\n    animation: blink404 10s steps(1) infinite, pan 10s ease-in-out infinite;\n  }\n  \n  .leftarm404 {\n    position: absolute;\n    top: 159px;\n    left: 0;\n    width: 165px;\n    height: 73px;\n    background-position: -265px -341px;\n    transform-origin: 9% 35%;\n    transform: rotateZ(0deg);\n    animation: typeLeft 0.4s linear infinite;\n  }\n  \n  .rightarm404 {\n    position: absolute;\n    top: 148px;\n    left: 231px;\n    width: 157px;\n    height: 91px;\n    background-position: -442px -323px;\n    transform-origin: 90% 25%;\n    animation: typeLeft 0.4s linear infinite;\n  }\n  \n  .chair404 {\n    position: absolute;\n    top: 430px;\n    left: 55px;\n    width: 260px;\n    height: 365px;\n    background-position: -12px -697px;\n  }\n  \n  .legs404 {\n    position: absolute;\n    top: 378px;\n    left: 4px;\n    width: 370px;\n    height: 247px;\n    background-position: -381px -443px;\n  }\n  \n  .leftshoe404 {\n    position: absolute;\n    top: 591px;\n    left: 54px;\n    width: 130px;\n    height: 92px;\n    background-position: -315px -749px;\n  }\n  \n  .rightshoe404 {\n    position: absolute;\n    top: 594px;\n    left: 187px;\n    width: 135px;\n    height: 81px;\n    background-position: -453px -749px;\n    transform-origin: 35% 12%;\n    animation: tapRight 1s linear infinite;\n  }\n  \n  .laptop404 {\n    position: absolute;\n    top: 186px;\n    left: 9px;\n    width: 365px;\n    height: 216px;\n    background-position: -2px -466px;\n    transform-origin: 50% 100%;\n    animation: tapWobble 0.4s linear infinite;\n  }\n  \n  @keyframes sway {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    20% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(4deg);\n    }\n    45% {\n      transform: rotateZ(4deg);\n    }\n    50% {\n      transform: rotateZ(0deg);\n    }\n    70% {\n      transform: rotateZ(0deg);\n    }\n    75% {\n      transform: rotateZ(-4deg);\n    }\n    90% {\n      transform: rotateZ(-4deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes headTilt {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    20% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(-4deg);\n    }\n    35% {\n      transform: rotateZ(-4deg);\n    }\n    38% {\n      transform: rotateZ(2deg);\n    }\n    42% {\n      transform: rotateZ(2deg);\n    }\n    45% {\n      transform: rotateZ(-4deg);\n    }\n    50% {\n      transform: rotateZ(0deg);\n    }\n    70% {\n      transform: rotateZ(0deg);\n    }\n    82% {\n      transform: rotateZ(0deg);\n    }\n    85% {\n      transform: rotateZ(4deg);\n    }\n    90% {\n      transform: rotateZ(4deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes typeLeft {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(7deg);\n    }\n    75% {\n      transform: rotateZ(-6deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes typeRight {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(-6deg);\n    }\n    75% {\n      transform: rotateZ(7deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes tapWobble {\n    0% {\n      transform: rotateZ(-0.2deg);\n    }\n    50% {\n      transform: rotateZ(0.2deg);\n    }\n    100% {\n      transform: rotateZ(-0.2deg);\n    }\n  }\n  \n  @keyframes tapRight {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    90% {\n      transform: rotateZ(-6deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes blink404 {\n    0% {\n      background-position: -162px -350px;\n    }\n    94% {\n      background-position: -162px -350px;\n    }\n    98% {\n      background-position: -162px -368px;\n    }\n    100% {\n      background-position: -162px -350px;\n    }\n  }\n  \n  @keyframes pan {\n    0% {\n      transform: translateX(-2px);\n    }\n    49% {\n      transform: translateX(-2px);\n    }\n    50% {\n      transform: translateX(2px);\n    }\n    99% {\n      transform: translateX(2px);\n    }\n    100% {\n      transform: translateX(-2px);\n    }\n  }\n  \n  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-weight: inherit;\n    font-style: inherit;\n    font-family: inherit;\n    vertical-align: baseline;\n  }\n  \n  body {\n    line-height: 1;\n  }\n  \n  ol, ul {\n    list-style: none;\n  }\n  \n  blockquote, q {\n    quotes: none;\n  }\n  \n  blockquote:after, blockquote:before, q:after, q:before {\n    content: '';\n    content: none;\n  }\n  \n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  \n  :focus {\n    outline: 0;\n  }\n  \n  html {\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n  \n  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section {\n    display: block;\n  }\n  \n  audio, canvas, picture, progress, video {\n    display: inline-block;\n  }\n  \n  template {\n    display: none;\n  }\n  \n  input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration, input[type=search]::-webkit-search-results-button, input[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n  }\n  \n  input[type=search] {\n    -webkit-appearance: none;\n    box-sizing: content-box;\n  }\n  \n  textarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n  }\n  \n  ::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n  \n  body {\n    background-color: #333;\n    font-family: 'Quicksand', sans-serif;\n  }\n  \n  .hidden {\n    display: none;\n  }\n  \n  .u-isVisuallyHidden {\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    border: 0;\n    position: absolute;\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n  \n  .footer {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n  \n  .withanes {\n    display: block;\n    position: absolute;\n    right: 5px;\n    bottom: 5px;\n    width: 24px;\n    height: 32px;\n  }\n  \n  .withanes:after {\n    content: '';\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    width: 2px;\n    height: 2px;\n    box-shadow: 8px 2px #795f41, 10px 2px #795f41, 12px 2px #795f41, 14px 2px #795f41, 16px 2px #795f41, 18px 2px #795f41, 6px 4px #795f41, 8px 4px #795f41, 10px 4px #795f41, 12px 4px #795f41, 14px 4px #795f41, 16px 4px #795f41, 18px 4px #795f41, 20px 4px #795f41, 4px 6px #795f41, 6px 6px #795f41, 8px 6px #e9d8bc, 10px 6px #795f41, 12px 6px #795f41, 14px 6px #795f41, 16px 6px #795f41, 18px 6px #cbb490, 20px 6px #795f41, 22px 6px #795f41, 4px 8px #795f41, 6px 8px #e9d8bc, 8px 8px #e0c9a4, 10px 8px #e0c9a4, 12px 8px #e0c9a4, 14px 8px #e0c9a4, 16px 8px #e0c9a4, 18px 8px #cbb490, 20px 8px #cbb490, 22px 8px #795f41, 2px 10px #7e6f5d, 4px 10px #e9d8bc, 6px 10px #e0c9a4, 8px 10px #e0c9a4, 10px 10px #e0c9a4, 12px 10px #e0c9a4, 14px 10px #e0c9a4, 16px 10px #e0c9a4, 18px 10px #e0c9a4, 20px 10px #cbb490, 22px 10px #cbb490, 24px 10px #7e6f5d, 2px 12px #7e6f5d, 4px 12px #e9d8bc, 6px 12px #e0c9a4, 8px 12px #e0c9a4, 10px 12px #e0c9a4, 12px 12px #e0c9a4, 14px 12px #e0c9a4, 16px 12px #e0c9a4, 18px 12px #e0c9a4, 20px 12px #e0c9a4, 22px 12px #cbb490, 24px 12px #7e6f5d, 2px 14px #7e6f5d, 4px 14px #e9d8bc, 6px 14px #e0c9a4, 8px 14px #cbb490, 10px 14px #cbb490, 12px 14px #e0c9a4, 14px 14px #e0c9a4, 16px 14px #cbb490, 18px 14px #cbb490, 20px 14px #e0c9a4, 22px 14px #cbb490, 24px 14px #7e6f5d, 2px 16px #b6a281, 4px 16px #e9d8bc, 6px 16px #e0c9a4, 8px 16px #000000, 10px 16px #000000, 12px 16px #e9d8bc, 14px 16px #e0c9a4, 16px 16px #000000, 18px 16px #000000, 20px 16px #e0c9a4, 22px 16px #cbb490, 24px 16px #b6a281, 2px 18px #cbb490, 4px 18px #e9d8bc, 6px 18px #e0c9a4, 8px 18px #e0c9a4, 10px 18px #e0c9a4, 12px 18px #e9d8bc, 14px 18px #e0c9a4, 16px 18px #e0c9a4, 18px 18px #e0c9a4, 20px 18px #e0c9a4, 22px 18px #cbb490, 24px 18px #cbb490, 4px 20px #795f41, 6px 20px #e0c9a4, 8px 20px #e0c9a4, 10px 20px #e0c9a4, 12px 20px #e9d8bc, 14px 20px #e0c9a4, 16px 20px #e0c9a4, 18px 20px #e0c9a4, 20px 20px #e0c9a4, 22px 20px #795f41, 4px 22px #795f41, 6px 22px #e0c9a4, 8px 22px #e0c9a4, 10px 22px #e0c9a4, 12px 22px #cbb490, 14px 22px #cbb490, 16px 22px #e0c9a4, 18px 22px #e0c9a4, 20px 22px #cbb490, 22px 22px #795f41, 4px 24px #795f41, 6px 24px #795f41, 8px 24px #795f41, 10px 24px #795f41, 12px 24px #795f41, 14px 24px #795f41, 16px 24px #795f41, 18px 24px #795f41, 20px 24px #795f41, 22px 24px #795f41, 6px 26px #795f41, 8px 26px #795f41, 10px 26px #e0c9a4, 12px 26px #e0c9a4, 14px 26px #e0c9a4, 16px 26px #b6a281, 18px 26px #795f41, 20px 26px #795f41, 8px 28px #7e6f5d, 10px 28px #e0c9a4, 12px 28px #7e6f5d, 14px 28px #7e6f5d, 16px 28px #b6a281, 18px 28px #7e6f5d, 8px 30px #7e6f5d, 10px 30px #795f41, 12px 30px #7e6f5d, 14px 30px #7e6f5d, 16px 30px #795f41, 18px 30px #7e6f5d, 10px 32px #7e6f5d, 12px 32px #7e6f5d, 14px 32px #7e6f5d, 16px 32px #7e6f5d;\n  }\n  \n  .withanes-name {\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 4px;\n    right: 16px;\n    padding: 5px 7px;\n    /*     width: 0; */\n    text-align: center;\n    font-size: 12px;\n    font-weight: 700;\n    background-color: white;\n    opacity: 0;\n    transform: translateX(0);\n    color: black;\n    white-space: nowrap;\n    overflow: hidden;\n    transition: opacity 250ms ease-in-out, width 0 linear 250ms, transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  }\n  \n  .withanes-name:after {\n    width: 0;\n    height: 0;\n    content: '';\n    position: absolute;\n    z-index: 2;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-left: 8px solid white;\n    position: absolute;\n    top: calc(50% - 5px);\n    right: -6px;\n  }\n  \n  .withanes:hover .withanes-name {\n    /*     width: 120px; */\n    overflow: visible;\n    opacity: 1;\n    transform: translateX(-20px) rotate(0deg);\n    box-shadow: 0 0 16px rgba(0, 0, 0, 0.33);\n    transition: opacity 125ms ease-in-out 100ms, transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  }\n  \n  .withanes:hover:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: -20px;\n  }\n  \n  .withanes-name > .heart {\n    margin: 0 3px;\n    position: relative;\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    background-color: #D13E35;\n    transform: rotate(45deg);\n  }\n  \n  .withanes-name > .heart:before, .withanes-name > .heart:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    top: 0;\n    left: 0;\n    background-color: #D13E35;\n    border-radius: 50%;\n  }\n  \n  .withanes-name > .heart:before {\n    left: -3px;\n  }\n  \n  .withanes-name > .heart:after {\n    top: -3px;\n  }\n  \n  .grid {\n    display: block;\n    /* IE9 fallback for Flex */\n    display: flex;\n    /* Using Flex for equal height containers */\n    flex-wrap: wrap;\n    /* Children need to wrap */\n    margin-top: -20px;\n    margin-left: -20px;\n    align-items: stretch;\n    /* For equal height */\n    font-size: 0;\n    /* Horiontal gap fix for inline-block fallback */\n  }\n  \n  .grid + .grid {\n    margin-top: 0;\n    /* reset margin on stacked grids */\n  }\n  \n  .grid-col {\n    box-sizing: border-box;\n    /* Using box-sizing so padding doesn't affect width */\n    display: inline-block;\n    /* IE9 fallback */\n    width: 100%;\n    padding-top: 20px;\n    padding-left: 20px;\n    vertical-align: top;\n    font-size: 16px;\n    /* Resetting font-size for horizontal gap fix */\n  }\n  \n  .grid-col_1of12 {\n    width: 8.3333333333%;\n  }\n  \n  .grid-col_2of12 {\n    width: 16.6666666667%;\n  }\n  \n  .grid-col_3of12 {\n    width: 25%;\n  }\n  \n  .grid-col_4of12 {\n    width: 33.3333333333%;\n  }\n  \n  .grid-col_5of12 {\n    width: 41.6666666667%;\n  }\n  \n  .grid-col_6of12 {\n    width: 50%;\n  }\n  \n  .grid-col_7of12 {\n    width: 58.3333333333%;\n  }\n  \n  .grid-col_8of12 {\n    width: 66.6666666667%;\n  }\n  \n  .grid-col_9of12 {\n    width: 75%;\n  }\n  \n  .grid-col_10of12 {\n    width: 83.3333333333%;\n  }\n  \n  .grid-col_11of12 {\n    width: 91.6666666667%;\n  }\n  \n  .grid-col_12of12 {\n    width: 100%;\n  }\n  \n  @media (min-width: 768px) {\n    .grid-col_1of12SM {\n      width: 8.3333333333%;\n    }\n  \n    .grid-col_2of12SM {\n      width: 16.6666666667%;\n    }\n  \n    .grid-col_3of12SM {\n      width: 25%;\n    }\n  \n    .grid-col_4of12SM {\n      width: 33.3333333333%;\n    }\n  \n    .grid-col_5of12SM {\n      width: 41.6666666667%;\n    }\n  \n    .grid-col_6of12SM {\n      width: 50%;\n    }\n  \n    .grid-col_7of12SM {\n      width: 58.3333333333%;\n    }\n  \n    .grid-col_8of12SM {\n      width: 66.6666666667%;\n    }\n  \n    .grid-col_9of12SM {\n      width: 75%;\n    }\n  \n    .grid-col_10of12SM {\n      width: 83.3333333333%;\n    }\n  \n    .grid-col_11of12SM {\n      width: 91.6666666667%;\n    }\n  \n    .grid-col_12of12SM {\n      width: 100%;\n    }\n  }\n  \n  @media (min-width: 960px) {\n    .grid-col_1of12MD {\n      width: 8.3333333333%;\n    }\n  \n    .grid-col_2of12MD {\n      width: 16.6666666667%;\n    }\n  \n    .grid-col_3of12MD {\n      width: 25%;\n    }\n  \n    .grid-col_4of12MD {\n      width: 33.3333333333%;\n    }\n  \n    .grid-col_5of12MD {\n      width: 41.6666666667%;\n    }\n  \n    .grid-col_6of12MD {\n      width: 50%;\n    }\n  \n    .grid-col_7of12MD {\n      width: 58.3333333333%;\n    }\n  \n    .grid-col_8of12MD {\n      width: 66.6666666667%;\n    }\n  \n    .grid-col_9of12MD {\n      width: 75%;\n    }\n  \n    .grid-col_10of12MD {\n      width: 83.3333333333%;\n    }\n  \n    .grid-col_11of12MD {\n      width: 91.6666666667%;\n    }\n  \n    .grid-col_12of12MD {\n      width: 100%;\n    }\n  }\n  \n  .blocks {\n    margin: -30px 0 0 -30px;\n    /* offset blocks horizontal and vertical spacing - must match padding of blocks items */\n    font-size: 0;\n    /* remove inline block whitespace */\n  }\n  \n  .blocks > * {\n    box-sizing: border-box;\n    display: inline-block;\n    padding: 30px 0 0 30px;\n    /* space blocks horizontally and vertically - offset is handled by .blocks */\n    font-size: 16px;\n    /* return the font size */\n  }\n  \n  .blocks_2up > * {\n    width: 50%;\n  }\n  \n  .blocks_3up > * {\n    width: 33.33333%;\n  }\n  \n  .blocks_4up > * {\n    width: 25%;\n  }\n  \n  .u-srOnly {\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    border: 0;\n    position: absolute;\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n  \n  .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n  }\n  \n  body {\n    background-color: white;\n    overflow: hidden;\n  }\n  \n  .error404page {\n   \n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  .body404,\n  .head404,\n  .eyes404,\n  .leftarm404,\n  .rightarm404,\n  .chair404,\n  .leftshoe404,\n  .rightshoe404,\n  .legs404,\n  .laptop404 {\n    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/15979/404-character-new.png) 0 0 no-repeat;\n    width: 200px;\n    height: 200px;\n  }\n  \n  .newcharacter404,\n  .torso404,\n  .body404,\n  .head404,\n  .eyes404,\n  .leftarm404,\n  .rightarm404,\n  .chair404,\n  .leftshoe404,\n  .rightshoe404,\n  .legs404,\n  .laptop404 {\n    background-size: 750px;\n    position: absolute;\n    display: block;\n  }\n  \n  .newcharacter404 {\n   \n    left: 50%;\n    top: 20px;\n    margin-left: -200px;\n  }\n  \n  .torso404 {\n    position: absolute;\n    display: block;\n    top: 138px;\n    left: 0px;\n    width: 389px;\n    height: 252px;\n    animation: sway 20s ease infinite;\n    transform-origin: 50% 100%;\n  }\n  \n  .body404 {\n    position: absolute;\n    display: block;\n    top: 0px;\n    left: 0px;\n    width: 389px;\n    height: 253px;\n  }\n  \n  .head404 {\n    position: absolute;\n    top: -148px;\n    left: 106px;\n    width: 160px;\n    height: 194px;\n    background-position: 0px -265px;\n    transform-origin: 50% 85%;\n    animation: headTilt 20s ease infinite;\n  }\n  \n  .eyes404 {\n    position: absolute;\n    top: 92px;\n    left: 34px;\n    width: 73px;\n    height: 18px;\n    background-position: -162px -350px;\n    animation: blink404 10s steps(1) infinite, pan 10s ease-in-out infinite;\n  }\n  \n  .leftarm404 {\n    position: absolute;\n    top: 159px;\n    left: 0;\n    width: 165px;\n    height: 73px;\n    background-position: -265px -341px;\n    transform-origin: 9% 35%;\n    transform: rotateZ(0deg);\n    animation: typeLeft 0.4s linear infinite;\n  }\n  \n  .rightarm404 {\n    position: absolute;\n    top: 148px;\n    left: 231px;\n    width: 157px;\n    height: 91px;\n    background-position: -442px -323px;\n    transform-origin: 90% 25%;\n    animation: typeLeft 0.4s linear infinite;\n  }\n  \n  .chair404 {\n    position: absolute;\n    top: 430px;\n    left: 55px;\n    width: 260px;\n    height: 365px;\n    background-position: -12px -697px;\n  }\n  \n  .legs404 {\n    position: absolute;\n    top: 378px;\n    left: 4px;\n    width: 370px;\n    height: 247px;\n    background-position: -381px -443px;\n  }\n  \n  .leftshoe404 {\n    position: absolute;\n    top: 591px;\n    left: 54px;\n    width: 130px;\n    height: 92px;\n    background-position: -315px -749px;\n  }\n  \n  .rightshoe404 {\n    position: absolute;\n    top: 594px;\n    left: 187px;\n    width: 135px;\n    height: 81px;\n    background-position: -453px -749px;\n    transform-origin: 35% 12%;\n    animation: tapRight 1s linear infinite;\n  }\n  \n  .laptop404 {\n    position: absolute;\n    top: 186px;\n    left: 9px;\n    width: 365px;\n    height: 216px;\n    background-position: -2px -466px;\n    transform-origin: 50% 100%;\n    animation: tapWobble 0.4s linear infinite;\n  }\n  \n  @keyframes sway {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    20% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(4deg);\n    }\n    45% {\n      transform: rotateZ(4deg);\n    }\n    50% {\n      transform: rotateZ(0deg);\n    }\n    70% {\n      transform: rotateZ(0deg);\n    }\n    75% {\n      transform: rotateZ(-4deg);\n    }\n    90% {\n      transform: rotateZ(-4deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes headTilt {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    20% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(-4deg);\n    }\n    35% {\n      transform: rotateZ(-4deg);\n    }\n    38% {\n      transform: rotateZ(2deg);\n    }\n    42% {\n      transform: rotateZ(2deg);\n    }\n    45% {\n      transform: rotateZ(-4deg);\n    }\n    50% {\n      transform: rotateZ(0deg);\n    }\n    70% {\n      transform: rotateZ(0deg);\n    }\n    82% {\n      transform: rotateZ(0deg);\n    }\n    85% {\n      transform: rotateZ(4deg);\n    }\n    90% {\n      transform: rotateZ(4deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes typeLeft {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(7deg);\n    }\n    75% {\n      transform: rotateZ(-6deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes typeRight {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(-6deg);\n    }\n    75% {\n      transform: rotateZ(7deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes tapWobble {\n    0% {\n      transform: rotateZ(-0.2deg);\n    }\n    50% {\n      transform: rotateZ(0.2deg);\n    }\n    100% {\n      transform: rotateZ(-0.2deg);\n    }\n  }\n  \n  @keyframes tapRight {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    90% {\n      transform: rotateZ(-6deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes blink404 {\n    0% {\n      background-position: -162px -350px;\n    }\n    94% {\n      background-position: -162px -350px;\n    }\n    98% {\n      background-position: -162px -368px;\n    }\n    100% {\n      background-position: -162px -350px;\n    }\n  }\n  \n  @keyframes pan {\n    0% {\n      transform: translateX(-2px);\n    }\n    49% {\n      transform: translateX(-2px);\n    }\n    50% {\n      transform: translateX(2px);\n    }\n    99% {\n      transform: translateX(2px);\n    }\n    100% {\n      transform: translateX(-2px);\n    }\n  }\n  \n  .board {\n      position: absolute;\n      top: 20%;\n      left: 50%;\n      height: 150px;\n      width: 500px;\n      margin: -75px 0 0 -250px;\n      padding: 20px;\n      font: 75px/75px Monoton, cursive;\n      text-align: center;\n      text-transform: uppercase;\n      text-shadow: 0 0 80px red, 0 0 30px FireBrick, 0 0 6px DarkRed;\n      color: red;\n    }\n  \n  #error {\n      color: #fff;\n      text-shadow: 0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7SUFHeEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0VBQ1Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFdBQVc7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RSx5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtJQUNBO01BQ0Usd0JBQXdCO0lBQzFCO0VBQ0Y7O0VBQ0E7SUFDRTtNQUNFLDJCQUEyQjtJQUM3QjtJQUNBO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjs7RUFDQTtJQUNFO01BQ0Usd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtFQUNGOztFQUNBO0lBQ0U7TUFDRSxrQ0FBa0M7SUFDcEM7SUFDQTtNQUNFLGtDQUFrQztJQUNwQztJQUNBO01BQ0Usa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSxrQ0FBa0M7SUFDcEM7RUFDRjs7RUFDQTtJQUNFO01BQ0UsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjs7RUFDQTtNQUNJLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULGFBQWE7TUFDYixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGFBQWE7TUFDYixnQ0FBZ0M7TUFDaEMsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6Qiw4REFBOEQ7TUFDOUQsVUFBVTtJQUNaOztFQUVBO01BQ0UsV0FBVztNQUNYLGdFQUFnRTtJQUNsRSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBhcHBsZXQsIGFydGljbGUsIGFzaWRlLCBhdWRpbywgYiwgYmlnLCBibG9ja3F1b3RlLCBib2R5LCBjYW52YXMsIGNhcHRpb24sIGNlbnRlciwgY2l0ZSwgY29kZSwgZGQsIGRlbCwgZGV0YWlscywgZGZuLCBkaXYsIGRsLCBkdCwgZW0sIGVtYmVkLCBmaWVsZHNldCwgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGZvcm0sIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGhlYWRlciwgaGdyb3VwLCBodG1sLCBpLCBpZnJhbWUsIGltZywgaW5zLCBrYmQsIGxhYmVsLCBsZWdlbmQsIGxpLCBtYXJrLCBtZW51LCBuYXYsIG9iamVjdCwgb2wsIG91dHB1dCwgcCwgcHJlLCBxLCBydWJ5LCBzLCBzYW1wLCBzZWN0aW9uLCBzbWFsbCwgc3Bhbiwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VtbWFyeSwgc3VwLCB0YWJsZSwgdGJvZHksIHRkLCB0Zm9vdCwgdGgsIHRoZWFkLCB0aW1lLCB0ciwgdHQsIHUsIHVsLCB2YXIsIHZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICBcbiAgb2wsIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIFxuICBibG9ja3F1b3RlLCBxIHtcbiAgICBxdW90ZXM6IG5vbmU7XG4gIH1cbiAgXG4gIGJsb2NrcXVvdGU6YWZ0ZXIsIGJsb2NrcXVvdGU6YmVmb3JlLCBxOmFmdGVyLCBxOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbiAgfVxuICBcbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIH1cbiAgXG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuICBcbiAgaHRtbCB7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICB9XG4gIFxuICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtYWluLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICBhdWRpbywgY2FudmFzLCBwaWN0dXJlLCBwcm9ncmVzcywgdmlkZW8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiwgaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLCBpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLCBpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIH1cbiAgXG4gIHRleHRhcmVhIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gIH1cbiAgXG4gIDo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAudS1pc1Zpc3VhbGx5SGlkZGVuIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgXG4gIC53aXRoYW5lcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG4gIC53aXRoYW5lczphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTJweDtcbiAgICBsZWZ0OiAtMnB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYm94LXNoYWRvdzogOHB4IDJweCAjNzk1ZjQxLCAxMHB4IDJweCAjNzk1ZjQxLCAxMnB4IDJweCAjNzk1ZjQxLCAxNHB4IDJweCAjNzk1ZjQxLCAxNnB4IDJweCAjNzk1ZjQxLCAxOHB4IDJweCAjNzk1ZjQxLCA2cHggNHB4ICM3OTVmNDEsIDhweCA0cHggIzc5NWY0MSwgMTBweCA0cHggIzc5NWY0MSwgMTJweCA0cHggIzc5NWY0MSwgMTRweCA0cHggIzc5NWY0MSwgMTZweCA0cHggIzc5NWY0MSwgMThweCA0cHggIzc5NWY0MSwgMjBweCA0cHggIzc5NWY0MSwgNHB4IDZweCAjNzk1ZjQxLCA2cHggNnB4ICM3OTVmNDEsIDhweCA2cHggI2U5ZDhiYywgMTBweCA2cHggIzc5NWY0MSwgMTJweCA2cHggIzc5NWY0MSwgMTRweCA2cHggIzc5NWY0MSwgMTZweCA2cHggIzc5NWY0MSwgMThweCA2cHggI2NiYjQ5MCwgMjBweCA2cHggIzc5NWY0MSwgMjJweCA2cHggIzc5NWY0MSwgNHB4IDhweCAjNzk1ZjQxLCA2cHggOHB4ICNlOWQ4YmMsIDhweCA4cHggI2UwYzlhNCwgMTBweCA4cHggI2UwYzlhNCwgMTJweCA4cHggI2UwYzlhNCwgMTRweCA4cHggI2UwYzlhNCwgMTZweCA4cHggI2UwYzlhNCwgMThweCA4cHggI2NiYjQ5MCwgMjBweCA4cHggI2NiYjQ5MCwgMjJweCA4cHggIzc5NWY0MSwgMnB4IDEwcHggIzdlNmY1ZCwgNHB4IDEwcHggI2U5ZDhiYywgNnB4IDEwcHggI2UwYzlhNCwgOHB4IDEwcHggI2UwYzlhNCwgMTBweCAxMHB4ICNlMGM5YTQsIDEycHggMTBweCAjZTBjOWE0LCAxNHB4IDEwcHggI2UwYzlhNCwgMTZweCAxMHB4ICNlMGM5YTQsIDE4cHggMTBweCAjZTBjOWE0LCAyMHB4IDEwcHggI2NiYjQ5MCwgMjJweCAxMHB4ICNjYmI0OTAsIDI0cHggMTBweCAjN2U2ZjVkLCAycHggMTJweCAjN2U2ZjVkLCA0cHggMTJweCAjZTlkOGJjLCA2cHggMTJweCAjZTBjOWE0LCA4cHggMTJweCAjZTBjOWE0LCAxMHB4IDEycHggI2UwYzlhNCwgMTJweCAxMnB4ICNlMGM5YTQsIDE0cHggMTJweCAjZTBjOWE0LCAxNnB4IDEycHggI2UwYzlhNCwgMThweCAxMnB4ICNlMGM5YTQsIDIwcHggMTJweCAjZTBjOWE0LCAyMnB4IDEycHggI2NiYjQ5MCwgMjRweCAxMnB4ICM3ZTZmNWQsIDJweCAxNHB4ICM3ZTZmNWQsIDRweCAxNHB4ICNlOWQ4YmMsIDZweCAxNHB4ICNlMGM5YTQsIDhweCAxNHB4ICNjYmI0OTAsIDEwcHggMTRweCAjY2JiNDkwLCAxMnB4IDE0cHggI2UwYzlhNCwgMTRweCAxNHB4ICNlMGM5YTQsIDE2cHggMTRweCAjY2JiNDkwLCAxOHB4IDE0cHggI2NiYjQ5MCwgMjBweCAxNHB4ICNlMGM5YTQsIDIycHggMTRweCAjY2JiNDkwLCAyNHB4IDE0cHggIzdlNmY1ZCwgMnB4IDE2cHggI2I2YTI4MSwgNHB4IDE2cHggI2U5ZDhiYywgNnB4IDE2cHggI2UwYzlhNCwgOHB4IDE2cHggIzAwMDAwMCwgMTBweCAxNnB4ICMwMDAwMDAsIDEycHggMTZweCAjZTlkOGJjLCAxNHB4IDE2cHggI2UwYzlhNCwgMTZweCAxNnB4ICMwMDAwMDAsIDE4cHggMTZweCAjMDAwMDAwLCAyMHB4IDE2cHggI2UwYzlhNCwgMjJweCAxNnB4ICNjYmI0OTAsIDI0cHggMTZweCAjYjZhMjgxLCAycHggMThweCAjY2JiNDkwLCA0cHggMThweCAjZTlkOGJjLCA2cHggMThweCAjZTBjOWE0LCA4cHggMThweCAjZTBjOWE0LCAxMHB4IDE4cHggI2UwYzlhNCwgMTJweCAxOHB4ICNlOWQ4YmMsIDE0cHggMThweCAjZTBjOWE0LCAxNnB4IDE4cHggI2UwYzlhNCwgMThweCAxOHB4ICNlMGM5YTQsIDIwcHggMThweCAjZTBjOWE0LCAyMnB4IDE4cHggI2NiYjQ5MCwgMjRweCAxOHB4ICNjYmI0OTAsIDRweCAyMHB4ICM3OTVmNDEsIDZweCAyMHB4ICNlMGM5YTQsIDhweCAyMHB4ICNlMGM5YTQsIDEwcHggMjBweCAjZTBjOWE0LCAxMnB4IDIwcHggI2U5ZDhiYywgMTRweCAyMHB4ICNlMGM5YTQsIDE2cHggMjBweCAjZTBjOWE0LCAxOHB4IDIwcHggI2UwYzlhNCwgMjBweCAyMHB4ICNlMGM5YTQsIDIycHggMjBweCAjNzk1ZjQxLCA0cHggMjJweCAjNzk1ZjQxLCA2cHggMjJweCAjZTBjOWE0LCA4cHggMjJweCAjZTBjOWE0LCAxMHB4IDIycHggI2UwYzlhNCwgMTJweCAyMnB4ICNjYmI0OTAsIDE0cHggMjJweCAjY2JiNDkwLCAxNnB4IDIycHggI2UwYzlhNCwgMThweCAyMnB4ICNlMGM5YTQsIDIwcHggMjJweCAjY2JiNDkwLCAyMnB4IDIycHggIzc5NWY0MSwgNHB4IDI0cHggIzc5NWY0MSwgNnB4IDI0cHggIzc5NWY0MSwgOHB4IDI0cHggIzc5NWY0MSwgMTBweCAyNHB4ICM3OTVmNDEsIDEycHggMjRweCAjNzk1ZjQxLCAxNHB4IDI0cHggIzc5NWY0MSwgMTZweCAyNHB4ICM3OTVmNDEsIDE4cHggMjRweCAjNzk1ZjQxLCAyMHB4IDI0cHggIzc5NWY0MSwgMjJweCAyNHB4ICM3OTVmNDEsIDZweCAyNnB4ICM3OTVmNDEsIDhweCAyNnB4ICM3OTVmNDEsIDEwcHggMjZweCAjZTBjOWE0LCAxMnB4IDI2cHggI2UwYzlhNCwgMTRweCAyNnB4ICNlMGM5YTQsIDE2cHggMjZweCAjYjZhMjgxLCAxOHB4IDI2cHggIzc5NWY0MSwgMjBweCAyNnB4ICM3OTVmNDEsIDhweCAyOHB4ICM3ZTZmNWQsIDEwcHggMjhweCAjZTBjOWE0LCAxMnB4IDI4cHggIzdlNmY1ZCwgMTRweCAyOHB4ICM3ZTZmNWQsIDE2cHggMjhweCAjYjZhMjgxLCAxOHB4IDI4cHggIzdlNmY1ZCwgOHB4IDMwcHggIzdlNmY1ZCwgMTBweCAzMHB4ICM3OTVmNDEsIDEycHggMzBweCAjN2U2ZjVkLCAxNHB4IDMwcHggIzdlNmY1ZCwgMTZweCAzMHB4ICM3OTVmNDEsIDE4cHggMzBweCAjN2U2ZjVkLCAxMHB4IDMycHggIzdlNmY1ZCwgMTJweCAzMnB4ICM3ZTZmNWQsIDE0cHggMzJweCAjN2U2ZjVkLCAxNnB4IDMycHggIzdlNmY1ZDtcbiAgfVxuICBcbiAgLndpdGhhbmVzLW5hbWUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNHB4O1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgLyogICAgIHdpZHRoOiAwOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDAgbGluZWFyIDI1MG1zLCB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG4gIH1cbiAgLndpdGhhbmVzLW5hbWU6YWZ0ZXIge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyg1MCUgLSA1cHgpO1xuICAgIHJpZ2h0OiAtNnB4O1xuICB9XG4gIFxuICAud2l0aGFuZXM6aG92ZXIgLndpdGhhbmVzLW5hbWUge1xuICAgIC8qICAgICB3aWR0aDogMTIwcHg7ICovXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTI1bXMgZWFzZS1pbi1vdXQgMTAwbXMsIHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbiAgfVxuICBcbiAgLndpdGhhbmVzOmhvdmVyOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTIwcHg7XG4gIH1cbiAgXG4gIC53aXRoYW5lcy1uYW1lID4gLmhlYXJ0IHtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDEzRTM1O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAud2l0aGFuZXMtbmFtZSA+IC5oZWFydDpiZWZvcmUsIC53aXRoYW5lcy1uYW1lID4gLmhlYXJ0OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxM0UzNTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLndpdGhhbmVzLW5hbWUgPiAuaGVhcnQ6YmVmb3JlIHtcbiAgICBsZWZ0OiAtM3B4O1xuICB9XG4gIC53aXRoYW5lcy1uYW1lID4gLmhlYXJ0OmFmdGVyIHtcbiAgICB0b3A6IC0zcHg7XG4gIH1cbiAgXG4gIC5ncmlkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvKiBJRTkgZmFsbGJhY2sgZm9yIEZsZXggKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIFVzaW5nIEZsZXggZm9yIGVxdWFsIGhlaWdodCBjb250YWluZXJzICovXG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC8qIENoaWxkcmVuIG5lZWQgdG8gd3JhcCAqL1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAvKiBGb3IgZXF1YWwgaGVpZ2h0ICovXG4gICAgZm9udC1zaXplOiAwO1xuICAgIC8qIEhvcmlvbnRhbCBnYXAgZml4IGZvciBpbmxpbmUtYmxvY2sgZmFsbGJhY2sgKi9cbiAgfVxuICBcbiAgLmdyaWQgKyAuZ3JpZCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICAvKiByZXNldCBtYXJnaW4gb24gc3RhY2tlZCBncmlkcyAqL1xuICB9XG4gIFxuICAuZ3JpZC1jb2wge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogVXNpbmcgYm94LXNpemluZyBzbyBwYWRkaW5nIGRvZXNuJ3QgYWZmZWN0IHdpZHRoICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8qIElFOSBmYWxsYmFjayAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvKiBSZXNldHRpbmcgZm9udC1zaXplIGZvciBob3Jpem9udGFsIGdhcCBmaXggKi9cbiAgfVxuICBcbiAgLmdyaWQtY29sXzFvZjEyIHtcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzJvZjEyIHtcbiAgICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF8zb2YxMiB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzRvZjEyIHtcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF81b2YxMiB7XG4gICAgd2lkdGg6IDQxLjY2NjY2NjY2NjclO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfNm9mMTIge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF83b2YxMiB7XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfOG9mMTIge1xuICAgIHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzlvZjEyIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfMTBvZjEyIHtcbiAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF8xMW9mMTIge1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzEyb2YxMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5ncmlkLWNvbF8xb2YxMlNNIHtcbiAgICAgIHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzJvZjEyU00ge1xuICAgICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzNvZjEyU00ge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF80b2YxMlNNIHtcbiAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF81b2YxMlNNIHtcbiAgICAgIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF82b2YxMlNNIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfN29mMTJTTSB7XG4gICAgICB3aWR0aDogNTguMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfOG9mMTJTTSB7XG4gICAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfOW9mMTJTTSB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzEwb2YxMlNNIHtcbiAgICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8xMW9mMTJTTSB7XG4gICAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfMTJvZjEyU00ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIC5ncmlkLWNvbF8xb2YxMk1EIHtcbiAgICAgIHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzJvZjEyTUQge1xuICAgICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzNvZjEyTUQge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF80b2YxMk1EIHtcbiAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF81b2YxMk1EIHtcbiAgICAgIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF82b2YxMk1EIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfN29mMTJNRCB7XG4gICAgICB3aWR0aDogNTguMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfOG9mMTJNRCB7XG4gICAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfOW9mMTJNRCB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzEwb2YxMk1EIHtcbiAgICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8xMW9mMTJNRCB7XG4gICAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfMTJvZjEyTUQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5ibG9ja3Mge1xuICAgIG1hcmdpbjogLTMwcHggMCAwIC0zMHB4O1xuICAgIC8qIG9mZnNldCBibG9ja3MgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgc3BhY2luZyAtIG11c3QgbWF0Y2ggcGFkZGluZyBvZiBibG9ja3MgaXRlbXMgKi9cbiAgICBmb250LXNpemU6IDA7XG4gICAgLyogcmVtb3ZlIGlubGluZSBibG9jayB3aGl0ZXNwYWNlICovXG4gIH1cbiAgXG4gIC5ibG9ja3MgPiAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAzMHB4IDAgMCAzMHB4O1xuICAgIC8qIHNwYWNlIGJsb2NrcyBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkgLSBvZmZzZXQgaXMgaGFuZGxlZCBieSAuYmxvY2tzICovXG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8qIHJldHVybiB0aGUgZm9udCBzaXplICovXG4gIH1cbiAgXG4gIC5ibG9ja3NfMnVwID4gKiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgLmJsb2Nrc18zdXAgPiAqIHtcbiAgICB3aWR0aDogMzMuMzMzMzMlO1xuICB9XG4gIFxuICAuYmxvY2tzXzR1cCA+ICoge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgXG4gIC51LXNyT25seSB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmVycm9yNDA0cGFnZSB7XG4gICAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLmJvZHk0MDQsXG4gIC5oZWFkNDA0LFxuICAuZXllczQwNCxcbiAgLmxlZnRhcm00MDQsXG4gIC5yaWdodGFybTQwNCxcbiAgLmNoYWlyNDA0LFxuICAubGVmdHNob2U0MDQsXG4gIC5yaWdodHNob2U0MDQsXG4gIC5sZWdzNDA0LFxuICAubGFwdG9wNDA0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTU5NzkvNDA0LWNoYXJhY3Rlci1uZXcucG5nKSAwIDAgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG4gIFxuICAubmV3Y2hhcmFjdGVyNDA0LFxuICAudG9yc280MDQsXG4gIC5ib2R5NDA0LFxuICAuaGVhZDQwNCxcbiAgLmV5ZXM0MDQsXG4gIC5sZWZ0YXJtNDA0LFxuICAucmlnaHRhcm00MDQsXG4gIC5jaGFpcjQwNCxcbiAgLmxlZnRzaG9lNDA0LFxuICAucmlnaHRzaG9lNDA0LFxuICAubGVnczQwNCxcbiAgLmxhcHRvcDQwNCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA3NTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5uZXdjaGFyYWN0ZXI0MDQge1xuICAgXG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xuICB9XG4gIFxuICAudG9yc280MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDEzOHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMzg5cHg7XG4gICAgaGVpZ2h0OiAyNTJweDtcbiAgICBhbmltYXRpb246IHN3YXkgMjBzIGVhc2UgaW5maW5pdGU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIH1cbiAgXG4gIC5ib2R5NDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAzODlweDtcbiAgICBoZWlnaHQ6IDI1M3B4O1xuICB9XG4gIFxuICAuaGVhZDQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE0OHB4O1xuICAgIGxlZnQ6IDEwNnB4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDE5NHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMjY1cHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDg1JTtcbiAgICBhbmltYXRpb246IGhlYWRUaWx0IDIwcyBlYXNlIGluZmluaXRlO1xuICB9XG4gIFxuICAuZXllczQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTJweDtcbiAgICBsZWZ0OiAzNHB4O1xuICAgIHdpZHRoOiA3M3B4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYycHggLTM1MHB4O1xuICAgIGFuaW1hdGlvbjogYmxpbms0MDQgMTBzIHN0ZXBzKDEpIGluZmluaXRlLCBwYW4gMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG4gIFxuICAubGVmdGFybTQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTU5cHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTY1cHg7XG4gICAgaGVpZ2h0OiA3M3B4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNjVweCAtMzQxcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogOSUgMzUlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICBhbmltYXRpb246IHR5cGVMZWZ0IDAuNHMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAucmlnaHRhcm00MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE0OHB4O1xuICAgIGxlZnQ6IDIzMXB4O1xuICAgIHdpZHRoOiAxNTdweDtcbiAgICBoZWlnaHQ6IDkxcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ0MnB4IC0zMjNweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA5MCUgMjUlO1xuICAgIGFuaW1hdGlvbjogdHlwZUxlZnQgMC40cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5jaGFpcjQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDMwcHg7XG4gICAgbGVmdDogNTVweDtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgaGVpZ2h0OiAzNjVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTJweCAtNjk3cHg7XG4gIH1cbiAgXG4gIC5sZWdzNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNzhweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgd2lkdGg6IDM3MHB4O1xuICAgIGhlaWdodDogMjQ3cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTM4MXB4IC00NDNweDtcbiAgfVxuICBcbiAgLmxlZnRzaG9lNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1OTFweDtcbiAgICBsZWZ0OiA1NHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDkycHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMxNXB4IC03NDlweDtcbiAgfVxuICBcbiAgLnJpZ2h0c2hvZTQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTk0cHg7XG4gICAgbGVmdDogMTg3cHg7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogODFweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDUzcHggLTc0OXB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDM1JSAxMiU7XG4gICAgYW5pbWF0aW9uOiB0YXBSaWdodCAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5sYXB0b3A0MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE4NnB4O1xuICAgIGxlZnQ6IDlweDtcbiAgICB3aWR0aDogMzY1cHg7XG4gICAgaGVpZ2h0OiAyMTZweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMnB4IC00NjZweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICBhbmltYXRpb246IHRhcFdvYmJsZSAwLjRzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzd2F5IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNGRlZyk7XG4gICAgfVxuICAgIDQ1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTRkZWcpO1xuICAgIH1cbiAgICA5MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgaGVhZFRpbHQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNGRlZyk7XG4gICAgfVxuICAgIDM1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTRkZWcpO1xuICAgIH1cbiAgICAzOCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDJkZWcpO1xuICAgIH1cbiAgICA0MiUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDJkZWcpO1xuICAgIH1cbiAgICA0NSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00ZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgODIlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgODUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig0ZGVnKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig0ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdHlwZUxlZnQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig3ZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNmRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHR5cGVSaWdodCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC02ZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig3ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdGFwV29iYmxlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTAuMmRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMC4yZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTAuMmRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdGFwUmlnaHQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNmRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGJsaW5rNDA0IHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYycHggLTM1MHB4O1xuICAgIH1cbiAgICA5NCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MnB4IC0zNTBweDtcbiAgICB9XG4gICAgOTglIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjJweCAtMzY4cHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MnB4IC0zNTBweDtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBwYW4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbiAgICB9XG4gICAgNDklIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgIH1cbiAgICA5OSUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgIH1cbiAgfVxuICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBhcHBsZXQsIGFydGljbGUsIGFzaWRlLCBhdWRpbywgYiwgYmlnLCBibG9ja3F1b3RlLCBib2R5LCBjYW52YXMsIGNhcHRpb24sIGNlbnRlciwgY2l0ZSwgY29kZSwgZGQsIGRlbCwgZGV0YWlscywgZGZuLCBkaXYsIGRsLCBkdCwgZW0sIGVtYmVkLCBmaWVsZHNldCwgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGZvcm0sIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGhlYWRlciwgaGdyb3VwLCBodG1sLCBpLCBpZnJhbWUsIGltZywgaW5zLCBrYmQsIGxhYmVsLCBsZWdlbmQsIGxpLCBtYXJrLCBtZW51LCBuYXYsIG9iamVjdCwgb2wsIG91dHB1dCwgcCwgcHJlLCBxLCBydWJ5LCBzLCBzYW1wLCBzZWN0aW9uLCBzbWFsbCwgc3Bhbiwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VtbWFyeSwgc3VwLCB0YWJsZSwgdGJvZHksIHRkLCB0Zm9vdCwgdGgsIHRoZWFkLCB0aW1lLCB0ciwgdHQsIHUsIHVsLCB2YXIsIHZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICBcbiAgb2wsIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIFxuICBibG9ja3F1b3RlLCBxIHtcbiAgICBxdW90ZXM6IG5vbmU7XG4gIH1cbiAgXG4gIGJsb2NrcXVvdGU6YWZ0ZXIsIGJsb2NrcXVvdGU6YmVmb3JlLCBxOmFmdGVyLCBxOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbiAgfVxuICBcbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIH1cbiAgXG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuICBcbiAgaHRtbCB7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICB9XG4gIFxuICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtYWluLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICBhdWRpbywgY2FudmFzLCBwaWN0dXJlLCBwcm9ncmVzcywgdmlkZW8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiwgaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLCBpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLCBpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIH1cbiAgXG4gIHRleHRhcmVhIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gIH1cbiAgXG4gIDo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAudS1pc1Zpc3VhbGx5SGlkZGVuIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgXG4gIC53aXRoYW5lcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG4gIC53aXRoYW5lczphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTJweDtcbiAgICBsZWZ0OiAtMnB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYm94LXNoYWRvdzogOHB4IDJweCAjNzk1ZjQxLCAxMHB4IDJweCAjNzk1ZjQxLCAxMnB4IDJweCAjNzk1ZjQxLCAxNHB4IDJweCAjNzk1ZjQxLCAxNnB4IDJweCAjNzk1ZjQxLCAxOHB4IDJweCAjNzk1ZjQxLCA2cHggNHB4ICM3OTVmNDEsIDhweCA0cHggIzc5NWY0MSwgMTBweCA0cHggIzc5NWY0MSwgMTJweCA0cHggIzc5NWY0MSwgMTRweCA0cHggIzc5NWY0MSwgMTZweCA0cHggIzc5NWY0MSwgMThweCA0cHggIzc5NWY0MSwgMjBweCA0cHggIzc5NWY0MSwgNHB4IDZweCAjNzk1ZjQxLCA2cHggNnB4ICM3OTVmNDEsIDhweCA2cHggI2U5ZDhiYywgMTBweCA2cHggIzc5NWY0MSwgMTJweCA2cHggIzc5NWY0MSwgMTRweCA2cHggIzc5NWY0MSwgMTZweCA2cHggIzc5NWY0MSwgMThweCA2cHggI2NiYjQ5MCwgMjBweCA2cHggIzc5NWY0MSwgMjJweCA2cHggIzc5NWY0MSwgNHB4IDhweCAjNzk1ZjQxLCA2cHggOHB4ICNlOWQ4YmMsIDhweCA4cHggI2UwYzlhNCwgMTBweCA4cHggI2UwYzlhNCwgMTJweCA4cHggI2UwYzlhNCwgMTRweCA4cHggI2UwYzlhNCwgMTZweCA4cHggI2UwYzlhNCwgMThweCA4cHggI2NiYjQ5MCwgMjBweCA4cHggI2NiYjQ5MCwgMjJweCA4cHggIzc5NWY0MSwgMnB4IDEwcHggIzdlNmY1ZCwgNHB4IDEwcHggI2U5ZDhiYywgNnB4IDEwcHggI2UwYzlhNCwgOHB4IDEwcHggI2UwYzlhNCwgMTBweCAxMHB4ICNlMGM5YTQsIDEycHggMTBweCAjZTBjOWE0LCAxNHB4IDEwcHggI2UwYzlhNCwgMTZweCAxMHB4ICNlMGM5YTQsIDE4cHggMTBweCAjZTBjOWE0LCAyMHB4IDEwcHggI2NiYjQ5MCwgMjJweCAxMHB4ICNjYmI0OTAsIDI0cHggMTBweCAjN2U2ZjVkLCAycHggMTJweCAjN2U2ZjVkLCA0cHggMTJweCAjZTlkOGJjLCA2cHggMTJweCAjZTBjOWE0LCA4cHggMTJweCAjZTBjOWE0LCAxMHB4IDEycHggI2UwYzlhNCwgMTJweCAxMnB4ICNlMGM5YTQsIDE0cHggMTJweCAjZTBjOWE0LCAxNnB4IDEycHggI2UwYzlhNCwgMThweCAxMnB4ICNlMGM5YTQsIDIwcHggMTJweCAjZTBjOWE0LCAyMnB4IDEycHggI2NiYjQ5MCwgMjRweCAxMnB4ICM3ZTZmNWQsIDJweCAxNHB4ICM3ZTZmNWQsIDRweCAxNHB4ICNlOWQ4YmMsIDZweCAxNHB4ICNlMGM5YTQsIDhweCAxNHB4ICNjYmI0OTAsIDEwcHggMTRweCAjY2JiNDkwLCAxMnB4IDE0cHggI2UwYzlhNCwgMTRweCAxNHB4ICNlMGM5YTQsIDE2cHggMTRweCAjY2JiNDkwLCAxOHB4IDE0cHggI2NiYjQ5MCwgMjBweCAxNHB4ICNlMGM5YTQsIDIycHggMTRweCAjY2JiNDkwLCAyNHB4IDE0cHggIzdlNmY1ZCwgMnB4IDE2cHggI2I2YTI4MSwgNHB4IDE2cHggI2U5ZDhiYywgNnB4IDE2cHggI2UwYzlhNCwgOHB4IDE2cHggIzAwMDAwMCwgMTBweCAxNnB4ICMwMDAwMDAsIDEycHggMTZweCAjZTlkOGJjLCAxNHB4IDE2cHggI2UwYzlhNCwgMTZweCAxNnB4ICMwMDAwMDAsIDE4cHggMTZweCAjMDAwMDAwLCAyMHB4IDE2cHggI2UwYzlhNCwgMjJweCAxNnB4ICNjYmI0OTAsIDI0cHggMTZweCAjYjZhMjgxLCAycHggMThweCAjY2JiNDkwLCA0cHggMThweCAjZTlkOGJjLCA2cHggMThweCAjZTBjOWE0LCA4cHggMThweCAjZTBjOWE0LCAxMHB4IDE4cHggI2UwYzlhNCwgMTJweCAxOHB4ICNlOWQ4YmMsIDE0cHggMThweCAjZTBjOWE0LCAxNnB4IDE4cHggI2UwYzlhNCwgMThweCAxOHB4ICNlMGM5YTQsIDIwcHggMThweCAjZTBjOWE0LCAyMnB4IDE4cHggI2NiYjQ5MCwgMjRweCAxOHB4ICNjYmI0OTAsIDRweCAyMHB4ICM3OTVmNDEsIDZweCAyMHB4ICNlMGM5YTQsIDhweCAyMHB4ICNlMGM5YTQsIDEwcHggMjBweCAjZTBjOWE0LCAxMnB4IDIwcHggI2U5ZDhiYywgMTRweCAyMHB4ICNlMGM5YTQsIDE2cHggMjBweCAjZTBjOWE0LCAxOHB4IDIwcHggI2UwYzlhNCwgMjBweCAyMHB4ICNlMGM5YTQsIDIycHggMjBweCAjNzk1ZjQxLCA0cHggMjJweCAjNzk1ZjQxLCA2cHggMjJweCAjZTBjOWE0LCA4cHggMjJweCAjZTBjOWE0LCAxMHB4IDIycHggI2UwYzlhNCwgMTJweCAyMnB4ICNjYmI0OTAsIDE0cHggMjJweCAjY2JiNDkwLCAxNnB4IDIycHggI2UwYzlhNCwgMThweCAyMnB4ICNlMGM5YTQsIDIwcHggMjJweCAjY2JiNDkwLCAyMnB4IDIycHggIzc5NWY0MSwgNHB4IDI0cHggIzc5NWY0MSwgNnB4IDI0cHggIzc5NWY0MSwgOHB4IDI0cHggIzc5NWY0MSwgMTBweCAyNHB4ICM3OTVmNDEsIDEycHggMjRweCAjNzk1ZjQxLCAxNHB4IDI0cHggIzc5NWY0MSwgMTZweCAyNHB4ICM3OTVmNDEsIDE4cHggMjRweCAjNzk1ZjQxLCAyMHB4IDI0cHggIzc5NWY0MSwgMjJweCAyNHB4ICM3OTVmNDEsIDZweCAyNnB4ICM3OTVmNDEsIDhweCAyNnB4ICM3OTVmNDEsIDEwcHggMjZweCAjZTBjOWE0LCAxMnB4IDI2cHggI2UwYzlhNCwgMTRweCAyNnB4ICNlMGM5YTQsIDE2cHggMjZweCAjYjZhMjgxLCAxOHB4IDI2cHggIzc5NWY0MSwgMjBweCAyNnB4ICM3OTVmNDEsIDhweCAyOHB4ICM3ZTZmNWQsIDEwcHggMjhweCAjZTBjOWE0LCAxMnB4IDI4cHggIzdlNmY1ZCwgMTRweCAyOHB4ICM3ZTZmNWQsIDE2cHggMjhweCAjYjZhMjgxLCAxOHB4IDI4cHggIzdlNmY1ZCwgOHB4IDMwcHggIzdlNmY1ZCwgMTBweCAzMHB4ICM3OTVmNDEsIDEycHggMzBweCAjN2U2ZjVkLCAxNHB4IDMwcHggIzdlNmY1ZCwgMTZweCAzMHB4ICM3OTVmNDEsIDE4cHggMzBweCAjN2U2ZjVkLCAxMHB4IDMycHggIzdlNmY1ZCwgMTJweCAzMnB4ICM3ZTZmNWQsIDE0cHggMzJweCAjN2U2ZjVkLCAxNnB4IDMycHggIzdlNmY1ZDtcbiAgfVxuICBcbiAgLndpdGhhbmVzLW5hbWUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNHB4O1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgLyogICAgIHdpZHRoOiAwOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDAgbGluZWFyIDI1MG1zLCB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG4gIH1cbiAgLndpdGhhbmVzLW5hbWU6YWZ0ZXIge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyg1MCUgLSA1cHgpO1xuICAgIHJpZ2h0OiAtNnB4O1xuICB9XG4gIFxuICAud2l0aGFuZXM6aG92ZXIgLndpdGhhbmVzLW5hbWUge1xuICAgIC8qICAgICB3aWR0aDogMTIwcHg7ICovXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTI1bXMgZWFzZS1pbi1vdXQgMTAwbXMsIHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbiAgfVxuICBcbiAgLndpdGhhbmVzOmhvdmVyOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTIwcHg7XG4gIH1cbiAgXG4gIC53aXRoYW5lcy1uYW1lID4gLmhlYXJ0IHtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDEzRTM1O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAud2l0aGFuZXMtbmFtZSA+IC5oZWFydDpiZWZvcmUsIC53aXRoYW5lcy1uYW1lID4gLmhlYXJ0OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxM0UzNTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLndpdGhhbmVzLW5hbWUgPiAuaGVhcnQ6YmVmb3JlIHtcbiAgICBsZWZ0OiAtM3B4O1xuICB9XG4gIC53aXRoYW5lcy1uYW1lID4gLmhlYXJ0OmFmdGVyIHtcbiAgICB0b3A6IC0zcHg7XG4gIH1cbiAgXG4gIC5ncmlkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvKiBJRTkgZmFsbGJhY2sgZm9yIEZsZXggKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIFVzaW5nIEZsZXggZm9yIGVxdWFsIGhlaWdodCBjb250YWluZXJzICovXG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC8qIENoaWxkcmVuIG5lZWQgdG8gd3JhcCAqL1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAvKiBGb3IgZXF1YWwgaGVpZ2h0ICovXG4gICAgZm9udC1zaXplOiAwO1xuICAgIC8qIEhvcmlvbnRhbCBnYXAgZml4IGZvciBpbmxpbmUtYmxvY2sgZmFsbGJhY2sgKi9cbiAgfVxuICBcbiAgLmdyaWQgKyAuZ3JpZCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICAvKiByZXNldCBtYXJnaW4gb24gc3RhY2tlZCBncmlkcyAqL1xuICB9XG4gIFxuICAuZ3JpZC1jb2wge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogVXNpbmcgYm94LXNpemluZyBzbyBwYWRkaW5nIGRvZXNuJ3QgYWZmZWN0IHdpZHRoICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8qIElFOSBmYWxsYmFjayAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvKiBSZXNldHRpbmcgZm9udC1zaXplIGZvciBob3Jpem9udGFsIGdhcCBmaXggKi9cbiAgfVxuICBcbiAgLmdyaWQtY29sXzFvZjEyIHtcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzJvZjEyIHtcbiAgICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF8zb2YxMiB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzRvZjEyIHtcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF81b2YxMiB7XG4gICAgd2lkdGg6IDQxLjY2NjY2NjY2NjclO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfNm9mMTIge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF83b2YxMiB7XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfOG9mMTIge1xuICAgIHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzlvZjEyIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfMTBvZjEyIHtcbiAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF8xMW9mMTIge1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzEyb2YxMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5ncmlkLWNvbF8xb2YxMlNNIHtcbiAgICAgIHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzJvZjEyU00ge1xuICAgICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzNvZjEyU00ge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF80b2YxMlNNIHtcbiAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF81b2YxMlNNIHtcbiAgICAgIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF82b2YxMlNNIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfN29mMTJTTSB7XG4gICAgICB3aWR0aDogNTguMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfOG9mMTJTTSB7XG4gICAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfOW9mMTJTTSB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzEwb2YxMlNNIHtcbiAgICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8xMW9mMTJTTSB7XG4gICAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfMTJvZjEyU00ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIC5ncmlkLWNvbF8xb2YxMk1EIHtcbiAgICAgIHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzJvZjEyTUQge1xuICAgICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzNvZjEyTUQge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF80b2YxMk1EIHtcbiAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF81b2YxMk1EIHtcbiAgICAgIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF82b2YxMk1EIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfN29mMTJNRCB7XG4gICAgICB3aWR0aDogNTguMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfOG9mMTJNRCB7XG4gICAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfOW9mMTJNRCB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzEwb2YxMk1EIHtcbiAgICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8xMW9mMTJNRCB7XG4gICAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfMTJvZjEyTUQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5ibG9ja3Mge1xuICAgIG1hcmdpbjogLTMwcHggMCAwIC0zMHB4O1xuICAgIC8qIG9mZnNldCBibG9ja3MgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgc3BhY2luZyAtIG11c3QgbWF0Y2ggcGFkZGluZyBvZiBibG9ja3MgaXRlbXMgKi9cbiAgICBmb250LXNpemU6IDA7XG4gICAgLyogcmVtb3ZlIGlubGluZSBibG9jayB3aGl0ZXNwYWNlICovXG4gIH1cbiAgXG4gIC5ibG9ja3MgPiAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAzMHB4IDAgMCAzMHB4O1xuICAgIC8qIHNwYWNlIGJsb2NrcyBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkgLSBvZmZzZXQgaXMgaGFuZGxlZCBieSAuYmxvY2tzICovXG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8qIHJldHVybiB0aGUgZm9udCBzaXplICovXG4gIH1cbiAgXG4gIC5ibG9ja3NfMnVwID4gKiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgLmJsb2Nrc18zdXAgPiAqIHtcbiAgICB3aWR0aDogMzMuMzMzMzMlO1xuICB9XG4gIFxuICAuYmxvY2tzXzR1cCA+ICoge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgXG4gIC51LXNyT25seSB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmVycm9yNDA0cGFnZSB7XG4gICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIFxuICAuYm9keTQwNCxcbiAgLmhlYWQ0MDQsXG4gIC5leWVzNDA0LFxuICAubGVmdGFybTQwNCxcbiAgLnJpZ2h0YXJtNDA0LFxuICAuY2hhaXI0MDQsXG4gIC5sZWZ0c2hvZTQwNCxcbiAgLnJpZ2h0c2hvZTQwNCxcbiAgLmxlZ3M0MDQsXG4gIC5sYXB0b3A0MDQge1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNTk3OS80MDQtY2hhcmFjdGVyLW5ldy5wbmcpIDAgMCBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgXG4gIC5uZXdjaGFyYWN0ZXI0MDQsXG4gIC50b3JzbzQwNCxcbiAgLmJvZHk0MDQsXG4gIC5oZWFkNDA0LFxuICAuZXllczQwNCxcbiAgLmxlZnRhcm00MDQsXG4gIC5yaWdodGFybTQwNCxcbiAgLmNoYWlyNDA0LFxuICAubGVmdHNob2U0MDQsXG4gIC5yaWdodHNob2U0MDQsXG4gIC5sZWdzNDA0LFxuICAubGFwdG9wNDA0IHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDc1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLm5ld2NoYXJhY3RlcjQwNCB7XG4gICBcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XG4gIH1cbiAgXG4gIC50b3JzbzQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMTM4cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAzODlweDtcbiAgICBoZWlnaHQ6IDI1MnB4O1xuICAgIGFuaW1hdGlvbjogc3dheSAyMHMgZWFzZSBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgfVxuICBcbiAgLmJvZHk0MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDM4OXB4O1xuICAgIGhlaWdodDogMjUzcHg7XG4gIH1cbiAgXG4gIC5oZWFkNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTQ4cHg7XG4gICAgbGVmdDogMTA2cHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogMTk0cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0yNjVweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgODUlO1xuICAgIGFuaW1hdGlvbjogaGVhZFRpbHQgMjBzIGVhc2UgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5leWVzNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5MnB4O1xuICAgIGxlZnQ6IDM0cHg7XG4gICAgd2lkdGg6IDczcHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjJweCAtMzUwcHg7XG4gICAgYW5pbWF0aW9uOiBibGluazQwNCAxMHMgc3RlcHMoMSkgaW5maW5pdGUsIHBhbiAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5sZWZ0YXJtNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNTlweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxNjVweDtcbiAgICBoZWlnaHQ6IDczcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI2NXB4IC0zNDFweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA5JSAzNSU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIGFuaW1hdGlvbjogdHlwZUxlZnQgMC40cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5yaWdodGFybTQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTQ4cHg7XG4gICAgbGVmdDogMjMxcHg7XG4gICAgd2lkdGg6IDE1N3B4O1xuICAgIGhlaWdodDogOTFweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDQycHggLTMyM3B4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDkwJSAyNSU7XG4gICAgYW5pbWF0aW9uOiB0eXBlTGVmdCAwLjRzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmNoYWlyNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MzBweDtcbiAgICBsZWZ0OiA1NXB4O1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBoZWlnaHQ6IDM2NXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMnB4IC02OTdweDtcbiAgfVxuICBcbiAgLmxlZ3M0MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM3OHB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICB3aWR0aDogMzcwcHg7XG4gICAgaGVpZ2h0OiAyNDdweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzgxcHggLTQ0M3B4O1xuICB9XG4gIFxuICAubGVmdHNob2U0MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU5MXB4O1xuICAgIGxlZnQ6IDU0cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogOTJweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzE1cHggLTc0OXB4O1xuICB9XG4gIFxuICAucmlnaHRzaG9lNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1OTRweDtcbiAgICBsZWZ0OiAxODdweDtcbiAgICB3aWR0aDogMTM1cHg7XG4gICAgaGVpZ2h0OiA4MXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NTNweCAtNzQ5cHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMzUlIDEyJTtcbiAgICBhbmltYXRpb246IHRhcFJpZ2h0IDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmxhcHRvcDQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTg2cHg7XG4gICAgbGVmdDogOXB4O1xuICAgIHdpZHRoOiAzNjVweDtcbiAgICBoZWlnaHQ6IDIxNnB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0ycHggLTQ2NnB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIGFuaW1hdGlvbjogdGFwV29iYmxlIDAuNHMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHN3YXkge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig0ZGVnKTtcbiAgICB9XG4gICAgNDUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig0ZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNGRlZyk7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTRkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBoZWFkVGlsdCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00ZGVnKTtcbiAgICB9XG4gICAgMzUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNGRlZyk7XG4gICAgfVxuICAgIDM4JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMmRlZyk7XG4gICAgfVxuICAgIDQyJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMmRlZyk7XG4gICAgfVxuICAgIDQ1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTRkZWcpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICA4MiUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICA4NSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDRkZWcpO1xuICAgIH1cbiAgICA5MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDRkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB0eXBlTGVmdCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDdkZWcpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC02ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdHlwZVJpZ2h0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTZkZWcpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDdkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB0YXBXb2JibGUge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMC4yZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwLjJkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMC4yZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB0YXBSaWdodCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICA5MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC02ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgYmxpbms0MDQge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjJweCAtMzUwcHg7XG4gICAgfVxuICAgIDk0JSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYycHggLTM1MHB4O1xuICAgIH1cbiAgICA5OCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MnB4IC0zNjhweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYycHggLTM1MHB4O1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHBhbiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgIH1cbiAgICA0OSUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgfVxuICAgIDk5JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XG4gICAgfVxuICB9XG4gIC5ib2FyZCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDIwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgICBtYXJnaW46IC03NXB4IDAgMCAtMjUwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgZm9udDogNzVweC83NXB4IE1vbm90b24sIGN1cnNpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA4MHB4IHJlZCwgMCAwIDMwcHggRmlyZUJyaWNrLCAwIDAgNnB4IERhcmtSZWQ7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICBcbiAgICAjZXJyb3Ige1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDgwcHggI2ZmZmZmZiwgMCAwIDMwcHggIzAwODAwMCwgMCAwIDZweCAjMDAwMGZmO1xuICAgIH1cbiAgICAiXX0= */");

/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/shared/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/shared/shared/shared.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/shared/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../not-found/not-found.component */ "./src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', pathMatch: 'full', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/utility/progress/progress.component.css":
/*!*********************************************************!*\
  !*** ./src/app/utility/progress/progress.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".percentage {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    font-weight: bold;\n}\n\n.message {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0eS9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdXRpbGl0eS9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcmNlbnRhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/utility/progress/progress.component.ts":
/*!********************************************************!*\
  !*** ./src/app/utility/progress/progress.component.ts ***!
  \********************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ProgressComponent = class ProgressComponent {
    constructor(progressService, quizService, toastr) {
        this.progressService = progressService;
        this.quizService = quizService;
        this.toastr = toastr;
        this.percentage = 0;
        this.message = 'please start the quiz.';
    }
    ngOnInit() {
        this.progressSubscription = this.progressService.isProgressing.subscribe(result => {
            this.progress = result;
            this.percentage = (this.progress.stepNumber / this.progress.totalSteps) * 100;
            this.message = this.progress.stepNumber != this.progress.totalSteps ? `you answer:${this.progress.stepNumber} of ${this.progress.totalSteps} questions` : 'you finished the quiz.';
        });
    }
    ngOnDestroy() {
        this.progressSubscription.unsubscribe();
    }
};
ProgressComponent.ctorParameters = () => [
    { type: src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_2__["ProgressService"] },
    { type: src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utility/progress/progress.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress.component.css */ "./src/app/utility/progress/progress.component.css")).default]
    })
], ProgressComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .wrapper {\n    text-align: center;\n    padding: 100px;\n    display: flex;\n    justify-content: center;\n} */\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n   \n}\n\n.center {\n    margin: 40px auto;\n}\n\nbody {\n    \n    background-size: cover;\n    font: 14px/20px \"Lato\", Arial, sans-serif;\n    color: #9E9E9E;\n    background-image: url('new.gi.gif');\n   \n}\n\n.clash-card__unit-stats--archer {\n    background: #EE5487;\n}\n\n.clash-card__unit-stats--archer .one-third {\n    border-right: 1px solid #D04976;\n}\n\n.clash-card__unit-stats--wizard {\n    background: #4FACFF;\n}\n\n.clash-card__unit-stats--wizard .one-third {\n    border-right: 1px solid #309eff;\n}\n\n.slide-container {\n    margin: auto;\n    text-align: center;\n}\n\n.wrapper {\n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n\n.wrapper:focus {\n    outline: 0;\n}\n\n.clash-card {\n    background: white;\n    width: 62%;\n    display: inline-block;\n    margin: auto;\n    border-radius: 19px;\n    position: relative;\n    text-align: center;\n    box-shadow: -1px 15px 30px -12px black;\n    z-index: 9999;\n}\n\n.clash-card__image {\n    position: relative;\n    margin-bottom: 35px;\n    border-top-left-radius: 14px;\n    border-top-right-radius: 14px;\n}\n\n.clash-card__image--barbarian img {\n    width: 400px;\n    position: absolute;\n    top: -85px;\n    left: 25px;\n}\n\n.clash-card__level {\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 700;\n    margin-bottom: 3px;\n}\n\n.clash-card__level--barbarian {\n    color: #4FACFF;\n}\n\n.clash-card__unit-name {\n    font-size: 26px;\n    color: black;\n    font-weight: 900;\n    margin-bottom: 5px;\n}\n\n.clash-card__unit-description {\n    padding: 20px;\n    margin-bottom: 10px;\n}\n\n.clash-card__unit-stats--barbarian {\n    background: #EC9B3B;\n}\n\n.clash-card__unit-stats--barbarian .one-third {\n    border-right: 1px solid #BD7C2F;\n}\n\n.clash-card__unit-stats {\n    color: white;\n    font-weight: 700;\n    border-bottom-left-radius: 14px;\n    border-bottom-right-radius: 14px;\n}\n\n.clash-card__unit-stats .one-third {\n    width: 33%;\n    float: left;\n    padding: 20px 15px;\n}\n\n.clash-card__unit-stats sup {\n    position: absolute;\n    bottom: 4px;\n    font-size: 45%;\n    margin-left: 2px;\n}\n\n.clash-card__unit-stats .stat {\n    position: relative;\n    font-size: 24px;\n    margin-bottom: 10px;\n}\n\n.clash-card__unit-stats .stat-value {\n    text-transform: uppercase;\n    font-weight: 400;\n    font-size: 12px;\n}\n\n.clash-card__unit-stats .no-border {\n    border-right: none;\n}\n\n.clearfix:after {\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \" \";\n    clear: both;\n    height: 0;\n}\n\n.slick-prev {\n    left: 100px;\n    z-index: 999;\n}\n\n.slick-next {\n    right: 100px;\n    z-index: 999;\n}\n\n.card-img {\n    height: 120px !important;\n    top: -75px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBRUg7OztJQUdJLHNCQUFzQjs7QUFFMUI7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxjQUFjO0lBQ2QsbUNBQWtEOztBQUV0RDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLndyYXBwZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSAqL1xuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgXG59XG5cblxuLmNlbnRlciB7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XG59XG5cbmJvZHkge1xuICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZm9udDogMTRweC8yMHB4IFwiTGF0b1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzlFOUU5RTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9uZXcuZ2kuZ2lmKTtcbiAgIFxufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tYXJjaGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUU1NDg3O1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tYXJjaGVyIC5vbmUtdGhpcmQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEMDQ5NzY7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS13aXphcmQge1xuICAgIGJhY2tncm91bmQ6ICM0RkFDRkY7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS13aXphcmQgLm9uZS10aGlyZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMwOWVmZjtcbn1cblxuLnNsaWRlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndyYXBwZXIge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4ud3JhcHBlcjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLmNsYXNoLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiA2MiU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogLTFweCAxNXB4IDMwcHggLTEycHggYmxhY2s7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuLmNsYXNoLWNhcmRfX2ltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNHB4O1xufVxuXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWJhcmJhcmlhbiBpbWcge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtODVweDtcbiAgICBsZWZ0OiAyNXB4O1xufVxuXG4uY2xhc2gtY2FyZF9fbGV2ZWwge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uY2xhc2gtY2FyZF9fbGV2ZWwtLWJhcmJhcmlhbiB7XG4gICAgY29sb3I6ICM0RkFDRkY7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1iYXJiYXJpYW4ge1xuICAgIGJhY2tncm91bmQ6ICNFQzlCM0I7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1iYXJiYXJpYW4gLm9uZS10aGlyZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0JEN0MyRjtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE0cHg7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzIC5vbmUtdGhpcmQge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyBzdXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDRweDtcbiAgICBmb250LXNpemU6IDQ1JTtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyAuc3RhdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyAuc3RhdC12YWx1ZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLm5vLWJvcmRlciB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDA7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpY2stcHJldiB7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uc2xpY2stbmV4dCB7XG4gICAgcmlnaHQ6IDEwMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmNhcmQtaW1nIHtcbiAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAtNzVweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    // isShowingOptions: boolean = false;
    // selected: string = '';
    constructor() {
    }
    ngOnInit() {
    }
    showOptions() {
        // this.isShowingOptions = true;
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
    })
], WelcomeComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAH6iuMb39IwCvrNZsp001C-zW8zRcu34k",
        authDomain: "quizz-f7ad8.firebaseapp.com",
        databaseURL: "https://quizz-f7ad8-default-rtdb.firebaseio.com",
        projectId: "quizz-f7ad8",
        storageBucket: "quizz-f7ad8.appspot.com",
        messagingSenderId: "355663557268",
        appId: "1:355663557268:web:ee04cf540e4accae383a81",
        measurementId: "G-PNSN8QBGBE"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\quiz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map