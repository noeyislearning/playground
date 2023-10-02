const map = <T, U>(arr: T[], fn: (item: T, index: number) => U): U[] => {
  const newArray: U[] = new Array(arr.length); 
  for(let i=0; i<arr.length; ++i) { 
      newArray[i] = fn(arr[i], i); 
  };
  return newArray;
};