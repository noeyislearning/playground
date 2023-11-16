/**
 * 2666. Allow One Function Call
 * Problem Link: https://leetcode.com/problems/allow-one-function-call/
 * Solution Link (Personal):
 */

var once = function (fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    } else {
      return undefined;
    }
  };
};
