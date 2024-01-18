/**
 * 2665. Counter II
 * Problem Link: https://leetcode.com/problems/counter-ii/
 */

var createCounter = function (init) {
  let current = init;
  return {
    increment: function () {
      current++;
      return current;
    },
    decrement: function () {
      current--;
      return current;
    },
    reset: function () {
      current = init;
      return current;
    },
  };
};
