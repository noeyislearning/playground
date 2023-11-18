/**
 * 2627. Debounce
 * Problem Link: https://leetcode.com/problems/debounce/
 */

var debounce = function (fn, t) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
};
