/**
 * 2667. Create Hello World Function
 * Problem Link: https://leetcode.com/problems/create-hello-world-function/
 */

function createHelloWorld() {
  return function (...args): string {
    return "Hello World";
  };
}
