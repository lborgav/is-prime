'use strict';

var assert = require('assert');
var isPrime = require('./');

// Primes
it('should return true because 2 is prime', function () {
    assert.strictEqual(isPrime(2), true);
});
it('should return true because 3 is prime', function () {
    assert.strictEqual(isPrime(3), true);
});
it('should return true because 5 is prime', function () {
    assert.strictEqual(isPrime(5), true);
});
it('should return true because 7 is prime', function () {
    assert.strictEqual(isPrime(7), true);
});

// Not primes
it('should return false because 4 is not prime', function () {
    assert.strictEqual(isPrime(4), false);
});
it('should return false because 6 is not prime', function () {
    assert.strictEqual(isPrime(6), false);
});
it('should return false because 8 is not prime', function () {
    assert.strictEqual(isPrime(8), false);
});
it('should return false because 9 is not prime', function () {
    assert.strictEqual(isPrime(9), false);
});
