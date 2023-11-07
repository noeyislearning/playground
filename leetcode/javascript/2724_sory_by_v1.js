/**
 * 2724. Sort by (Answer v1)
 * Problem Link: https://leetcode.com/problems/sort-by/
 * Solution Link (Personal):
 */

const sortBy = (arr, fn) => {
  const sorted = [...arr];

  sorted.sort((a, b) => {
    const valA = fn(a);
    const valB = fn(b);
    return valA - valB; 
  });

  return sorted;
}