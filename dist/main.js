/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --green: rgb(40, 95, 67);\n    --background: rgb(255, 252, 247);\n    --button-hover: rgb(30, 73, 51);\n    --form-margin: 10px;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    list-style-type: none;\n    padding-left: 0;\n    /* background-color: var(--background); */\n}\n\nbody {\n    background-color: var(--background);\n}\n\n.tabs-list {\n    display: flex;\n    width: auto;\n    justify-content: center;\n    gap: 10px;\n}\n\n.tabs-list > * {\n    border: 2px solid var(--green);\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.tabs-list > *:hover {\n    cursor: pointer;\n}\n\n.clicked-tab {\n    color: white;\n    background-color: var(--green);\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    padding-top: 5px;\n    background-color: var(--green);\n    color: white;\n    text-align: center;\n}\n\n.footer img {\n    height: 24px;\n    width: auto;\n}\n\n.footer img:hover {\n    transition: all .2s ease-in-out;\n    transform: scale(1.2);\n}\n\n.menu-div {\n    display: grid;\n    grid-template-columns: 0.6fr 2fr;\n    grid-template-rows: 1fr;\n}\n\n.sidebar {\n    grid-area: 1 / 1 / 1 / 1;\n    background-color: var(--green);\n    width: 100%;\n}\n\n.sidebar li {\n    background-color: var(--green);\n    color: white;\n    padding: 20px;\n    font-size: 16px;\n    text-transform: capitalize;\n    cursor: pointer;\n    /* transition: background 250ms ease-in-out, transform 150ms ease; */\n}\n\n.sidebar li:hover {\n    background-color: var(--button-hover);\n}\n\n/* Change the div to be a flex item with flex-direction: column for when the screen is narrow */\n.menu-list {\n    grid-area: 1 / 2 / 1 / 2;\n}\n\n.menu-list-item-div {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 0.5fr 1fr 0.5fr;\n    border: 1px solid black;\n    padding: 5px;\n}\n\n.menu-list-item-name {\n    grid-area: 1 / 2 / 1 / 2;\n}\n\n.item-name {\n    color: var(--green);\n    font-family: 'Tahoma', sans-serif;\n    /* font-weight: bolder; */\n    text-transform: uppercase;\n}\n\n.menu-list-item-desc {\n    grid-area: 2 / 2 / 2 / 2;\n}\n\n.menu-list-item-price {\n    grid-area: 3 / 2 / 3 / 2;\n    color: var(--green);\n    font-weight: bold;\n}\n\n.menu-list-item-img {\n    width: 260px;\n    height: 150px;\n    object-fit: cover;\n    grid-area: 1 / 1 / 4 / 1;\n    padding-right: 10px;\n}\n\n.location-div {\n    display: grid;\n    width: 100%;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-auto-rows: 1fr;\n    align-items: center;\n    gap: 15px;\n}\n\n.location-div div {\n    border: 1px solid #ccc;\n    padding: 10px 20px;\n}  \n\n.location-div div img {\n    height: auto;\n    width: 100%;\n}\n\n.contact-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.form-div {\n    display: flex;\n    flex-direction: column;\n    min-width: 400px;\n    max-width: 400px;\n    border: 1px solid black;\n}\n\n.form-div > h1 {\n    color: white;\n    background-color: var(--green);\n    text-transform: uppercase;\n    text-align: center;\n    padding: 10px;\n}\n\n.form-div > label {\n    font-weight: bold;\n    margin-left: var(--form-margin);\n}\n\n.form-div > select, .form-div > input, #comment {\n    margin: var(--form-margin);\n    margin-bottom: 15px;\n    background-color: white;\n    border: 1px solid black;\n    padding: 5px;\n    border-radius: 3px;\n}\n\n#comment {\n    resize: vertical;\n}\n\n.form-div > button {\n    color: white;\n    background-color: var(--green);\n    display: inline-block;\n    border: none;\n    padding: 1rem 2rem;\n    margin: var(--form-margin);\n    text-decoration: none;\n    font-family: sans-serif;\n    font-size: 1rem;\n    line-height: 1;\n    cursor: pointer;\n    text-align: center;\n    transition: background 250ms ease-in-out, transform 150ms ease;\n}\n\n.form-div > button:hover,\n.form-div > button:focus {\n    background-color: var(--button-hover);\n}\n\n.form-div > button:focus,\n.active {\n    outline: 1px solid white;\n    outline-offset: -4px;\n}\n\n.form-div > button:active {\n    transform: scale(0.99);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,gCAAgC;IAChC,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;IACzC,qBAAqB;IACrB,eAAe;IACf,yCAAyC;AAC7C;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,eAAe;IACf,OAAO;IACP,SAAS;IACT,WAAW;IACX,gBAAgB;IAChB,8BAA8B;IAC9B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,+BAA+B;IAC/B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;IACxB,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,eAAe;IACf,0BAA0B;IAC1B,eAAe;IACf,oEAAoE;AACxE;;AAEA;IACI,qCAAqC;AACzC;;AAEA,+FAA+F;AAC/F;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mCAAmC;IACnC,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mBAAmB;IACnB,iCAAiC;IACjC,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,4DAA4D;IAC5D,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,0BAA0B;IAC1B,qBAAqB;IACrB,uBAAuB;IACvB,eAAe;IACf,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,8DAA8D;AAClE;;AAEA;;IAEI,qCAAqC;AACzC;;AAEA;;IAEI,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[":root {\n    --green: rgb(40, 95, 67);\n    --background: rgb(255, 252, 247);\n    --button-hover: rgb(30, 73, 51);\n    --form-margin: 10px;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    list-style-type: none;\n    padding-left: 0;\n    /* background-color: var(--background); */\n}\n\nbody {\n    background-color: var(--background);\n}\n\n.tabs-list {\n    display: flex;\n    width: auto;\n    justify-content: center;\n    gap: 10px;\n}\n\n.tabs-list > * {\n    border: 2px solid var(--green);\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.tabs-list > *:hover {\n    cursor: pointer;\n}\n\n.clicked-tab {\n    color: white;\n    background-color: var(--green);\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    padding-top: 5px;\n    background-color: var(--green);\n    color: white;\n    text-align: center;\n}\n\n.footer img {\n    height: 24px;\n    width: auto;\n}\n\n.footer img:hover {\n    transition: all .2s ease-in-out;\n    transform: scale(1.2);\n}\n\n.menu-div {\n    display: grid;\n    grid-template-columns: 0.6fr 2fr;\n    grid-template-rows: 1fr;\n}\n\n.sidebar {\n    grid-area: 1 / 1 / 1 / 1;\n    background-color: var(--green);\n    width: 100%;\n}\n\n.sidebar li {\n    background-color: var(--green);\n    color: white;\n    padding: 20px;\n    font-size: 16px;\n    text-transform: capitalize;\n    cursor: pointer;\n    /* transition: background 250ms ease-in-out, transform 150ms ease; */\n}\n\n.sidebar li:hover {\n    background-color: var(--button-hover);\n}\n\n/* Change the div to be a flex item with flex-direction: column for when the screen is narrow */\n.menu-list {\n    grid-area: 1 / 2 / 1 / 2;\n}\n\n.menu-list-item-div {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 0.5fr 1fr 0.5fr;\n    border: 1px solid black;\n    padding: 5px;\n}\n\n.menu-list-item-name {\n    grid-area: 1 / 2 / 1 / 2;\n}\n\n.item-name {\n    color: var(--green);\n    font-family: 'Tahoma', sans-serif;\n    /* font-weight: bolder; */\n    text-transform: uppercase;\n}\n\n.menu-list-item-desc {\n    grid-area: 2 / 2 / 2 / 2;\n}\n\n.menu-list-item-price {\n    grid-area: 3 / 2 / 3 / 2;\n    color: var(--green);\n    font-weight: bold;\n}\n\n.menu-list-item-img {\n    width: 260px;\n    height: 150px;\n    object-fit: cover;\n    grid-area: 1 / 1 / 4 / 1;\n    padding-right: 10px;\n}\n\n.location-div {\n    display: grid;\n    width: 100%;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-auto-rows: 1fr;\n    align-items: center;\n    gap: 15px;\n}\n\n.location-div div {\n    border: 1px solid #ccc;\n    padding: 10px 20px;\n}  \n\n.location-div div img {\n    height: auto;\n    width: 100%;\n}\n\n.contact-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.form-div {\n    display: flex;\n    flex-direction: column;\n    min-width: 400px;\n    max-width: 400px;\n    border: 1px solid black;\n}\n\n.form-div > h1 {\n    color: white;\n    background-color: var(--green);\n    text-transform: uppercase;\n    text-align: center;\n    padding: 10px;\n}\n\n.form-div > label {\n    font-weight: bold;\n    margin-left: var(--form-margin);\n}\n\n.form-div > select, .form-div > input, #comment {\n    margin: var(--form-margin);\n    margin-bottom: 15px;\n    background-color: white;\n    border: 1px solid black;\n    padding: 5px;\n    border-radius: 3px;\n}\n\n#comment {\n    resize: vertical;\n}\n\n.form-div > button {\n    color: white;\n    background-color: var(--green);\n    display: inline-block;\n    border: none;\n    padding: 1rem 2rem;\n    margin: var(--form-margin);\n    text-decoration: none;\n    font-family: sans-serif;\n    font-size: 1rem;\n    line-height: 1;\n    cursor: pointer;\n    text-align: center;\n    transition: background 250ms ease-in-out, transform 150ms ease;\n}\n\n.form-div > button:hover,\n.form-div > button:focus {\n    background-color: var(--button-hover);\n}\n\n.form-div > button:focus,\n.active {\n    outline: 1px solid white;\n    outline-offset: -4px;\n}\n\n.form-div > button:active {\n    transform: scale(0.99);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactDiv": () => (/* binding */ contactDiv)
/* harmony export */ });
/* harmony import */ var _locations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations.js */ "./src/locations.js");
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */


const contactDiv = document.createElement('div');
contactDiv.classList.add('contact-div');
const contactMsg = document.createElement('p');
contactMsg.textContent = 'Our restaurants are open 365 days a year, serving continuously from 11:00 AM to late night. We\'re always fishing for feedback! Please reach out to us with any questions using the form below.  Thanks for stopping by!\r\n';

// For location, access the locArr object to get location names
const locNames = _locations_js__WEBPACK_IMPORTED_MODULE_0__.locArr.map((item) => item.name);

// Form
const formDiv = document.createElement('div');
formDiv.classList.add('form-div');
const formHeader = document.createElement('h1');
formHeader.textContent = 'Send us a message';
const contactForm = document.createElement('form');
contactForm.setAttribute('method', 'post');
contactForm.setAttribute('action', 'submit.php');

const locationLabel = document.createElement('label');
locationLabel.textContent = 'Location: *';
const locationSelect = document.createElement('select');
locationSelect.setAttribute('name', 'location');
locationSelect.setAttribute('id', 'location');
createOptionList(locNames);

const nameLabel = document.createElement('label');
nameLabel.setAttribute('for', 'name');
nameLabel.textContent = 'Name: *';
const contactName = document.createElement('input');
contactName.setAttribute('type', 'text');
contactName.setAttribute('id', 'name');
contactName.setAttribute('name', 'name');

const phoneLabel = document.createElement('label');
phoneLabel.setAttribute('for', 'phone');
phoneLabel.textContent = 'Phone Number:';
const contactPhone = document.createElement('input');
contactPhone.setAttribute('type', 'tel');
contactPhone.setAttribute('id', 'phone');
contactPhone.setAttribute('name', 'phone');

const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'Email Address: *';
const contactEmail = document.createElement('input');
contactEmail.setAttribute('type', 'email');
contactEmail.setAttribute('id', 'email');
contactEmail.setAttribute('name', 'email');

const commentLabel = document.createElement('label');
commentLabel.setAttribute('for', 'comment');
commentLabel.textContent = 'Comments: *';
const contactComment = document.createElement('textarea');
contactComment.setAttribute('id', 'comment');
contactComment.setAttribute('name', 'comment');
contactComment.setAttribute('rows', '6');

const submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
submitBtn.setAttribute('type', 'submit');

function createOptionList(arr) {
  const defaultOption = document.createElement('option');
  defaultOption.setAttribute('value', 'none');
  defaultOption.setAttribute('selected', true);
  defaultOption.setAttribute('disabled', true);
  locationSelect.append(defaultOption);
  for (let i = 0; i < arr.length; i++) {
    const selectOption = document.createElement('option');
    selectOption.setAttribute('value', arr[i].toLowerCase());
    selectOption.textContent = arr[i];
    locationSelect.append(selectOption);
  }
}

content.appendChild(contactDiv);
contactDiv.appendChild(contactMsg);
contactDiv.appendChild(formDiv);
formDiv.appendChild(formHeader);
formDiv.appendChild(contactForm);
formDiv.appendChild(locationLabel);
formDiv.appendChild(locationSelect);
formDiv.appendChild(nameLabel);
formDiv.appendChild(contactName);
formDiv.appendChild(phoneLabel);
formDiv.appendChild(contactPhone);
formDiv.appendChild(emailLabel);
formDiv.appendChild(contactEmail);
formDiv.appendChild(commentLabel);
formDiv.appendChild(contactComment);
formDiv.appendChild(submitBtn);





/***/ }),

/***/ "./src/locations.js":
/*!**************************!*\
  !*** ./src/locations.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLocationText": () => (/* binding */ addLocationText),
/* harmony export */   "createLocationListItem": () => (/* binding */ createLocationListItem),
/* harmony export */   "locArr": () => (/* binding */ locArr),
/* harmony export */   "locationDiv": () => (/* binding */ locationDiv)
/* harmony export */ });
/* harmony import */ var _images_coconut_grove_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/coconut-grove.png */ "./src/images/coconut-grove.png");
/* harmony import */ var _images_doral_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/doral.png */ "./src/images/doral.png");
/* harmony import */ var _images_kendall_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/kendall.png */ "./src/images/kendall.png");
/* harmony import */ var _images_pinecrest_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pinecrest.png */ "./src/images/pinecrest.png");
/* harmony import */ var _images_westchester_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/westchester.png */ "./src/images/westchester.png");
/* harmony import */ var _images_surfside_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/surfside.png */ "./src/images/surfside.png");
/* harmony import */ var _images_hialeah_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/hialeah.png */ "./src/images/hialeah.png");
/* harmony import */ var _images_north_miami_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/north-miami.png */ "./src/images/north-miami.png");
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */









function Location(name, address, city, phone, hours, img) {
  this.name = name;
  this.address = address;
  this.city = city;
  this.phone = phone;
  this.hours = hours;
  this.img = img;
};

const locArr = [];
function createLocation(name, address, city, phone, hours, img) {
  const location = new Location(name, address, city, phone, hours, img);
  locArr.push(location);
  return location;
}
const coconutGrove = createLocation('Coconut Grove', '2721 Bird Avenue', 'Miami, FL 33133', '(305) 446-1114', {open: '11 AM', close: '4:30 AM'}, _images_coconut_grove_png__WEBPACK_IMPORTED_MODULE_0__);
const doral = createLocation('Doral', '8695 NW 12th Street', 'Miami, FL 33126', '(786) 845-9366', {open: '11 AM', close: '1 AM'}, _images_doral_png__WEBPACK_IMPORTED_MODULE_1__);
const kendall = createLocation('Kendall', '12790 SW 88th Street', 'Miami, FL 33186', '(305) 380-0521', {open: '11 AM', close: '1 AM'}, _images_kendall_png__WEBPACK_IMPORTED_MODULE_2__);
const pinecrest = createLocation('Pinecrest', '11415 S Dixie Highway', 'Miami, FL 33156', '(305) 378-4000', {open: '11 AM', close: '1 AM'}, _images_pinecrest_png__WEBPACK_IMPORTED_MODULE_3__);
const westchester = createLocation('Westchester', '9857 SW 40th Street', 'Miami, FL 33165', '(305) 207-7427', {open: '11 AM', close: '1:30 AM'}, _images_westchester_png__WEBPACK_IMPORTED_MODULE_4__);
const surfside = createLocation('Surfside', '9516 Harding Avenue', 'Surfside, FL 33154', '(305) 867-0099', {open: '11 AM', close: '1 AM'}, _images_surfside_png__WEBPACK_IMPORTED_MODULE_5__);
const hialeah = createLocation('Hialeah', '1550 W 84th Street', 'Hialeah, FL 33014', '(305) 821-0993', {open: '11 AM', close: '2 AM'}, _images_hialeah_png__WEBPACK_IMPORTED_MODULE_6__);
const northMiami = createLocation('North Miami', '13205 Biscayne Boulevard', 'North Miami, FL 33181', '(305) 893-0506', {open: '11 AM', close: '1:30 AM'}, _images_north_miami_png__WEBPACK_IMPORTED_MODULE_7__);

