/**
 * 2695. Array Wrapper
 * Problem Link: https://leetcode.com/problems/array-wrapper/
 */

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((a, b) => a + b, 0);
  }

  toString() {
    return `[${this.nums.join(",")}]`;
  }
}
