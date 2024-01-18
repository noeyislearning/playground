/**
 * 2665. Counter II
 * Problem Link: https://leetcode.com/problems/counter-ii/
 */

type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let current: number = init;
  return {
    increment: () => {
      return current;
    },
    decrement: () => {
      current--;
      return current;
    },
    reset: () => {
      current = init;
      return current;
    },
  };
}
