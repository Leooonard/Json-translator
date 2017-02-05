'use strict';

let caseExecutor = require('./util.js').caseExecutor;
let Toi = require('../index.js');

function case1 () {
    let source = [
        {
            a: 1
        }
    ];
    let schema = [
        {
            a: 'b'
        }
    ];
    let resultShouldBe = [
        {
            b: 1
        }
    ];

    return {source, schema, resultShouldBe};
}

caseExecutor(case1);

function case2 () {
    let source = [
        [
            {
                a: 1
            }
        ]
    ];
    let schema = [
        [
            {
                a: 'b'
            }
        ]
    ];
    let resultShouldBe = [
        [
            {
                b: 1
            }
        ]
    ];

    return {source, schema, resultShouldBe};
}

caseExecutor(case2);

function case3 () {
    let source = [
        {
            a: 1
        },
        {
            a: 2
        }
    ];
    let schema = [
        {
            a: 'b'
        }
    ];
    let resultShouldBe = [
        {
            b: 1
        },
        {
            b: 2
        }
    ];

    return {source ,schema, resultShouldBe};
}

caseExecutor(case3);

function case4 () {
    let source = [
        {
            a: 1
        },
        '2'
    ];
    let schema = [
        {
            a: 'b'
        }
    ];
    let resultShouldBe = [
        {
            b: 1
        },
        '2'
    ];

    return {source, schema, resultShouldBe};
}

caseExecutor(case4);

function case5 () {
    let source = [
        {
            a: 1
        }
    ];
    let schema = [
        {
            b: 'c'
        }
    ];
    let resultShouldBe = [
        {
            a: 1
        }
    ];

    return {source, schema, resultShouldBe};
}

caseExecutor(case5);

function case6 () {
    let source = [
        {
            a: 1
        },
        [2]
    ];
    let schema = [
        {
            a: 'b'
        }
    ];
    let resultShouldBe = [
        {
            b: 1
        },
        [2]
    ];

    return {source, schema, resultShouldBe};
}

caseExecutor(case6);

function case7 () {
    let source = [
        {
            a: 1
        },
        {
            b: 2
        }
    ];
    let schema = Toi.array(null, {
        a: 'b'
    });
    let resultShouldBe = [
        {
            b: 1
        },
        {
            b: 2
        }
    ];

    return {source, schema, resultShouldBe};
}

caseExecutor(case7);

function case8 () {
    let source = [
        {
            a: 1
        },
        {
            b: 2
        }
    ];
    let schema = Toi.array(null, {
        a: 'b'
    }).indexOf(1, {
        b: 'c'
    });
    let resultShouldBe = [
        {
            b: 1
        },
        {
            c: 2
        }
    ];

    return {source, schema, resultShouldBe};
}

caseExecutor(case8);

function case9 () {
    let source = [
        {
            a: 1
        },
        {
            b: 2
        },
        {
            c: 3
        }
    ];
    let schema = Toi.array(null, {
        a: 'b'
    });
    let resultShouldBe = [
        {
            b: 1
        },
        {
            b: 2
        },
        {
            c: 3
        }
    ];

    return {source, schema, resultShouldBe};
}

caseExecutor(case9);

function case10 () {
    let source = [
        {
            a: 1
        },
        {
            b: 2
        }
    ];
    let schema = Toi.array(null, [
        {
            a: 'b'
        }
    ]);
    let resultShouldBe = [
        {
            a: 1
        },
        {
            b: 2
        }
    ];

    return {source, schema, resultShouldBe};
}

caseExecutor(case10);

function case11 () {
    let source = [
        {
            a: 1
        },
        {
            b: 2
        }
    ];
    let schema = Toi.array(null, {
        c: 'd'
    });
    let resultShouldBe = [
        {
            a: 1
        },
        {
            b: 2
        }
    ];

    return {source, schema, resultShouldBe};
}

caseExecutor(case11);
