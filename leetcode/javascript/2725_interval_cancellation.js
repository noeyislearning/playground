/**
 * 2725. Interval Cancellation 
 * Problem Link: https://leetcode.com/problems/interval-cancellation/
 * Solution Link (Personal):
 */

var cancellable = function (fn, args, t) {
  const result = [];
  const start = Date.now();
  let timerId;
  let cancelFn = false;

  const log = () => {
    if (cancelFn) return;
    const diff = Math.floor(Date.now() - start);
    result.push({ time: diff, returned: fn(...args) });
    timerId = setTimeout(log, t);
  };

  log();

  const cancel = () => {
    cancelFn = true;
    clearTimeout(timerId);
  };

  return cancel;
};
