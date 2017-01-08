'use strict';

let ToiArray = require('./toiArray.js');
let ToiObject = require('./toiObject.js');

function isToiArray (toiArray) {
    return Object.getPrototypeOf(toiArray) === ToiArray;
}

function isToiObject (toiObject) {
    return Object.getPrototypeOf(toiObject) === ToiObject;
}

exports.isToiArray = isToiArray;
exports.isToiObject = isToiObject;
