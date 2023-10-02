var map = function(arr, fn) {
  const newArray = new Array(arr.length); 
  for(i=0; i<arr.length; ++i) { 
      newArray[i] = fn(arr[i], i); 
  };
  return newArray; 
};