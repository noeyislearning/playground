/**
 * 2620. Counter 
 * Problem Link: https://leetcode.com/problems/counter/
 * Solution Link (Personal):
 */

function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}
