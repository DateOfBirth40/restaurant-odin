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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --green: rgb(40, 95, 67);\n    --background: rgb(255, 252, 247);\n    --button-hover: rgb(30, 73, 51);\n    --form-margin: 10px;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    list-style-type: none;\n    padding-left: 0;\n    background-color: var(--background);\n}\n\n.tabs-list {\n    display: flex;\n    width: auto;\n    justify-content: center;\n    gap: 10px;\n}\n\n.tabs-list > * {\n    border: 1px solid black;\n    padding: 10px;\n}\n\n.tabs-list > *:hover {\n    /* color: var(--green); */\n    border: 1px solid var(--green);\n    cursor: pointer;\n}\n\n.clicked-tab {\n    color: white;\n    background-color: var(--green);\n}\n\n.menu-div {\n    display: grid;\n    grid-template-columns: 0.75fr 2fr;\n    grid-template-rows: 1fr;\n}\n\n.sidebar {\n    grid-area: 1 / 1 / 1 / 1;\n    background-color: var(--green);\n    /* max-width: 200px; */\n}\n\n.sidebar li {\n    background-color: var(--green);\n    color: white;\n    padding: 20px;\n    font-size: 16px;\n    text-transform: capitalize;\n    cursor: pointer;\n    /* transition: background 250ms ease-in-out, transform 150ms ease; */\n}\n\n.sidebar li:hover {\n    background-color: var(--button-hover);\n}\n\n.active {\n\n}\n\n.menu-list {\n    grid-area: 1 / 2 / 1 / 2;\n}\n\n.menu-list-item-div {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 0.5fr 1fr 0.5fr;\n    border: 1px solid black;\n    padding: 5px;\n}\n\n.menu-list-item-name {\n    grid-area: 1 / 2 / 1 / 2;\n}\n\n.menu-list-item-name, .loc-list-item-name {\n    color: var(--green);\n    font-family: 'Tahoma', sans-serif;\n    /* font-weight: bolder; */\n    text-transform: uppercase;\n}\n\n.menu-list-item-desc {\n    grid-area: 2 / 2 / 2 / 2;\n}\n\n.menu-list-item-price {\n    grid-area: 3 / 2 / 3 / 2;\n    color: var(--green);\n    font-weight: bold;\n}\n\n.menu-list-item-img {\n    grid-area: 1 / 1 / 3 / 1;\n    padding-right: 10px;\n}\n\n.loc-list-item-img {\n    height: auto;\n    width: 100%;\n}\n\n.contact-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.form-div {\n    display: flex;\n    flex-direction: column;\n    min-width: 400px;\n    max-width: 400px;\n    border: 1px solid black;\n}\n\n.form-div > h1 {\n    color: white;\n    background-color: var(--green);\n    text-transform: uppercase;\n    text-align: center;\n    padding: 10px;\n}\n\n.form-div > label {\n    font-weight: bold;\n    margin-left: var(--form-margin);\n}\n\n.form-div > select, .form-div > input, #comment {\n    margin: var(--form-margin);\n    margin-bottom: 15px;\n    background-color: white;\n    border: 1px solid black;\n    padding: 5px;\n    border-radius: 3px;\n}\n\n#comment {\n    resize: vertical;\n}\n\n.form-div > button {\n    color: white;\n    background-color: var(--green);\n    display: inline-block;\n    border: none;\n    padding: 1rem 2rem;\n    margin: var(--form-margin);\n    text-decoration: none;\n    font-family: sans-serif;\n    font-size: 1rem;\n    line-height: 1;\n    cursor: pointer;\n    text-align: center;\n    transition: background 250ms ease-in-out, transform 150ms ease;\n}\n\n.form-div > button:hover,\n.form-div > button:focus {\n    background-color: var(--button-hover);\n}\n\n.form-div > button:focus,\n.active {\n    outline: 1px solid white;\n    outline-offset: -4px;\n}\n\n.form-div > button:active {\n    transform: scale(0.99);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,gCAAgC;IAChC,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;IACzC,qBAAqB;IACrB,eAAe;IACf,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;IACxB,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,eAAe;IACf,0BAA0B;IAC1B,eAAe;IACf,oEAAoE;AACxE;;AAEA;IACI,qCAAqC;AACzC;;AAEA;;AAEA;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mBAAmB;IACnB,iCAAiC;IACjC,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,0BAA0B;IAC1B,qBAAqB;IACrB,uBAAuB;IACvB,eAAe;IACf,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,8DAA8D;AAClE;;AAEA;;IAEI,qCAAqC;AACzC;;AAEA;;IAEI,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[":root {\n    --green: rgb(40, 95, 67);\n    --background: rgb(255, 252, 247);\n    --button-hover: rgb(30, 73, 51);\n    --form-margin: 10px;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    list-style-type: none;\n    padding-left: 0;\n    background-color: var(--background);\n}\n\n.tabs-list {\n    display: flex;\n    width: auto;\n    justify-content: center;\n    gap: 10px;\n}\n\n.tabs-list > * {\n    border: 1px solid black;\n    padding: 10px;\n}\n\n.tabs-list > *:hover {\n    /* color: var(--green); */\n    border: 1px solid var(--green);\n    cursor: pointer;\n}\n\n.clicked-tab {\n    color: white;\n    background-color: var(--green);\n}\n\n.menu-div {\n    display: grid;\n    grid-template-columns: 0.75fr 2fr;\n    grid-template-rows: 1fr;\n}\n\n.sidebar {\n    grid-area: 1 / 1 / 1 / 1;\n    background-color: var(--green);\n    /* max-width: 200px; */\n}\n\n.sidebar li {\n    background-color: var(--green);\n    color: white;\n    padding: 20px;\n    font-size: 16px;\n    text-transform: capitalize;\n    cursor: pointer;\n    /* transition: background 250ms ease-in-out, transform 150ms ease; */\n}\n\n.sidebar li:hover {\n    background-color: var(--button-hover);\n}\n\n.active {\n\n}\n\n.menu-list {\n    grid-area: 1 / 2 / 1 / 2;\n}\n\n.menu-list-item-div {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 0.5fr 1fr 0.5fr;\n    border: 1px solid black;\n    padding: 5px;\n}\n\n.menu-list-item-name {\n    grid-area: 1 / 2 / 1 / 2;\n}\n\n.menu-list-item-name, .loc-list-item-name {\n    color: var(--green);\n    font-family: 'Tahoma', sans-serif;\n    /* font-weight: bolder; */\n    text-transform: uppercase;\n}\n\n.menu-list-item-desc {\n    grid-area: 2 / 2 / 2 / 2;\n}\n\n.menu-list-item-price {\n    grid-area: 3 / 2 / 3 / 2;\n    color: var(--green);\n    font-weight: bold;\n}\n\n.menu-list-item-img {\n    grid-area: 1 / 1 / 3 / 1;\n    padding-right: 10px;\n}\n\n.loc-list-item-img {\n    height: auto;\n    width: 100%;\n}\n\n.contact-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.form-div {\n    display: flex;\n    flex-direction: column;\n    min-width: 400px;\n    max-width: 400px;\n    border: 1px solid black;\n}\n\n.form-div > h1 {\n    color: white;\n    background-color: var(--green);\n    text-transform: uppercase;\n    text-align: center;\n    padding: 10px;\n}\n\n.form-div > label {\n    font-weight: bold;\n    margin-left: var(--form-margin);\n}\n\n.form-div > select, .form-div > input, #comment {\n    margin: var(--form-margin);\n    margin-bottom: 15px;\n    background-color: white;\n    border: 1px solid black;\n    padding: 5px;\n    border-radius: 3px;\n}\n\n#comment {\n    resize: vertical;\n}\n\n.form-div > button {\n    color: white;\n    background-color: var(--green);\n    display: inline-block;\n    border: none;\n    padding: 1rem 2rem;\n    margin: var(--form-margin);\n    text-decoration: none;\n    font-family: sans-serif;\n    font-size: 1rem;\n    line-height: 1;\n    cursor: pointer;\n    text-align: center;\n    transition: background 250ms ease-in-out, transform 150ms ease;\n}\n\n.form-div > button:hover,\n.form-div > button:focus {\n    background-color: var(--button-hover);\n}\n\n.form-div > button:focus,\n.active {\n    outline: 1px solid white;\n    outline-offset: -4px;\n}\n\n.form-div > button:active {\n    transform: scale(0.99);\n}"],"sourceRoot":""}]);
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
/* harmony export */   "locationList": () => (/* binding */ locationList)
/* harmony export */ });
/* harmony import */ var _coconut_grove_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coconut-grove.png */ "./src/coconut-grove.png");
/* harmony import */ var _doral_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doral.png */ "./src/doral.png");
/* harmony import */ var _kendall_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kendall.png */ "./src/kendall.png");
/* harmony import */ var _pinecrest_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pinecrest.png */ "./src/pinecrest.png");
/* harmony import */ var _westchester_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./westchester.png */ "./src/westchester.png");
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */






