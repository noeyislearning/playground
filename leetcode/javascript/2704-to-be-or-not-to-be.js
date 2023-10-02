var expect = function(val) {
  return {
      toBe: function(compareVal) {
          if (val === compareVal) {
              return true;
          } else {
              throw "Not Equal";
          }
      },
      notToBe: function(compareVal) {
          if (val !== compareVal) {
              return true;
          } else {
              throw "Equal";
          }
      }
  };
};