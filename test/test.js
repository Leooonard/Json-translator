'use strict';

let Toi = require('../index.js');

let source = {
    adate: 1,
    ddate: 2,
    aflights: [
        {
            fltName: 'a123',
            fltComp: 'dh'
        },
        {
            fltName: 'a333',
            fltComp: 'cq'
        },
        {
            fltName: 'a233',
            fltComp: 'aaa'
        }
    ],
    detail: {
        fltno: 123
    },
    extra2: 2333
};

let transpiler = new Toi({
    'adate': 'arriveDate',
    'ddate': 'departDate',
    'aflights': Toi.array('arriveFlights', {
        fltName: 'flightName',
        fltComp: 'flightCompanyName'
    }).indexOf(0, {
        fltName: 'specFlightName',
    }).indexOf(2, {
        fltComp: 'specFlightCompanyName'
    }),
    'detail': Toi.object('flightDetail', {
        'fltno': 'flightNo'
    }),
    'extra': {
        info: 'extraInfo'
    }
});

let target = transpiler.transpile(source);

console.log(target);