locArr.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
console.log(locArr);

const locationDiv = document.createElement('div');
locationDiv.classList.add('location-div');
content.appendChild(locationDiv);

// Add get directions button with a link to the address below each location
function createLocationListItem() {
  const locationListItem = document.createElement('div');
  const locationListItemName = document.createElement('h3');
  locationListItemName.classList.add('item-name');
  const locationListItemAddress = document.createElement('p');
  const locationListItemCity = document.createElement('p');
  const locationListItemPhone = document.createElement('p');
  const locationListItemHours = document.createElement('p');
  const locationListItemImg = document.createElement('img');

  locationDiv.appendChild(locationListItem);
  locationListItem.appendChild(locationListItemName);
  locationListItem.appendChild(locationListItemAddress);
  locationListItem.appendChild(locationListItemCity);
  locationListItem.appendChild(locationListItemPhone);
  locationListItem.appendChild(locationListItemHours);
  locationListItem.appendChild(locationListItemImg);
  return [locationListItemName, locationListItemAddress, locationListItemCity, locationListItemPhone, locationListItemHours, locationListItemImg];
}

function addLocationText(arr) {
  const properties = [this.name, this.address, this.city, this.phone, this.hours, this.img];
  for (let i = 0; i < arr.length; i++) {
    if (properties[i] === this.hours) {
      arr[i].textContent = `Every Day: ${this.hours['open']} - ${this.hours['close']}`;
    } else if (properties[i] === this.img) {
      arr[i].src = properties[i];
    } else {
      arr[i].textContent = properties[i];
    }
  }
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenuText": () => (/* binding */ addMenuText),
/* harmony export */   "createMenuListItem": () => (/* binding */ createMenuListItem),
/* harmony export */   "createMenuSidebar": () => (/* binding */ createMenuSidebar),
/* harmony export */   "menuArr": () => (/* binding */ menuArr),
/* harmony export */   "menuDiv": () => (/* binding */ menuDiv)
/* harmony export */ });
/* harmony import */ var _images_rib_rolls_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/rib-rolls.webp */ "./src/images/rib-rolls.webp");
/* harmony import */ var _images_tumbleweed_onions_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/tumbleweed-onions.webp */ "./src/images/tumbleweed-onions.webp");
/* harmony import */ var _images_firecracker_shrimp_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/firecracker-shrimp.webp */ "./src/images/firecracker-shrimp.webp");
/* harmony import */ var _images_seafood_gumbo_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/seafood-gumbo.webp */ "./src/images/seafood-gumbo.webp");
/* harmony import */ var _images_clam_chowder_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/clam-chowder.webp */ "./src/images/clam-chowder.webp");
/* harmony import */ var _images_garlic_rolls_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/garlic-rolls.webp */ "./src/images/garlic-rolls.webp");
/* harmony import */ var _images_mozzarella_sticks_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/mozzarella-sticks.webp */ "./src/images/mozzarella-sticks.webp");
/* harmony import */ var _images_potato_skins_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/potato-skins.webp */ "./src/images/potato-skins.webp");
/* harmony import */ var _images_dolphin_fingers_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/dolphin-fingers.webp */ "./src/images/dolphin-fingers.webp");
/* harmony import */ var _images_five_wings_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/five-wings.jpeg */ "./src/images/five-wings.jpeg");
/* harmony import */ var _images_ten_wings_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/ten-wings.webp */ "./src/images/ten-wings.webp");
/* harmony import */ var _images_twenty_wings_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/twenty-wings.webp */ "./src/images/twenty-wings.webp");
/* harmony import */ var _images_fifty_wings_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/fifty-wings.jpeg */ "./src/images/fifty-wings.jpeg");
/* harmony import */ var _images_half_rack_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/half-rack.webp */ "./src/images/half-rack.webp");
/* harmony import */ var _images_full_rack_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/full-rack.webp */ "./src/images/full-rack.webp");
/* harmony import */ var _images_rib_wings_webp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/rib-wings.webp */ "./src/images/rib-wings.webp");
/* harmony import */ var _images_rib_stickers_webp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/rib-stickers.webp */ "./src/images/rib-stickers.webp");
/* harmony import */ var _images_rib_chicken_webp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/rib-chicken.webp */ "./src/images/rib-chicken.webp");
/* harmony import */ var _images_rib_shrimp_webp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/rib-shrimp.webp */ "./src/images/rib-shrimp.webp");
/* harmony import */ var _images_texas_burger_webp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/texas-burger.webp */ "./src/images/texas-burger.webp");
/* harmony import */ var _images_caribbean_burger_webp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/caribbean-burger.webp */ "./src/images/caribbean-burger.webp");
/* harmony import */ var _images_bahama_burger_webp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/bahama-burger.webp */ "./src/images/bahama-burger.webp");
/* harmony import */ var _images_big_daddy_burger_webp__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/big-daddy-burger.webp */ "./src/images/big-daddy-burger.webp");
/* harmony import */ var _images_flanigan_burger_webp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/flanigan-burger.webp */ "./src/images/flanigan-burger.webp");
/* harmony import */ var _images_cheese_steak_webp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/cheese-steak.webp */ "./src/images/cheese-steak.webp");
/* harmony import */ var _images_chicken_philly_webp__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/chicken-philly.webp */ "./src/images/chicken-philly.webp");
/* harmony import */ var _images_chipotle_chicken_sandwich_webp__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/chipotle-chicken-sandwich.webp */ "./src/images/chipotle-chicken-sandwich.webp");
/* harmony import */ var _images_teriyaki_chicken_sandwich_webp__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/teriyaki-chicken-sandwich.webp */ "./src/images/teriyaki-chicken-sandwich.webp");
/* harmony import */ var _images_dolphin_sandwich_webp__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/dolphin-sandwich.webp */ "./src/images/dolphin-sandwich.webp");
/* harmony import */ var _images_salmon_sandwich_webp__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./images/salmon-sandwich.webp */ "./src/images/salmon-sandwich.webp");
/* harmony import */ var _images_grilled_salmon_webp__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images/grilled-salmon.webp */ "./src/images/grilled-salmon.webp");
/* harmony import */ var _images_surf_n_turf_webp__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./images/surf-n-turf.webp */ "./src/images/surf-n-turf.webp");
/* harmony import */ var _images_tilapia_webp__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./images/tilapia.webp */ "./src/images/tilapia.webp");
/* harmony import */ var _images_fish_tacos_webp__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./images/fish-tacos.webp */ "./src/images/fish-tacos.webp");
/* harmony import */ var _images_tuna_filet_webp__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./images/tuna-filet.webp */ "./src/images/tuna-filet.webp");
/* harmony import */ var _images_baked_potato_webp__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./images/baked-potato.webp */ "./src/images/baked-potato.webp");
/* harmony import */ var _images_sweet_potato_webp__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./images/sweet-potato.webp */ "./src/images/sweet-potato.webp");
/* harmony import */ var _images_french_fries_webp__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./images/french-fries.webp */ "./src/images/french-fries.webp");
/* harmony import */ var _images_dirty_rice_webp__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./images/dirty-rice.webp */ "./src/images/dirty-rice.webp");
/* harmony import */ var _images_black_beans_webp__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./images/black-beans.webp */ "./src/images/black-beans.webp");
/* harmony import */ var _images_banzai_brownie_webp__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./images/banzai-brownie.webp */ "./src/images/banzai-brownie.webp");
/* harmony import */ var _images_key_lime_webp__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./images/key-lime.webp */ "./src/images/key-lime.webp");
/* harmony import */ var _images_chocolate_ecstacy_webp__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./images/chocolate-ecstacy.webp */ "./src/images/chocolate-ecstacy.webp");
/* harmony import */ var _images_dulce_leche_webp__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./images/dulce-leche.webp */ "./src/images/dulce-leche.webp");
/* harmony import */ var _images_flanigans_shenanigan_webp__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./images/flanigans-shenanigan.webp */ "./src/images/flanigans-shenanigan.webp");
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */














































function MenuItem(type, name, desc, price, img) {
  this.type = type;
  this.name = name;
  this.desc = desc;
  this.price = price;
  this.img = img;
};

const menuArr = [];
// The following will automatically add a new MenuItem to the menuArr array
function createMenuItem(type, name, desc, price, img) {
  const menuItem = new MenuItem(type, name, desc, price, img);
  menuArr.push(menuItem);
  return menuItem;
}

// STARTERS
const ribRolls = createMenuItem('starter', 'Joe\'s Rockin\' Rib Rolls', 'Homemade, deep-fried egg rolls stuffed with meat from our famous baby back ribs, pulled pork, cheddar cheese, onions, and Flanigan\'s BBQ sauce.', '11.99', _images_rib_rolls_webp__WEBPACK_IMPORTED_MODULE_0__);
const tumbleOnions = createMenuItem('starter', 'Tumbleweed Onions', 'Thinly sliced jumbo onions, lightly battered and fried, with a side of honey mustard.', '6.99', _images_tumbleweed_onions_webp__WEBPACK_IMPORTED_MODULE_1__);
const friedShrimp = createMenuItem('starter', 'Firecracker Shrimp', 'A dozen plump, deep-fried shrimp, tossed in a slightly spicy cream sauce over a bed of iceberg lettuce, topped with pico di gallo.', '11.99', _images_firecracker_shrimp_webp__WEBPACK_IMPORTED_MODULE_2__);
const seafoodGumbo = createMenuItem('starter', 'Seafood Gumbo', 'A tomato-based, zesty gumbo, chock full of shrimp, fish, veggies and rice. Like New Orleans best: a bit spicy, but not too hot to handle.', '6.99', _images_seafood_gumbo_webp__WEBPACK_IMPORTED_MODULE_3__);
const clamChowder = createMenuItem('starter', 'New England Clam Chowder', 'A tasty, smooth, white chowder, loaded with clams, celery, carrots and potatoes. A classic recipe that rivals any chowder from the New England coast.', '6.99', _images_clam_chowder_webp__WEBPACK_IMPORTED_MODULE_4__);
const garlicRolls = createMenuItem('starter', 'Garlic Rolls', 'Six cute little golf ball sized rolls, ideal for applying butter and garlic to your chin. While in the general proximity of your mouth, eating is also recommended.', '5.99', _images_garlic_rolls_webp__WEBPACK_IMPORTED_MODULE_5__);
const mozzSticks = createMenuItem('starter', 'Mozzarella Sticks', 'Str-r-r-r-etch your appetizer! Stringy, but delicious, mozzarella cheese, deep fried just right. Served with Marinara.', '7.99', _images_mozzarella_sticks_webp__WEBPACK_IMPORTED_MODULE_6__);
const potatoSkins = createMenuItem('starter', 'Potato Skins', 'The skin of Idaho potatoes, surgically removed and reconstructed with cheddar cheese and bacon bits, to produce melt in your mouth potato skins.', '6.99', _images_potato_skins_webp__WEBPACK_IMPORTED_MODULE_7__);
const dolphinFingers = createMenuItem('starter', 'Dolphin Fingers', 'A half-pound of dolphin strips, deep fried and served with your choice of cocktail or tartar sauce.', '14.77', _images_dolphin_fingers_webp__WEBPACK_IMPORTED_MODULE_8__);

// WINGS
const fiveWings = createMenuItem('wings', 'Five (5) Wings', 'Available in hot, medium, mild, and barbecue flavors.', '9.99', _images_five_wings_jpeg__WEBPACK_IMPORTED_MODULE_9__);
const tenWings = createMenuItem('wings', 'Ten (10) Wings', 'Available in hot, medium, mild, and barbecue flavors.', '13.99', _images_ten_wings_webp__WEBPACK_IMPORTED_MODULE_10__);
const twentyWings = createMenuItem('wings', 'Twenty (20) Wings', 'Available in hot, medium, mild, and barbecue flavors.', '20.99', _images_twenty_wings_webp__WEBPACK_IMPORTED_MODULE_11__);
const fiftyWings = createMenuItem('wings', 'Fifty (50) Wings', 'Available in hot, medium, mild, and barbecue flavors.', '39.99', _images_fifty_wings_jpeg__WEBPACK_IMPORTED_MODULE_12__);

// RIBS
const halfRack = createMenuItem('ribs', 'Half-Rack Baby Back Ribs', 'Half-rack of our tender, juicy, "meat-falls-off-the-bone" baby back ribs, drenched with our special barbecue sauce, and grilled to perfection.', '17.99', _images_half_rack_webp__WEBPACK_IMPORTED_MODULE_13__);
const fullRack = createMenuItem('ribs', 'Full-Rack Baby Back Ribs', 'Full-rack of our tender, juicy, "meat-falls-off-the-bone" baby back ribs, drenched with our special barbecue sauce, and grilled to perfection.', '22.99', _images_full_rack_webp__WEBPACK_IMPORTED_MODULE_14__);
const ribWings = createMenuItem('ribs', 'Half-Rack & Wings', 'Half-rack of our tender, juicy, "meat-falls-off-the-bone" baby back ribs, paired with a half dozen wings.', '21.49', _images_rib_wings_webp__WEBPACK_IMPORTED_MODULE_15__);
const ribSticker = createMenuItem('ribs', 'Half-Rack & Stickers', 'Half-rack of our tender, juicy, "meat-falls-off-the-bone" baby back ribs, paired with three chicken stickers.', '21.49', _images_rib_stickers_webp__WEBPACK_IMPORTED_MODULE_16__);
const ribChicken = createMenuItem('ribs', 'Half-Rack & BBQ Chicken', 'Half-rack of our tender, juicy, "meat-falls-off-the-bone" baby back ribs, paired with a half barbecued chicken.', '21.49', _images_rib_chicken_webp__WEBPACK_IMPORTED_MODULE_17__);
const ribShrimp = createMenuItem('ribs', 'Half-Rack & Shrimp', 'Half-rack of our tender, juicy, "meat-falls-off-the-bone" baby back ribs, paired with a half dozen fried shrimp.', '21.49', _images_rib_shrimp_webp__WEBPACK_IMPORTED_MODULE_18__);

// BURGERS
const texasBurg = createMenuItem('burger', 'Texas Burger', 'Crispy bacon, crumbled bleu cheese, a stack of Tumbleweed Onions, all drizzled with our homemade wing sauce.', '12.49', _images_texas_burger_webp__WEBPACK_IMPORTED_MODULE_19__);
const caribBurg = createMenuItem('burger', 'Caribbean Burger', 'Flanigan\'s award-winning BBQ sauce, melted cheddar cheese, and two strips of bacon.', '12.49', _images_caribbean_burger_webp__WEBPACK_IMPORTED_MODULE_20__);
const bahamaBurg = createMenuItem('burger', 'Bahama Burger', 'The perfect burger for the "hamburger purist", i.e. no "junk" to get in the way of that fresh beef flavor, charbroiled to perfection.', '11.99', _images_bahama_burger_webp__WEBPACK_IMPORTED_MODULE_21__);
const bigDaddyBurg = createMenuItem('burger', 'Big Daddy Burger', 'The ultimate cheeseburger - 2 slices of American cheese added to the Bahama Burger! This burger is partially responsible for the "Big" in "Big Daddy!', '12.49', _images_big_daddy_burger_webp__WEBPACK_IMPORTED_MODULE_22__);
const flaniganBurg = createMenuItem('burger', 'Flanigan Burger', 'Covered with sautéed onions and mushrooms, plus 2 slices of Swiss American cheese.', '12.49', _images_flanigan_burger_webp__WEBPACK_IMPORTED_MODULE_23__);

// SANDWICHES
const cheeseStk = createMenuItem('sandwich', 'Philadelphia Cheese Steak', 'Sliced beef sautéed with onions, and mushrooms with melted Swiss American cheese on a hoagie roll.', '11.99', _images_cheese_steak_webp__WEBPACK_IMPORTED_MODULE_24__);
const chickenPhily = createMenuItem('sandwich', 'Chicken Philly', 'Fresh chicken sautéed with onions, and mushrooms with melted Swiss American cheese on a hoagie roll.', '11.99', _images_chicken_philly_webp__WEBPACK_IMPORTED_MODULE_25__);
const chipotChicken = createMenuItem('sandwich', 'Chipotle Chicken Sandwich', 'Grilled chicken breast with melted Swiss cheese, crisp bacon, chipotle sauce, and a pile of Tumbleweed Onions.', '10.99', _images_chipotle_chicken_sandwich_webp__WEBPACK_IMPORTED_MODULE_26__);
const teriyakiChicken = createMenuItem('sandwich', 'Teriyaki Chicken Sandwich', 'Tender chicken breast, marinated in Teriyaki sauce, chargrilled, and covered with melted Swiss American cheese and two strips of bacon.', '10.99', _images_teriyaki_chicken_sandwich_webp__WEBPACK_IMPORTED_MODULE_27__);
const dolphinSand = createMenuItem('sandwich', 'Dolphin Sandwich', 'Dolphin (aka Mahi-Mahi) with lettuce and tomato on a Kaiser roll. Tartar sauce available upon request. Blackened, Fried, or Grilled.', 'Market Price', _images_dolphin_sandwich_webp__WEBPACK_IMPORTED_MODULE_28__);
const salmonSand = createMenuItem('sandwich', 'Salmon Sandwich', 'A tasty, tender filet of our Atlantic Salmon, seasoned with a chipotle rub, grilled just right and served on a toasted, buttered Kaiser roll with a side of our way-too-good chipotle sauce.', '10.99', _images_salmon_sandwich_webp__WEBPACK_IMPORTED_MODULE_29__);

