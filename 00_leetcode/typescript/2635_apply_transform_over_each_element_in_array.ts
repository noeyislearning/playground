/**
 * 2635. Apply Transform over Each Element in Array
 * Problem Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 */

const map = <T, U>(arr: T[], fn: (item: T, index: number) => U): U[] => {
  const newArray: U[] = new Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    newArray[i] = fn(arr[i], i);
  }
  return newArray;
};
