/**
 * 2626. Array Reduce Transformation
 * Problem Link: https://leetcode.com/problems/array-reduce-transformation/
 */

let reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
