const { assert } = require('chai');
const Adder = require('../../src/lib/adder');
require('chai').should();

describe('Adder', () => {
    it('should add one number to another', (done) => {
        assert.typeOf(Adder, 'function');
        const one = new Adder(1);
        assert.typeOf(one, 'object');
        const three = one.add(2);
        three.should.be.a('number');
        three.should.equal(3);
        done();
    });

    it('should subtract one number from another', (done) => {
        assert.typeOf(Adder, 'function');
        const one = new Adder(1);
        assert.typeOf(one, 'object');
        const zero = one.subtract(1);
        zero.should.equal(0);
        done();
    });
});