// SEAFOOD
const grilledSalmon = createMenuItem('seafood', 'Grilled Salmon', 'A chargrilled ten-ounce filet of Atlantic Salmon. Your pick - Lemon Garlic, Toasted Sesame Glaze, or Blackened.', '18.99', _images_grilled_salmon_webp__WEBPACK_IMPORTED_MODULE_30__);
const surfTurf = createMenuItem('seafood', 'Surf & Turf', 'An eight-ounce USDA Choice N.Y. Strip Steak, paired with 1/2 dozen plump fried shrimp.', '19.99', _images_surf_n_turf_webp__WEBPACK_IMPORTED_MODULE_31__);
const lemonTilapia = createMenuItem('seafood', 'Lemon Pepper Tilapia', 'Tender, flaky Tilapia sautéed in our creamy, homemade Lemon Pepper sauce.', '16.99', _images_tilapia_webp__WEBPACK_IMPORTED_MODULE_32__);
const fishTacos = createMenuItem('seafood', 'Fish Tacos', 'Three huge tortilla shells filled with grilled, blackened or deep fried Dolphin, dirty rice, lettuce, Chipotle sauce, Pico de Gallo, cheddar cheese and sour cream. These ultimate fish tacos come with black beans and rice or an alternate potato or rice side of your choice.', '15.99', _images_fish_tacos_webp__WEBPACK_IMPORTED_MODULE_33__);
const tunaFilet = createMenuItem('seafood', 'Tuna Entrée', 'A hearty 10 oz. filet of fresh Tuna, blackened or grilled, served with potato or rice.', '19.99', _images_tuna_filet_webp__WEBPACK_IMPORTED_MODULE_34__);

// SIDES
const bakedPotato = createMenuItem('side', 'Baked Potato', 'Idaho\'s best, served piping hot with sour cream and butter piled on at your request.', '3.99', _images_baked_potato_webp__WEBPACK_IMPORTED_MODULE_35__);
const frenchFries = createMenuItem('side', 'French Fries', 'A Flanigan\'s signature, 3/4 of a pound of perfectly seasoned curly fries.', '6.99', _images_french_fries_webp__WEBPACK_IMPORTED_MODULE_37__);
const sweetPotato = createMenuItem('side', 'Sweet Potato Fries', 'A generous amount of the ultimate sweet potato fry, deep-fried, and dusted with cinnamon sugar. Sub side with any sandwich, burger, or entree.........Add $1.99', '7.99', _images_sweet_potato_webp__WEBPACK_IMPORTED_MODULE_36__);
const dirtyRice = createMenuItem('side', 'Dirty Rice', 'Sometimes called "Cajun Rice," sometimes called "Spicy Rice," always called delicious! A spicy blend of rice that would make New Orleans proud.', '3.99', _images_dirty_rice_webp__WEBPACK_IMPORTED_MODULE_38__);
const blackBeans = createMenuItem('side', 'Black Beans & Rice', 'A generous serving of white rice, black beans, chopped onions, and mojo.', '3.99', _images_black_beans_webp__WEBPACK_IMPORTED_MODULE_39__);

// DESSERT
const banzaiBrownie = createMenuItem('dessert', 'The Banzai Brownie', 'A super-sized, warm, triple chocolate brownie, piled high with Edy\'s vanilla ice cream, covered with huge chunks of Oreo cookies, surrounded by Kit Kat bars, and topped off with whipped cream and Hershey\'s chocolate syrup! The ultimate chocolate lover\'s challenge!', '9.49', _images_banzai_brownie_webp__WEBPACK_IMPORTED_MODULE_40__);
const keyLime = createMenuItem('dessert', 'Key Lime Pie', 'A smooth and creamy, light textured pie that is full of the tangy taste of genuine Key Limes, resting on a delicious graham cracker crust, and topped with a dollop of whipped cream.', '6.99', _images_key_lime_webp__WEBPACK_IMPORTED_MODULE_41__);
const chocCake = createMenuItem('dessert', 'Chocolate Ecstacy', 'A homemade-style, moist dark chocolate layer cake, filled and frosted with a rich, dark fudge icing, and surrounded with an outer layer of mini chocolate chips.', '6.99', _images_chocolate_ecstacy_webp__WEBPACK_IMPORTED_MODULE_42__);
const dulceLeche = createMenuItem('dessert', 'Dulce de Leche Cheesecake', 'A unique blended mixture of creamy milk caramel and vanilla cheesecake on a graham cracker crust, topped with a swirl of caramel.', '6.99', _images_dulce_leche_webp__WEBPACK_IMPORTED_MODULE_43__);
const flanShenan = createMenuItem('dessert', 'Flanigan\'s Shenanigan', 'A giant slice of candy walnut apple pie, topped with a mountain of Edy\'s vanilla ice cream, a river of caramel and an avalanche of Heath Bar crunch.', '8.49', _images_flanigans_shenanigan_webp__WEBPACK_IMPORTED_MODULE_44__);

const menuDiv = document.createElement('div');
menuDiv.classList.add('menu-div');
const menuList = document.createElement('ul');
menuList.classList.add('menu-list');
content.appendChild(menuDiv);
menuDiv.appendChild(menuList);

function createMenuListItem() {
  const menuListItem = document.createElement('li');
  menuListItem.classList.add('menu-list-item');
  const menuListItemDiv = document.createElement('div');
  menuListItemDiv.classList.add('menu-list-item-div');
  const menuListItemName = document.createElement('h3');
  menuListItemName.classList.add('item-name');
  const menuListItemDesc = document.createElement('p');
  menuListItemDesc.classList.add('menu-list-item-desc');
  const menuListItemPrice = document.createElement('span');
  menuListItemPrice.classList.add('menu-list-item-price');
  const menuListItemImg = document.createElement('img');
  menuListItemImg.classList.add('menu-list-item-img');

  menuList.appendChild(menuListItem);
  menuListItem.appendChild(menuListItemDiv);
  menuListItemDiv.appendChild(menuListItemName);
  menuListItemDiv.appendChild(menuListItemDesc);
  menuListItemDiv.appendChild(menuListItemPrice);
  menuListItemDiv.appendChild(menuListItemImg);
  return [menuListItemName, menuListItemDesc, menuListItemPrice, menuListItemImg];
}

function addMenuText(arr) {
  const properties = [this.name, this.desc, this.price, this.img];
  for (let i = 0; i < arr.length; i++) {
    if (properties[i] === this.img) {
      arr[i].src = properties[i];
    } else {
      arr[i].textContent = properties[i];
    }
  }
}

function createMenuSidebar(arr) {
  const types = new Set();
  arr.forEach((item) => {
    types.add(item.type);
  });
  const sidebar = document.createElement('ul');
  sidebar.classList.add('sidebar');
  types.forEach((type) => {
    const li = document.createElement('li');
    li.setAttribute('id', type);
    li.classList.add('sidebar-item');
    li.textContent = type;
    sidebar.appendChild(li);
  });
  return sidebar;
}




/***/ }),

/***/ "./src/images/bahama-burger.webp":
/*!***************************************!*\
  !*** ./src/images/bahama-burger.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3cb8f442e710ffc1928.webp";

/***/ }),

/***/ "./src/images/baked-potato.webp":
/*!**************************************!*\
  !*** ./src/images/baked-potato.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18f24fc7d4d2c55648ea.webp";

/***/ }),

/***/ "./src/images/banzai-brownie.webp":
/*!****************************************!*\
  !*** ./src/images/banzai-brownie.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "736721d2d831daf2705b.webp";

/***/ }),

/***/ "./src/images/big-daddy-burger.webp":
/*!******************************************!*\
  !*** ./src/images/big-daddy-burger.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "540fa739901bc2b304ca.webp";

/***/ }),

/***/ "./src/images/black-beans.webp":
/*!*************************************!*\
  !*** ./src/images/black-beans.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ec1a9d92cdaea00d7f0.webp";

/***/ }),

/***/ "./src/images/caribbean-burger.webp":
/*!******************************************!*\
  !*** ./src/images/caribbean-burger.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d168c04b278ccf90081c.webp";

/***/ }),

/***/ "./src/images/cheese-steak.webp":
/*!**************************************!*\
  !*** ./src/images/cheese-steak.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "060cd028e82a462144d2.webp";

/***/ }),

/***/ "./src/images/chicken-philly.webp":
/*!****************************************!*\
  !*** ./src/images/chicken-philly.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a75914ba5ba445919a42.webp";

/***/ }),

/***/ "./src/images/chipotle-chicken-sandwich.webp":
/*!***************************************************!*\
  !*** ./src/images/chipotle-chicken-sandwich.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b97a45c551ddc678ee8.webp";

/***/ }),

/***/ "./src/images/chocolate-ecstacy.webp":
/*!*******************************************!*\
  !*** ./src/images/chocolate-ecstacy.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddbd556943f7f3d970fa.webp";

/***/ }),

/***/ "./src/images/clam-chowder.webp":
/*!**************************************!*\
  !*** ./src/images/clam-chowder.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "640d27ddface1ba12458.webp";

/***/ }),

/***/ "./src/images/coconut-grove.png":
/*!**************************************!*\
  !*** ./src/images/coconut-grove.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "991395be61b5b9e07fa8.png";

/***/ }),

/***/ "./src/images/dirty-rice.webp":
/*!************************************!*\
  !*** ./src/images/dirty-rice.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c878c26dbafbc5242e4b.webp";

/***/ }),

/***/ "./src/images/dolphin-fingers.webp":
/*!*****************************************!*\
  !*** ./src/images/dolphin-fingers.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37b0905e07e3a2263864.webp";

/***/ }),

/***/ "./src/images/dolphin-sandwich.webp":
/*!******************************************!*\
  !*** ./src/images/dolphin-sandwich.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc7497231cbfb41c5f03.webp";

/***/ }),

/***/ "./src/images/doral.png":
/*!******************************!*\
  !*** ./src/images/doral.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e47be1191b719fafa38.png";

/***/ }),

/***/ "./src/images/dulce-leche.webp":
/*!*************************************!*\
  !*** ./src/images/dulce-leche.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "524b747f3610cc10100a.webp";

/***/ }),

/***/ "./src/images/fifty-wings.jpeg":
/*!*************************************!*\
  !*** ./src/images/fifty-wings.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89ecb89127566298751b.jpeg";

/***/ }),

/***/ "./src/images/firecracker-shrimp.webp":
/*!********************************************!*\
  !*** ./src/images/firecracker-shrimp.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df1253cef8e7933d92b4.webp";

/***/ }),

/***/ "./src/images/fish-tacos.webp":
/*!************************************!*\
  !*** ./src/images/fish-tacos.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2242c96714411db0e293.webp";

/***/ }),

/***/ "./src/images/five-wings.jpeg":
/*!************************************!*\
  !*** ./src/images/five-wings.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3ffaf83336b30699806.jpeg";

/***/ }),

/***/ "./src/images/flanigan-burger.webp":
/*!*****************************************!*\
  !*** ./src/images/flanigan-burger.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89624cab6749995ae821.webp";

/***/ }),

/***/ "./src/images/flanigans-logo.png":
/*!***************************************!*\
  !*** ./src/images/flanigans-logo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ac4d2c8816021da555e.png";

/***/ }),

/***/ "./src/images/flanigans-shenanigan.webp":
/*!**********************************************!*\
  !*** ./src/images/flanigans-shenanigan.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f4fcaea0018cb2f4ed5.webp";

/***/ }),

/***/ "./src/images/french-fries.webp":
/*!**************************************!*\
  !*** ./src/images/french-fries.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a765f7ca13abf65c737a.webp";

/***/ }),

/***/ "./src/images/full-rack.webp":
/*!***********************************!*\
  !*** ./src/images/full-rack.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6133dc4da3dce57309f8.webp";

/***/ }),

/***/ "./src/images/garlic-rolls.webp":
/*!**************************************!*\
  !*** ./src/images/garlic-rolls.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c51244dfb7be310279a.webp";

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "678001e7b52306104fc3.svg";

/***/ }),

/***/ "./src/images/grilled-salmon.webp":
/*!****************************************!*\
  !*** ./src/images/grilled-salmon.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ace595596952d262e036.webp";

/***/ }),

/***/ "./src/images/half-rack.webp":
/*!***********************************!*\
  !*** ./src/images/half-rack.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d13b52548193fdc456a4.webp";

/***/ }),

/***/ "./src/images/hialeah.png":
/*!********************************!*\
  !*** ./src/images/hialeah.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1c4cb3371fbd7c2111a.png";

/***/ }),

/***/ "./src/images/instagram.svg":
/*!**********************************!*\
  !*** ./src/images/instagram.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58343ea253613167c66a.svg";

/***/ }),

/***/ "./src/images/kendall.png":
/*!********************************!*\
  !*** ./src/images/kendall.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72bb85658a3f4f33fa60.png";

/***/ }),

/***/ "./src/images/key-lime.webp":
/*!**********************************!*\
  !*** ./src/images/key-lime.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4711e716b8b41731c58.webp";

/***/ }),

/***/ "./src/images/mozzarella-sticks.webp":
/*!*******************************************!*\
  !*** ./src/images/mozzarella-sticks.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcadd3413546a8179529.webp";

/***/ }),

/***/ "./src/images/north-miami.png":
/*!************************************!*\
  !*** ./src/images/north-miami.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95143909176fee0f0714.png";

/***/ }),

/***/ "./src/images/pinecrest.png":
/*!**********************************!*\
  !*** ./src/images/pinecrest.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "899019f7080c8ff3ef3b.png";

/***/ }),

/***/ "./src/images/potato-skins.webp":
/*!**************************************!*\
  !*** ./src/images/potato-skins.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8a7473744e61b4343df.webp";

/***/ }),

/***/ "./src/images/rib-chicken.webp":
/*!*************************************!*\
  !*** ./src/images/rib-chicken.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b08a1fecab4c5840fe8f.webp";

/***/ }),

/***/ "./src/images/rib-rolls.webp":
/*!***********************************!*\
  !*** ./src/images/rib-rolls.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab83ef76400bb7417e50.webp";

/***/ }),

/***/ "./src/images/rib-shrimp.webp":
/*!************************************!*\
  !*** ./src/images/rib-shrimp.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21f966ef2a7be7263323.webp";

/***/ }),

/***/ "./src/images/rib-stickers.webp":
/*!**************************************!*\
  !*** ./src/images/rib-stickers.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bd0a79e5268013baf10.webp";

/***/ }),

/***/ "./src/images/rib-wings.webp":
/*!***********************************!*\
  !*** ./src/images/rib-wings.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "180c12075a2e67e2ea8c.webp";

/***/ }),

/***/ "./src/images/salmon-sandwich.webp":
/*!*****************************************!*\
  !*** ./src/images/salmon-sandwich.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a234803775e288131196.webp";

/***/ }),

/***/ "./src/images/seafood-gumbo.webp":
/*!***************************************!*\
  !*** ./src/images/seafood-gumbo.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdcd3afb2fe56a4b18f1.webp";

/***/ }),

/***/ "./src/images/surf-n-turf.webp":
/*!*************************************!*\
  !*** ./src/images/surf-n-turf.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a08ad90ba01faa8a460.webp";

/***/ }),

/***/ "./src/images/surfside.png":
/*!*********************************!*\
  !*** ./src/images/surfside.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "360afba60dd29a03ea23.png";

/***/ }),

/***/ "./src/images/sweet-potato.webp":
/*!**************************************!*\
  !*** ./src/images/sweet-potato.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25a9b5f71d72524e598b.webp";

/***/ }),

/***/ "./src/images/ten-wings.webp":
/*!***********************************!*\
  !*** ./src/images/ten-wings.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df30af0f4bc46ab03371.webp";

/***/ }),

