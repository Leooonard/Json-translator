/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isObject(obj) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null) {
        return true;
    } else {
        return false;
    }
}

function isPlainObject(obj) {
    if (isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype) {
        return true;
    } else {
        return false;
    }
}

function isString(str) {
    return typeof str === 'string';
}

function isNumber(num) {
    return typeof num === 'number';
}

function isBool(bool) {
    return typeof bool === 'boolean';
}

function isArray(arr) {
    return Array.isArray(arr);
}

function isPlainValue(val) {
    return isString(val) || isNumber(val) || isBool(val) || val === null;
}

module.exports = {
    isObject: isObject,
    isPlainObject: isPlainObject,
    isString: isString,
    isNumber: isNumber,
    isBool: isBool,
    isArray: isArray,
    isPlainValue: isPlainValue
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToiObject = function () {
    function ToiObject(transpiledName, childSchema) {
        _classCallCheck(this, ToiObject);

        this._transpiledName = transpiledName;
        this._childSchema = childSchema;
    }

    _createClass(ToiObject, [{
        key: 'getTranspiledName',
        value: function getTranspiledName() {
            return this._transpiledName;
        }
    }, {
        key: 'getChildSchema',
        value: function getChildSchema() {
            return this._childSchema;
        }
    }]);

    return ToiObject;
}();

module.exports = ToiObject;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ToiArray = __webpack_require__(3);
var ToiObject = __webpack_require__(1);

function isToiArray(toiArray) {
    if (toiArray === null || toiArray === undefined) {
        return false;
    }

    return Object.getPrototypeOf(toiArray) === ToiArray.prototype;
}

function isToiObject(toiObject) {
    if (toiObject === null || toiObject === undefined) {
        return false;
    }

    return Object.getPrototypeOf(toiObject) === ToiObject.prototype;
}

exports.isToiArray = isToiArray;
exports.isToiObject = isToiObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToiObject = __webpack_require__(1);

var ToiArray = function (_ToiObject) {
    _inherits(ToiArray, _ToiObject);

    function ToiArray(transpiledName, schema) {
        _classCallCheck(this, ToiArray);

        var _this = _possibleConstructorReturn(this, (ToiArray.__proto__ || Object.getPrototypeOf(ToiArray)).call(this, transpiledName, schema));

        _this._specialChildSchema = {};
        return _this;
    }

    _createClass(ToiArray, [{
        key: 'getSpecialChildSchema',
        value: function getSpecialChildSchema() {
            return this._specialChildSchema;
        }
    }, {
        key: 'indexOf',
        value: function indexOf(index, schema) {
            this._specialChildSchema[index] = schema;
            return this;
        }
    }]);

    return ToiArray;
}(ToiObject);

module.exports = ToiArray;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var typeChecker = __webpack_require__(0);
var transpileArray = __webpack_require__(5);
var transpileObject = __webpack_require__(6);

function getTranspiler(target) {
    if (typeChecker.isArray(target)) {
        return transpileArray;
    } else if (typeChecker.isPlainObject(target)) {
        return transpileObject;
    } else {
        return undefined;
    }
}

exports.getTranspiler = getTranspiler;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var typeChecker = __webpack_require__(0);
var toiTypeChecker = __webpack_require__(2);

function transpileArray(target, schema, getTranspiler) {
    if (!typeChecker.isArray(target)) {
        // 转换的目标却不是Array，直接不转换返回。
        return target;
    }

    var specialSchema = undefined;
    if (typeChecker.isArray(schema)) {
        schema = schema[0];
    } else if (toiTypeChecker.isToiArray(schema)) {
        specialSchema = schema.getSpecialChildSchema();
        schema = schema.getChildSchema();
    } else {
        return target; // 给予的schema有问题，直接返回target。
    }

    return target.map(function (item, index) {
        var transpiler = getTranspiler(item);
        var currentSchema = schema;
        if (specialSchema && specialSchema[index]) {
            currentSchema = specialSchema[index];
        }

        if (transpiler) {
            return transpiler(item, currentSchema, getTranspiler);
        } else {
            return item;
        }
    });
}

module.exports = transpileArray;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var typeChecker = __webpack_require__(0);
var toiTypeChecker = __webpack_require__(2);

function transpileObject(target, schema, getTranspiler) {
    var transpiled = {};

    if (!typeChecker.isPlainObject(target)) {
        return target;
    }

    if (toiTypeChecker.isToiObject(schema)) {
        schema = schema.getChildSchema();
    }

    if (!typeChecker.isPlainObject(schema)) {
        return target;
    }

    Object.keys(target).forEach(function (key) {
        var value = target[key];
        var transpiler = getTranspiler(value);

        if (transpiler) {
            var childSchema = schema[key];
            var transpiledKey = getTranspiledName(childSchema) || key;
            transpiled[transpiledKey] = transpiler(value, childSchema, getTranspiler);
        } else {
            var _transpiledKey = typeChecker.isString(schema[key]) ? schema[key] : key;
            transpiled[_transpiledKey] = value;
        }
    });

    return transpiled;
}

function getTranspiledName(schema) {
    if (typeChecker.isString(schema)) {
        return schema;
    } else if (toiTypeChecker.isToiArray(schema) || toiTypeChecker.isToiObject(schema)) {
        return schema.getTranspiledName();
    } else {
        return undefined;
    }
}

module.exports = transpileObject;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
    source: {
        key: 原来的key,
        value: 原来的value
    },
    schema: 对应的转换schema，schema有三种可能，字符串，数组，ToiArray。

    返回值
    source: {
        key: 转换后的key,
        value: 转换后的value
    }

    schema一定是对应类型的schema，但是source不一定是，对source要做检查。
*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var typeChecker = __webpack_require__(0);
var toiTypeChecker = __webpack_require__(2);
var ToiArray = __webpack_require__(3);
var ToiObject = __webpack_require__(1);
var getTranspiler = __webpack_require__(4).getTranspiler;

var Toi = function () {
    function Toi(schema) {
        _classCallCheck(this, Toi);

        this._schema = schema;
    }

    _createClass(Toi, [{
        key: 'transpile',
        value: function transpile(target) {
            if (!typeChecker.isArray(target) && !typeChecker.isPlainObject(target)) {
                return target;
            }

            var transpiler = getTranspiler(target);
            return transpiler(target, this._schema, getTranspiler);
        }
    }], [{
        key: 'array',
        value: function array(transpiledName, childSchema) {
            return new ToiArray(transpiledName, childSchema);
        }
    }, {
        key: 'object',
        value: function object(transpiledName, childSchema) {
            return new ToiObject(transpiledName, childSchema);
        }
    }, {
        key: 'transpile',
        value: function transpile(schema, target) {
            return new Toi(schema).transpile(target);
        }
    }]);

    return Toi;
}();

module.exports = Toi;

/***/ })
/******/ ]);