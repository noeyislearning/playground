/**
 * 2625. Flatten Deeply Nested Array
 * Problem Link: https://leetcode.com/problems/flatten-deeply-nested-array/
 */

const flat = (arr, n) => {
  if (n === 0) return arr;

  let result = [];

  const flatten = (arr, depth) => {
    arr.forEach((item) => {
      if (Array.isArray(item) && depth < n) {
        flatten(item, depth + 1);
      } else {
        result.push(item);
      }
    });
  };

  flatten(arr, 0);

  return result;
};
