/**
 * 2695. Array Wrapper (Answer v1)
 * Problem Link: https://leetcode.com/problems/array-wrapper/
 * Solution Link (Personal):
 */

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((a, b) => a + b, 0);
  }

  toString() {
    return `[${this.nums.join(',')}]`; 
  }
}
