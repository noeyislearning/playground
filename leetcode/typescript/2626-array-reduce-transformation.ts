const reduce = (nums: number[], fn: (acc: number, curr: number) => number, init: number): number => {
  let val: number = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};