function Location(name, address, phone, hours, img) {
  this.name = name;
  this.address = address;
  this.phone = phone;
  this.hours = hours;
  this.img = img;
};

const coconutGrove = new Location('Coconut Grove', '2721 Bird Avenue, Miami, FL 33133', '(305) 446-1114', {open: '11', close: '4:30'}, _coconut_grove_png__WEBPACK_IMPORTED_MODULE_0__);
const doral = new Location('Doral', '8695 NW 12th Street, Miami, FL 33126', '(786) 845-9366', {open: '11', close: '1'}, _doral_png__WEBPACK_IMPORTED_MODULE_1__);
const kendall = new Location('Kendall', '12790 SW 88th Street, Miami, FL 33186', '(305) 380-0521', {open: '11', close: '1'}, _kendall_png__WEBPACK_IMPORTED_MODULE_2__);
const pinecrest = new Location('Pinecrest', '11415 S Dixie Highway, Miami, FL 33156', '(305) 378-4000', {open: '11', close: '1'}, _pinecrest_png__WEBPACK_IMPORTED_MODULE_3__);
const westchester = new Location('Westchester', '9857 SW 40th Street, Miami, FL 33165', '(305) 207-7427', {open: '11', close: '1:30'}, _westchester_png__WEBPACK_IMPORTED_MODULE_4__);

const locArr = [coconutGrove, doral, kendall, pinecrest, westchester];

const locationDiv = document.createElement('div');
const locationList = document.createElement('ul');
content.appendChild(locationDiv);
locationDiv.appendChild(locationList);

// Add get directions button with a link to the address below each location
function createLocationListItem() {
  const locationListItem = document.createElement('li');
  locationListItem.classList.add('loc-list-item');
  const locationListItemDiv = document.createElement('div');
  locationListItemDiv.classList.add('loc-list-item-div');
  const locationListItemName = document.createElement('h3');
  locationListItemName.classList.add('loc-list-item-name');
  const locationListItemAddress = document.createElement('p');
  locationListItemAddress.classList.add('loc-list-item-address');
  const locationListItemPhone = document.createElement('p');
  locationListItemPhone.classList.add('loc-list-item-phone');
  const locationListItemHours = document.createElement('p');
  locationListItemHours.classList.add('loc-list-item-hours');
  const locationListItemImg = document.createElement('img');
  locationListItemImg.classList.add('loc-list-item-img');

  locationList.appendChild(locationListItem);
  locationListItem.appendChild(locationListItemDiv);
  locationListItemDiv.appendChild(locationListItemName);
  locationListItemDiv.appendChild(locationListItemAddress);
  locationListItemDiv.appendChild(locationListItemPhone);
  locationListItemDiv.appendChild(locationListItemHours);
  locationListItemDiv.appendChild(locationListItemImg);
  return [locationListItemName, locationListItemAddress, locationListItemPhone, locationListItemHours, locationListItemImg];
}

function addLocationText(arr) {
  const properties = [this.name, this.address, this.phone, this.hours, this.img];
  for (let i = 0; i < arr.length; i++) {
    if (properties[i] === this.hours) {
      arr[i].textContent = `Every Day: ${this.hours['open']} AM - ${this.hours['close']} AM`;
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
/* harmony import */ var _rib_rolls_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rib-rolls.webp */ "./src/rib-rolls.webp");
/* harmony import */ var _tumbleweed_onions_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tumbleweed-onions.webp */ "./src/tumbleweed-onions.webp");
/* harmony import */ var _firecracker_shrimp_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firecracker-shrimp.webp */ "./src/firecracker-shrimp.webp");
/* harmony import */ var _texas_burger_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texas-burger.webp */ "./src/texas-burger.webp");
/* harmony import */ var _caribbean_burger_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./caribbean-burger.webp */ "./src/caribbean-burger.webp");
/* harmony import */ var _cheese_steak_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cheese-steak.webp */ "./src/cheese-steak.webp");
/* harmony import */ var _chipotle_chicken_sandwich_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chipotle-chicken-sandwich.webp */ "./src/chipotle-chicken-sandwich.webp");
/* harmony import */ var _dolphin_sandwich_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dolphin-sandwich.webp */ "./src/dolphin-sandwich.webp");
/* harmony import */ var _grilled_salmon_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grilled-salmon.webp */ "./src/grilled-salmon.webp");
/* harmony import */ var _surf_n_turf_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./surf-n-turf.webp */ "./src/surf-n-turf.webp");
/* harmony import */ var _tilapia_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tilapia.webp */ "./src/tilapia.webp");
/* harmony import */ var _baked_potato_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./baked-potato.webp */ "./src/baked-potato.webp");
/* harmony import */ var _sweet_potato_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sweet-potato.webp */ "./src/sweet-potato.webp");
/* harmony import */ var _french_fries_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./french-fries.webp */ "./src/french-fries.webp");
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */















function MenuItem(type, name, desc, price, img) {
  this.type = type;
  this.name = name;
  this.desc = desc;
  this.price = price;
  this.img = img;
};

// STARTERS
const ribRolls = new MenuItem('starter', 'Joe\'s Rockin\' Rib Rolls', 'Homemade, deep-fried egg rolls stuffed with meat from our famous baby back ribs, pulled pork, cheddar cheese, onions, and Flanigan\'s BBQ sauce.', '11.99', _rib_rolls_webp__WEBPACK_IMPORTED_MODULE_0__);
const tumbleOnions = new MenuItem('starter', 'Tumbleweed Onions', 'Thinly sliced jumbo onions, lightly battered and fried, with a side of honey mustard.', '6.99', _tumbleweed_onions_webp__WEBPACK_IMPORTED_MODULE_1__);
const friedShrimp = new MenuItem('starter', 'Firecracker Shrimp', 'A dozen plump, deep-fried shrimp, tossed in a slightly spicy cream sauce over a bed of iceberg lettuce, topped with pico di gallo.', '11.99', _firecracker_shrimp_webp__WEBPACK_IMPORTED_MODULE_2__);

// TEN OUNCE BURGERS
const texasBurg = new MenuItem('burger', 'Texas Burger', 'Crispy bacon, crumbled bleu cheese, a stack of Tumbleweed Onions, all drizzled with our homemade wing sauce.', '12.49', _texas_burger_webp__WEBPACK_IMPORTED_MODULE_3__);
const caribBurg = new MenuItem('burger', 'Caribbean Burger', 'Flanigan\'s award-winning BBQ sauce, melted cheddar cheese, and two strips of bacon.', '12.49', _caribbean_burger_webp__WEBPACK_IMPORTED_MODULE_4__);

// WAY TOO BIG SANDWICHES
const cheeseStk = new MenuItem('sandwich', 'Philadelphia Cheese Steak', 'Sliced beef sautéed with onions, and mushrooms with melted Swiss American cheese on a hoagie roll.', '11.99', _cheese_steak_webp__WEBPACK_IMPORTED_MODULE_5__);
const chipotChicken = new MenuItem('sandwich', 'Chipotle Chicken Stack Sandwich', 'Grilled chicken breast with melted Swiss cheese, crisp bacon, chipotle sauce, and a pile of Tumbleweed Onions.', '10.99', _chipotle_chicken_sandwich_webp__WEBPACK_IMPORTED_MODULE_6__);
const dolphinSand = new MenuItem('sandwich', 'Dolphin Sandwich', 'Dolphin (aka Mahi-Mahi) with lettuce and tomato on a Kaiser roll. Tartar sauce available upon request. Blackened, Fried, or Grilled.', 'Market Price', _dolphin_sandwich_webp__WEBPACK_IMPORTED_MODULE_7__);

// SEAFOOD
const grilledSalmon = new MenuItem('seafood', 'Grilled Salmon', 'A chargrilled ten-ounce filet of Atlantic Salmon. Your pick - Lemon Garlic, Toasted Sesame Glaze, or Blackened.', '18.99', _grilled_salmon_webp__WEBPACK_IMPORTED_MODULE_8__);
const surfTurf = new MenuItem('seafood', 'Surf & Turf', 'An eight-ounce USDA Choice N.Y. Strip Steak, paired with 1/2 dozen plump fried shrimp.', '19.99', _surf_n_turf_webp__WEBPACK_IMPORTED_MODULE_9__);
const lemonTilapia = new MenuItem('seafood', 'Lemon Pepper Tilapia', 'Tender, flaky Tilapia sautéed in our creamy, homemade Lemon Pepper sauce.', '16.99', _tilapia_webp__WEBPACK_IMPORTED_MODULE_10__);

