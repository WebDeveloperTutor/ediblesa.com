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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.HelloMessage = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lib = __webpack_require__(2);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/* global React */\n\nvar _React = React,\n    Component = _React.Component;\n\nvar HelloMessage = exports.HelloMessage = function (_Component) {\n    _inherits(HelloMessage, _Component);\n\n    function HelloMessage() {\n        _classCallCheck(this, HelloMessage);\n\n        return _possibleConstructorReturn(this, (HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).apply(this, arguments));\n    }\n\n    _createClass(HelloMessage, [{\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\n                \"div\",\n                null,\n                _lib.hello,\n                _lib.goodbye\n            );\n        }\n    }]);\n\n    return HelloMessage;\n}(Component);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxsb01lc3NhZ2UuanM/N2ZlYSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkhlbGxvTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7O0FBSEE7O2FBRXNCQSxLO0lBQWRDLFMsVUFBQUEsUzs7SUFHS0MsWSxXQUFBQSxZOzs7Ozs7Ozs7OztpQ0FDQTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBTUg7Ozs7RUFSNkJELFMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBSZWFjdCAqL1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3RcbmltcG9ydCB7IGhlbGxvLCBnb29kYnllIH0gZnJvbSBcIi4uL2xpYlwiXG5cbmV4cG9ydCBjbGFzcyBIZWxsb01lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2hlbGxvfVxuICAgICAgICAgICAgICAgIHtnb29kYnllfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVsbG9NZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _HelloMessage = __webpack_require__(0);\n\n/* global ReactDOM */\n\nvar _ReactDOM = ReactDOM,\n    render = _ReactDOM.render;\n\n\nrender(React.createElement(_HelloMessage.HelloMessage, null), document.getElementById(\"react-container\"));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUdBOztBQUhBOztnQkFFbUJBLFE7SUFBWEMsTSxhQUFBQSxNOzs7QUFHUkEsT0FDSSxxREFESixFQUVJQyxTQUFTQyxjQUFULENBQXdCLGlCQUF4QixDQUZKIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgUmVhY3RET00gKi9cblxuY29uc3QgeyByZW5kZXIgfSA9IFJlYWN0RE9NXG5pbXBvcnQgeyBIZWxsb01lc3NhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hlbGxvTWVzc2FnZVwiXG5cbnJlbmRlciAoXG4gICAgPEhlbGxvTWVzc2FnZSAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWN0LWNvbnRhaW5lclwiKVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.goodbye = exports.hello = undefined;\n\nvar _titles = __webpack_require__(3);\n\nvar _titles2 = _interopRequireDefault(_titles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar hello = exports.hello = React.createElement(\n    \"h1\",\n    { id: \"title\", className: \"header\", style: { backgroundColor: \"purple\", color: \"yellow\" } },\n    _titles2.default.hello\n);\n\nvar goodbye = exports.goodbye = React.createElement(\n    \"h1\",\n    { id: \"title\", className: \"header\", style: { backgroundColor: \"yellow\", color: \"purple\" } },\n    _titles2.default.goodbye\n);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliLmpzPzA1YWIiXSwibmFtZXMiOlsiaGVsbG8iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImdvb2RieWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsd0JBQ1Q7QUFBQTtBQUFBLE1BQUksSUFBRyxPQUFQLEVBQWUsV0FBVSxRQUF6QixFQUFrQyxPQUFPLEVBQUNDLGlCQUFpQixRQUFsQixFQUE0QkMsT0FBTyxRQUFuQyxFQUF6QztBQUNLLHFCQUFLRjtBQURWLENBREc7O0FBTUEsSUFBTUcsNEJBQ1Q7QUFBQTtBQUFBLE1BQUksSUFBRyxPQUFQLEVBQWUsV0FBVSxRQUF6QixFQUFrQyxPQUFPLEVBQUNGLGlCQUFpQixRQUFsQixFQUE0QkMsT0FBTyxRQUFuQyxFQUF6QztBQUNLLHFCQUFLQztBQURWLENBREciLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZXh0IGZyb20gXCIuL2RhdGEvdGl0bGVzLmpzb25cIlxuXG5leHBvcnQgY29uc3QgaGVsbG8gPSAoXG4gICAgPGgxIGlkPVwidGl0bGVcIiBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJwdXJwbGVcIiwgY29sb3I6IFwieWVsbG93XCJ9fT5cbiAgICAgICAge3RleHQuaGVsbG99XG4gICAgPC9oMT5cbilcblxuZXhwb3J0IGNvbnN0IGdvb2RieWUgPSAoXG4gICAgPGgxIGlkPVwidGl0bGVcIiBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIiwgY29sb3I6IFwicHVycGxlXCJ9fT5cbiAgICAgICAge3RleHQuZ29vZGJ5ZX1cbiAgICA8L2gxPlxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"hello\": \"Bonjour!\",\n\t\"goodbye\": \"Au Revoir\"\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90aXRsZXMuanNvbj81MmJlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWxsb1wiOiBcIkJvbmpvdXIhXCIsXG5cdFwiZ29vZGJ5ZVwiOiBcIkF1IFJldm9pclwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RhdGEvdGl0bGVzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);