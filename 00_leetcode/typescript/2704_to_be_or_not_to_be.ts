/**
 * 2704. To Be or Not to Be
 * Problem Link: https://leetcode.com/problems/to-be-or-not-to-be/
 */

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: function (compareVal: any): boolean {
      if (val === compareVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (compareVal: any): boolean {
      if (val !== compareVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}
