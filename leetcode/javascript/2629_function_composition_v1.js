/**
 * 2629. Function Composition (Answer v1)
 * Problem Link: https://leetcode.com/problems/function-composition/
 * Solution Link (Personal): 
 */

var compose = function(functions) {
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
};
