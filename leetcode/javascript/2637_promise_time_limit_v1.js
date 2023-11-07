/**
 * 2637. Promise Time Limit (Answer v1)
 * Problem Link: https://leetcode.com/problems/promise-time-limit/
 * Solution Link (Personal):
 */

var timeLimit = function (fn, t) {
  return async function (...args) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    const resultPromise = fn(...args);

    return Promise.race([resultPromise, timeoutPromise]);
  };
};
