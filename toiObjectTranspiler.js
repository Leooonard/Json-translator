'use strict';

let typeChecker = require('./typeChecker.js');
let toiTypeChecker = require('./toiTypeChecker.js');

function transpileObject (target, schema, getTranspiler) {
    let transpiled = {};

    if (!typeChecker.isPlainObject(target)) {
        return target;
    }

    if (typeChecker.isPlainObject(schema)) {
        schema = schema;
    } else if (toiTypeChecker.isToiObject(schema)) {
        schema = schema.getChildSchema();
    } else {
        return target;
    }

    Object.keys(target).forEach(key => {
        let value = target[key];
        let transpiler = getTranspiler(value);

        if (transpiler) {
            let childSchema = schema[key];
            let transpiledKey = getTranspiledName(childSchema) || key;
            transpiled[transpiledKey] = transpiler(value, childSchema, getTranspiler);
        } else {
            let transpiledKey = typeChecker.isString(schema[key]) ? schema[key] : key;
            transpiled[transpiledKey] = value;
        }
    });

    return transpiled;
}

function getTranspiledName (schema) {
    if (typeChecker.isString(schema)) {
        return schema;
    } else if (toiTypeChecker.isToiArray(schema) || toiTypeChecker.isToiObject(schema)) {
        return schema.getTranspiledName();
    } else {
        return undefined;
    }
}

module.exports = transpileObject;
