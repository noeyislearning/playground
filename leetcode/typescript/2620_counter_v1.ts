/**
 * 2620. Counter (Answer v1)
 * Problem Link: https://leetcode.com/problems/counter/
 * Solution Link (Personal):
 */

function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}
