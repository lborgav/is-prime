'use strict';

var numberIsInteger = require('number-is-integer');

function isPrime (n) {
  if(n === 1) {
    return false
  }
  if (n === 2 || n === 3) {
    return true;
  }
  else if ( (n % 2 === 0) || (n % 3 === 0) ){
    return false;
  }
  else {
    var p=5;
    var w=2;
    while ( p * p <= n ){
      if (n % p === 0) { return false; }
      p += w;
      w = 6 - w;
    }
    return true;
  }
}

module.exports = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Expected a number');
  }
  if(n<=0) {
    throw new Error('The number must be a positive integer');
  }
  if(!numberIsInteger(n)){
    throw new Error('The number must be a integer');
  }
  return isPrime(n);
};
