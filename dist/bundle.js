/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$.fn.extend({

  paralax: function paralax() {
    return this.each(function () {
      //bloco 
      var $this = $(this);
      $this.addClass('paralax-header');

      var scrollPos = $(window).scrollTop();
      var titulo = $this.children('h1');
      var img = $this.attr("data-imagem");
      var tamanhoHeader = parseInt($this.attr("data-tamanho"));

      $this.css("background-image", 'url(' + img + ')');

      if (scrollPos <= tamanhoHeader) {
        titulo.css("transform", 'translateY(' + -scrollPos / 3 + 'px' + ')');
        titulo.css("opacity", 1 - scrollPos / tamanhoHeader);
        //$this.css("transform", 'translateY(' + (-scrollPos/12) +'px' + ')');
      }
    });
  }

});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_style_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sass_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_funcoesJQ_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_funcoesJQ_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_funcoesJQ_js__);
//importacao de estilos


//importacao de scripts


//implementacao de Jquery

$(document).ready(function () {

    //carrossel da pagina home
    $('.slider').slider({
        height: 600,
        interval: 4000
    });

    //Carregar header
    $('.paralax-header').paralax();

    //redimensionar tela mudar tamanho dos icones alteralnd as classes
    $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 600) {
            $(".mdi").removeClass("mdi-48px").addClass("mdi-36px");
        } else {
            $(".mdi").removeClass("mdi-36px").addClass("mdi-48px");
        }
    });

    //Eventos de Scroll Nav e Header
    $(window).on("scroll", function () {
        $('.paralax-header').paralax();

        if ($(window).scrollTop() >= 600) {
            $(".navegacao").addClass("scroll");
        } else {
            $(".navegacao").removeClass("scroll");
        }
    });

    //Eventos de clique.
    var $hamburger = $(".hamburger");
    var $nav = $(".navegacao");
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
        //$nav.toggleClass("open");
    });
});

/***/ })
/******/ ]);