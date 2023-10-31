/**
 * 2634. Filter Elements from Array (Answer v1)
 * Problem Link: https://leetcode.com/problems/filter-elements-from-array/
 * Solution Link (Personal): 
 */

const filter = (arr, fn) => {
  const newArray = []; 
  for(let i=0; i<arr.length; ++i) { 
      if (fn(arr[i], i)) { 
          newArray.push(arr[i]); 
      }
  };
  return newArray; 
};