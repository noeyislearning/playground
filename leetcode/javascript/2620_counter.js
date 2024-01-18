/**
 * 2620. Counter
 * Problem Link: https://leetcode.com/problems/counter/
 */

let createCounter = function (n) {
  return function () {
    return n++;
  };
};
