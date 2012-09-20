
/**
 * Inheritance utility.
 *
 * @param {Function} constructor
 * @param {Function} constructor we inherit from
 * @api private
 */

function inherits (a, b) {
  function c () {};
  c.prototype = b.prototype;
  a.prototype = new c;
};
