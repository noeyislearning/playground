"""
 * 1207. Unique Number of Occurrences
 * Problem Link: https://leetcode.com/problems/unique-number-of-occurrences/
"""

from collections import Counter

class Solution:
    def uniqueOccurrences(self, arr: list[int]) -> bool:
        count_dict = Counter(arr)
        count_set = set(count_dict.values())
        return len(count_dict) == len(count_set)