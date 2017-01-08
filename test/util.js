'use strict';

let Toi = require('../index.js');
let assert = require('assert');

function getFunctionName (func) {
    let regexp = /^function\s+([a-zA-Z_$][\w$]*)\s*\(/;

    let result = regexp.exec(func.toString());
    if (result === null) {
        return '';
    } else {
        return result[1] || '';
    }
}

function caseExecutor (caseFunc) {
    let caseName = getFunctionName(caseFunc);
    
    try {
        let caseInfo = caseFunc();
        let schema = caseInfo.schema;
        let source = caseInfo.source;
        let resultShouldBe = caseInfo.resultShouldBe;

        let result = Toi.transpile(schema, source);

        assert.equal(JSON.stringify(result), JSON.stringify(resultShouldBe));
        console.log(`${caseName} pass`);
    } catch (e) {
        console.log(`${caseName} fail. reason is :\n${e}`);
    }
}

exports.caseExecutor = caseExecutor;
