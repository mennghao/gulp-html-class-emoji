var expect = require('chai').expect;
var util = require('../src/util.js');

describe('Util test', function(){
	describe('#getSubsetArr', function(){
		var arr = [1,2,3,4,5,6,7,8,9,0];

		var result_1 = util.getSubsetArr(arr, 3);
		var result_2 = util.getSubsetArr(arr, 5);

		it('Should return an Array type', function(){

			expect(result_1).to.be.instanceof(Array);
			expect(result_2).to.be.instanceof(Array);
		});

		it('Should return a subset of the array', function(){

			expect(arr).to.include.members(result_1)
			expect(arr).to.include.members(result_2);
		});
	})
})