---
title: Valid Parentheses
---

# Valid Parentheses

<Badge type="warning" text="LeetCode" /> <a href="https://leetcode.com/problems/valid-parentheses/" target="_blank"><Badge type="warning" text="#20" /> </a> <Badge type="info" text="🟢 Easy" /> <Badge type="info" text="Python3" /> <a href="https://github.com/noeyislearning" target="_blank"><Badge type="tip" text="Solve by @noeyislearning" /> </a>

## Problem Statement

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

> Input: `s = "()"`  
> Output: `true`

**Example 2:**

> Input: `s = "()[]{}"`  
> Output: `true`

**Example 3:**

> Input: `s = "(]"`  
> Output: `false`

**Constraints:**

- `1 <= s.length <= 10^4`
- `s` consists of parentheses only `'()[]{}'`.

## Solution

```python
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        bracket_map = {"(": ")", "[": "]", "{": "}"}

        for char in s:
            if char in bracket_map:
                stack.append(char)
            elif not stack or bracket_map[stack.pop()] != char:
                return False

        return not stack
```

## Explanation

Imagine you have a big party where only special guests can come in pairs:

- Round guests: `(` and `)`
- Square guests: `[` and `]`
- Curly guests: `{` and `}`

Your job is to be the doorman and make sure these rules are followed:

1. **(Pairs only)** Everyone needs a matching partner to enter.
2. **(Right order)** If a round guest enters first, a round guest has to be the one leaving. You can't have a square guest leave when the party is waiting for a round guest!
3. **(No leftovers)** veryone has to have a partner—no one left alone at the end.

Then your code is like a super-smart checklist for the doorman:

1. **(The Guest Stack)** Imagine a special stack of plates. You'll put a plate on the stack every time an opening guest (`(` , `[` , or `{` ) arrives.
2. **(The Guest Guidebook)** The `bracket_map` is like a party guidebook. It tells you who is the perfect partner for each opening guest.
3. **(Checking the Line)** For every guest in the line (`for char in s:`):
   - **(New Guest)** If it's an opening guest (if char in bracket_map:), add their plate to the stack.
   - **(Leaving Guest)** If it's a closing guest:
     - **(Empty Party?)** If the stack is empty (`not stack`), someone is trying to leave when no one's inside! That's not allowed.
     - **(Wrong Partner?)** Peek at the top plate ( `stack.pop()` ). Does the guidebook say they're a match (`bracket_map[stack.pop()] != char`)? If not, someone broke the order.
4. **(Party Over?)** At the end, if the stack is empty (return not stack), that means everyone had a partner and the party followed the rules!

## More Examples

**Example 1** — `s = "()[]{}"` <Badge type="tip" text="@noeyislearning" />

1. `(` arrives, put a round plate on the stack.
2. `)` arrives, matches the top plate! Take the plate away.
3. `[` arrives, put a square plate on the stack.
4. `]` arrives, matches the top plate! Take it away.
5. `{` arrives, put a curly plate on the stack.
6. `}` arrives, matches the top plate! Take it away.
7. Party's over, and the stack is empty! The party followed the rules!

**Example 2** — `s = "([)]"` <Badge type="tip" text="@noeyislearning" />

1. `(` arrives, put a round plate on the stack.
2. `[` arrives, put a square plate on the stack.
3. `]` arrives, matches the square plate! Take it away.
4. `)` arrives, but the top plate is round! They tried to leave in the wrong order. The party didn't follow the rules!
