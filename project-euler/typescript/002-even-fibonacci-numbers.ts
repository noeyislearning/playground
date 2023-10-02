const evenFibonacciNumbers = (limit: number): number => {
  let a = 1; 
  let b = 2; 
  let sum = 0; 

  while (b < limit) { 
    if (b % 2 === 0) { 
      sum += b; 
    }
    const c = a + b; 
    a = b; 
    b = c; 
  }

  return sum; 
};