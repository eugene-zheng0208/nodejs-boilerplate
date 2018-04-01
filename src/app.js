// @flow

require('dotenv').config();

const Raven = require('raven');

const DSN = process.env.SENTRY_DSN;

Raven.config(DSN).install((err, sendErr, eventId) => {
    if (!sendErr) {
        console.warn(`Successfully sent fatal error with eventId ${eventId} to Sentry:`);
        console.error(err.stack);
    }
    console.warn('This is thy sheath; there rust, and let me die.');
    process.exit(1);
});

const Adder = require('./lib/adder');

const output1 = new Adder(1);

const print1 = output1.add(2);

console.warn(print1);
