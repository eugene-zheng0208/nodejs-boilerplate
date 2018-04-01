// const assert = require('chai').assert;
// const should = require('chai').should();
const App = require('../src/app');

describe('App', () => {
    it('should open the app and run', (done) => {
        if (App) { console.warn('Yay'); }
        done();
    });
});

require('./lib/adder.test');
