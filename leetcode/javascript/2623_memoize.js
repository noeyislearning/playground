/**
 * 2623. Memoize
 * Problem Link: https://leetcode.com/problems/memoize/
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();
  const callCount = new Map();

  return function (...args) {
    const argsKey = JSON.stringify(args);

    if (cache.has(argsKey)) {
      callCount.set(argsKey, callCount.get(argsKey) + 1);
      return cache.get(argsKey);
    } else {
      const result = fn(...args);
      cache.set(argsKey, result);
      callCount.set(argsKey, 1);
      return result;
    }
  };
}

function execute(fnName, actions, values) {
  let result = [];
  let fn;

  if (fnName === "sum") {
    fn = (a, b) => a + b;
  } else if (fnName === "fib") {
    fn = (n) => (n <= 1 ? 1 : fn(n - 1) + fn(n - 2));
  } else if (fnName === "factorial") {
    fn = (n) => (n <= 1 ? 1 : n * fn(n - 1));
  }

  const memoizedFn = memoize(fn);

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const value = values[i];

    if (action === "call") {
      result.push(memoizedFn(...value));
    } else if (action === "getCallCount") {
      const argsKey = JSON.stringify(value);
      result.push(callCount.get(argsKey) || 0);
    }
  }

  return result;
}
