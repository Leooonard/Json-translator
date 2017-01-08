'use strict';

function isObject (obj) {
    if (typeof obj === 'object' && obj !== null) {
        return true;
    } else {
        return false;
    }
}

function isPlainObject (obj) {
    if (isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype) {
        return true;
    } else {
        return false;
    }
}

function isString (str) {
    return typeof str === 'string';
}

function isNumber (num) {
    return typeof num === 'number';
}

function isBool (bool) {
    return typeof bool === 'boolean';
}

function isArray (arr) {
    return Array.isArray(arr);
}

function isPlainValue (val) {
    return isString(val) || isNumber(val) || isBool(val) || val === null;
}

module.exports = {
    isObject,
    isPlainObject,
    isString,
    isNumber,
    isBool,
    isArray,
    isPlainValue
}