// SIDES
const bakedPotato = new MenuItem('side', 'Baked Potato', 'Idaho\'s best, served piping hot with sour cream and butter piled on at your request.', '3.99', _baked_potato_webp__WEBPACK_IMPORTED_MODULE_11__);
const frenchFries = new MenuItem('side', 'French Fries', 'A Flanigan\'s signature, 3/4 of a pound of perfectly seasoned curly fries.', '6.99', _french_fries_webp__WEBPACK_IMPORTED_MODULE_13__);
const sweetPotato = new MenuItem('side', 'Sweet Potato Fries', 'A generous amount of the ultimate sweet potato fry, deep-fried, and dusted with cinnamon sugar. Sub side with any sandwich, burger, or entree.........Add $1.99', '7.99', _sweet_potato_webp__WEBPACK_IMPORTED_MODULE_12__);

// Find a way to automatically add to this array when a new MenuItem is created
// May need to add a class to menu items to then use .querySelectorAll()
const menuArr = [ribRolls, tumbleOnions, friedShrimp, texasBurg, caribBurg, cheeseStk, chipotChicken, dolphinSand, grilledSalmon, surfTurf, lemonTilapia, bakedPotato, frenchFries, sweetPotato];

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
  menuListItemName.classList.add('menu-list-item-name');
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

/***/ "./src/baked-potato.webp":
/*!*******************************!*\
  !*** ./src/baked-potato.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18f24fc7d4d2c55648ea.webp";

/***/ }),

/***/ "./src/caribbean-burger.webp":
/*!***********************************!*\
  !*** ./src/caribbean-burger.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d168c04b278ccf90081c.webp";

/***/ }),

/***/ "./src/cheese-steak.webp":
/*!*******************************!*\
  !*** ./src/cheese-steak.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "060cd028e82a462144d2.webp";

/***/ }),

/***/ "./src/chipotle-chicken-sandwich.webp":
/*!********************************************!*\
  !*** ./src/chipotle-chicken-sandwich.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b97a45c551ddc678ee8.webp";

/***/ }),

/***/ "./src/coconut-grove.png":
/*!*******************************!*\
  !*** ./src/coconut-grove.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "991395be61b5b9e07fa8.png";

/***/ }),

/***/ "./src/dolphin-sandwich.webp":
/*!***********************************!*\
  !*** ./src/dolphin-sandwich.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc7497231cbfb41c5f03.webp";

/***/ }),

/***/ "./src/doral.png":
/*!***********************!*\
  !*** ./src/doral.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e47be1191b719fafa38.png";

/***/ }),

/***/ "./src/firecracker-shrimp.webp":
/*!*************************************!*\
  !*** ./src/firecracker-shrimp.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df1253cef8e7933d92b4.webp";

/***/ }),

/***/ "./src/flanigans-logo.png":
/*!********************************!*\
  !*** ./src/flanigans-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ac4d2c8816021da555e.png";

/***/ }),

/***/ "./src/french-fries.webp":
/*!*******************************!*\
  !*** ./src/french-fries.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a765f7ca13abf65c737a.webp";

/***/ }),

/***/ "./src/grilled-salmon.webp":
/*!*********************************!*\
  !*** ./src/grilled-salmon.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ace595596952d262e036.webp";

/***/ }),

/***/ "./src/instagram.svg":
/*!***************************!*\
  !*** ./src/instagram.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d97391465d60f2909c4.svg";

/***/ }),

/***/ "./src/kendall.png":
/*!*************************!*\
  !*** ./src/kendall.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72bb85658a3f4f33fa60.png";

/***/ }),

/***/ "./src/pinecrest.png":
/*!***************************!*\
  !*** ./src/pinecrest.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "899019f7080c8ff3ef3b.png";

/***/ }),

/***/ "./src/rib-rolls.webp":
/*!****************************!*\
  !*** ./src/rib-rolls.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab83ef76400bb7417e50.webp";

/***/ }),

/***/ "./src/surf-n-turf.webp":
/*!******************************!*\
  !*** ./src/surf-n-turf.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a08ad90ba01faa8a460.webp";

/***/ }),

/***/ "./src/sweet-potato.webp":
/*!*******************************!*\
  !*** ./src/sweet-potato.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25a9b5f71d72524e598b.webp";

/***/ }),

/***/ "./src/texas-burger.webp":
/*!*******************************!*\
  !*** ./src/texas-burger.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2980ddac3f8cafacb6e.webp";

/***/ }),

/***/ "./src/tilapia.webp":
/*!**************************!*\
  !*** ./src/tilapia.webp ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c1433de4b1e81c861ce.webp";

/***/ }),

/***/ "./src/tumbleweed-onions.webp":
/*!************************************!*\
  !*** ./src/tumbleweed-onions.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f9650b04a59f9e00a72.webp";

/***/ }),

/***/ "./src/twitter.svg":
/*!*************************!*\
  !*** ./src/twitter.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "410a9d14144a81054233.svg";

/***/ }),

/***/ "./src/westchester.png":
/*!*****************************!*\
  !*** ./src/westchester.png ***!
  \*****************************/
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
/* harmony import */ var _flanigans_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flanigans-logo.png */ "./src/flanigans-logo.png");
/* harmony import */ var _twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twitter.svg */ "./src/twitter.svg");
/* harmony import */ var _instagram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instagram.svg */ "./src/instagram.svg");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _locations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locations.js */ "./src/locations.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
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
headerImage.src = _flanigans_logo_png__WEBPACK_IMPORTED_MODULE_1__;
header.appendChild(headerImage);

const about = document.createElement('div');
about.textContent = 'Flanigan\'s is a laidback family-run restaurant anchored by a commitment to exceptional food and drink, warm hospitality, great value, and good fun. A beloved South Florida institution since 1959, the Flanigan\'s name is pretty much synonymous with good times. Flanigan\'s welcomes guests from near and far every day of the year, serving continuously from lunch to late night.';
content.appendChild(about);

const socialMedia = document.createElement('p');
socialMedia.textContent = 'Follow us on social media!';
content.append(socialMedia);

const twitterLink = document.createElement('a');
const twitterImg = document.createElement('img');
twitterLink.setAttribute('href', 'https://twitter.com/FlanigansFL');
twitterImg.src = _twitter_svg__WEBPACK_IMPORTED_MODULE_2__;
content.append(twitterLink);
twitterLink.append(twitterImg);

const instagramLink = document.createElement('a');
const instagramImg = document.createElement('img');
instagramLink.setAttribute('href', 'https://www.instagram.com/flanigansfl/?hl=en');
instagramImg.src = _instagram_svg__WEBPACK_IMPORTED_MODULE_3__;
content.append(instagramLink);
instagramLink.append(instagramImg);

const sidebar = (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.createMenuSidebar)(_menu_js__WEBPACK_IMPORTED_MODULE_4__.menuArr);

_menu_js__WEBPACK_IMPORTED_MODULE_4__.menuDiv.append(sidebar);

addMenuToDOM();
addLocationsToDOM();
// addContactFormtoDOM();

_menu_js__WEBPACK_IMPORTED_MODULE_4__.menuDiv.style.display = 'none';
_locations_js__WEBPACK_IMPORTED_MODULE_5__.locationList.style.display = 'none';
_contact_js__WEBPACK_IMPORTED_MODULE_6__.contactDiv.style.display = 'none';
homeTab.classList.add('clicked-tab');

