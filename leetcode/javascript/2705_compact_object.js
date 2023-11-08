/**
 * 2705. Compact Object
 * Problem Link: https://leetcode.com/problems/compact-object/
 * Solution Link (Personal):
 */

var compactObject = function (obj) {
  if (typeof obj === "object" && obj !== null) {
    if (Array.isArray(obj)) {
      return obj
        .map((element) => compactObject(element))
        .filter((element) => Boolean(element));
    } else {
      const result = {};
      for (const key in obj) {
        const compactedValue = compactObject(obj[key]);
        if (Boolean(compactedValue)) {
          result[key] = compactedValue;
        }
      }
      return result;
    }
  }
  return obj;
};