/***/ "./src/images/teriyaki-chicken-sandwich.webp":
/*!***************************************************!*\
  !*** ./src/images/teriyaki-chicken-sandwich.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52724ad697433cdc1b4a.webp";

/***/ }),

/***/ "./src/images/texas-burger.webp":
/*!**************************************!*\
  !*** ./src/images/texas-burger.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2980ddac3f8cafacb6e.webp";

/***/ }),

/***/ "./src/images/tilapia.webp":
/*!*********************************!*\
  !*** ./src/images/tilapia.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c1433de4b1e81c861ce.webp";

/***/ }),

/***/ "./src/images/tumbleweed-onions.webp":
/*!*******************************************!*\
  !*** ./src/images/tumbleweed-onions.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f9650b04a59f9e00a72.webp";

/***/ }),

/***/ "./src/images/tuna-filet.webp":
/*!************************************!*\
  !*** ./src/images/tuna-filet.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "891a0986f44b85b329ee.webp";

/***/ }),

/***/ "./src/images/twenty-wings.webp":
/*!**************************************!*\
  !*** ./src/images/twenty-wings.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb9d5a8d00b9fd19ba73.webp";

/***/ }),

/***/ "./src/images/twitter.svg":
/*!********************************!*\
  !*** ./src/images/twitter.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cace40f86d59be2debfe.svg";

/***/ }),

/***/ "./src/images/westchester.png":
/*!************************************!*\
  !*** ./src/images/westchester.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43b0755219e94d61a9a0.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_flanigans_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/flanigans-logo.png */ "./src/images/flanigans-logo.png");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/twitter.svg */ "./src/images/twitter.svg");
/* harmony import */ var _images_instagram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/instagram.svg */ "./src/images/instagram.svg");
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/github.svg */ "./src/images/github.svg");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _locations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locations.js */ "./src/locations.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */









const header = document.querySelector('#header');
const content = document.querySelector('#content');

// TABS
const tabsList = document.createElement('ul');
const homeTab = document.createElement('li');
const menuTab = document.createElement('li');
const locationTab = document.createElement('li');
const contactTab = document.createElement('li');
tabsList.classList.add('tabs-list');
homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';
locationTab.textContent = 'Locations';
contactTab.textContent = 'Contact';
header.appendChild(tabsList);
tabsList.appendChild(homeTab);
tabsList.appendChild(menuTab);
tabsList.appendChild(locationTab);
tabsList.appendChild(contactTab);

const headerImage = document.createElement('img');
headerImage.src = _images_flanigans_logo_png__WEBPACK_IMPORTED_MODULE_1__;
headerImage.addEventListener('click', openHomeTab);
headerImage.style.cursor = 'pointer';
header.appendChild(headerImage);

const about = document.createElement('div');
about.textContent = 'Flanigan\'s is a laidback family-run restaurant anchored by a commitment to exceptional food and drink, warm hospitality, great value, and good fun. A beloved South Florida institution since 1959, the Flanigan\'s name is pretty much synonymous with good times. Flanigan\'s welcomes guests from near and far every day of the year, serving continuously from lunch to late night.';
content.appendChild(about);

const footer = document.createElement('footer');
footer.classList.add('footer');
footer.textContent = 'Follow us on social media!';
content.append(footer);

const twitterLink = document.createElement('a');
const twitterImg = document.createElement('img');
twitterLink.setAttribute('href', 'https://twitter.com/FlanigansFL');
twitterImg.src = _images_twitter_svg__WEBPACK_IMPORTED_MODULE_2__;
footer.append(twitterLink);
twitterLink.append(twitterImg);

const instagramLink = document.createElement('a');
const instagramImg = document.createElement('img');
instagramLink.setAttribute('href', 'https://www.instagram.com/flanigansfl/?hl=en');
instagramImg.src = _images_instagram_svg__WEBPACK_IMPORTED_MODULE_3__;
footer.append(instagramLink);
instagramLink.append(instagramImg);

const githubLink = document.createElement('a');
const githubImg = document.createElement('img');
githubLink.setAttribute('href', 'https://github.com/DateOfBirth40');
githubImg.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_4__;
footer.append(githubLink);
githubLink.append(githubImg);

const sidebar = (0,_menu_js__WEBPACK_IMPORTED_MODULE_5__.createMenuSidebar)(_menu_js__WEBPACK_IMPORTED_MODULE_5__.menuArr);
_menu_js__WEBPACK_IMPORTED_MODULE_5__.menuDiv.append(sidebar);

addMenuToDOM();
addLocationsToDOM();

_menu_js__WEBPACK_IMPORTED_MODULE_5__.menuDiv.style.display = 'none';
_locations_js__WEBPACK_IMPORTED_MODULE_6__.locationDiv.style.display = 'none';
_contact_js__WEBPACK_IMPORTED_MODULE_7__.contactDiv.style.display = 'none';
homeTab.classList.add('clicked-tab');

// The code below initializes the menu and shows the 'starters' submenu by default
document.querySelector('#starter').classList.add('active');
const filteredMenuArr = _menu_js__WEBPACK_IMPORTED_MODULE_5__.menuArr.filter((item) => item.type === 'starter');
for (const item of filteredMenuArr) {
  const menuPropArr = (0,_menu_js__WEBPACK_IMPORTED_MODULE_5__.createMenuListItem)();
  _menu_js__WEBPACK_IMPORTED_MODULE_5__.addMenuText.call(item, menuPropArr);
};

