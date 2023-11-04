/**
 * 2727. Is Object Empty?
 * Problem Link: https://leetcode.com/problems/is-object-empty/
 * Solution Link (Personal):
 */

const isEmpty = (obj) => {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else {
    return Object.keys(obj).length === 0;  
  }
}