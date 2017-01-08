'use strict';

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

let typeChecker = require('./typeChecker.js');
let toiTypeChecker = require('./toiTypeChecker.js');
let ToiArray = require('./toiArray.js');
let ToiObject = require('./toiObject.js');
let getTranspiler = require('./toiTranspilerFactory.js').getTranspiler;

class Toi {
    constructor (schema) {
        this._schema = schema;
    }

    transpile (target) {
        if (!typeChecker.isArray(target) && !typeChecker.isPlainObject(target)) {
            return target;
        }

        let transpiler = getTranspiler(target);
        return transpiler(target, this._schema, getTranspiler);
    }

    static array (transpiledName, childSchema) {
        return new ToiArray(transpiledName, childSchema);
    }

    static object (transpiledName, childSchema) {
        return new ToiObject(transpiledName, childSchema);
    }

    static transpile (schema, target) {
        return new Toi(schema).transpile(target);
    }
}

module.exports = Toi;
