"""
 * 1877. Minimize Maximum Pair Sum in Array
 * Problem Link: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
"""

from collections import Counter

class Solution:
    def reductionOperations(self, nums):
        counter = Counter(nums)
        sorted_keys = sorted(counter.keys(), reverse=True)
        operations = 0
        count = 0

        for key in sorted_keys[:-1]:
            count += counter[key]
            operations += count

        return operations