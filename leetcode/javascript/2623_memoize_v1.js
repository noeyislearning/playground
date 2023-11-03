/**
 * 2623. Memoize (Answer v1)
 * Problem Link: https://leetcode.com/problems/memoize/
 * Solution Link (Personal): 
 */

function memoize(fn) {
  const cache = new Map();
  const callCount = new Map();

  return function (...args) {
      if (args in cache) {
          callCount[args]++;
          return cache[args];
      } else {
          const result = fn(...args);
          cache[args] = result;
          callCount[args] = 1;
          return result;
      }
  }
}

function execute(fnName, actions, values) {
  let result = [];
  let fn;

  if (fnName === "sum") {
      fn = (a, b) => a + b;
  } else if (fnName === "fib") {
      fn = (n) => (n <= 1) ? 1 : (fn(n - 1) + fn(n - 2));
  } else if (fnName === "factorial") {
      fn = (n) => (n <= 1) ? 1 : (n * fn(n - 1));
  }

  const memoizedFn = memoize(fn);

  for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      const value = values[i];

      if (action === "call") {
          result.push(memoizedFn(...value));
      } else if (action === "getCallCount") {
          result.push(callCount[value]);
      }
  }

  return result;
}