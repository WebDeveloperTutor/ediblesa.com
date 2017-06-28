/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* global $ */\n\nfunction getRandomNumber(min, max) {\n    if (min >= 0 && max > min) {\n        return Math.floor(Math.random() * (max - min) + min);\n    }\n    return Math.floor(Math.random() * 1000000);\n}\n\n// jQuery Cheat Sheet: http://bit.ly/2dq090t\n$(\"h1, h3, p\").css(\"color\", \"#F8F8F8\");\n\nvar $h3 = $(\"h3\");\n$h3.click(function () {\n    $(\"#description\").fadeToggle(\"slow\");\n});\n\n$(\"#button1\").click(function () {\n    var randomNumber = getRandomNumber();\n    $(\"#output\").show().text(randomNumber);\n});\n\n$(\"#button2\").click(function () {\n    // see: https://mzl.la/1uDCHOb\n    var randomNumber = getRandomNumber(1, 21); // whole number between 0 and 19\n    $(\"#output\").show().text(randomNumber);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/YzIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogZ2xvYmFsICQgKi9cblxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gICAgaWYgKG1pbiA+PSAwICYmIG1heCA+IG1pbikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG59XG5cbi8vIGpRdWVyeSBDaGVhdCBTaGVldDogaHR0cDovL2JpdC5seS8yZHEwOTB0XG4kKFwiaDEsIGgzLCBwXCIpLmNzcyhcImNvbG9yXCIsIFwiI0Y4RjhGOFwiKTtcblxudmFyICRoMyA9ICQoXCJoM1wiKTtcbiRoMy5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNkZXNjcmlwdGlvblwiKS5mYWRlVG9nZ2xlKFwic2xvd1wiKTtcbn0pO1xuXG4kKFwiI2J1dHRvbjFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciByYW5kb21OdW1iZXIgPSBnZXRSYW5kb21OdW1iZXIoKTtcbiAgICAkKFwiI291dHB1dFwiKS5zaG93KCkudGV4dChyYW5kb21OdW1iZXIpO1xufSk7XG5cbiQoXCIjYnV0dG9uMlwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgLy8gc2VlOiBodHRwczovL216bC5sYS8xdURDSE9iXG4gICAgdmFyIHJhbmRvbU51bWJlciA9IGdldFJhbmRvbU51bWJlcigxLCAyMSk7IC8vIHdob2xlIG51bWJlciBiZXR3ZWVuIDAgYW5kIDE5XG4gICAgJChcIiNvdXRwdXRcIikuc2hvdygpLnRleHQocmFuZG9tTnVtYmVyKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);