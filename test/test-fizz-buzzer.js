'use strict';

const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should return "fizz"', function() {
    const normalCases = [3, 6, 9, 12, 18];
    normalCases.forEach(function(input) {
      const fizz = fizzBuzzer(input);
      fizz.should.equal('fizz');
    });
  });

  it('should return "buzz"', function() {
    const normalCases = [5, 10, 20, 25, 35];
    normalCases.forEach(function(input) {
      const buzz = fizzBuzzer(input);
      buzz.should.equal('buzz');
    });
  });

  it('should return "fizz-buzz"', function() {
    const normalCases = [15, 30, 45, 60, 75];
    normalCases.forEach(function(input) {
      const fizzbuzz = fizzBuzzer(input);
      fizzbuzz.should.equal('fizz-buzz');
    });
  });

  it('should raise an error if args not numbers', function() {
    const nonNumerics = ['a', 'five', false];
    nonNumerics.forEach(function(input) {
      (function() {
        fizzBuzzer(input);
      }).should.throw(Error);
    });
  });
});