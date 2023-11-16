"""
 * 1759. Count Number of Homogenous Substrings
 * Problem Link: https://leetcode.com/problems/count-number-of-homogenous-substrings/
 * Solution Link (Personal):
"""

class Solution:
    def countHomogenous(self, s: str) -> int:
        MOD = 10**9 + 7
        total_homogenous = 0
        current_length = 1

        for i in range(1, len(s)):
            if s[i] == s[i - 1]:
                current_length += 1
            else:
                total_homogenous += (current_length * (current_length + 1) // 2)
                current_length = 1

        total_homogenous += (current_length * (current_length + 1) // 2)

        return total_homogenous % MOD