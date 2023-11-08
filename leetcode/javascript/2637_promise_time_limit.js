/**
 * 2637. Promise Time Limit
 * Problem Link: https://leetcode.com/problems/promise-time-limit/
 * Solution Link (Personal):
 */

var timeLimit = function (fn, t) {
  return async function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((_, reject) =>
        setTimeout(() => reject("Time Limit Exceeded"), t),
      ),
    ]);
  };
};
