/**
 * 2619. Array Prototype Last
 * Problem Link: https://leetcode.com/problems/array-prototype-last/
 * Solution Link (Personal):
 */

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};
