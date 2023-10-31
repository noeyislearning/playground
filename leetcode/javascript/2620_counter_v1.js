/**
 * 2620. Counter (Answer v1)
 * Problem Link: https://leetcode.com/problems/counter/
 * Solution Link (Personal): 
 */

let createCounter = function(n) {
  return function() {
      return n++;
  };
};