/**
 * 2626. Array Reduce Transformation (Answer v1)
 * Problem Link: https://leetcode.com/problems/array-reduce-transformation/
 * Solution Link (Personal): 
 */

let reduce = function(nums, fn, init) {
  let val = init
  for (let i = 0; i < nums.length; i++) {
      val = fn(val, nums[i])
  }
  return val;
};