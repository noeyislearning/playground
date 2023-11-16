"""
 * 1930. Unique Length-3 Palindromic Subsequences 
 * Problem Link: https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
 * Solution Link (Personal):
"""

class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        firstOccurrence = {ch: float('inf') for ch in 'abcdefghijklmnopqrstuvwxyz'}
        lastOccurrence = {ch: -1 for ch in 'abcdefghijklmnopqrstuvwxyz'}

        for i, ch in enumerate(s):
            firstOccurrence[ch] = min(firstOccurrence[ch], i)
            lastOccurrence[ch] = i

        count = 0
        for ch in 'abcdefghijklmnopqrstuvwxyz':
            if firstOccurrence[ch] < lastOccurrence[ch]:
                count += len(set(s[firstOccurrence[ch]+1:lastOccurrence[ch]]))

        return count