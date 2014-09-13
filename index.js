
/**
 * Module dependencies.
 */

var factorial = require('factorial');


/**
 * Binomial coefficient.
 *
 * @param {Number} n
 * @param {Number} k
 * @return {Number}
 * @api public
 */

module.exports = function(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
};

