'use strict';

let caseExecutor = require('./util.js').caseExecutor;
let Toi = require('../index.js');

function case1 () {
    let source = {
        a: 1
    };
    let schema = {
        a: 'b'
    };
    let resultShouldBe = {
        b: 1
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case1);

function case2 () {
    let source = {
        a: 1,
        b: 2
    };
    let schema = {
        a: 'b',
        b: 'c'
    };
    let resultShouldBe = {
        b: 1,
        c: 2
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case2);

function case3 () {
    let source = {
        a: 1,
        b: 2
    };
    let schema = {
        a: 'c',
        b: null
    };
    let resultShouldBe = {
        c: 1,
        b: 2
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case3);

function case4 () {
    let source = {
        a: 1,
        b: 2
    };
    let schema = {
        a: null,
        b: null
    };
    let resultShouldBe = {
        a: 1,
        b: 2
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case4);

function case5 () {
    let source = {
        a: 1,
        b: [
            {
                a: 2
            }
        ]
    };
    let schema = {
        a: 'b',
        b: Toi.array('c', {
            a: 'd'
        })
    };
    let resultShouldBe = {
        b: 1,
        c: [
            {
                d: 2
            }
        ]
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case5);

function case6 () {
    let source = {
        a: 1,
        b: {
            a: 2
        }
    };
    let schema = {
        a: 'b',
        b: Toi.object('c', {
            a: 'd'
        })
    };
    let resultShouldBe = {
        b: 1,
        c: {
            d: 2
        }
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case6);

function case7 () {
    let source = {
        a: 1,
        b: {
            a: 1
        }
    };
    let schema = {
        a: 'c',
        b: {
            a: 'd'
        }
    };
    let resultShouldBe = {
        c: 1,
        b: {
            d: 1
        }
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case7);

function case8 () {
    let source = {
        a: 1,
        b: {
            a: 1
        }
    };
    let schema = {
        a: 'c',
        b: {
            a: null
        }
    };
    let resultShouldBe = {
        c: 1,
        b: {
            a: 1
        }
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case8);

function case9 () {
    let source = {
        a: 1,
        b: {
            a: 1
        }
    };
    let schema = {
        a: 'c',
        b: Toi.object(null, {
            a: 'd'
        })
    };
    let resultShouldBe = {
        c: 1,
        b: {
            d: 1
        }
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case9);

function case10 () {
    let source = {
        a: 1,
        b: [{
            a: 1
        }]
    };
    let schema = {
        a: 'c',
        b: Toi.object(null, {
            a: 'd'
        })
    };
    let resultShouldBe = {
        c: 1,
        b: [{
            a: 1
        }]
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case10);

function case11 () {
    let source = {
        a: 1,
        b: {
            a: 1
        }
    };
    let schema = {
        a: 'c',
        b: Toi.object(null, [{
            a: 'd'
        }])
    };
    let resultShouldBe = {
        c: 1,
        b: {
            a: 1
        }
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case11);

function case12 () {
    let source = {
        a: 1,
        b: {
            a: 1
        }
    };
    let schema = {
        a: 'c',
        b: Toi.object(null, null)
    };
    let resultShouldBe = {
        c: 1,
        b: {
            a: 1
        }
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case12);

function case13 () {
    let source = {
        a: 1,
        b: {
            a: 1
        }
    };
    let schema = {
        a: 'c',
        b: Toi.object('d', null)
    };
    let resultShouldBe = {
        c: 1,
        d: {
            a: 1
        }
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case13);
