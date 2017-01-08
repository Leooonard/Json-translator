'use strict';

let typeChecker = require('./typeChecker.js');
let transpileArray = require('./toiArrayTranspiler.js');
let transpileObject = require('./toiObjectTranspiler.js');

function getTranspiler (target) {
    if (typeChecker.isArray(target)) {
        return transpileArray;
    } else if (typeChecker.isPlainObject(target)) {
        return transpileObject;
    } else {
        return undefined;
    }
}

exports.getTranspiler = getTranspiler;
