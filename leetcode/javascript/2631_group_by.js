/**
 * 2631. Group By 
 * Problem Link: https://leetcode.com/problems/group-by/
 * Solution Link (Personal):
 */

Array.prototype.groupBy = function (fn) {
  const groups = {};

  this.forEach((item) => {
    const key = fn(item);
    if (groups[key]) {
      groups[key].push(item);
    } else {
      groups[key] = [item];
    }
  });

  return groups;
};
