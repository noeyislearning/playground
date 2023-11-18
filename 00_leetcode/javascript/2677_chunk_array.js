/**
 * 2677. Chunk Array
 * Problem Link: https://leetcode.com/problems/chunk-array/
 */

const chunk = (arr, size) => {
  const chunks = [];
  let i = 0;

  while (i < arr.length) {
    chunks.push(arr.slice(i, i + size));
    i += size;
  }

  return chunks;
};
