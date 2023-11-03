/**
 * 2704. To Be or Not to Be (Answer v1)
 * Problem Link: https://leetcode.com/problems/to-be-or-not-to-be/
 * Solution Link (Personal):
 */

var expect = function (val) {
  return {
    toBe: function (compareVal) {
      if (val === compareVal) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe: function (compareVal) {
      if (val !== compareVal) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
};
