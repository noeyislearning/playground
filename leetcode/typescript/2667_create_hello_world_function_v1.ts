/**
 * 2667. Create Hello World Function (Answer v1)
 * Problem Link: https://leetcode.com/problems/create-hello-world-function/
 * Solution Link (Personal): 
 */

function createHelloWorld() {
	return function(...args): string {
        return "Hello World"
    };
};