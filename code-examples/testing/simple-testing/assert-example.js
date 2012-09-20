
/**
 * Module dependencies.
 */

var assert = require('assert');

/**
 * Assert condition
 */

var now = Date.now()
console.log(now);
assert.ok(now % 2 == 0);
