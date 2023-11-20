/**
 * 2620. Counter
 * Problem Link: https://leetcode.com/problems/counter/
 */

function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}
