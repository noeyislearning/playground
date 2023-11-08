/**
 * 2722. Join Two Arrays by Id
 * Problem Link: https://leetcode.com/problems/join-two-arrays-by-id/
 * Solution Link (Personal):
 */

const join = (arr1, arr2) => {
  const map = new Map();

  for (let obj of arr1) {
    map.set(obj.id, obj);
  }

  for (let obj of arr2) {
    if (map.has(obj.id)) {
      let existing = map.get(obj.id);
      map.set(obj.id, { ...existing, ...obj });
    } else {
      map.set(obj.id, obj);
    }
  }

  return [...map.values()].sort((a, b) => a.id - b.id);
};
