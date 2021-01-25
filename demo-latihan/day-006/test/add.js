const add = require('../qunits/add')

QUnit.module('add');

QUnit.test('add two number', asserts => {
    asserts.equal(add(1,1),2, '1+1=2');
});