'use strict';

let caseExecutor = require('./util.js').caseExecutor;
let Toi = require('../index.js');

function case1 () {
    let source = {
        a: 1,
        b: 2,
        c: {
            a: 1,
            b: 2
        },
        d: [
            {
                e: 1
            },
            {
                f: 2
            },
            {
                e: 1
            }
        ]
    };
    let schema = {
        a: 'a1',
        b: 'b1',
        c: {
            a: 'aa1',
            b: 'bb1'
        },
        d: Toi.array('d1', {
            e: 'ee1'
        }).indexOf(1, {
            f: 'ff1'
        })
    };
    let resultShouldBe = {
        a1: 1,
        b1: 2,
        c: {
            aa1: 1,
            bb1: 2
        },
        d1: [
            {
                ee1: 1
            },
            {
                ff1: 2
            },
            {
                ee1: 1
            }
        ]
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case1);

function case2 () {
    let source = {
        a: 1,
        b: 2,
        c: {
            a: 1,
            b: 2
        },
        d: [
            {
                e: 1
            },
            {
                f: 2
            },
            {
                e: 1
            }
        ]
    };
    let schema = {
        a: 'a1',
        c: {
            a: 'aa1',
            b: 'bb1'
        },
        d: Toi.array('d1', {
            e: 'ee1'
        }).indexOf(1, {
            f: 'ff1'
        })
    };
    let resultShouldBe = {
        a1: 1,
        b: 2,
        c: {
            aa1: 1,
            bb1: 2
        },
        d1: [
            {
                ee1: 1
            },
            {
                ff1: 2
            },
            {
                ee1: 1
            }
        ]
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case2);

function case3 () {
    let source = {
        a: 1,
        b: 2,
        c: {
            a: 1,
            b: 2
        },
        d: [
            {
                e: 1
            },
            {
                f: 2
            },
            {
                e: 1
            }
        ]
    };
    let schema = {
        a: 'a1',
        b: null,
        c: {
            a: 'aa1',
            b: 'bb1'
        },
        d: Toi.array('d1', {
            e: 'ee1'
        }).indexOf(1, {
            f: 'ff1'
        })
    };
    let resultShouldBe = {
        a1: 1,
        b: 2,
        c: {
            aa1: 1,
            bb1: 2
        },
        d1: [
            {
                ee1: 1
            },
            {
                ff1: 2
            },
            {
                ee1: 1
            }
        ]
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case3);

function case4 () {
    let source = {
        a: 1,
        b: 2,
        c: {
            a: 1,
            b: 2
        },
        d: [
            {
                e: 1
            },
            {
                f: 2
            },
            {
                e: 1
            }
        ]
    };
    let schema = {
        a: 'a1',
        b: 'b1',
        c: [
            {
                a: 'aa1',
                b: 'bb1'
            }
        ],
        d: Toi.array('d1', {
            e: 'ee1'
        }).indexOf(1, {
            f: 'ff1'
        })
    };
    let resultShouldBe = {
        a1: 1,
        b1: 2,
        c: {
            a: 1,
            b: 2
        },
        d1: [
            {
                ee1: 1
            },
            {
                ff1: 2
            },
            {
                ee1: 1
            }
        ]
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case4);

function case5 () {
    let source = {
        a: 1,
        b: 2,
        c: {
            a: 1,
            b: 2,
            c: [
                '1', '2', {
                    a: 1
                }, {
                    a: 2
                }, [
                    {
                        a: 1
                    },
                    {
                        a: 2
                    }
                ]
            ]
        },
        d: [
            {
                e: 1
            },
            {
                f: 2
            },
            {
                e: 1
            }
        ]
    };
    let schema = {
        a: 'a1',
        b: 'b1',
        c: {
            a: 'aa1',
            b: 'bb1',
            c: Toi.array(null, {
                a: 'c'
            }).indexOf(4, Toi.array('a', {
                a: 'b'
            }))
        },
        d: Toi.array('d1', {
            e: 'ee1'
        }).indexOf(1, {
            f: 'ff1'
        })
    };
    let resultShouldBe = {
        a1: 1,
        b1: 2,
        c: {
            aa1: 1,
            bb1: 2,
            c: [
                '1', '2', {
                    c: 1
                }, {
                    c: 2
                }, [
                    {
                        b: 1
                    },
                    {
                        b: 2
                    }
                ]
            ]
        },
        d1: [
            {
                ee1: 1
            },
            {
                ff1: 2
            },
            {
                ee1: 1
            }
        ]
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case5);

function case6 () {
    let source = {
        a: 1,
        b: 2,
        c: {
            a: 1,
            b: 2,
            c: [
                '1', '2', {
                    a: 1
                }, {
                    a: 2
                }, [
                    {
                        a: 1
                    },
                    {
                        a: 2
                    }
                ]
            ]
        },
        d: [
            {
                e: 1
            },
            {
                f: 2
            },
            {
                e: 1
            }
        ]
    };
    let schema = Toi.object('null', {
        a: 'a1',
        b: 'b1',
        c: {
            a: 'aa1',
            b: 'bb1',
            c: Toi.array(null, {
                a: 'c'
            }).indexOf(4, Toi.array('a', {
                a: 'b'
            }))
        },
        d: Toi.array('d1', {
            e: 'ee1'
        }).indexOf(1, {
            f: 'ff1'
        })
    });
    let resultShouldBe = {
        a1: 1,
        b1: 2,
        c: {
            aa1: 1,
            bb1: 2,
            c: [
                '1', '2', {
                    c: 1
                }, {
                    c: 2
                }, [
                    {
                        b: 1
                    },
                    {
                        b: 2
                    }
                ]
            ]
        },
        d1: [
            {
                ee1: 1
            },
            {
                ff1: 2
            },
            {
                ee1: 1
            }
        ]
    };

    return {source, schema, resultShouldBe};
}

caseExecutor(case6);
