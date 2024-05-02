---
title: Array Prototype Last
---

# Array Prototype Last

<Badge type="warning" text="LeetCode" /> <a href="https://leetcode.com/problems/array-prototype-last/" target="_blank"><Badge type="warning" text="#2619" /> </a> <Badge type="info" text="🟢 Easy" /> <Badge type="info" text="JavaScript" /> <a href="https://github.com/noeyislearning" target="_blank"><Badge type="tip" text="Solve by @noeyislearning" /> </a>

## Problem Statement

Write code that enhances all arrays such that you can call the `array.last()` method on any array and it will return the last element. If there are no elements in the array, it should return `-1`.

You may assume the array is the output of `JSON.parse`.

**Example 1:**

> Input: `nums = [null, {}, 3]`  
> Output: `3`  
> Explanation: `Calling nums.last() should return the last element: 3.`

**Example 2:**

> Input: `nums = []`  
> Output: `-1`  
> Explanation: `Because there are no elements, return -1.`

**Constraints:**

- `arr` is a valid JSON array
- `0 <= arr.length <= 1000`

## Solution

```javascript
Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1
}
```

## Explanation

Think of arrays like boxes full of stuff. You can have boxes with toys, snacks, or maybe even an empty box! Normally, if you want to know what's at the very end of the box, you have to dig through it all. This code is like giving all your boxes a superpower!

This code is like a tiny instruction you teach all your boxes:

1. **("My Name is Last")** Every box now has the ability to tell you what it calls the ".last()" thing. Imagine it's a special code word.

2. **(Check If Full)** First, the box peeks inside (`this.length > 0`). Is there anything in there?
   - If yes: It quickly jumps to the very back (`this[this.length - 1]`) and tells you what it finds.
   - If no: It gives you a "-1" signal, which means the box was empty.

## More Examples

**Example 1** — `nums has [null, {}, 3]` <a href="https://github.com/noeyislearning" target="_blank"><Badge type="tip" text="@noeyislearning" /> </a>

- You ask, "nums, what's your .last()?"
- It checks… not empty!
- It jumps to the back and says, "I found a 3!"

**Example 2** — `nums is empty []` <a href="https://github.com/noeyislearning" target="_blank"><Badge type="tip" text="@noeyislearning" /> </a>

- You ask, "nums, what's your .last()?"
- It checks... nothing inside.
- It gives you the signal "-1".
