'use strict';

let ToiObject = require('./toiObject.js');

class ToiArray extends ToiObject {
    constructor (transpiledName, schema) {
        super(transpiledName, schema);

        this._specialChildSchema = {};
    }

    getSpecialChildSchema () {
        return this._specialChildSchema;
    }

    indexOf (index, schema) {
        this._specialChildSchema[index] = schema;
        return this;
    }
}

module.exports = ToiArray;
