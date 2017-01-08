'use strict';

let typeChecker = require('./typeChecker.js');
let toiTypeChecker = require('./toiTypeChecker.js');

function transpileArray (target, schema, getTranspiler) {
    if (!typeChecker.isArray(target)) {
        // 转换的目标却不是Array，直接不转换返回。
        return target;
    }

    let specialSchema = undefined;
    if (typeChecker.isArray(schema)) {
        schema = schema[0];
    } else if (toiTypeChecker.isToiArray(schema)) {
        specialSchema = schema.getSpecialChildSchema();
        schema = schema.getChildSchema();
    } else {
        return target; // 给予的schema有问题，直接返回target。
    }

    return target.map((item, index) => {
        let transpiler = getTranspiler(item);
        let currentSchema = schema;
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
