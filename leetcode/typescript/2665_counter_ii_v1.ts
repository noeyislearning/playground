/**
 * 2665. Counter II (Answer v1)
 * Problem Link: https://leetcode.com/problems/counter-ii/
 * Solution Link (Personal): 
 */

type ReturnObj = {
  increment: () => number, 
  decrement: () => number, 
  reset: () => number,
}

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
      }
  }
};

