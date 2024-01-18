/**
 * 2721. Execute Asynchronous Functions in Parallel
 * Problem Link: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
 */

const promiseAll = (functions) => {
  let results = [];
  let completedPromises = 0;

  return new Promise((resolve, reject) => {
    functions.forEach((fn, index) => {
      fn()
        .then((result) => {
          results[index] = result;
          completedPromises++;
          if (completedPromises === functions.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
