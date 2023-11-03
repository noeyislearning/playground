/**
 * 2723. Add Two Promises
 * Problem Link: https://leetcode.com/problems/add-two-promises/
 * Solution Link (Personal):
 */

var addTwoPromises = async function(promise1, promise2) {
  const [result1, result2] = await Promise.all([promise1, promise2]);
  return result1 + result2;
};

// Example usage:
var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(result => {
  console.log(result); // Output: 7
});
