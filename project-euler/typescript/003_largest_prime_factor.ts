function largestPrimeFactor(num: number): number {
  let largestFactor = 1;
  let factor = 2;

  while (num > 1) {
    if (num % factor === 0) {
      largestFactor = factor;
      num /= factor;
      while (num % factor === 0) {
        num /= factor;
      }
    }
    factor++;
  }

  return largestFactor;
}
