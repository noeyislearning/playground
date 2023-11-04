/**
 * 2721. Execute Asynchronous Functions in Parallel (Answer v1)
 * Problem Link: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
 * Solution Link (Personal):
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
