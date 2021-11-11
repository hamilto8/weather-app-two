/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/convertCtoF.js":
/*!****************************!*\
  !*** ./src/convertCtoF.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CorFspan = document.querySelector('.CorF');\r\nconst tempNum = document.querySelector('.tempDegrees');\r\n\r\nfunction convertCtoF(){\r\n    if(CorFspan.innerText === 'F'){\r\n        const celsiusDegrees = ((parseFloat(tempNum.innerText) - 32) * 5/9).toFixed(1);\r\n        tempNum.innerText = celsiusDegrees;\r\n        CorFspan.innerText = 'C';\r\n    } else {\r\n        const fahrenheitDegrees = (parseFloat(tempNum.innerText) * 9/5 + 32).toFixed(1)\r\n        tempNum.innerText = fahrenheitDegrees;\r\n        CorFspan.innerText = 'F';\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertCtoF);\n\n//# sourceURL=webpack://weather-app-again/./src/convertCtoF.js?");

/***/ }),

/***/ "./src/darkSkyAPIKey.js":
/*!******************************!*\
  !*** ./src/darkSkyAPIKey.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst darkSkyAPIKey = '5755041b3ff021ba7112472fc7d13737';\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (darkSkyAPIKey);\n\n//# sourceURL=webpack://weather-app-again/./src/darkSkyAPIKey.js?");

/***/ }),

/***/ "./src/getLatLongByCityName.js":
/*!*************************************!*\
  !*** ./src/getLatLongByCityName.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLatLong\": () => (/* binding */ getLatLong),\n/* harmony export */   \"latitude\": () => (/* binding */ latitude),\n/* harmony export */   \"longitude\": () => (/* binding */ longitude)\n/* harmony export */ });\n/* harmony import */ var _openWeatherAPIKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openWeatherAPIKey */ \"./src/openWeatherAPIKey.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n\n\n\n\nlet latitude;\nlet longitude;\n\nlet latLong = {};\nfunction getLatLong(){\n    const openWeatherAPICall = `http://api.openweathermap.org/geo/1.0/direct?q=${_script__WEBPACK_IMPORTED_MODULE_1__.cityName}&limit=5&appid=${_openWeatherAPIKey__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`;\n    async function getData(){\n        const response = await fetch(openWeatherAPICall);\n        const data = await response.json();\n        latLong.lat = data[0].lat;\n        latitude = latLong.lat;\n        latLong.lon = data[0].lon;\n        longitude = latLong.lon;\n       (0,_getWeather__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(latitude, longitude)\n    }\n    getData()\n}\n\n\n\n//# sourceURL=webpack://weather-app-again/./src/getLatLongByCityName.js?");

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _darkSkyAPIKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./darkSkyAPIKey */ \"./src/darkSkyAPIKey.js\");\n\r\n\r\nlet corsAnywhere = `https://cors-anywhere.herokuapp.com/`;\r\n\r\nconst weatherLocationDiv = document.querySelector('.weather-location');\r\nconst weatherDescriptionDiv = document.querySelector('.weather-description');\r\nconst tempDegrees = document.querySelector('.tempDegrees');\r\n\r\nconst icon = new Skycons( {color: '#222'});\r\nicon.set('icon', 'clear-day');\r\nicon.play();\r\n\r\nfunction getWeather(lat, lon){\r\n    let apiKey = `https://api.darksky.net/forecast/${_darkSkyAPIKey__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/${lat},${lon}`;\r\n    async function getDarkWeatherData(){\r\n        const response = await fetch(corsAnywhere+apiKey);\r\n        const darkWeatherData = await response.json();\r\n        weatherLocationDiv.innerText = darkWeatherData.timezone;\r\n        weatherDescriptionDiv.innerText = darkWeatherData.currently.summary;\r\n        tempDegrees.innerText = darkWeatherData.currently.apparentTemperature;\r\n        icon.set('icon', darkWeatherData.currently.icon);\r\n        icon.play();\r\n    }\r\n    getDarkWeatherData();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n//# sourceURL=webpack://weather-app-again/./src/getWeather.js?");

/***/ }),

/***/ "./src/openWeatherAPIKey.js":
/*!**********************************!*\
  !*** ./src/openWeatherAPIKey.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet openWeatherAPIKey = '3f06e2b0078f1ce055f5891af19c4e57';\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openWeatherAPIKey);\n\n//# sourceURL=webpack://weather-app-again/./src/openWeatherAPIKey.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cityName\": () => (/* binding */ cityName)\n/* harmony export */ });\n/* harmony import */ var _getLatLongByCityName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLatLongByCityName */ \"./src/getLatLongByCityName.js\");\n/* harmony import */ var _convertCtoF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convertCtoF */ \"./src/convertCtoF.js\");\n\n\n\nconst convertTempButton = document.querySelector('.convertTemp');\nconst getLocationInput = document.querySelector('#location-input');\nlet cityName = '';\n\nconvertTempButton.addEventListener('click', _convertCtoF__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\ngetLocationInput.addEventListener('keydown', (e)=>{\n    if(e.key === 'Enter'){\n        cityName = getLocationInput.value;\n        getLocationInput.value = '';\n        (0,_getLatLongByCityName__WEBPACK_IMPORTED_MODULE_0__.getLatLong)(cityName);\n    }\n});\n\n\n\n//# sourceURL=webpack://weather-app-again/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;