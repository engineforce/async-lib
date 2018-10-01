module.exports =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/*! exports used: curry */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 1 */
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pli/my/git/engineforce/libs/packages/async-lib/index.js */2);


/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./index.js + 4 modules ***!
  \******************************/
/*! exports provided: asyncReduce, asyncMap, asyncMapFb, delay */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with external "ramda" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/asyncReduce.js
async function asyncReduce(collection, callback, accumulator) {
  let result = accumulator;

  if (collection) {
    for (let i = 0; i < collection.length; ++i) {
      result = await callback(result, collection[i], i, collection);
    }
  }

  return result;
}
// CONCATENATED MODULE: ./src/asyncMap.js
async function asyncMap(collection, iteratee) {
  let outCollection = collection.slice();

  for (let i = 0; i < collection.length; ++i) {
    outCollection[i] = await iteratee(collection[i], i, collection);
  }

  return outCollection;
}
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/asyncMapFp.js



async function _asyncMapFb(iteratee, collection) {
  return asyncMap(collection, iteratee);
}

const asyncMapFb = Object(external_ramda_["curry"])(_asyncMapFb);
// CONCATENATED MODULE: ./src/delay.js
async function delay(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}
// CONCATENATED MODULE: ./index.js
/* concated harmony reexport asyncReduce */__webpack_require__.d(__webpack_exports__, "asyncReduce", function() { return asyncReduce; });
/* concated harmony reexport asyncMap */__webpack_require__.d(__webpack_exports__, "asyncMap", function() { return asyncMap; });
/* concated harmony reexport asyncMapFb */__webpack_require__.d(__webpack_exports__, "asyncMapFb", function() { return asyncMapFb; });
/* concated harmony reexport delay */__webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });





/***/ })
/******/ ]);