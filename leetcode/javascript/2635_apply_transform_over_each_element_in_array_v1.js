/**
 * 2635. Apply Transform over Each Element in Array (Answer v1)
 * Problem Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * Solution Link (Personal):
 */

var map = function (arr, fn) {
  const newArray = new Array(arr.length);
  for (i = 0; i < arr.length; ++i) {
    newArray[i] = fn(arr[i], i);
  }
  return newArray;
};