// This function uses an event listener to detect which item type is selected in the menu
// and then displays only the objects that match the corresponding item type
function addMenuToDOM() {
  let filteredMenuArr = [];
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const menuList = document.querySelector('.menu-list');
  sidebar.addEventListener('click', function(e) {
    if (e.target.matches('.sidebar-item')) {
      filteredMenuArr = _menu_js__WEBPACK_IMPORTED_MODULE_4__.menuArr.filter((item) => item.type === e.target.id);
      menuList.innerHTML = '';
      for (const item of filteredMenuArr) {
        // for (const item of menuArr) {
        const menuPropArr = (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.createMenuListItem)();
        _menu_js__WEBPACK_IMPORTED_MODULE_4__.addMenuText.call(item, menuPropArr);
      };
      sidebarItems.forEach(function(item) {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });
}

function addLocationsToDOM() {
  for (const item of _locations_js__WEBPACK_IMPORTED_MODULE_5__.locArr) {
    const locPropArr = (0,_locations_js__WEBPACK_IMPORTED_MODULE_5__.createLocationListItem)();
    _locations_js__WEBPACK_IMPORTED_MODULE_5__.addLocationText.call(item, locPropArr);
  };
}

function openHomeTab() {
  about.style.display = 'block';
  _menu_js__WEBPACK_IMPORTED_MODULE_4__.menuDiv.style.display = 'none';
  _locations_js__WEBPACK_IMPORTED_MODULE_5__.locationList.style.display = 'none';
  _contact_js__WEBPACK_IMPORTED_MODULE_6__.contactDiv.style.display = 'none';
  homeTab.classList.add('clicked-tab');
  menuTab.classList.remove('clicked-tab');
  locationTab.classList.remove('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openMenuTab() {
  about.style.display = 'none';
  _menu_js__WEBPACK_IMPORTED_MODULE_4__.menuDiv.style.display = 'grid';
  _locations_js__WEBPACK_IMPORTED_MODULE_5__.locationList.style.display = 'none';
  _contact_js__WEBPACK_IMPORTED_MODULE_6__.contactDiv.style.display = 'none';
  homeTab.classList.remove('clicked-tab');
  menuTab.classList.add('clicked-tab');
  locationTab.classList.remove('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openLocationTab() {
  about.style.display = 'none';
  _menu_js__WEBPACK_IMPORTED_MODULE_4__.menuDiv.style.display = 'none';
  _locations_js__WEBPACK_IMPORTED_MODULE_5__.locationList.style.display = 'block';
  _contact_js__WEBPACK_IMPORTED_MODULE_6__.contactDiv.style.display = 'none';
  homeTab.classList.remove('clicked-tab');
  menuTab.classList.remove('clicked-tab');
  locationTab.classList.add('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openContactTab() {
  about.style.display = 'none';
  _menu_js__WEBPACK_IMPORTED_MODULE_4__.menuDiv.style.display = 'none';
  _locations_js__WEBPACK_IMPORTED_MODULE_5__.locationList.style.display = 'none';
  _contact_js__WEBPACK_IMPORTED_MODULE_6__.contactDiv.style.display = 'flex';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxxQkFBcUIsaURBQU07QUFDM0IsdUJBQXVCLHFFQUFzQjtBQUM3QyxJQUFJLCtEQUFvQjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDJEQUFxQjtBQUN2QixFQUFFLHFFQUEwQjtBQUM1QixFQUFFLGlFQUF3QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDJEQUFxQjtBQUN2QixFQUFFLHFFQUEwQjtBQUM1QixFQUFFLGlFQUF3QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDJEQUFxQjtBQUN2QixFQUFFLHFFQUEwQjtBQUM1QixFQUFFLGlFQUF3QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDJEQUFxQjtBQUN2QixFQUFFLHFFQUEwQjtBQUM1QixFQUFFLGlFQUF3QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9sb2NhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ncmVlbjogcmdiKDQwLCA5NSwgNjcpO1xcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1MiwgMjQ3KTtcXG4gICAgLS1idXR0b24taG92ZXI6IHJnYigzMCwgNzMsIDUxKTtcXG4gICAgLS1mb3JtLW1hcmdpbjogMTBweDtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi50YWJzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhYnMtbGlzdCA+ICoge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhYnMtbGlzdCA+ICo6aG92ZXIge1xcbiAgICAvKiBjb2xvcjogdmFyKC0tZ3JlZW4pOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsaWNrZWQtdGFiIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5tZW51LWRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43NWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIC8qIG1heC13aWR0aDogMjAwcHg7ICovXFxufVxcblxcbi5zaWRlYmFyIGxpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyNTBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDE1MG1zIGVhc2U7ICovXFxufVxcblxcbi5zaWRlYmFyIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyKTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuXFxufVxcblxcbi5tZW51LWxpc3Qge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDI7XFxufVxcblxcbi5tZW51LWxpc3QtaXRlbS1kaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDAuNWZyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0tbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMjtcXG59XFxuXFxuLm1lbnUtbGlzdC1pdGVtLW5hbWUsIC5sb2MtbGlzdC1pdGVtLW5hbWUge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBmb250LWZhbWlseTogJ1RhaG9tYScsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5tZW51LWxpc3QtaXRlbS1kZXNjIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDIgLyAyO1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0tcHJpY2Uge1xcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gMyAvIDI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0taW1nIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAxO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubG9jLWxpc3QtaXRlbS1pbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mb3JtLWRpdiA+IGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZvcm0tZGl2ID4gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWZvcm0tbWFyZ2luKTtcXG59XFxuXFxuLmZvcm0tZGl2ID4gc2VsZWN0LCAuZm9ybS1kaXYgPiBpbnB1dCwgI2NvbW1lbnQge1xcbiAgICBtYXJnaW46IHZhcigtLWZvcm0tbWFyZ2luKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI2NvbW1lbnQge1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uZm9ybS1kaXYgPiBidXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgbWFyZ2luOiB2YXIoLS1mb3JtLW1hcmdpbik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG59XFxuXFxuLmZvcm0tZGl2ID4gYnV0dG9uOmhvdmVyLFxcbi5mb3JtLWRpdiA+IGJ1dHRvbjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxufVxcblxcbi5mb3JtLWRpdiA+IGJ1dHRvbjpmb2N1cyxcXG4uYWN0aXZlIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuLmZvcm0tZGl2ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysb0VBQW9FO0FBQ3hFOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsOERBQThEO0FBQ2xFOztBQUVBOztJQUVJLHFDQUFxQztBQUN6Qzs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ncmVlbjogcmdiKDQwLCA5NSwgNjcpO1xcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1MiwgMjQ3KTtcXG4gICAgLS1idXR0b24taG92ZXI6IHJnYigzMCwgNzMsIDUxKTtcXG4gICAgLS1mb3JtLW1hcmdpbjogMTBweDtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi50YWJzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhYnMtbGlzdCA+ICoge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhYnMtbGlzdCA+ICo6aG92ZXIge1xcbiAgICAvKiBjb2xvcjogdmFyKC0tZ3JlZW4pOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsaWNrZWQtdGFiIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5tZW51LWRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43NWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIC8qIG1heC13aWR0aDogMjAwcHg7ICovXFxufVxcblxcbi5zaWRlYmFyIGxpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyNTBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDE1MG1zIGVhc2U7ICovXFxufVxcblxcbi5zaWRlYmFyIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyKTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuXFxufVxcblxcbi5tZW51LWxpc3Qge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDI7XFxufVxcblxcbi5tZW51LWxpc3QtaXRlbS1kaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDAuNWZyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0tbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMjtcXG59XFxuXFxuLm1lbnUtbGlzdC1pdGVtLW5hbWUsIC5sb2MtbGlzdC1pdGVtLW5hbWUge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBmb250LWZhbWlseTogJ1RhaG9tYScsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5tZW51LWxpc3QtaXRlbS1kZXNjIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDIgLyAyO1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0tcHJpY2Uge1xcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gMyAvIDI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1saXN0LWl0ZW0taW1nIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAxO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubG9jLWxpc3QtaXRlbS1pbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mb3JtLWRpdiA+IGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZvcm0tZGl2ID4gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWZvcm0tbWFyZ2luKTtcXG59XFxuXFxuLmZvcm0tZGl2ID4gc2VsZWN0LCAuZm9ybS1kaXYgPiBpbnB1dCwgI2NvbW1lbnQge1xcbiAgICBtYXJnaW46IHZhcigtLWZvcm0tbWFyZ2luKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI2NvbW1lbnQge1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uZm9ybS1kaXYgPiBidXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgbWFyZ2luOiB2YXIoLS1mb3JtLW1hcmdpbik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG59XFxuXFxuLmZvcm0tZGl2ID4gYnV0dG9uOmhvdmVyLFxcbi5mb3JtLWRpdiA+IGJ1dHRvbjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxufVxcblxcbi5mb3JtLWRpdiA+IGJ1dHRvbjpmb2N1cyxcXG4uYWN0aXZlIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuLmZvcm0tZGl2ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQge2xvY0Fycn0gZnJvbSAnLi9sb2NhdGlvbnMuanMnO1xuXG5jb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGl2Jyk7XG5jb25zdCBjb250YWN0TXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuY29udGFjdE1zZy50ZXh0Q29udGVudCA9ICdPdXIgcmVzdGF1cmFudHMgYXJlIG9wZW4gMzY1IGRheXMgYSB5ZWFyLCBzZXJ2aW5nIGNvbnRpbnVvdXNseSBmcm9tIDExOjAwIEFNIHRvIGxhdGUgbmlnaHQuIFdlXFwncmUgYWx3YXlzIGZpc2hpbmcgZm9yIGZlZWRiYWNrISBQbGVhc2UgcmVhY2ggb3V0IHRvIHVzIHdpdGggYW55IHF1ZXN0aW9ucyB1c2luZyB0aGUgZm9ybSBiZWxvdy4gIFRoYW5rcyBmb3Igc3RvcHBpbmcgYnkhXFxyXFxuJztcblxuLy8gRm9yIGxvY2F0aW9uLCBhY2Nlc3MgdGhlIGxvY0FyciBvYmplY3QgdG8gZ2V0IGxvY2F0aW9uIG5hbWVzXG5jb25zdCBsb2NOYW1lcyA9IGxvY0Fyci5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSk7XG5cbi8vIEZvcm1cbmNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1kaXYnKTtcbmNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuZm9ybUhlYWRlci50ZXh0Q29udGVudCA9ICdTZW5kIHVzIGEgbWVzc2FnZSc7XG5jb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmNvbnRhY3RGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbmNvbnRhY3RGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ3N1Ym1pdC5waHAnKTtcblxuY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sb2NhdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uOiAqJztcbmNvbnN0IGxvY2F0aW9uU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5sb2NhdGlvblNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbG9jYXRpb24nKTtcbmxvY2F0aW9uU2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24nKTtcbmNyZWF0ZU9wdGlvbkxpc3QobG9jTmFtZXMpO1xuXG5jb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbm5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lOiAqJztcbmNvbnN0IGNvbnRhY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnRhY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5jb250YWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbmNvbnRhY3ROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG5cbmNvbnN0IHBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xucGhvbmVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwaG9uZScpO1xucGhvbmVMYWJlbC50ZXh0Q29udGVudCA9ICdQaG9uZSBOdW1iZXI6JztcbmNvbnN0IGNvbnRhY3RQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb250YWN0UGhvbmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RlbCcpO1xuY29udGFjdFBob25lLnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmUnKTtcbmNvbnRhY3RQaG9uZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncGhvbmUnKTtcblxuY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5lbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XG5lbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0VtYWlsIEFkZHJlc3M6IConO1xuY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnRhY3RFbWFpbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbmNvbnRhY3RFbWFpbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsJyk7XG5jb250YWN0RW1haWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XG5cbmNvbnN0IGNvbW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb21tZW50TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY29tbWVudCcpO1xuY29tbWVudExhYmVsLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzOiAqJztcbmNvbnN0IGNvbnRhY3RDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbmNvbnRhY3RDb21tZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tbWVudCcpO1xuY29udGFjdENvbW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NvbW1lbnQnKTtcbmNvbnRhY3RDb21tZW50LnNldEF0dHJpYnV0ZSgncm93cycsICc2Jyk7XG5cbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5zdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25MaXN0KGFycikge1xuICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGRlZmF1bHRPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdub25lJyk7XG4gIGRlZmF1bHRPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICBkZWZhdWx0T3B0aW9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgbG9jYXRpb25TZWxlY3QuYXBwZW5kKGRlZmF1bHRPcHRpb24pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHNlbGVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYXJyW2ldLnRvTG93ZXJDYXNlKCkpO1xuICAgIHNlbGVjdE9wdGlvbi50ZXh0Q29udGVudCA9IGFycltpXTtcbiAgICBsb2NhdGlvblNlbGVjdC5hcHBlbmQoc2VsZWN0T3B0aW9uKTtcbiAgfVxufVxuXG5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0TXNnKTtcbmNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG5mb3JtRGl2LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uTGFiZWwpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChsb2NhdGlvblNlbGVjdCk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lKTtcbmZvcm1EaXYuYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChjb21tZW50TGFiZWwpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0Q29tbWVudCk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbmV4cG9ydCB7XG4gIGNvbnRhY3REaXYsXG59O1xuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgY29jb251dEdyb3ZlUGljIGZyb20gJy4vY29jb251dC1ncm92ZS5wbmcnO1xuaW1wb3J0IGRvcmFsUGljIGZyb20gJy4vZG9yYWwucG5nJztcbmltcG9ydCBrZW5kYWxsUGljIGZyb20gJy4va2VuZGFsbC5wbmcnO1xuaW1wb3J0IHBpbmVjcmVzdFBpYyBmcm9tICcuL3BpbmVjcmVzdC5wbmcnO1xuaW1wb3J0IHdlc3RjaGVzdGVyUGljIGZyb20gJy4vd2VzdGNoZXN0ZXIucG5nJztcblxuZnVuY3Rpb24gTG9jYXRpb24obmFtZSwgYWRkcmVzcywgcGhvbmUsIGhvdXJzLCBpbWcpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgdGhpcy5waG9uZSA9IHBob25lO1xuICB0aGlzLmhvdXJzID0gaG91cnM7XG4gIHRoaXMuaW1nID0gaW1nO1xufTtcblxuY29uc3QgY29jb251dEdyb3ZlID0gbmV3IExvY2F0aW9uKCdDb2NvbnV0IEdyb3ZlJywgJzI3MjEgQmlyZCBBdmVudWUsIE1pYW1pLCBGTCAzMzEzMycsICcoMzA1KSA0NDYtMTExNCcsIHtvcGVuOiAnMTEnLCBjbG9zZTogJzQ6MzAnfSwgY29jb251dEdyb3ZlUGljKTtcbmNvbnN0IGRvcmFsID0gbmV3IExvY2F0aW9uKCdEb3JhbCcsICc4Njk1IE5XIDEydGggU3RyZWV0LCBNaWFtaSwgRkwgMzMxMjYnLCAnKDc4NikgODQ1LTkzNjYnLCB7b3BlbjogJzExJywgY2xvc2U6ICcxJ30sIGRvcmFsUGljKTtcbmNvbnN0IGtlbmRhbGwgPSBuZXcgTG9jYXRpb24oJ0tlbmRhbGwnLCAnMTI3OTAgU1cgODh0aCBTdHJlZXQsIE1pYW1pLCBGTCAzMzE4NicsICcoMzA1KSAzODAtMDUyMScsIHtvcGVuOiAnMTEnLCBjbG9zZTogJzEnfSwga2VuZGFsbFBpYyk7XG5jb25zdCBwaW5lY3Jlc3QgPSBuZXcgTG9jYXRpb24oJ1BpbmVjcmVzdCcsICcxMTQxNSBTIERpeGllIEhpZ2h3YXksIE1pYW1pLCBGTCAzMzE1NicsICcoMzA1KSAzNzgtNDAwMCcsIHtvcGVuOiAnMTEnLCBjbG9zZTogJzEnfSwgcGluZWNyZXN0UGljKTtcbmNvbnN0IHdlc3RjaGVzdGVyID0gbmV3IExvY2F0aW9uKCdXZXN0Y2hlc3RlcicsICc5ODU3IFNXIDQwdGggU3RyZWV0LCBNaWFtaSwgRkwgMzMxNjUnLCAnKDMwNSkgMjA3LTc0MjcnLCB7b3BlbjogJzExJywgY2xvc2U6ICcxOjMwJ30sIHdlc3RjaGVzdGVyUGljKTtcblxuY29uc3QgbG9jQXJyID0gW2NvY29udXRHcm92ZSwgZG9yYWwsIGtlbmRhbGwsIHBpbmVjcmVzdCwgd2VzdGNoZXN0ZXJdO1xuXG5jb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbG9jYXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xubG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25MaXN0KTtcblxuLy8gQWRkIGdldCBkaXJlY3Rpb25zIGJ1dHRvbiB3aXRoIGEgbGluayB0byB0aGUgYWRkcmVzcyBiZWxvdyBlYWNoIGxvY2F0aW9uXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkxpc3RJdGVtKCkge1xuICBjb25zdCBsb2NhdGlvbkxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbG9jYXRpb25MaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsb2MtbGlzdC1pdGVtJyk7XG4gIGNvbnN0IGxvY2F0aW9uTGlzdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYXRpb25MaXN0SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdsb2MtbGlzdC1pdGVtLWRpdicpO1xuICBjb25zdCBsb2NhdGlvbkxpc3RJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGxvY2F0aW9uTGlzdEl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2xvYy1saXN0LWl0ZW0tbmFtZScpO1xuICBjb25zdCBsb2NhdGlvbkxpc3RJdGVtQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbG9jYXRpb25MaXN0SXRlbUFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnbG9jLWxpc3QtaXRlbS1hZGRyZXNzJyk7XG4gIGNvbnN0IGxvY2F0aW9uTGlzdEl0ZW1QaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbG9jYXRpb25MaXN0SXRlbVBob25lLmNsYXNzTGlzdC5hZGQoJ2xvYy1saXN0LWl0ZW0tcGhvbmUnKTtcbiAgY29uc3QgbG9jYXRpb25MaXN0SXRlbUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhdGlvbkxpc3RJdGVtSG91cnMuY2xhc3NMaXN0LmFkZCgnbG9jLWxpc3QtaXRlbS1ob3VycycpO1xuICBjb25zdCBsb2NhdGlvbkxpc3RJdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxvY2F0aW9uTGlzdEl0ZW1JbWcuY2xhc3NMaXN0LmFkZCgnbG9jLWxpc3QtaXRlbS1pbWcnKTtcblxuICBsb2NhdGlvbkxpc3QuYXBwZW5kQ2hpbGQobG9jYXRpb25MaXN0SXRlbSk7XG4gIGxvY2F0aW9uTGlzdEl0ZW0uYXBwZW5kQ2hpbGQobG9jYXRpb25MaXN0SXRlbURpdik7XG4gIGxvY2F0aW9uTGlzdEl0ZW1EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25MaXN0SXRlbU5hbWUpO1xuICBsb2NhdGlvbkxpc3RJdGVtRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uTGlzdEl0ZW1BZGRyZXNzKTtcbiAgbG9jYXRpb25MaXN0SXRlbURpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkxpc3RJdGVtUGhvbmUpO1xuICBsb2NhdGlvbkxpc3RJdGVtRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uTGlzdEl0ZW1Ib3Vycyk7XG4gIGxvY2F0aW9uTGlzdEl0ZW1EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25MaXN0SXRlbUltZyk7XG4gIHJldHVybiBbbG9jYXRpb25MaXN0SXRlbU5hbWUsIGxvY2F0aW9uTGlzdEl0ZW1BZGRyZXNzLCBsb2NhdGlvbkxpc3RJdGVtUGhvbmUsIGxvY2F0aW9uTGlzdEl0ZW1Ib3VycywgbG9jYXRpb25MaXN0SXRlbUltZ107XG59XG5cbmZ1bmN0aW9uIGFkZExvY2F0aW9uVGV4dChhcnIpIHtcbiAgY29uc3QgcHJvcGVydGllcyA9IFt0aGlzLm5hbWUsIHRoaXMuYWRkcmVzcywgdGhpcy5waG9uZSwgdGhpcy5ob3VycywgdGhpcy5pbWddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9wZXJ0aWVzW2ldID09PSB0aGlzLmhvdXJzKSB7XG4gICAgICBhcnJbaV0udGV4dENvbnRlbnQgPSBgRXZlcnkgRGF5OiAke3RoaXMuaG91cnNbJ29wZW4nXX0gQU0gLSAke3RoaXMuaG91cnNbJ2Nsb3NlJ119IEFNYDtcbiAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNbaV0gPT09IHRoaXMuaW1nKSB7XG4gICAgICBhcnJbaV0uc3JjID0gcHJvcGVydGllc1tpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyW2ldLnRleHRDb250ZW50ID0gcHJvcGVydGllc1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlTG9jYXRpb25MaXN0SXRlbSxcbiAgYWRkTG9jYXRpb25UZXh0LFxuICBsb2NBcnIsXG4gIGxvY2F0aW9uTGlzdCxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgcmliUm9sbHNJbWcgZnJvbSAnLi9yaWItcm9sbHMud2VicCc7XG5pbXBvcnQgdHVtYmxlT25pb25zSW1nIGZyb20gJy4vdHVtYmxld2VlZC1vbmlvbnMud2VicCc7XG5pbXBvcnQgZnJpZWRTaHJpbXBJbWcgZnJvbSAnLi9maXJlY3JhY2tlci1zaHJpbXAud2VicCc7XG5pbXBvcnQgdGV4YXNCdXJnSW1nIGZyb20gJy4vdGV4YXMtYnVyZ2VyLndlYnAnO1xuaW1wb3J0IGNhcmliQnVyZ0ltZyBmcm9tICcuL2NhcmliYmVhbi1idXJnZXIud2VicCc7XG5pbXBvcnQgY2hlZXNlU3RrSW1nIGZyb20gJy4vY2hlZXNlLXN0ZWFrLndlYnAnO1xuaW1wb3J0IGNoaXBvdENoaWNrZW5JbWcgZnJvbSAnLi9jaGlwb3RsZS1jaGlja2VuLXNhbmR3aWNoLndlYnAnO1xuaW1wb3J0IGRvbHBoaW5TYW5kSW1nIGZyb20gJy4vZG9scGhpbi1zYW5kd2ljaC53ZWJwJztcbmltcG9ydCBncmlsbGVkU2FsbW9uSW1nIGZyb20gJy4vZ3JpbGxlZC1zYWxtb24ud2VicCc7XG5pbXBvcnQgc3VyZlR1cmZJbWcgZnJvbSAnLi9zdXJmLW4tdHVyZi53ZWJwJztcbmltcG9ydCBsZW1vblRpbGFwaWFJbWcgZnJvbSAnLi90aWxhcGlhLndlYnAnO1xuaW1wb3J0IGJha2VkUG90YXRvSW1nIGZyb20gJy4vYmFrZWQtcG90YXRvLndlYnAnO1xuaW1wb3J0IHN3ZWV0UG90YXRvSW1nIGZyb20gJy4vc3dlZXQtcG90YXRvLndlYnAnO1xuaW1wb3J0IGZyZW5jaEZyaWVzSW1nIGZyb20gJy4vZnJlbmNoLWZyaWVzLndlYnAnO1xuXG5mdW5jdGlvbiBNZW51SXRlbSh0eXBlLCBuYW1lLCBkZXNjLCBwcmljZSwgaW1nKSB7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMuZGVzYyA9IGRlc2M7XG4gIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgdGhpcy5pbWcgPSBpbWc7XG59O1xuXG4vLyBTVEFSVEVSU1xuY29uc3QgcmliUm9sbHMgPSBuZXcgTWVudUl0ZW0oJ3N0YXJ0ZXInLCAnSm9lXFwncyBSb2NraW5cXCcgUmliIFJvbGxzJywgJ0hvbWVtYWRlLCBkZWVwLWZyaWVkIGVnZyByb2xscyBzdHVmZmVkIHdpdGggbWVhdCBmcm9tIG91ciBmYW1vdXMgYmFieSBiYWNrIHJpYnMsIHB1bGxlZCBwb3JrLCBjaGVkZGFyIGNoZWVzZSwgb25pb25zLCBhbmQgRmxhbmlnYW5cXCdzIEJCUSBzYXVjZS4nLCAnMTEuOTknLCByaWJSb2xsc0ltZyk7XG5jb25zdCB0dW1ibGVPbmlvbnMgPSBuZXcgTWVudUl0ZW0oJ3N0YXJ0ZXInLCAnVHVtYmxld2VlZCBPbmlvbnMnLCAnVGhpbmx5IHNsaWNlZCBqdW1ibyBvbmlvbnMsIGxpZ2h0bHkgYmF0dGVyZWQgYW5kIGZyaWVkLCB3aXRoIGEgc2lkZSBvZiBob25leSBtdXN0YXJkLicsICc2Ljk5JywgdHVtYmxlT25pb25zSW1nKTtcbmNvbnN0IGZyaWVkU2hyaW1wID0gbmV3IE1lbnVJdGVtKCdzdGFydGVyJywgJ0ZpcmVjcmFja2VyIFNocmltcCcsICdBIGRvemVuIHBsdW1wLCBkZWVwLWZyaWVkIHNocmltcCwgdG9zc2VkIGluIGEgc2xpZ2h0bHkgc3BpY3kgY3JlYW0gc2F1Y2Ugb3ZlciBhIGJlZCBvZiBpY2ViZXJnIGxldHR1Y2UsIHRvcHBlZCB3aXRoIHBpY28gZGkgZ2FsbG8uJywgJzExLjk5JywgZnJpZWRTaHJpbXBJbWcpO1xuXG4vLyBURU4gT1VOQ0UgQlVSR0VSU1xuY29uc3QgdGV4YXNCdXJnID0gbmV3IE1lbnVJdGVtKCdidXJnZXInLCAnVGV4YXMgQnVyZ2VyJywgJ0NyaXNweSBiYWNvbiwgY3J1bWJsZWQgYmxldSBjaGVlc2UsIGEgc3RhY2sgb2YgVHVtYmxld2VlZCBPbmlvbnMsIGFsbCBkcml6emxlZCB3aXRoIG91ciBob21lbWFkZSB3aW5nIHNhdWNlLicsICcxMi40OScsIHRleGFzQnVyZ0ltZyk7XG5jb25zdCBjYXJpYkJ1cmcgPSBuZXcgTWVudUl0ZW0oJ2J1cmdlcicsICdDYXJpYmJlYW4gQnVyZ2VyJywgJ0ZsYW5pZ2FuXFwncyBhd2FyZC13aW5uaW5nIEJCUSBzYXVjZSwgbWVsdGVkIGNoZWRkYXIgY2hlZXNlLCBhbmQgdHdvIHN0cmlwcyBvZiBiYWNvbi4nLCAnMTIuNDknLCBjYXJpYkJ1cmdJbWcpO1xuXG4vLyBXQVkgVE9PIEJJRyBTQU5EV0lDSEVTXG5jb25zdCBjaGVlc2VTdGsgPSBuZXcgTWVudUl0ZW0oJ3NhbmR3aWNoJywgJ1BoaWxhZGVscGhpYSBDaGVlc2UgU3RlYWsnLCAnU2xpY2VkIGJlZWYgc2F1dMOpZWQgd2l0aCBvbmlvbnMsIGFuZCBtdXNocm9vbXMgd2l0aCBtZWx0ZWQgU3dpc3MgQW1lcmljYW4gY2hlZXNlIG9uIGEgaG9hZ2llIHJvbGwuJywgJzExLjk5JywgY2hlZXNlU3RrSW1nKTtcbmNvbnN0IGNoaXBvdENoaWNrZW4gPSBuZXcgTWVudUl0ZW0oJ3NhbmR3aWNoJywgJ0NoaXBvdGxlIENoaWNrZW4gU3RhY2sgU2FuZHdpY2gnLCAnR3JpbGxlZCBjaGlja2VuIGJyZWFzdCB3aXRoIG1lbHRlZCBTd2lzcyBjaGVlc2UsIGNyaXNwIGJhY29uLCBjaGlwb3RsZSBzYXVjZSwgYW5kIGEgcGlsZSBvZiBUdW1ibGV3ZWVkIE9uaW9ucy4nLCAnMTAuOTknLCBjaGlwb3RDaGlja2VuSW1nKTtcbmNvbnN0IGRvbHBoaW5TYW5kID0gbmV3IE1lbnVJdGVtKCdzYW5kd2ljaCcsICdEb2xwaGluIFNhbmR3aWNoJywgJ0RvbHBoaW4gKGFrYSBNYWhpLU1haGkpIHdpdGggbGV0dHVjZSBhbmQgdG9tYXRvIG9uIGEgS2Fpc2VyIHJvbGwuIFRhcnRhciBzYXVjZSBhdmFpbGFibGUgdXBvbiByZXF1ZXN0LiBCbGFja2VuZWQsIEZyaWVkLCBvciBHcmlsbGVkLicsICdNYXJrZXQgUHJpY2UnLCBkb2xwaGluU2FuZEltZyk7XG5cbi8vIFNFQUZPT0RcbmNvbnN0IGdyaWxsZWRTYWxtb24gPSBuZXcgTWVudUl0ZW0oJ3NlYWZvb2QnLCAnR3JpbGxlZCBTYWxtb24nLCAnQSBjaGFyZ3JpbGxlZCB0ZW4tb3VuY2UgZmlsZXQgb2YgQXRsYW50aWMgU2FsbW9uLiBZb3VyIHBpY2sgLSBMZW1vbiBHYXJsaWMsIFRvYXN0ZWQgU2VzYW1lIEdsYXplLCBvciBCbGFja2VuZWQuJywgJzE4Ljk5JywgZ3JpbGxlZFNhbG1vbkltZyk7XG5jb25zdCBzdXJmVHVyZiA9IG5ldyBNZW51SXRlbSgnc2VhZm9vZCcsICdTdXJmICYgVHVyZicsICdBbiBlaWdodC1vdW5jZSBVU0RBIENob2ljZSBOLlkuIFN0cmlwIFN0ZWFrLCBwYWlyZWQgd2l0aCAxLzIgZG96ZW4gcGx1bXAgZnJpZWQgc2hyaW1wLicsICcxOS45OScsIHN1cmZUdXJmSW1nKTtcbmNvbnN0IGxlbW9uVGlsYXBpYSA9IG5ldyBNZW51SXRlbSgnc2VhZm9vZCcsICdMZW1vbiBQZXBwZXIgVGlsYXBpYScsICdUZW5kZXIsIGZsYWt5IFRpbGFwaWEgc2F1dMOpZWQgaW4gb3VyIGNyZWFteSwgaG9tZW1hZGUgTGVtb24gUGVwcGVyIHNhdWNlLicsICcxNi45OScsIGxlbW9uVGlsYXBpYUltZyk7XG5cbi8vIFNJREVTXG5jb25zdCBiYWtlZFBvdGF0byA9IG5ldyBNZW51SXRlbSgnc2lkZScsICdCYWtlZCBQb3RhdG8nLCAnSWRhaG9cXCdzIGJlc3QsIHNlcnZlZCBwaXBpbmcgaG90IHdpdGggc291ciBjcmVhbSBhbmQgYnV0dGVyIHBpbGVkIG9uIGF0IHlvdXIgcmVxdWVzdC4nLCAnMy45OScsIGJha2VkUG90YXRvSW1nKTtcbmNvbnN0IGZyZW5jaEZyaWVzID0gbmV3IE1lbnVJdGVtKCdzaWRlJywgJ0ZyZW5jaCBGcmllcycsICdBIEZsYW5pZ2FuXFwncyBzaWduYXR1cmUsIDMvNCBvZiBhIHBvdW5kIG9mIHBlcmZlY3RseSBzZWFzb25lZCBjdXJseSBmcmllcy4nLCAnNi45OScsIGZyZW5jaEZyaWVzSW1nKTtcbmNvbnN0IHN3ZWV0UG90YXRvID0gbmV3IE1lbnVJdGVtKCdzaWRlJywgJ1N3ZWV0IFBvdGF0byBGcmllcycsICdBIGdlbmVyb3VzIGFtb3VudCBvZiB0aGUgdWx0aW1hdGUgc3dlZXQgcG90YXRvIGZyeSwgZGVlcC1mcmllZCwgYW5kIGR1c3RlZCB3aXRoIGNpbm5hbW9uIHN1Z2FyLiBTdWIgc2lkZSB3aXRoIGFueSBzYW5kd2ljaCwgYnVyZ2VyLCBvciBlbnRyZWUuLi4uLi4uLi5BZGQgJDEuOTknLCAnNy45OScsIHN3ZWV0UG90YXRvSW1nKTtcblxuLy8gRmluZCBhIHdheSB0byBhdXRvbWF0aWNhbGx5IGFkZCB0byB0aGlzIGFycmF5IHdoZW4gYSBuZXcgTWVudUl0ZW0gaXMgY3JlYXRlZFxuLy8gTWF5IG5lZWQgdG8gYWRkIGEgY2xhc3MgdG8gbWVudSBpdGVtcyB0byB0aGVuIHVzZSAucXVlcnlTZWxlY3RvckFsbCgpXG5jb25zdCBtZW51QXJyID0gW3JpYlJvbGxzLCB0dW1ibGVPbmlvbnMsIGZyaWVkU2hyaW1wLCB0ZXhhc0J1cmcsIGNhcmliQnVyZywgY2hlZXNlU3RrLCBjaGlwb3RDaGlja2VuLCBkb2xwaGluU2FuZCwgZ3JpbGxlZFNhbG1vbiwgc3VyZlR1cmYsIGxlbW9uVGlsYXBpYSwgYmFrZWRQb3RhdG8sIGZyZW5jaEZyaWVzLCBzd2VldFBvdGF0b107XG5cbmNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1kaXYnKTtcbmNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbm1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdCcpO1xuY29udGVudC5hcHBlbmRDaGlsZChtZW51RGl2KTtcbm1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdEl0ZW0oKSB7XG4gIGNvbnN0IG1lbnVMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG1lbnVMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QtaXRlbScpO1xuICBjb25zdCBtZW51TGlzdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUxpc3RJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdC1pdGVtLWRpdicpO1xuICBjb25zdCBtZW51TGlzdEl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbWVudUxpc3RJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QtaXRlbS1uYW1lJyk7XG4gIGNvbnN0IG1lbnVMaXN0SXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnVMaXN0SXRlbURlc2MuY2xhc3NMaXN0LmFkZCgnbWVudS1saXN0LWl0ZW0tZGVzYycpO1xuICBjb25zdCBtZW51TGlzdEl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbWVudUxpc3RJdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1saXN0LWl0ZW0tcHJpY2UnKTtcbiAgY29uc3QgbWVudUxpc3RJdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG1lbnVMaXN0SXRlbUltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QtaXRlbS1pbWcnKTtcblxuICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW0pO1xuICBtZW51TGlzdEl0ZW0uYXBwZW5kQ2hpbGQobWVudUxpc3RJdGVtRGl2KTtcbiAgbWVudUxpc3RJdGVtRGl2LmFwcGVuZENoaWxkKG1lbnVMaXN0SXRlbU5hbWUpO1xuICBtZW51TGlzdEl0ZW1EaXYuYXBwZW5kQ2hpbGQobWVudUxpc3RJdGVtRGVzYyk7XG4gIG1lbnVMaXN0SXRlbURpdi5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW1QcmljZSk7XG4gIG1lbnVMaXN0SXRlbURpdi5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW1JbWcpO1xuICByZXR1cm4gW21lbnVMaXN0SXRlbU5hbWUsIG1lbnVMaXN0SXRlbURlc2MsIG1lbnVMaXN0SXRlbVByaWNlLCBtZW51TGlzdEl0ZW1JbWddO1xufVxuXG5mdW5jdGlvbiBhZGRNZW51VGV4dChhcnIpIHtcbiAgY29uc3QgcHJvcGVydGllcyA9IFt0aGlzLm5hbWUsIHRoaXMuZGVzYywgdGhpcy5wcmljZSwgdGhpcy5pbWddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9wZXJ0aWVzW2ldID09PSB0aGlzLmltZykge1xuICAgICAgYXJyW2ldLnNyYyA9IHByb3BlcnRpZXNbaV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFycltpXS50ZXh0Q29udGVudCA9IHByb3BlcnRpZXNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVTaWRlYmFyKGFycikge1xuICBjb25zdCB0eXBlcyA9IG5ldyBTZXQoKTtcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICB0eXBlcy5hZGQoaXRlbS50eXBlKTtcbiAgfSk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgdHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJywgdHlwZSk7XG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1pdGVtJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSB0eXBlO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbiAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZU1lbnVMaXN0SXRlbSxcbiAgYWRkTWVudVRleHQsXG4gIGNyZWF0ZU1lbnVTaWRlYmFyLFxuICBtZW51QXJyLFxuICBtZW51RGl2LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ZsYW5pZ2Fucy1sb2dvLnBuZyc7XG5pbXBvcnQgdHdpdHRlciBmcm9tICcuL3R3aXR0ZXIuc3ZnJztcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnLi9pbnN0YWdyYW0uc3ZnJztcbmltcG9ydCB7Y3JlYXRlTWVudUxpc3RJdGVtLCBhZGRNZW51VGV4dCwgY3JlYXRlTWVudVNpZGViYXIsIG1lbnVBcnIsIG1lbnVEaXZ9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQge2NyZWF0ZUxvY2F0aW9uTGlzdEl0ZW0sIGFkZExvY2F0aW9uVGV4dCwgbG9jQXJyLCBsb2NhdGlvbkxpc3R9IGZyb20gJy4vbG9jYXRpb25zLmpzJztcbmltcG9ydCB7Y29udGFjdERpdn0gZnJvbSAnLi9jb250YWN0LmpzJztcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbi8vIFRBQlNcbmNvbnN0IHRhYnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5jb25zdCBsb2NhdGlvblRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbnRhYnNMaXN0LmNsYXNzTGlzdC5hZGQoJ3RhYnMtbGlzdCcpO1xuaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbm1lbnVUYWIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5sb2NhdGlvblRhYi50ZXh0Q29udGVudCA9ICdMb2NhdGlvbnMnO1xuY29udGFjdFRhYi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbmhlYWRlci5hcHBlbmRDaGlsZCh0YWJzTGlzdCk7XG50YWJzTGlzdC5hcHBlbmRDaGlsZChob21lVGFiKTtcbnRhYnNMaXN0LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xudGFic0xpc3QuYXBwZW5kQ2hpbGQobG9jYXRpb25UYWIpO1xudGFic0xpc3QuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbmNvbnN0IGhlYWRlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5oZWFkZXJJbWFnZS5zcmMgPSBsb2dvO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckltYWdlKTtcblxuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFib3V0LnRleHRDb250ZW50ID0gJ0ZsYW5pZ2FuXFwncyBpcyBhIGxhaWRiYWNrIGZhbWlseS1ydW4gcmVzdGF1cmFudCBhbmNob3JlZCBieSBhIGNvbW1pdG1lbnQgdG8gZXhjZXB0aW9uYWwgZm9vZCBhbmQgZHJpbmssIHdhcm0gaG9zcGl0YWxpdHksIGdyZWF0IHZhbHVlLCBhbmQgZ29vZCBmdW4uIEEgYmVsb3ZlZCBTb3V0aCBGbG9yaWRhIGluc3RpdHV0aW9uIHNpbmNlIDE5NTksIHRoZSBGbGFuaWdhblxcJ3MgbmFtZSBpcyBwcmV0dHkgbXVjaCBzeW5vbnltb3VzIHdpdGggZ29vZCB0aW1lcy4gRmxhbmlnYW5cXCdzIHdlbGNvbWVzIGd1ZXN0cyBmcm9tIG5lYXIgYW5kIGZhciBldmVyeSBkYXkgb2YgdGhlIHllYXIsIHNlcnZpbmcgY29udGludW91c2x5IGZyb20gbHVuY2ggdG8gbGF0ZSBuaWdodC4nO1xuY29udGVudC5hcHBlbmRDaGlsZChhYm91dCk7XG5cbmNvbnN0IHNvY2lhbE1lZGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuc29jaWFsTWVkaWEudGV4dENvbnRlbnQgPSAnRm9sbG93IHVzIG9uIHNvY2lhbCBtZWRpYSEnO1xuY29udGVudC5hcHBlbmQoc29jaWFsTWVkaWEpO1xuXG5jb25zdCB0d2l0dGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnN0IHR3aXR0ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnR3aXR0ZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3R3aXR0ZXIuY29tL0ZsYW5pZ2Fuc0ZMJyk7XG50d2l0dGVySW1nLnNyYyA9IHR3aXR0ZXI7XG5jb250ZW50LmFwcGVuZCh0d2l0dGVyTGluayk7XG50d2l0dGVyTGluay5hcHBlbmQodHdpdHRlckltZyk7XG5cbmNvbnN0IGluc3RhZ3JhbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb25zdCBpbnN0YWdyYW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmluc3RhZ3JhbUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZmxhbmlnYW5zZmwvP2hsPWVuJyk7XG5pbnN0YWdyYW1JbWcuc3JjID0gaW5zdGFncmFtO1xuY29udGVudC5hcHBlbmQoaW5zdGFncmFtTGluayk7XG5pbnN0YWdyYW1MaW5rLmFwcGVuZChpbnN0YWdyYW1JbWcpO1xuXG5jb25zdCBzaWRlYmFyID0gY3JlYXRlTWVudVNpZGViYXIobWVudUFycik7XG5cbm1lbnVEaXYuYXBwZW5kKHNpZGViYXIpO1xuXG5hZGRNZW51VG9ET00oKTtcbmFkZExvY2F0aW9uc1RvRE9NKCk7XG4vLyBhZGRDb250YWN0Rm9ybXRvRE9NKCk7XG5cbm1lbnVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbmxvY2F0aW9uTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkLXRhYicpO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHVzZXMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZGV0ZWN0IHdoaWNoIGl0ZW0gdHlwZSBpcyBzZWxlY3RlZCBpbiB0aGUgbWVudVxuLy8gYW5kIHRoZW4gZGlzcGxheXMgb25seSB0aGUgb2JqZWN0cyB0aGF0IG1hdGNoIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gdHlwZVxuZnVuY3Rpb24gYWRkTWVudVRvRE9NKCkge1xuICBsZXQgZmlsdGVyZWRNZW51QXJyID0gW107XG4gIGNvbnN0IHNpZGViYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLWl0ZW0nKTtcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1saXN0Jyk7XG4gIHNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5zaWRlYmFyLWl0ZW0nKSkge1xuICAgICAgZmlsdGVyZWRNZW51QXJyID0gbWVudUFyci5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gZS50YXJnZXQuaWQpO1xuICAgICAgbWVudUxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZmlsdGVyZWRNZW51QXJyKSB7XG4gICAgICAgIC8vIGZvciAoY29uc3QgaXRlbSBvZiBtZW51QXJyKSB7XG4gICAgICAgIGNvbnN0IG1lbnVQcm9wQXJyID0gY3JlYXRlTWVudUxpc3RJdGVtKCk7XG4gICAgICAgIGFkZE1lbnVUZXh0LmNhbGwoaXRlbSwgbWVudVByb3BBcnIpO1xuICAgICAgfTtcbiAgICAgIHNpZGViYXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTG9jYXRpb25zVG9ET00oKSB7XG4gIGZvciAoY29uc3QgaXRlbSBvZiBsb2NBcnIpIHtcbiAgICBjb25zdCBsb2NQcm9wQXJyID0gY3JlYXRlTG9jYXRpb25MaXN0SXRlbSgpO1xuICAgIGFkZExvY2F0aW9uVGV4dC5jYWxsKGl0ZW0sIGxvY1Byb3BBcnIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvcGVuSG9tZVRhYigpIHtcbiAgYWJvdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIG1lbnVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbG9jYXRpb25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRhY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkLXRhYicpO1xuICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtdGFiJyk7XG4gIGxvY2F0aW9uVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtdGFiJyk7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZC10YWInKTtcbn1cblxuZnVuY3Rpb24gb3Blbk1lbnVUYWIoKSB7XG4gIGFib3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIG1lbnVEaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgbG9jYXRpb25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRhY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkLXRhYicpO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQtdGFiJyk7XG4gIGxvY2F0aW9uVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtdGFiJyk7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZC10YWInKTtcbn1cblxuZnVuY3Rpb24gb3BlbkxvY2F0aW9uVGFiKCkge1xuICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBtZW51RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGxvY2F0aW9uTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtdGFiJyk7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZC10YWInKTtcbiAgbG9jYXRpb25UYWIuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZC10YWInKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkLXRhYicpO1xufVxuXG5mdW5jdGlvbiBvcGVuQ29udGFjdFRhYigpIHtcbiAgYWJvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbWVudURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBsb2NhdGlvbkxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQtdGFiJyk7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZC10YWInKTtcbiAgbG9jYXRpb25UYWIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZC10YWInKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkLXRhYicpO1xufVxuXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkhvbWVUYWIpO1xubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51VGFiKTtcbmxvY2F0aW9uVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkxvY2F0aW9uVGFiKTtcbmNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQ29udGFjdFRhYik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=