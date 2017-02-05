'use strict';

let ToiArray = require('./toiArray.js');
let ToiObject = require('./toiObject.js');

function isToiArray (toiArray) {
    if (toiArray === null || toiArray === undefined) {
        return false;
    }

    return Object.getPrototypeOf(toiArray) === ToiArray.prototype;
}

function isToiObject (toiObject) {
    if (toiObject === null || toiObject === undefined) {
        return false;
    }

    return Object.getPrototypeOf(toiObject) === ToiObject.prototype;
}

exports.isToiArray = isToiArray;
exports.isToiObject = isToiObject;
