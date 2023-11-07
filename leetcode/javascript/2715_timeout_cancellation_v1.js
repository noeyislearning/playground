/**
 * 2715. Timeout Cancellation (Answer v1)
 * Problem Link: https://leetcode.com/problems/timeout-cancellation/
 * Solution Link (Personal):
 */
<<<<<<< HEAD

var cancellable = function(fn, args, t) {
  let cancelled = false;

  const delayCallback = () => {
    if (!cancelled) {
      fn(...args);
    }
  };

  const cancelFn = () => {
    cancelled = true;
  };

  setTimeout(delayCallback, t);

  return cancelFn;
};
=======
>>>>>>> deepsource-transform-cbc8ec17
