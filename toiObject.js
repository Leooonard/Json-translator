'use strict';

class ToiObject {
    constructor (transpiledName, childSchema) {
        this._transpiledName = transpiledName;
        this._childSchema = childSchema;
    }

    getTranspiledName () {
        return this._transpiledName;
    }

    getChildSchema () {
        return this._childSchema;
    }
}

module.exports = ToiObject;
