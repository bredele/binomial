
/**
 * Module dependencies.
 */

var factorial = require('factorial');


/**
 * Binomial coefficient.
 *
 * Examples:
 *
 * 	
 *
 * @param {Number} k
 * @param {Number} n
 * @return {Number}
 * @api public
 */

module.exports = function(k, n) {
  return factorial(n) / (factorial(k) * factorial(n - k));
};

