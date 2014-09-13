
/**
 * Test dependencies.
 */

var assert = require('assert');
var binomial = require('..');


describe("binomial", function() {
	
	it("2-4", function() {
		assert.equal(binomial(2, 4), 6);
	});
	
});
