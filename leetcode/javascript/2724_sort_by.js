/**
 * 2724. Sort by
 * Problem Link: https://leetcode.com/problems/sort-by/
 */

const sortBy = (arr, fn) => {
  const sorted = [...arr];

  sorted.sort((a, b) => {
    const valA = fn(a);
    const valB = fn(b);
    return valA - valB;
  });

  return sorted;
};
