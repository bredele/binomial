
/**
 * Test dependencies.
 */

var assert = require('assert');
var binomial = require('..');


describe("binomial", function() {

	it("4-2", function() {
		assert.equal(binomial(4, 2), 6);
	});
	
	it("10-3", function() {
		assert.equal(binomial(10, 3), 120);
	});

});
