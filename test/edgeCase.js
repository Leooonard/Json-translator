'use strict';

let caseExecutor = require('./util.js').caseExecutor;

// source是非期望值, schema也是非期望值
function case1 () {
    let source = undefined;
    let schema = undefined;
    let resultShouldBe = undefined;

    return {source, schema, resultShouldBe};
}

caseExecutor(case1);

// source是非期望值, schema也是非期望值.
function case2 () {
    let source = 1;
    let schema = '1';
    let resultShouldBe = 1;

    return {source, schema, resultShouldBe};
}

caseExecutor(case2);

// source是非期望值, schema也是非期望值。
function case3 () {
    let source = '1';
    let schema = new Date();
    let resultShouldBe = '1';

    return {source, schema, resultShouldBe};
}

caseExecutor(case3);

// source是非期望值, schema也是非期望值.
function case4 () {
    let source = true;
    let schema = undefined;
    let resultShouldBe = true;

    return {source, schema, resultShouldBe};
}

caseExecutor(case4);

// source是期望值, schema是非期望值.
function case5 () {
    let source = {
        a: 1
    };
    let schema = 1;
    let resultShouldBe = {
        a: 1
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case5);

// source是期望值, schema是非期望值.
function case6 () {
    let source = {
        a: 1
    };
    let schema = '1';
    let resultShouldBe = {
        a: 1
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case6);

// source是期望值, schema是非期望值.
function case7 () {
    let source = {
        a: 1
    };
    let schema = [{
        a: 'b'
    }];
    let resultShouldBe = {
        a: 1
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case7);

// source是期望值, schema是非期望值.
function case8 () {
    let source = [1];
    let schema = {
        a: 'b'
    };
    let resultShouldBe = [1];

    return {source, schema, resultShouldBe};
}

caseExecutor(case8);

// source是期望值, schema是非期望值.
function case9 () {
    let source = [1];
    let schema = undefined;
    let resultShouldBe = [1];

    return {source, schema, resultShouldBe};
}

caseExecutor(case9);

// source是非期望值，schema是期望值
function case10 () {
    let source = 1;
    let schema = {
        a: 'b'
    };
    let resultShouldBe = 1;

    return {source, schema, resultShouldBe};
}

caseExecutor(case10);

// source是非期望值，schema是期望值
function case11 () {
    let source = '1';
    let schema = {
        a: 'b'
    }
    let resultShouldBe = '1';

    return {source, schema, resultShouldBe};
}

caseExecutor(case11);

// source是非期望值，schema是期望值
function case12 () {
    let source = true;
    let schema = [{
        a: 'b'
    }];
    let resultShouldBe = true;

    return {source, schema, resultShouldBe};
}

caseExecutor(case12);
