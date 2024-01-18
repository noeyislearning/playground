/**
 * 2621. Sleep
 * Problem Link: https://leetcode.com/problems/sleep/
 */

function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
