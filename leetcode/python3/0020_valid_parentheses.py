"""
 * 20. Valid Parentheses 
 * Problem Link: https://leetcode.com/problems/valid-parentheses/
"""

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for i in s:
            if i in ['(', '{', '[']:
                stack.append(i)
            else:
                if len(stack) == 0:
                    return False
                if i == ')' and stack[-1] == '(':
                    stack.pop()
                elif i == '}' and stack[-1] == '{':
                    stack.pop()
                elif i == ']' and stack[-1] == '[':
                    stack.pop()
                else:
                    return False
        if len(stack) == 0:
            return True
        else:
            return False