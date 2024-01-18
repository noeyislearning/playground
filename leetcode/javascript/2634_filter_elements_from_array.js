/**
 * 2634. Filter Elements from Array
 * Problem Link: https://leetcode.com/problems/filter-elements-from-array/
 */

const filter = (arr, fn) => {
  const newArray = [];
  for (let i = 0; i < arr.length; ++i) {
    if (fn(arr[i], i)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