// This function uses an event listener to detect which item type is selected in the menu
// and then displays only the objects that match the corresponding item type
function addMenuToDOM() {
  let filteredMenuArr = [];
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const menuList = document.querySelector('.menu-list');
  sidebar.addEventListener('click', function(e) {
    if (e.target.matches('.sidebar-item')) {
      filteredMenuArr = _menu_js__WEBPACK_IMPORTED_MODULE_5__.menuArr.filter((item) => item.type === e.target.id);
      menuList.innerHTML = '';
      for (const item of filteredMenuArr) {
        const menuPropArr = (0,_menu_js__WEBPACK_IMPORTED_MODULE_5__.createMenuListItem)();
        _menu_js__WEBPACK_IMPORTED_MODULE_5__.addMenuText.call(item, menuPropArr);
      };
      // The following code removes the 'active' class from all tabs
      // and assigns it to the clicked tab
      sidebarItems.forEach(function(item) {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });
}

function addLocationsToDOM() {
  for (const item of _locations_js__WEBPACK_IMPORTED_MODULE_6__.locArr) {
    const locPropArr = (0,_locations_js__WEBPACK_IMPORTED_MODULE_6__.createLocationListItem)();
    _locations_js__WEBPACK_IMPORTED_MODULE_6__.addLocationText.call(item, locPropArr);
  };
}

function openHomeTab() {
  about.style.display = 'block';
  _menu_js__WEBPACK_IMPORTED_MODULE_5__.menuDiv.style.display = 'none';
  _locations_js__WEBPACK_IMPORTED_MODULE_6__.locationDiv.style.display = 'none';
  _contact_js__WEBPACK_IMPORTED_MODULE_7__.contactDiv.style.display = 'none';
  homeTab.classList.add('clicked-tab');
  menuTab.classList.remove('clicked-tab');
  locationTab.classList.remove('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openMenuTab() {
  about.style.display = 'none';
  _menu_js__WEBPACK_IMPORTED_MODULE_5__.menuDiv.style.display = 'grid';
  _locations_js__WEBPACK_IMPORTED_MODULE_6__.locationDiv.style.display = 'none';
  _contact_js__WEBPACK_IMPORTED_MODULE_7__.contactDiv.style.display = 'none';
  homeTab.classList.remove('clicked-tab');
  menuTab.classList.add('clicked-tab');
  locationTab.classList.remove('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openLocationTab() {
  about.style.display = 'none';
  _menu_js__WEBPACK_IMPORTED_MODULE_5__.menuDiv.style.display = 'none';
  _locations_js__WEBPACK_IMPORTED_MODULE_6__.locationDiv.style.display = 'grid';
  _contact_js__WEBPACK_IMPORTED_MODULE_7__.contactDiv.style.display = 'none';
  homeTab.classList.remove('clicked-tab');
  menuTab.classList.remove('clicked-tab');
  locationTab.classList.add('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openContactTab() {
  about.style.display = 'none';
  _menu_js__WEBPACK_IMPORTED_MODULE_5__.menuDiv.style.display = 'none';
  _locations_js__WEBPACK_IMPORTED_MODULE_6__.locationDiv.style.display = 'none';
  _contact_js__WEBPACK_IMPORTED_MODULE_7__.contactDiv.style.display = 'flex';
  homeTab.classList.remove('clicked-tab');
  menuTab.classList.remove('clicked-tab');
  locationTab.classList.remove('clicked-tab');
  contactTab.classList.add('clicked-tab');
}

homeTab.addEventListener('click', openHomeTab);
menuTab.addEventListener('click', openMenuTab);
locationTab.addEventListener('click', openLocationTab);
contactTab.addEventListener('click', openContactTab);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsK0NBQU07QUFDdEI7QUFDQTs7QUFFQSxnQkFBZ0IsMkRBQWlCLENBQUMsNkNBQU87QUFDekMsb0RBQWM7O0FBRWQ7QUFDQTs7QUFFQSwyREFBcUI7QUFDckIsb0VBQXlCO0FBQ3pCLGlFQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFjO0FBQ3RDO0FBQ0Esc0JBQXNCLDREQUFrQjtBQUN4QyxFQUFFLHNEQUFnQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFjO0FBQ3RDO0FBQ0E7QUFDQSw0QkFBNEIsNERBQWtCO0FBQzlDLFFBQVEsc0RBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFCQUFxQixpREFBTTtBQUMzQix1QkFBdUIscUVBQXNCO0FBQzdDLElBQUksK0RBQW9CO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMkRBQXFCO0FBQ3ZCLEVBQUUsb0VBQXlCO0FBQzNCLEVBQUUsaUVBQXdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMkRBQXFCO0FBQ3ZCLEVBQUUsb0VBQXlCO0FBQzNCLEVBQUUsaUVBQXdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMkRBQXFCO0FBQ3ZCLEVBQUUsb0VBQXlCO0FBQzNCLEVBQUUsaUVBQXdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMkRBQXFCO0FBQ3ZCLEVBQUUsb0VBQXlCO0FBQzNCLEVBQUUsaUVBQXdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL2xvY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWdyZWVuOiByZ2IoNDAsIDk1LCA2Nyk7XFxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjUyLCAyNDcpO1xcbiAgICAtLWJ1dHRvbi1ob3ZlcjogcmdiKDMwLCA3MywgNTEpO1xcbiAgICAtLWZvcm0tbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTsgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4udGFicy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50YWJzLWxpc3QgPiAqIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YWJzLWxpc3QgPiAqOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xpY2tlZC10YWIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uZm9vdGVyIGltZzpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLm1lbnUtZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTsgKi9cXG59XFxuXFxuLnNpZGViYXIgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXIpO1xcbn1cXG5cXG4vKiBDaGFuZ2UgdGhlIGRpdiB0byBiZSBhIGZsZXggaXRlbSB3aXRoIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gZm9yIHdoZW4gdGhlIHNjcmVlbiBpcyBuYXJyb3cgKi9cXG4ubWVudS1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAyO1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0tZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1lbnUtbGlzdC1pdGVtLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDI7XFxufVxcblxcbi5pdGVtLW5hbWUge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBmb250LWZhbWlseTogJ1RhaG9tYScsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5tZW51LWxpc3QtaXRlbS1kZXNjIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDIgLyAyO1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0tcHJpY2Uge1xcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gMyAvIDI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0taW1nIHtcXG4gICAgd2lkdGg6IDI2MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDQgLyAxO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24tZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubG9jYXRpb24tZGl2IGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59ICBcXG5cXG4ubG9jYXRpb24tZGl2IGRpdiBpbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mb3JtLWRpdiA+IGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZvcm0tZGl2ID4gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWZvcm0tbWFyZ2luKTtcXG59XFxuXFxuLmZvcm0tZGl2ID4gc2VsZWN0LCAuZm9ybS1kaXYgPiBpbnB1dCwgI2NvbW1lbnQge1xcbiAgICBtYXJnaW46IHZhcigtLWZvcm0tbWFyZ2luKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI2NvbW1lbnQge1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uZm9ybS1kaXYgPiBidXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgbWFyZ2luOiB2YXIoLS1mb3JtLW1hcmdpbik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG59XFxuXFxuLmZvcm0tZGl2ID4gYnV0dG9uOmhvdmVyLFxcbi5mb3JtLWRpdiA+IGJ1dHRvbjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxufVxcblxcbi5mb3JtLWRpdiA+IGJ1dHRvbjpmb2N1cyxcXG4uYWN0aXZlIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuLmZvcm0tZGl2ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysb0VBQW9FO0FBQ3hFOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBLCtGQUErRjtBQUMvRjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNERBQTREO0lBQzVELG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4REFBOEQ7QUFDbEU7O0FBRUE7O0lBRUkscUNBQXFDO0FBQ3pDOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWdyZWVuOiByZ2IoNDAsIDk1LCA2Nyk7XFxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjUyLCAyNDcpO1xcbiAgICAtLWJ1dHRvbi1ob3ZlcjogcmdiKDMwLCA3MywgNTEpO1xcbiAgICAtLWZvcm0tbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTsgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4udGFicy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50YWJzLWxpc3QgPiAqIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YWJzLWxpc3QgPiAqOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xpY2tlZC10YWIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uZm9vdGVyIGltZzpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLm1lbnUtZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTsgKi9cXG59XFxuXFxuLnNpZGViYXIgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXIpO1xcbn1cXG5cXG4vKiBDaGFuZ2UgdGhlIGRpdiB0byBiZSBhIGZsZXggaXRlbSB3aXRoIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gZm9yIHdoZW4gdGhlIHNjcmVlbiBpcyBuYXJyb3cgKi9cXG4ubWVudS1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAyO1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0tZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1lbnUtbGlzdC1pdGVtLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDI7XFxufVxcblxcbi5pdGVtLW5hbWUge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBmb250LWZhbWlseTogJ1RhaG9tYScsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5tZW51LWxpc3QtaXRlbS1kZXNjIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDIgLyAyO1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0tcHJpY2Uge1xcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gMyAvIDI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0taW1nIHtcXG4gICAgd2lkdGg6IDI2MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDQgLyAxO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24tZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubG9jYXRpb24tZGl2IGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59ICBcXG5cXG4ubG9jYXRpb24tZGl2IGRpdiBpbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mb3JtLWRpdiA+IGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZvcm0tZGl2ID4gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWZvcm0tbWFyZ2luKTtcXG59XFxuXFxuLmZvcm0tZGl2ID4gc2VsZWN0LCAuZm9ybS1kaXYgPiBpbnB1dCwgI2NvbW1lbnQge1xcbiAgICBtYXJnaW46IHZhcigtLWZvcm0tbWFyZ2luKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI2NvbW1lbnQge1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uZm9ybS1kaXYgPiBidXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgbWFyZ2luOiB2YXIoLS1mb3JtLW1hcmdpbik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG59XFxuXFxuLmZvcm0tZGl2ID4gYnV0dG9uOmhvdmVyLFxcbi5mb3JtLWRpdiA+IGJ1dHRvbjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxufVxcblxcbi5mb3JtLWRpdiA+IGJ1dHRvbjpmb2N1cyxcXG4uYWN0aXZlIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuLmZvcm0tZGl2ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQge2xvY0Fycn0gZnJvbSAnLi9sb2NhdGlvbnMuanMnO1xuXG5jb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGl2Jyk7XG5jb25zdCBjb250YWN0TXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuY29udGFjdE1zZy50ZXh0Q29udGVudCA9ICdPdXIgcmVzdGF1cmFudHMgYXJlIG9wZW4gMzY1IGRheXMgYSB5ZWFyLCBzZXJ2aW5nIGNvbnRpbnVvdXNseSBmcm9tIDExOjAwIEFNIHRvIGxhdGUgbmlnaHQuIFdlXFwncmUgYWx3YXlzIGZpc2hpbmcgZm9yIGZlZWRiYWNrISBQbGVhc2UgcmVhY2ggb3V0IHRvIHVzIHdpdGggYW55IHF1ZXN0aW9ucyB1c2luZyB0aGUgZm9ybSBiZWxvdy4gIFRoYW5rcyBmb3Igc3RvcHBpbmcgYnkhXFxyXFxuJztcblxuLy8gRm9yIGxvY2F0aW9uLCBhY2Nlc3MgdGhlIGxvY0FyciBvYmplY3QgdG8gZ2V0IGxvY2F0aW9uIG5hbWVzXG5jb25zdCBsb2NOYW1lcyA9IGxvY0Fyci5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSk7XG5cbi8vIEZvcm1cbmNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1kaXYnKTtcbmNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuZm9ybUhlYWRlci50ZXh0Q29udGVudCA9ICdTZW5kIHVzIGEgbWVzc2FnZSc7XG5jb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmNvbnRhY3RGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbmNvbnRhY3RGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ3N1Ym1pdC5waHAnKTtcblxuY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sb2NhdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uOiAqJztcbmNvbnN0IGxvY2F0aW9uU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5sb2NhdGlvblNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbG9jYXRpb24nKTtcbmxvY2F0aW9uU2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24nKTtcbmNyZWF0ZU9wdGlvbkxpc3QobG9jTmFtZXMpO1xuXG5jb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbm5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lOiAqJztcbmNvbnN0IGNvbnRhY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnRhY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5jb250YWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbmNvbnRhY3ROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG5cbmNvbnN0IHBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xucGhvbmVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwaG9uZScpO1xucGhvbmVMYWJlbC50ZXh0Q29udGVudCA9ICdQaG9uZSBOdW1iZXI6JztcbmNvbnN0IGNvbnRhY3RQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb250YWN0UGhvbmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RlbCcpO1xuY29udGFjdFBob25lLnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmUnKTtcbmNvbnRhY3RQaG9uZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncGhvbmUnKTtcblxuY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5lbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XG5lbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0VtYWlsIEFkZHJlc3M6IConO1xuY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnRhY3RFbWFpbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbmNvbnRhY3RFbWFpbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsJyk7XG5jb250YWN0RW1haWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XG5cbmNvbnN0IGNvbW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb21tZW50TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY29tbWVudCcpO1xuY29tbWVudExhYmVsLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzOiAqJztcbmNvbnN0IGNvbnRhY3RDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbmNvbnRhY3RDb21tZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tbWVudCcpO1xuY29udGFjdENvbW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NvbW1lbnQnKTtcbmNvbnRhY3RDb21tZW50LnNldEF0dHJpYnV0ZSgncm93cycsICc2Jyk7XG5cbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5zdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25MaXN0KGFycikge1xuICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGRlZmF1bHRPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdub25lJyk7XG4gIGRlZmF1bHRPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICBkZWZhdWx0T3B0aW9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgbG9jYXRpb25TZWxlY3QuYXBwZW5kKGRlZmF1bHRPcHRpb24pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHNlbGVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYXJyW2ldLnRvTG93ZXJDYXNlKCkpO1xuICAgIHNlbGVjdE9wdGlvbi50ZXh0Q29udGVudCA9IGFycltpXTtcbiAgICBsb2NhdGlvblNlbGVjdC5hcHBlbmQoc2VsZWN0T3B0aW9uKTtcbiAgfVxufVxuXG5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0TXNnKTtcbmNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG5mb3JtRGl2LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uTGFiZWwpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChsb2NhdGlvblNlbGVjdCk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lKTtcbmZvcm1EaXYuYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChjb21tZW50TGFiZWwpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0Q29tbWVudCk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbmV4cG9ydCB7XG4gIGNvbnRhY3REaXYsXG59O1xuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgY29jb251dEdyb3ZlUGljIGZyb20gJy4vaW1hZ2VzL2NvY29udXQtZ3JvdmUucG5nJztcbmltcG9ydCBkb3JhbFBpYyBmcm9tICcuL2ltYWdlcy9kb3JhbC5wbmcnO1xuaW1wb3J0IGtlbmRhbGxQaWMgZnJvbSAnLi9pbWFnZXMva2VuZGFsbC5wbmcnO1xuaW1wb3J0IHBpbmVjcmVzdFBpYyBmcm9tICcuL2ltYWdlcy9waW5lY3Jlc3QucG5nJztcbmltcG9ydCB3ZXN0Y2hlc3RlclBpYyBmcm9tICcuL2ltYWdlcy93ZXN0Y2hlc3Rlci5wbmcnO1xuaW1wb3J0IHN1cmZzaWRlUGljIGZyb20gJy4vaW1hZ2VzL3N1cmZzaWRlLnBuZyc7XG5pbXBvcnQgaGlhbGVhaFBpYyBmcm9tICcuL2ltYWdlcy9oaWFsZWFoLnBuZyc7XG5pbXBvcnQgbm9ydGhNaWFtaVBpYyBmcm9tICcuL2ltYWdlcy9ub3J0aC1taWFtaS5wbmcnO1xuXG5mdW5jdGlvbiBMb2NhdGlvbihuYW1lLCBhZGRyZXNzLCBjaXR5LCBwaG9uZSwgaG91cnMsIGltZykge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xuICB0aGlzLmNpdHkgPSBjaXR5O1xuICB0aGlzLnBob25lID0gcGhvbmU7XG4gIHRoaXMuaG91cnMgPSBob3VycztcbiAgdGhpcy5pbWcgPSBpbWc7XG59O1xuXG5jb25zdCBsb2NBcnIgPSBbXTtcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKG5hbWUsIGFkZHJlc3MsIGNpdHksIHBob25lLCBob3VycywgaW1nKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKG5hbWUsIGFkZHJlc3MsIGNpdHksIHBob25lLCBob3VycywgaW1nKTtcbiAgbG9jQXJyLnB1c2gobG9jYXRpb24pO1xuICByZXR1cm4gbG9jYXRpb247XG59XG5jb25zdCBjb2NvbnV0R3JvdmUgPSBjcmVhdGVMb2NhdGlvbignQ29jb251dCBHcm92ZScsICcyNzIxIEJpcmQgQXZlbnVlJywgJ01pYW1pLCBGTCAzMzEzMycsICcoMzA1KSA0NDYtMTExNCcsIHtvcGVuOiAnMTEgQU0nLCBjbG9zZTogJzQ6MzAgQU0nfSwgY29jb251dEdyb3ZlUGljKTtcbmNvbnN0IGRvcmFsID0gY3JlYXRlTG9jYXRpb24oJ0RvcmFsJywgJzg2OTUgTlcgMTJ0aCBTdHJlZXQnLCAnTWlhbWksIEZMIDMzMTI2JywgJyg3ODYpIDg0NS05MzY2Jywge29wZW46ICcxMSBBTScsIGNsb3NlOiAnMSBBTSd9LCBkb3JhbFBpYyk7XG5jb25zdCBrZW5kYWxsID0gY3JlYXRlTG9jYXRpb24oJ0tlbmRhbGwnLCAnMTI3OTAgU1cgODh0aCBTdHJlZXQnLCAnTWlhbWksIEZMIDMzMTg2JywgJygzMDUpIDM4MC0wNTIxJywge29wZW46ICcxMSBBTScsIGNsb3NlOiAnMSBBTSd9LCBrZW5kYWxsUGljKTtcbmNvbnN0IHBpbmVjcmVzdCA9IGNyZWF0ZUxvY2F0aW9uKCdQaW5lY3Jlc3QnLCAnMTE0MTUgUyBEaXhpZSBIaWdod2F5JywgJ01pYW1pLCBGTCAzMzE1NicsICcoMzA1KSAzNzgtNDAwMCcsIHtvcGVuOiAnMTEgQU0nLCBjbG9zZTogJzEgQU0nfSwgcGluZWNyZXN0UGljKTtcbmNvbnN0IHdlc3RjaGVzdGVyID0gY3JlYXRlTG9jYXRpb24oJ1dlc3RjaGVzdGVyJywgJzk4NTcgU1cgNDB0aCBTdHJlZXQnLCAnTWlhbWksIEZMIDMzMTY1JywgJygzMDUpIDIwNy03NDI3Jywge29wZW46ICcxMSBBTScsIGNsb3NlOiAnMTozMCBBTSd9LCB3ZXN0Y2hlc3RlclBpYyk7XG5jb25zdCBzdXJmc2lkZSA9IGNyZWF0ZUxvY2F0aW9uKCdTdXJmc2lkZScsICc5NTE2IEhhcmRpbmcgQXZlbnVlJywgJ1N1cmZzaWRlLCBGTCAzMzE1NCcsICcoMzA1KSA4NjctMDA5OScsIHtvcGVuOiAnMTEgQU0nLCBjbG9zZTogJzEgQU0nfSwgc3VyZnNpZGVQaWMpO1xuY29uc3QgaGlhbGVhaCA9IGNyZWF0ZUxvY2F0aW9uKCdIaWFsZWFoJywgJzE1NTAgVyA4NHRoIFN0cmVldCcsICdIaWFsZWFoLCBGTCAzMzAxNCcsICcoMzA1KSA4MjEtMDk5MycsIHtvcGVuOiAnMTEgQU0nLCBjbG9zZTogJzIgQU0nfSwgaGlhbGVhaFBpYyk7XG5jb25zdCBub3J0aE1pYW1pID0gY3JlYXRlTG9jYXRpb24oJ05vcnRoIE1pYW1pJywgJzEzMjA1IEJpc2NheW5lIEJvdWxldmFyZCcsICdOb3J0aCBNaWFtaSwgRkwgMzMxODEnLCAnKDMwNSkgODkzLTA1MDYnLCB7b3BlbjogJzExIEFNJywgY2xvc2U6ICcxOjMwIEFNJ30sIG5vcnRoTWlhbWlQaWMpO1xuXG5sb2NBcnIuc29ydCgoYSwgYikgPT4gKGEubmFtZSA+IGIubmFtZSkgPyAxIDogKChiLm5hbWUgPiBhLm5hbWUpID8gLTEgOiAwKSk7XG5jb25zb2xlLmxvZyhsb2NBcnIpO1xuXG5jb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24tZGl2Jyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcblxuLy8gQWRkIGdldCBkaXJlY3Rpb25zIGJ1dHRvbiB3aXRoIGEgbGluayB0byB0aGUgYWRkcmVzcyBiZWxvdyBlYWNoIGxvY2F0aW9uXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkxpc3RJdGVtKCkge1xuICBjb25zdCBsb2NhdGlvbkxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxvY2F0aW9uTGlzdEl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbG9jYXRpb25MaXN0SXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gIGNvbnN0IGxvY2F0aW9uTGlzdEl0ZW1BZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBsb2NhdGlvbkxpc3RJdGVtQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbG9jYXRpb25MaXN0SXRlbVBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBsb2NhdGlvbkxpc3RJdGVtSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxvY2F0aW9uTGlzdEl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkxpc3RJdGVtKTtcbiAgbG9jYXRpb25MaXN0SXRlbS5hcHBlbmRDaGlsZChsb2NhdGlvbkxpc3RJdGVtTmFtZSk7XG4gIGxvY2F0aW9uTGlzdEl0ZW0uYXBwZW5kQ2hpbGQobG9jYXRpb25MaXN0SXRlbUFkZHJlc3MpO1xuICBsb2NhdGlvbkxpc3RJdGVtLmFwcGVuZENoaWxkKGxvY2F0aW9uTGlzdEl0ZW1DaXR5KTtcbiAgbG9jYXRpb25MaXN0SXRlbS5hcHBlbmRDaGlsZChsb2NhdGlvbkxpc3RJdGVtUGhvbmUpO1xuICBsb2NhdGlvbkxpc3RJdGVtLmFwcGVuZENoaWxkKGxvY2F0aW9uTGlzdEl0ZW1Ib3Vycyk7XG4gIGxvY2F0aW9uTGlzdEl0ZW0uYXBwZW5kQ2hpbGQobG9jYXRpb25MaXN0SXRlbUltZyk7XG4gIHJldHVybiBbbG9jYXRpb25MaXN0SXRlbU5hbWUsIGxvY2F0aW9uTGlzdEl0ZW1BZGRyZXNzLCBsb2NhdGlvbkxpc3RJdGVtQ2l0eSwgbG9jYXRpb25MaXN0SXRlbVBob25lLCBsb2NhdGlvbkxpc3RJdGVtSG91cnMsIGxvY2F0aW9uTGlzdEl0ZW1JbWddO1xufVxuXG5mdW5jdGlvbiBhZGRMb2NhdGlvblRleHQoYXJyKSB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSBbdGhpcy5uYW1lLCB0aGlzLmFkZHJlc3MsIHRoaXMuY2l0eSwgdGhpcy5waG9uZSwgdGhpcy5ob3VycywgdGhpcy5pbWddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9wZXJ0aWVzW2ldID09PSB0aGlzLmhvdXJzKSB7XG4gICAgICBhcnJbaV0udGV4dENvbnRlbnQgPSBgRXZlcnkgRGF5OiAke3RoaXMuaG91cnNbJ29wZW4nXX0gLSAke3RoaXMuaG91cnNbJ2Nsb3NlJ119YDtcbiAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNbaV0gPT09IHRoaXMuaW1nKSB7XG4gICAgICBhcnJbaV0uc3JjID0gcHJvcGVydGllc1tpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyW2ldLnRleHRDb250ZW50ID0gcHJvcGVydGllc1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlTG9jYXRpb25MaXN0SXRlbSxcbiAgYWRkTG9jYXRpb25UZXh0LFxuICBsb2NBcnIsXG4gIGxvY2F0aW9uRGl2LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCByaWJSb2xsc0ltZyBmcm9tICcuL2ltYWdlcy9yaWItcm9sbHMud2VicCc7XG5pbXBvcnQgdHVtYmxlT25pb25zSW1nIGZyb20gJy4vaW1hZ2VzL3R1bWJsZXdlZWQtb25pb25zLndlYnAnO1xuaW1wb3J0IGZyaWVkU2hyaW1wSW1nIGZyb20gJy4vaW1hZ2VzL2ZpcmVjcmFja2VyLXNocmltcC53ZWJwJztcbmltcG9ydCBzZWFmb29kR3VtYm9JbWcgZnJvbSAnLi9pbWFnZXMvc2VhZm9vZC1ndW1iby53ZWJwJztcbmltcG9ydCBjbGFtQ2hvd2RlckltZyBmcm9tICcuL2ltYWdlcy9jbGFtLWNob3dkZXIud2VicCc7XG5pbXBvcnQgZ2FybGljUm9sbHNJbWcgZnJvbSAnLi9pbWFnZXMvZ2FybGljLXJvbGxzLndlYnAnO1xuaW1wb3J0IG1venpTdGlja3NJbWcgZnJvbSAnLi9pbWFnZXMvbW96emFyZWxsYS1zdGlja3Mud2VicCc7XG5pbXBvcnQgcG90YXRvU2tpbnNJbWcgZnJvbSAnLi9pbWFnZXMvcG90YXRvLXNraW5zLndlYnAnO1xuaW1wb3J0IGRvbHBoaW5GaW5nZXJzSW1nIGZyb20gJy4vaW1hZ2VzL2RvbHBoaW4tZmluZ2Vycy53ZWJwJztcbmltcG9ydCBmaXZlV2luZ3NJbWcgZnJvbSAnLi9pbWFnZXMvZml2ZS13aW5ncy5qcGVnJztcbmltcG9ydCB0ZW5XaW5nc0ltZyBmcm9tICcuL2ltYWdlcy90ZW4td2luZ3Mud2VicCc7XG5pbXBvcnQgdHdlbnR5V2luZ3NJbWcgZnJvbSAnLi9pbWFnZXMvdHdlbnR5LXdpbmdzLndlYnAnO1xuaW1wb3J0IGZpZnR5V2luZ3NJbWcgZnJvbSAnLi9pbWFnZXMvZmlmdHktd2luZ3MuanBlZyc7XG5pbXBvcnQgaGFsZlJhY2tJbWcgZnJvbSAnLi9pbWFnZXMvaGFsZi1yYWNrLndlYnAnO1xuaW1wb3J0IGZ1bGxSYWNrSW1nIGZyb20gJy4vaW1hZ2VzL2Z1bGwtcmFjay53ZWJwJztcbmltcG9ydCByaWJXaW5nc0ltZyBmcm9tICcuL2ltYWdlcy9yaWItd2luZ3Mud2VicCc7XG5pbXBvcnQgcmliU3RpY2tlcnNJbWcgZnJvbSAnLi9pbWFnZXMvcmliLXN0aWNrZXJzLndlYnAnO1xuaW1wb3J0IHJpYkNoaWNrZW5JbWcgZnJvbSAnLi9pbWFnZXMvcmliLWNoaWNrZW4ud2VicCc7XG5pbXBvcnQgcmliU2hyaW1wSW1nIGZyb20gJy4vaW1hZ2VzL3JpYi1zaHJpbXAud2VicCc7XG5pbXBvcnQgdGV4YXNCdXJnSW1nIGZyb20gJy4vaW1hZ2VzL3RleGFzLWJ1cmdlci53ZWJwJztcbmltcG9ydCBjYXJpYkJ1cmdJbWcgZnJvbSAnLi9pbWFnZXMvY2FyaWJiZWFuLWJ1cmdlci53ZWJwJztcbmltcG9ydCBiYWhhbWFCdXJnSW1nIGZyb20gJy4vaW1hZ2VzL2JhaGFtYS1idXJnZXIud2VicCc7XG5pbXBvcnQgYmlnRGFkZHlCdXJnSW1nIGZyb20gJy4vaW1hZ2VzL2JpZy1kYWRkeS1idXJnZXIud2VicCc7XG5pbXBvcnQgZmxhbmlnYW5CdXJnSW1nIGZyb20gJy4vaW1hZ2VzL2ZsYW5pZ2FuLWJ1cmdlci53ZWJwJztcbmltcG9ydCBjaGVlc2VTdGtJbWcgZnJvbSAnLi9pbWFnZXMvY2hlZXNlLXN0ZWFrLndlYnAnO1xuaW1wb3J0IGNoaWNrZW5QaGlseUltZyBmcm9tICcuL2ltYWdlcy9jaGlja2VuLXBoaWxseS53ZWJwJztcbmltcG9ydCBjaGlwb3RDaGlja2VuSW1nIGZyb20gJy4vaW1hZ2VzL2NoaXBvdGxlLWNoaWNrZW4tc2FuZHdpY2gud2VicCc7XG5pbXBvcnQgdGVyaXlha2lDaGlja2VuSW1nIGZyb20gJy4vaW1hZ2VzL3Rlcml5YWtpLWNoaWNrZW4tc2FuZHdpY2gud2VicCc7XG5pbXBvcnQgZG9scGhpblNhbmRJbWcgZnJvbSAnLi9pbWFnZXMvZG9scGhpbi1zYW5kd2ljaC53ZWJwJztcbmltcG9ydCBzYWxtb25TYW5kSW1nIGZyb20gJy4vaW1hZ2VzL3NhbG1vbi1zYW5kd2ljaC53ZWJwJztcbmltcG9ydCBncmlsbGVkU2FsbW9uSW1nIGZyb20gJy4vaW1hZ2VzL2dyaWxsZWQtc2FsbW9uLndlYnAnO1xuaW1wb3J0IHN1cmZUdXJmSW1nIGZyb20gJy4vaW1hZ2VzL3N1cmYtbi10dXJmLndlYnAnO1xuaW1wb3J0IGxlbW9uVGlsYXBpYUltZyBmcm9tICcuL2ltYWdlcy90aWxhcGlhLndlYnAnO1xuaW1wb3J0IGZpc2hUYWNvc0ltZyBmcm9tICcuL2ltYWdlcy9maXNoLXRhY29zLndlYnAnO1xuaW1wb3J0IHR1bmFGaWxldEltZyBmcm9tICcuL2ltYWdlcy90dW5hLWZpbGV0LndlYnAnO1xuaW1wb3J0IGJha2VkUG90YXRvSW1nIGZyb20gJy4vaW1hZ2VzL2Jha2VkLXBvdGF0by53ZWJwJztcbmltcG9ydCBzd2VldFBvdGF0b0ltZyBmcm9tICcuL2ltYWdlcy9zd2VldC1wb3RhdG8ud2VicCc7XG5pbXBvcnQgZnJlbmNoRnJpZXNJbWcgZnJvbSAnLi9pbWFnZXMvZnJlbmNoLWZyaWVzLndlYnAnO1xuaW1wb3J0IGRpcnR5UmljZUltZyBmcm9tICcuL2ltYWdlcy9kaXJ0eS1yaWNlLndlYnAnO1xuaW1wb3J0IGJsYWNrQmVhbnNJbWcgZnJvbSAnLi9pbWFnZXMvYmxhY2stYmVhbnMud2VicCc7XG5pbXBvcnQgYmFuemFpQnJvd25pZUltZyBmcm9tICcuL2ltYWdlcy9iYW56YWktYnJvd25pZS53ZWJwJztcbmltcG9ydCBrZXlMaW1lSW1nIGZyb20gJy4vaW1hZ2VzL2tleS1saW1lLndlYnAnO1xuaW1wb3J0IGNob2NDYWtlSW1nIGZyb20gJy4vaW1hZ2VzL2Nob2NvbGF0ZS1lY3N0YWN5LndlYnAnO1xuaW1wb3J0IGR1bGNlTGVjaGVJbWcgZnJvbSAnLi9pbWFnZXMvZHVsY2UtbGVjaGUud2VicCc7XG5pbXBvcnQgZmxhblNoZW5hbkltZyBmcm9tICcuL2ltYWdlcy9mbGFuaWdhbnMtc2hlbmFuaWdhbi53ZWJwJztcblxuZnVuY3Rpb24gTWVudUl0ZW0odHlwZSwgbmFtZSwgZGVzYywgcHJpY2UsIGltZykge1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLmRlc2MgPSBkZXNjO1xuICB0aGlzLnByaWNlID0gcHJpY2U7XG4gIHRoaXMuaW1nID0gaW1nO1xufTtcblxuY29uc3QgbWVudUFyciA9IFtdO1xuLy8gVGhlIGZvbGxvd2luZyB3aWxsIGF1dG9tYXRpY2FsbHkgYWRkIGEgbmV3IE1lbnVJdGVtIHRvIHRoZSBtZW51QXJyIGFycmF5XG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbSh0eXBlLCBuYW1lLCBkZXNjLCBwcmljZSwgaW1nKSB7XG4gIGNvbnN0IG1lbnVJdGVtID0gbmV3IE1lbnVJdGVtKHR5cGUsIG5hbWUsIGRlc2MsIHByaWNlLCBpbWcpO1xuICBtZW51QXJyLnB1c2gobWVudUl0ZW0pO1xuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbi8vIFNUQVJURVJTXG5jb25zdCByaWJSb2xscyA9IGNyZWF0ZU1lbnVJdGVtKCdzdGFydGVyJywgJ0pvZVxcJ3MgUm9ja2luXFwnIFJpYiBSb2xscycsICdIb21lbWFkZSwgZGVlcC1mcmllZCBlZ2cgcm9sbHMgc3R1ZmZlZCB3aXRoIG1lYXQgZnJvbSBvdXIgZmFtb3VzIGJhYnkgYmFjayByaWJzLCBwdWxsZWQgcG9yaywgY2hlZGRhciBjaGVlc2UsIG9uaW9ucywgYW5kIEZsYW5pZ2FuXFwncyBCQlEgc2F1Y2UuJywgJzExLjk5JywgcmliUm9sbHNJbWcpO1xuY29uc3QgdHVtYmxlT25pb25zID0gY3JlYXRlTWVudUl0ZW0oJ3N0YXJ0ZXInLCAnVHVtYmxld2VlZCBPbmlvbnMnLCAnVGhpbmx5IHNsaWNlZCBqdW1ibyBvbmlvbnMsIGxpZ2h0bHkgYmF0dGVyZWQgYW5kIGZyaWVkLCB3aXRoIGEgc2lkZSBvZiBob25leSBtdXN0YXJkLicsICc2Ljk5JywgdHVtYmxlT25pb25zSW1nKTtcbmNvbnN0IGZyaWVkU2hyaW1wID0gY3JlYXRlTWVudUl0ZW0oJ3N0YXJ0ZXInLCAnRmlyZWNyYWNrZXIgU2hyaW1wJywgJ0EgZG96ZW4gcGx1bXAsIGRlZXAtZnJpZWQgc2hyaW1wLCB0b3NzZWQgaW4gYSBzbGlnaHRseSBzcGljeSBjcmVhbSBzYXVjZSBvdmVyIGEgYmVkIG9mIGljZWJlcmcgbGV0dHVjZSwgdG9wcGVkIHdpdGggcGljbyBkaSBnYWxsby4nLCAnMTEuOTknLCBmcmllZFNocmltcEltZyk7XG5jb25zdCBzZWFmb29kR3VtYm8gPSBjcmVhdGVNZW51SXRlbSgnc3RhcnRlcicsICdTZWFmb29kIEd1bWJvJywgJ0EgdG9tYXRvLWJhc2VkLCB6ZXN0eSBndW1ibywgY2hvY2sgZnVsbCBvZiBzaHJpbXAsIGZpc2gsIHZlZ2dpZXMgYW5kIHJpY2UuIExpa2UgTmV3IE9ybGVhbnMgYmVzdDogYSBiaXQgc3BpY3ksIGJ1dCBub3QgdG9vIGhvdCB0byBoYW5kbGUuJywgJzYuOTknLCBzZWFmb29kR3VtYm9JbWcpO1xuY29uc3QgY2xhbUNob3dkZXIgPSBjcmVhdGVNZW51SXRlbSgnc3RhcnRlcicsICdOZXcgRW5nbGFuZCBDbGFtIENob3dkZXInLCAnQSB0YXN0eSwgc21vb3RoLCB3aGl0ZSBjaG93ZGVyLCBsb2FkZWQgd2l0aCBjbGFtcywgY2VsZXJ5LCBjYXJyb3RzIGFuZCBwb3RhdG9lcy4gQSBjbGFzc2ljIHJlY2lwZSB0aGF0IHJpdmFscyBhbnkgY2hvd2RlciBmcm9tIHRoZSBOZXcgRW5nbGFuZCBjb2FzdC4nLCAnNi45OScsIGNsYW1DaG93ZGVySW1nKTtcbmNvbnN0IGdhcmxpY1JvbGxzID0gY3JlYXRlTWVudUl0ZW0oJ3N0YXJ0ZXInLCAnR2FybGljIFJvbGxzJywgJ1NpeCBjdXRlIGxpdHRsZSBnb2xmIGJhbGwgc2l6ZWQgcm9sbHMsIGlkZWFsIGZvciBhcHBseWluZyBidXR0ZXIgYW5kIGdhcmxpYyB0byB5b3VyIGNoaW4uIFdoaWxlIGluIHRoZSBnZW5lcmFsIHByb3hpbWl0eSBvZiB5b3VyIG1vdXRoLCBlYXRpbmcgaXMgYWxzbyByZWNvbW1lbmRlZC4nLCAnNS45OScsIGdhcmxpY1JvbGxzSW1nKTtcbmNvbnN0IG1venpTdGlja3MgPSBjcmVhdGVNZW51SXRlbSgnc3RhcnRlcicsICdNb3p6YXJlbGxhIFN0aWNrcycsICdTdHItci1yLXItZXRjaCB5b3VyIGFwcGV0aXplciEgU3RyaW5neSwgYnV0IGRlbGljaW91cywgbW96emFyZWxsYSBjaGVlc2UsIGRlZXAgZnJpZWQganVzdCByaWdodC4gU2VydmVkIHdpdGggTWFyaW5hcmEuJywgJzcuOTknLCBtb3p6U3RpY2tzSW1nKTtcbmNvbnN0IHBvdGF0b1NraW5zID0gY3JlYXRlTWVudUl0ZW0oJ3N0YXJ0ZXInLCAnUG90YXRvIFNraW5zJywgJ1RoZSBza2luIG9mIElkYWhvIHBvdGF0b2VzLCBzdXJnaWNhbGx5IHJlbW92ZWQgYW5kIHJlY29uc3RydWN0ZWQgd2l0aCBjaGVkZGFyIGNoZWVzZSBhbmQgYmFjb24gYml0cywgdG8gcHJvZHVjZSBtZWx0IGluIHlvdXIgbW91dGggcG90YXRvIHNraW5zLicsICc2Ljk5JywgcG90YXRvU2tpbnNJbWcpO1xuY29uc3QgZG9scGhpbkZpbmdlcnMgPSBjcmVhdGVNZW51SXRlbSgnc3RhcnRlcicsICdEb2xwaGluIEZpbmdlcnMnLCAnQSBoYWxmLXBvdW5kIG9mIGRvbHBoaW4gc3RyaXBzLCBkZWVwIGZyaWVkIGFuZCBzZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBjb2NrdGFpbCBvciB0YXJ0YXIgc2F1Y2UuJywgJzE0Ljc3JywgZG9scGhpbkZpbmdlcnNJbWcpO1xuXG4vLyBXSU5HU1xuY29uc3QgZml2ZVdpbmdzID0gY3JlYXRlTWVudUl0ZW0oJ3dpbmdzJywgJ0ZpdmUgKDUpIFdpbmdzJywgJ0F2YWlsYWJsZSBpbiBob3QsIG1lZGl1bSwgbWlsZCwgYW5kIGJhcmJlY3VlIGZsYXZvcnMuJywgJzkuOTknLCBmaXZlV2luZ3NJbWcpO1xuY29uc3QgdGVuV2luZ3MgPSBjcmVhdGVNZW51SXRlbSgnd2luZ3MnLCAnVGVuICgxMCkgV2luZ3MnLCAnQXZhaWxhYmxlIGluIGhvdCwgbWVkaXVtLCBtaWxkLCBhbmQgYmFyYmVjdWUgZmxhdm9ycy4nLCAnMTMuOTknLCB0ZW5XaW5nc0ltZyk7XG5jb25zdCB0d2VudHlXaW5ncyA9IGNyZWF0ZU1lbnVJdGVtKCd3aW5ncycsICdUd2VudHkgKDIwKSBXaW5ncycsICdBdmFpbGFibGUgaW4gaG90LCBtZWRpdW0sIG1pbGQsIGFuZCBiYXJiZWN1ZSBmbGF2b3JzLicsICcyMC45OScsIHR3ZW50eVdpbmdzSW1nKTtcbmNvbnN0IGZpZnR5V2luZ3MgPSBjcmVhdGVNZW51SXRlbSgnd2luZ3MnLCAnRmlmdHkgKDUwKSBXaW5ncycsICdBdmFpbGFibGUgaW4gaG90LCBtZWRpdW0sIG1pbGQsIGFuZCBiYXJiZWN1ZSBmbGF2b3JzLicsICczOS45OScsIGZpZnR5V2luZ3NJbWcpO1xuXG4vLyBSSUJTXG5jb25zdCBoYWxmUmFjayA9IGNyZWF0ZU1lbnVJdGVtKCdyaWJzJywgJ0hhbGYtUmFjayBCYWJ5IEJhY2sgUmlicycsICdIYWxmLXJhY2sgb2Ygb3VyIHRlbmRlciwganVpY3ksIFwibWVhdC1mYWxscy1vZmYtdGhlLWJvbmVcIiBiYWJ5IGJhY2sgcmlicywgZHJlbmNoZWQgd2l0aCBvdXIgc3BlY2lhbCBiYXJiZWN1ZSBzYXVjZSwgYW5kIGdyaWxsZWQgdG8gcGVyZmVjdGlvbi4nLCAnMTcuOTknLCBoYWxmUmFja0ltZyk7XG5jb25zdCBmdWxsUmFjayA9IGNyZWF0ZU1lbnVJdGVtKCdyaWJzJywgJ0Z1bGwtUmFjayBCYWJ5IEJhY2sgUmlicycsICdGdWxsLXJhY2sgb2Ygb3VyIHRlbmRlciwganVpY3ksIFwibWVhdC1mYWxscy1vZmYtdGhlLWJvbmVcIiBiYWJ5IGJhY2sgcmlicywgZHJlbmNoZWQgd2l0aCBvdXIgc3BlY2lhbCBiYXJiZWN1ZSBzYXVjZSwgYW5kIGdyaWxsZWQgdG8gcGVyZmVjdGlvbi4nLCAnMjIuOTknLCBmdWxsUmFja0ltZyk7XG5jb25zdCByaWJXaW5ncyA9IGNyZWF0ZU1lbnVJdGVtKCdyaWJzJywgJ0hhbGYtUmFjayAmIFdpbmdzJywgJ0hhbGYtcmFjayBvZiBvdXIgdGVuZGVyLCBqdWljeSwgXCJtZWF0LWZhbGxzLW9mZi10aGUtYm9uZVwiIGJhYnkgYmFjayByaWJzLCBwYWlyZWQgd2l0aCBhIGhhbGYgZG96ZW4gd2luZ3MuJywgJzIxLjQ5JywgcmliV2luZ3NJbWcpO1xuY29uc3QgcmliU3RpY2tlciA9IGNyZWF0ZU1lbnVJdGVtKCdyaWJzJywgJ0hhbGYtUmFjayAmIFN0aWNrZXJzJywgJ0hhbGYtcmFjayBvZiBvdXIgdGVuZGVyLCBqdWljeSwgXCJtZWF0LWZhbGxzLW9mZi10aGUtYm9uZVwiIGJhYnkgYmFjayByaWJzLCBwYWlyZWQgd2l0aCB0aHJlZSBjaGlja2VuIHN0aWNrZXJzLicsICcyMS40OScsIHJpYlN0aWNrZXJzSW1nKTtcbmNvbnN0IHJpYkNoaWNrZW4gPSBjcmVhdGVNZW51SXRlbSgncmlicycsICdIYWxmLVJhY2sgJiBCQlEgQ2hpY2tlbicsICdIYWxmLXJhY2sgb2Ygb3VyIHRlbmRlciwganVpY3ksIFwibWVhdC1mYWxscy1vZmYtdGhlLWJvbmVcIiBiYWJ5IGJhY2sgcmlicywgcGFpcmVkIHdpdGggYSBoYWxmIGJhcmJlY3VlZCBjaGlja2VuLicsICcyMS40OScsIHJpYkNoaWNrZW5JbWcpO1xuY29uc3QgcmliU2hyaW1wID0gY3JlYXRlTWVudUl0ZW0oJ3JpYnMnLCAnSGFsZi1SYWNrICYgU2hyaW1wJywgJ0hhbGYtcmFjayBvZiBvdXIgdGVuZGVyLCBqdWljeSwgXCJtZWF0LWZhbGxzLW9mZi10aGUtYm9uZVwiIGJhYnkgYmFjayByaWJzLCBwYWlyZWQgd2l0aCBhIGhhbGYgZG96ZW4gZnJpZWQgc2hyaW1wLicsICcyMS40OScsIHJpYlNocmltcEltZyk7XG5cbi8vIEJVUkdFUlNcbmNvbnN0IHRleGFzQnVyZyA9IGNyZWF0ZU1lbnVJdGVtKCdidXJnZXInLCAnVGV4YXMgQnVyZ2VyJywgJ0NyaXNweSBiYWNvbiwgY3J1bWJsZWQgYmxldSBjaGVlc2UsIGEgc3RhY2sgb2YgVHVtYmxld2VlZCBPbmlvbnMsIGFsbCBkcml6emxlZCB3aXRoIG91ciBob21lbWFkZSB3aW5nIHNhdWNlLicsICcxMi40OScsIHRleGFzQnVyZ0ltZyk7XG5jb25zdCBjYXJpYkJ1cmcgPSBjcmVhdGVNZW51SXRlbSgnYnVyZ2VyJywgJ0NhcmliYmVhbiBCdXJnZXInLCAnRmxhbmlnYW5cXCdzIGF3YXJkLXdpbm5pbmcgQkJRIHNhdWNlLCBtZWx0ZWQgY2hlZGRhciBjaGVlc2UsIGFuZCB0d28gc3RyaXBzIG9mIGJhY29uLicsICcxMi40OScsIGNhcmliQnVyZ0ltZyk7XG5jb25zdCBiYWhhbWFCdXJnID0gY3JlYXRlTWVudUl0ZW0oJ2J1cmdlcicsICdCYWhhbWEgQnVyZ2VyJywgJ1RoZSBwZXJmZWN0IGJ1cmdlciBmb3IgdGhlIFwiaGFtYnVyZ2VyIHB1cmlzdFwiLCBpLmUuIG5vIFwianVua1wiIHRvIGdldCBpbiB0aGUgd2F5IG9mIHRoYXQgZnJlc2ggYmVlZiBmbGF2b3IsIGNoYXJicm9pbGVkIHRvIHBlcmZlY3Rpb24uJywgJzExLjk5JywgYmFoYW1hQnVyZ0ltZyk7XG5jb25zdCBiaWdEYWRkeUJ1cmcgPSBjcmVhdGVNZW51SXRlbSgnYnVyZ2VyJywgJ0JpZyBEYWRkeSBCdXJnZXInLCAnVGhlIHVsdGltYXRlIGNoZWVzZWJ1cmdlciAtIDIgc2xpY2VzIG9mIEFtZXJpY2FuIGNoZWVzZSBhZGRlZCB0byB0aGUgQmFoYW1hIEJ1cmdlciEgVGhpcyBidXJnZXIgaXMgcGFydGlhbGx5IHJlc3BvbnNpYmxlIGZvciB0aGUgXCJCaWdcIiBpbiBcIkJpZyBEYWRkeSEnLCAnMTIuNDknLCBiaWdEYWRkeUJ1cmdJbWcpO1xuY29uc3QgZmxhbmlnYW5CdXJnID0gY3JlYXRlTWVudUl0ZW0oJ2J1cmdlcicsICdGbGFuaWdhbiBCdXJnZXInLCAnQ292ZXJlZCB3aXRoIHNhdXTDqWVkIG9uaW9ucyBhbmQgbXVzaHJvb21zLCBwbHVzIDIgc2xpY2VzIG9mIFN3aXNzIEFtZXJpY2FuIGNoZWVzZS4nLCAnMTIuNDknLCBmbGFuaWdhbkJ1cmdJbWcpO1xuXG4vLyBTQU5EV0lDSEVTXG5jb25zdCBjaGVlc2VTdGsgPSBjcmVhdGVNZW51SXRlbSgnc2FuZHdpY2gnLCAnUGhpbGFkZWxwaGlhIENoZWVzZSBTdGVhaycsICdTbGljZWQgYmVlZiBzYXV0w6llZCB3aXRoIG9uaW9ucywgYW5kIG11c2hyb29tcyB3aXRoIG1lbHRlZCBTd2lzcyBBbWVyaWNhbiBjaGVlc2Ugb24gYSBob2FnaWUgcm9sbC4nLCAnMTEuOTknLCBjaGVlc2VTdGtJbWcpO1xuY29uc3QgY2hpY2tlblBoaWx5ID0gY3JlYXRlTWVudUl0ZW0oJ3NhbmR3aWNoJywgJ0NoaWNrZW4gUGhpbGx5JywgJ0ZyZXNoIGNoaWNrZW4gc2F1dMOpZWQgd2l0aCBvbmlvbnMsIGFuZCBtdXNocm9vbXMgd2l0aCBtZWx0ZWQgU3dpc3MgQW1lcmljYW4gY2hlZXNlIG9uIGEgaG9hZ2llIHJvbGwuJywgJzExLjk5JywgY2hpY2tlblBoaWx5SW1nKTtcbmNvbnN0IGNoaXBvdENoaWNrZW4gPSBjcmVhdGVNZW51SXRlbSgnc2FuZHdpY2gnLCAnQ2hpcG90bGUgQ2hpY2tlbiBTYW5kd2ljaCcsICdHcmlsbGVkIGNoaWNrZW4gYnJlYXN0IHdpdGggbWVsdGVkIFN3aXNzIGNoZWVzZSwgY3Jpc3AgYmFjb24sIGNoaXBvdGxlIHNhdWNlLCBhbmQgYSBwaWxlIG9mIFR1bWJsZXdlZWQgT25pb25zLicsICcxMC45OScsIGNoaXBvdENoaWNrZW5JbWcpO1xuY29uc3QgdGVyaXlha2lDaGlja2VuID0gY3JlYXRlTWVudUl0ZW0oJ3NhbmR3aWNoJywgJ1Rlcml5YWtpIENoaWNrZW4gU2FuZHdpY2gnLCAnVGVuZGVyIGNoaWNrZW4gYnJlYXN0LCBtYXJpbmF0ZWQgaW4gVGVyaXlha2kgc2F1Y2UsIGNoYXJncmlsbGVkLCBhbmQgY292ZXJlZCB3aXRoIG1lbHRlZCBTd2lzcyBBbWVyaWNhbiBjaGVlc2UgYW5kIHR3byBzdHJpcHMgb2YgYmFjb24uJywgJzEwLjk5JywgdGVyaXlha2lDaGlja2VuSW1nKTtcbmNvbnN0IGRvbHBoaW5TYW5kID0gY3JlYXRlTWVudUl0ZW0oJ3NhbmR3aWNoJywgJ0RvbHBoaW4gU2FuZHdpY2gnLCAnRG9scGhpbiAoYWthIE1haGktTWFoaSkgd2l0aCBsZXR0dWNlIGFuZCB0b21hdG8gb24gYSBLYWlzZXIgcm9sbC4gVGFydGFyIHNhdWNlIGF2YWlsYWJsZSB1cG9uIHJlcXVlc3QuIEJsYWNrZW5lZCwgRnJpZWQsIG9yIEdyaWxsZWQuJywgJ01hcmtldCBQcmljZScsIGRvbHBoaW5TYW5kSW1nKTtcbmNvbnN0IHNhbG1vblNhbmQgPSBjcmVhdGVNZW51SXRlbSgnc2FuZHdpY2gnLCAnU2FsbW9uIFNhbmR3aWNoJywgJ0EgdGFzdHksIHRlbmRlciBmaWxldCBvZiBvdXIgQXRsYW50aWMgU2FsbW9uLCBzZWFzb25lZCB3aXRoIGEgY2hpcG90bGUgcnViLCBncmlsbGVkIGp1c3QgcmlnaHQgYW5kIHNlcnZlZCBvbiBhIHRvYXN0ZWQsIGJ1dHRlcmVkIEthaXNlciByb2xsIHdpdGggYSBzaWRlIG9mIG91ciB3YXktdG9vLWdvb2QgY2hpcG90bGUgc2F1Y2UuJywgJzEwLjk5Jywgc2FsbW9uU2FuZEltZyk7XG5cbi8vIFNFQUZPT0RcbmNvbnN0IGdyaWxsZWRTYWxtb24gPSBjcmVhdGVNZW51SXRlbSgnc2VhZm9vZCcsICdHcmlsbGVkIFNhbG1vbicsICdBIGNoYXJncmlsbGVkIHRlbi1vdW5jZSBmaWxldCBvZiBBdGxhbnRpYyBTYWxtb24uIFlvdXIgcGljayAtIExlbW9uIEdhcmxpYywgVG9hc3RlZCBTZXNhbWUgR2xhemUsIG9yIEJsYWNrZW5lZC4nLCAnMTguOTknLCBncmlsbGVkU2FsbW9uSW1nKTtcbmNvbnN0IHN1cmZUdXJmID0gY3JlYXRlTWVudUl0ZW0oJ3NlYWZvb2QnLCAnU3VyZiAmIFR1cmYnLCAnQW4gZWlnaHQtb3VuY2UgVVNEQSBDaG9pY2UgTi5ZLiBTdHJpcCBTdGVhaywgcGFpcmVkIHdpdGggMS8yIGRvemVuIHBsdW1wIGZyaWVkIHNocmltcC4nLCAnMTkuOTknLCBzdXJmVHVyZkltZyk7XG5jb25zdCBsZW1vblRpbGFwaWEgPSBjcmVhdGVNZW51SXRlbSgnc2VhZm9vZCcsICdMZW1vbiBQZXBwZXIgVGlsYXBpYScsICdUZW5kZXIsIGZsYWt5IFRpbGFwaWEgc2F1dMOpZWQgaW4gb3VyIGNyZWFteSwgaG9tZW1hZGUgTGVtb24gUGVwcGVyIHNhdWNlLicsICcxNi45OScsIGxlbW9uVGlsYXBpYUltZyk7XG5jb25zdCBmaXNoVGFjb3MgPSBjcmVhdGVNZW51SXRlbSgnc2VhZm9vZCcsICdGaXNoIFRhY29zJywgJ1RocmVlIGh1Z2UgdG9ydGlsbGEgc2hlbGxzIGZpbGxlZCB3aXRoIGdyaWxsZWQsIGJsYWNrZW5lZCBvciBkZWVwIGZyaWVkIERvbHBoaW4sIGRpcnR5IHJpY2UsIGxldHR1Y2UsIENoaXBvdGxlIHNhdWNlLCBQaWNvIGRlIEdhbGxvLCBjaGVkZGFyIGNoZWVzZSBhbmQgc291ciBjcmVhbS4gVGhlc2UgdWx0aW1hdGUgZmlzaCB0YWNvcyBjb21lIHdpdGggYmxhY2sgYmVhbnMgYW5kIHJpY2Ugb3IgYW4gYWx0ZXJuYXRlIHBvdGF0byBvciByaWNlIHNpZGUgb2YgeW91ciBjaG9pY2UuJywgJzE1Ljk5JywgZmlzaFRhY29zSW1nKTtcbmNvbnN0IHR1bmFGaWxldCA9IGNyZWF0ZU1lbnVJdGVtKCdzZWFmb29kJywgJ1R1bmEgRW50csOpZScsICdBIGhlYXJ0eSAxMCBvei4gZmlsZXQgb2YgZnJlc2ggVHVuYSwgYmxhY2tlbmVkIG9yIGdyaWxsZWQsIHNlcnZlZCB3aXRoIHBvdGF0byBvciByaWNlLicsICcxOS45OScsIHR1bmFGaWxldEltZyk7XG5cbi8vIFNJREVTXG5jb25zdCBiYWtlZFBvdGF0byA9IGNyZWF0ZU1lbnVJdGVtKCdzaWRlJywgJ0Jha2VkIFBvdGF0bycsICdJZGFob1xcJ3MgYmVzdCwgc2VydmVkIHBpcGluZyBob3Qgd2l0aCBzb3VyIGNyZWFtIGFuZCBidXR0ZXIgcGlsZWQgb24gYXQgeW91ciByZXF1ZXN0LicsICczLjk5JywgYmFrZWRQb3RhdG9JbWcpO1xuY29uc3QgZnJlbmNoRnJpZXMgPSBjcmVhdGVNZW51SXRlbSgnc2lkZScsICdGcmVuY2ggRnJpZXMnLCAnQSBGbGFuaWdhblxcJ3Mgc2lnbmF0dXJlLCAzLzQgb2YgYSBwb3VuZCBvZiBwZXJmZWN0bHkgc2Vhc29uZWQgY3VybHkgZnJpZXMuJywgJzYuOTknLCBmcmVuY2hGcmllc0ltZyk7XG5jb25zdCBzd2VldFBvdGF0byA9IGNyZWF0ZU1lbnVJdGVtKCdzaWRlJywgJ1N3ZWV0IFBvdGF0byBGcmllcycsICdBIGdlbmVyb3VzIGFtb3VudCBvZiB0aGUgdWx0aW1hdGUgc3dlZXQgcG90YXRvIGZyeSwgZGVlcC1mcmllZCwgYW5kIGR1c3RlZCB3aXRoIGNpbm5hbW9uIHN1Z2FyLiBTdWIgc2lkZSB3aXRoIGFueSBzYW5kd2ljaCwgYnVyZ2VyLCBvciBlbnRyZWUuLi4uLi4uLi5BZGQgJDEuOTknLCAnNy45OScsIHN3ZWV0UG90YXRvSW1nKTtcbmNvbnN0IGRpcnR5UmljZSA9IGNyZWF0ZU1lbnVJdGVtKCdzaWRlJywgJ0RpcnR5IFJpY2UnLCAnU29tZXRpbWVzIGNhbGxlZCBcIkNhanVuIFJpY2UsXCIgc29tZXRpbWVzIGNhbGxlZCBcIlNwaWN5IFJpY2UsXCIgYWx3YXlzIGNhbGxlZCBkZWxpY2lvdXMhIEEgc3BpY3kgYmxlbmQgb2YgcmljZSB0aGF0IHdvdWxkIG1ha2UgTmV3IE9ybGVhbnMgcHJvdWQuJywgJzMuOTknLCBkaXJ0eVJpY2VJbWcpO1xuY29uc3QgYmxhY2tCZWFucyA9IGNyZWF0ZU1lbnVJdGVtKCdzaWRlJywgJ0JsYWNrIEJlYW5zICYgUmljZScsICdBIGdlbmVyb3VzIHNlcnZpbmcgb2Ygd2hpdGUgcmljZSwgYmxhY2sgYmVhbnMsIGNob3BwZWQgb25pb25zLCBhbmQgbW9qby4nLCAnMy45OScsIGJsYWNrQmVhbnNJbWcpO1xuXG4vLyBERVNTRVJUXG5jb25zdCBiYW56YWlCcm93bmllID0gY3JlYXRlTWVudUl0ZW0oJ2Rlc3NlcnQnLCAnVGhlIEJhbnphaSBCcm93bmllJywgJ0Egc3VwZXItc2l6ZWQsIHdhcm0sIHRyaXBsZSBjaG9jb2xhdGUgYnJvd25pZSwgcGlsZWQgaGlnaCB3aXRoIEVkeVxcJ3MgdmFuaWxsYSBpY2UgY3JlYW0sIGNvdmVyZWQgd2l0aCBodWdlIGNodW5rcyBvZiBPcmVvIGNvb2tpZXMsIHN1cnJvdW5kZWQgYnkgS2l0IEthdCBiYXJzLCBhbmQgdG9wcGVkIG9mZiB3aXRoIHdoaXBwZWQgY3JlYW0gYW5kIEhlcnNoZXlcXCdzIGNob2NvbGF0ZSBzeXJ1cCEgVGhlIHVsdGltYXRlIGNob2NvbGF0ZSBsb3ZlclxcJ3MgY2hhbGxlbmdlIScsICc5LjQ5JywgYmFuemFpQnJvd25pZUltZyk7XG5jb25zdCBrZXlMaW1lID0gY3JlYXRlTWVudUl0ZW0oJ2Rlc3NlcnQnLCAnS2V5IExpbWUgUGllJywgJ0Egc21vb3RoIGFuZCBjcmVhbXksIGxpZ2h0IHRleHR1cmVkIHBpZSB0aGF0IGlzIGZ1bGwgb2YgdGhlIHRhbmd5IHRhc3RlIG9mIGdlbnVpbmUgS2V5IExpbWVzLCByZXN0aW5nIG9uIGEgZGVsaWNpb3VzIGdyYWhhbSBjcmFja2VyIGNydXN0LCBhbmQgdG9wcGVkIHdpdGggYSBkb2xsb3Agb2Ygd2hpcHBlZCBjcmVhbS4nLCAnNi45OScsIGtleUxpbWVJbWcpO1xuY29uc3QgY2hvY0Nha2UgPSBjcmVhdGVNZW51SXRlbSgnZGVzc2VydCcsICdDaG9jb2xhdGUgRWNzdGFjeScsICdBIGhvbWVtYWRlLXN0eWxlLCBtb2lzdCBkYXJrIGNob2NvbGF0ZSBsYXllciBjYWtlLCBmaWxsZWQgYW5kIGZyb3N0ZWQgd2l0aCBhIHJpY2gsIGRhcmsgZnVkZ2UgaWNpbmcsIGFuZCBzdXJyb3VuZGVkIHdpdGggYW4gb3V0ZXIgbGF5ZXIgb2YgbWluaSBjaG9jb2xhdGUgY2hpcHMuJywgJzYuOTknLCBjaG9jQ2FrZUltZyk7XG5jb25zdCBkdWxjZUxlY2hlID0gY3JlYXRlTWVudUl0ZW0oJ2Rlc3NlcnQnLCAnRHVsY2UgZGUgTGVjaGUgQ2hlZXNlY2FrZScsICdBIHVuaXF1ZSBibGVuZGVkIG1peHR1cmUgb2YgY3JlYW15IG1pbGsgY2FyYW1lbCBhbmQgdmFuaWxsYSBjaGVlc2VjYWtlIG9uIGEgZ3JhaGFtIGNyYWNrZXIgY3J1c3QsIHRvcHBlZCB3aXRoIGEgc3dpcmwgb2YgY2FyYW1lbC4nLCAnNi45OScsIGR1bGNlTGVjaGVJbWcpO1xuY29uc3QgZmxhblNoZW5hbiA9IGNyZWF0ZU1lbnVJdGVtKCdkZXNzZXJ0JywgJ0ZsYW5pZ2FuXFwncyBTaGVuYW5pZ2FuJywgJ0EgZ2lhbnQgc2xpY2Ugb2YgY2FuZHkgd2FsbnV0IGFwcGxlIHBpZSwgdG9wcGVkIHdpdGggYSBtb3VudGFpbiBvZiBFZHlcXCdzIHZhbmlsbGEgaWNlIGNyZWFtLCBhIHJpdmVyIG9mIGNhcmFtZWwgYW5kIGFuIGF2YWxhbmNoZSBvZiBIZWF0aCBCYXIgY3J1bmNoLicsICc4LjQ5JywgZmxhblNoZW5hbkltZyk7XG5cbmNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1kaXYnKTtcbmNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbm1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdCcpO1xuY29udGVudC5hcHBlbmRDaGlsZChtZW51RGl2KTtcbm1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdEl0ZW0oKSB7XG4gIGNvbnN0IG1lbnVMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG1lbnVMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QtaXRlbScpO1xuICBjb25zdCBtZW51TGlzdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUxpc3RJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdC1pdGVtLWRpdicpO1xuICBjb25zdCBtZW51TGlzdEl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbWVudUxpc3RJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcbiAgY29uc3QgbWVudUxpc3RJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudUxpc3RJdGVtRGVzYy5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QtaXRlbS1kZXNjJyk7XG4gIGNvbnN0IG1lbnVMaXN0SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBtZW51TGlzdEl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QtaXRlbS1wcmljZScpO1xuICBjb25zdCBtZW51TGlzdEl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbWVudUxpc3RJdGVtSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdC1pdGVtLWltZycpO1xuXG4gIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVMaXN0SXRlbSk7XG4gIG1lbnVMaXN0SXRlbS5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW1EaXYpO1xuICBtZW51TGlzdEl0ZW1EaXYuYXBwZW5kQ2hpbGQobWVudUxpc3RJdGVtTmFtZSk7XG4gIG1lbnVMaXN0SXRlbURpdi5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW1EZXNjKTtcbiAgbWVudUxpc3RJdGVtRGl2LmFwcGVuZENoaWxkKG1lbnVMaXN0SXRlbVByaWNlKTtcbiAgbWVudUxpc3RJdGVtRGl2LmFwcGVuZENoaWxkKG1lbnVMaXN0SXRlbUltZyk7XG4gIHJldHVybiBbbWVudUxpc3RJdGVtTmFtZSwgbWVudUxpc3RJdGVtRGVzYywgbWVudUxpc3RJdGVtUHJpY2UsIG1lbnVMaXN0SXRlbUltZ107XG59XG5cbmZ1bmN0aW9uIGFkZE1lbnVUZXh0KGFycikge1xuICBjb25zdCBwcm9wZXJ0aWVzID0gW3RoaXMubmFtZSwgdGhpcy5kZXNjLCB0aGlzLnByaWNlLCB0aGlzLmltZ107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByb3BlcnRpZXNbaV0gPT09IHRoaXMuaW1nKSB7XG4gICAgICBhcnJbaV0uc3JjID0gcHJvcGVydGllc1tpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyW2ldLnRleHRDb250ZW50ID0gcHJvcGVydGllc1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudVNpZGViYXIoYXJyKSB7XG4gIGNvbnN0IHR5cGVzID0gbmV3IFNldCgpO1xuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIHR5cGVzLmFkZChpdGVtLnR5cGUpO1xuICB9KTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICB0eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCB0eXBlKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0nKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IHR5cGU7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xuICByZXR1cm4gc2lkZWJhcjtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlTWVudUxpc3RJdGVtLFxuICBhZGRNZW51VGV4dCxcbiAgY3JlYXRlTWVudVNpZGViYXIsXG4gIG1lbnVBcnIsXG4gIG1lbnVEaXYsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2ZsYW5pZ2Fucy1sb2dvLnBuZyc7XG5pbXBvcnQgdHdpdHRlciBmcm9tICcuL2ltYWdlcy90d2l0dGVyLnN2Zyc7XG5pbXBvcnQgaW5zdGFncmFtIGZyb20gJy4vaW1hZ2VzL2luc3RhZ3JhbS5zdmcnO1xuaW1wb3J0IGdpdGh1YiBmcm9tICcuL2ltYWdlcy9naXRodWIuc3ZnJztcbmltcG9ydCB7Y3JlYXRlTWVudUxpc3RJdGVtLCBhZGRNZW51VGV4dCwgY3JlYXRlTWVudVNpZGViYXIsIG1lbnVBcnIsIG1lbnVEaXZ9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQge2NyZWF0ZUxvY2F0aW9uTGlzdEl0ZW0sIGFkZExvY2F0aW9uVGV4dCwgbG9jQXJyLCBsb2NhdGlvbkRpdn0gZnJvbSAnLi9sb2NhdGlvbnMuanMnO1xuaW1wb3J0IHtjb250YWN0RGl2fSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuLy8gVEFCU1xuY29uc3QgdGFic0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnN0IGxvY2F0aW9uVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xudGFic0xpc3QuY2xhc3NMaXN0LmFkZCgndGFicy1saXN0Jyk7XG5ob21lVGFiLnRleHRDb250ZW50ID0gJ0hvbWUnO1xubWVudVRhYi50ZXh0Q29udGVudCA9ICdNZW51JztcbmxvY2F0aW9uVGFiLnRleHRDb250ZW50ID0gJ0xvY2F0aW9ucyc7XG5jb250YWN0VGFiLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuaGVhZGVyLmFwcGVuZENoaWxkKHRhYnNMaXN0KTtcbnRhYnNMaXN0LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xudGFic0xpc3QuYXBwZW5kQ2hpbGQobWVudVRhYik7XG50YWJzTGlzdC5hcHBlbmRDaGlsZChsb2NhdGlvblRhYik7XG50YWJzTGlzdC5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuY29uc3QgaGVhZGVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmhlYWRlckltYWdlLnNyYyA9IGxvZ287XG5oZWFkZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Ib21lVGFiKTtcbmhlYWRlckltYWdlLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbmhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJJbWFnZSk7XG5cbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hYm91dC50ZXh0Q29udGVudCA9ICdGbGFuaWdhblxcJ3MgaXMgYSBsYWlkYmFjayBmYW1pbHktcnVuIHJlc3RhdXJhbnQgYW5jaG9yZWQgYnkgYSBjb21taXRtZW50IHRvIGV4Y2VwdGlvbmFsIGZvb2QgYW5kIGRyaW5rLCB3YXJtIGhvc3BpdGFsaXR5LCBncmVhdCB2YWx1ZSwgYW5kIGdvb2QgZnVuLiBBIGJlbG92ZWQgU291dGggRmxvcmlkYSBpbnN0aXR1dGlvbiBzaW5jZSAxOTU5LCB0aGUgRmxhbmlnYW5cXCdzIG5hbWUgaXMgcHJldHR5IG11Y2ggc3lub255bW91cyB3aXRoIGdvb2QgdGltZXMuIEZsYW5pZ2FuXFwncyB3ZWxjb21lcyBndWVzdHMgZnJvbSBuZWFyIGFuZCBmYXIgZXZlcnkgZGF5IG9mIHRoZSB5ZWFyLCBzZXJ2aW5nIGNvbnRpbnVvdXNseSBmcm9tIGx1bmNoIHRvIGxhdGUgbmlnaHQuJztcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbmZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbmZvb3Rlci50ZXh0Q29udGVudCA9ICdGb2xsb3cgdXMgb24gc29jaWFsIG1lZGlhISc7XG5jb250ZW50LmFwcGVuZChmb290ZXIpO1xuXG5jb25zdCB0d2l0dGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnN0IHR3aXR0ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnR3aXR0ZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3R3aXR0ZXIuY29tL0ZsYW5pZ2Fuc0ZMJyk7XG50d2l0dGVySW1nLnNyYyA9IHR3aXR0ZXI7XG5mb290ZXIuYXBwZW5kKHR3aXR0ZXJMaW5rKTtcbnR3aXR0ZXJMaW5rLmFwcGVuZCh0d2l0dGVySW1nKTtcblxuY29uc3QgaW5zdGFncmFtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnN0IGluc3RhZ3JhbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuaW5zdGFncmFtTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9mbGFuaWdhbnNmbC8/aGw9ZW4nKTtcbmluc3RhZ3JhbUltZy5zcmMgPSBpbnN0YWdyYW07XG5mb290ZXIuYXBwZW5kKGluc3RhZ3JhbUxpbmspO1xuaW5zdGFncmFtTGluay5hcHBlbmQoaW5zdGFncmFtSW1nKTtcblxuY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnN0IGdpdGh1YkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL0RhdGVPZkJpcnRoNDAnKTtcbmdpdGh1YkltZy5zcmMgPSBnaXRodWI7XG5mb290ZXIuYXBwZW5kKGdpdGh1YkxpbmspO1xuZ2l0aHViTGluay5hcHBlbmQoZ2l0aHViSW1nKTtcblxuY29uc3Qgc2lkZWJhciA9IGNyZWF0ZU1lbnVTaWRlYmFyKG1lbnVBcnIpO1xubWVudURpdi5hcHBlbmQoc2lkZWJhcik7XG5cbmFkZE1lbnVUb0RPTSgpO1xuYWRkTG9jYXRpb25zVG9ET00oKTtcblxubWVudURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xubG9jYXRpb25EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbmNvbnRhY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbmhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZC10YWInKTtcblxuLy8gVGhlIGNvZGUgYmVsb3cgaW5pdGlhbGl6ZXMgdGhlIG1lbnUgYW5kIHNob3dzIHRoZSAnc3RhcnRlcnMnIHN1Ym1lbnUgYnkgZGVmYXVsdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0ZXInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbmNvbnN0IGZpbHRlcmVkTWVudUFyciA9IG1lbnVBcnIuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09ICdzdGFydGVyJyk7XG5mb3IgKGNvbnN0IGl0ZW0gb2YgZmlsdGVyZWRNZW51QXJyKSB7XG4gIGNvbnN0IG1lbnVQcm9wQXJyID0gY3JlYXRlTWVudUxpc3RJdGVtKCk7XG4gIGFkZE1lbnVUZXh0LmNhbGwoaXRlbSwgbWVudVByb3BBcnIpO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiB1c2VzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGRldGVjdCB3aGljaCBpdGVtIHR5cGUgaXMgc2VsZWN0ZWQgaW4gdGhlIG1lbnVcbi8vIGFuZCB0aGVuIGRpc3BsYXlzIG9ubHkgdGhlIG9iamVjdHMgdGhhdCBtYXRjaCB0aGUgY29ycmVzcG9uZGluZyBpdGVtIHR5cGVcbmZ1bmN0aW9uIGFkZE1lbnVUb0RPTSgpIHtcbiAgbGV0IGZpbHRlcmVkTWVudUFyciA9IFtdO1xuICBjb25zdCBzaWRlYmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1pdGVtJyk7XG4gIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbGlzdCcpO1xuICBzaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuc2lkZWJhci1pdGVtJykpIHtcbiAgICAgIGZpbHRlcmVkTWVudUFyciA9IG1lbnVBcnIuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IGUudGFyZ2V0LmlkKTtcbiAgICAgIG1lbnVMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZpbHRlcmVkTWVudUFycikge1xuICAgICAgICBjb25zdCBtZW51UHJvcEFyciA9IGNyZWF0ZU1lbnVMaXN0SXRlbSgpO1xuICAgICAgICBhZGRNZW51VGV4dC5jYWxsKGl0ZW0sIG1lbnVQcm9wQXJyKTtcbiAgICAgIH07XG4gICAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgcmVtb3ZlcyB0aGUgJ2FjdGl2ZScgY2xhc3MgZnJvbSBhbGwgdGFic1xuICAgICAgLy8gYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGNsaWNrZWQgdGFiXG4gICAgICBzaWRlYmFySXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZExvY2F0aW9uc1RvRE9NKCkge1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgbG9jQXJyKSB7XG4gICAgY29uc3QgbG9jUHJvcEFyciA9IGNyZWF0ZUxvY2F0aW9uTGlzdEl0ZW0oKTtcbiAgICBhZGRMb2NhdGlvblRleHQuY2FsbChpdGVtLCBsb2NQcm9wQXJyKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb3BlbkhvbWVUYWIoKSB7XG4gIGFib3V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBtZW51RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGxvY2F0aW9uRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRhY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkLXRhYicpO1xuICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtdGFiJyk7XG4gIGxvY2F0aW9uVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtdGFiJyk7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZC10YWInKTtcbn1cblxuZnVuY3Rpb24gb3Blbk1lbnVUYWIoKSB7XG4gIGFib3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIG1lbnVEaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgbG9jYXRpb25EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtdGFiJyk7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZC10YWInKTtcbiAgbG9jYXRpb25UYWIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZC10YWInKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkLXRhYicpO1xufVxuXG5mdW5jdGlvbiBvcGVuTG9jYXRpb25UYWIoKSB7XG4gIGFib3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIG1lbnVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbG9jYXRpb25EaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtdGFiJyk7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZC10YWInKTtcbiAgbG9jYXRpb25UYWIuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZC10YWInKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkLXRhYicpO1xufVxuXG5mdW5jdGlvbiBvcGVuQ29udGFjdFRhYigpIHtcbiAgYWJvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbWVudURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBsb2NhdGlvbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb250YWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZC10YWInKTtcbiAgbWVudVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkLXRhYicpO1xuICBsb2NhdGlvblRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkLXRhYicpO1xuICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQtdGFiJyk7XG59XG5cbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuSG9tZVRhYik7XG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnVUYWIpO1xubG9jYXRpb25UYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTG9jYXRpb25UYWIpO1xuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Db250YWN0VGFiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==