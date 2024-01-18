"""
 * 1814. Count Nice Pairs in an Array
 * Problem Link: https://leetcode.com/problems/count-nice-pairs-in-an-array/
"""

from typing import List

class Solution:
    def countNicePairs(self, nums: List[int]) -> int:
        mod = 10**9 + 7
        diff_count = {}
        pairs = 0

        for num in nums:
            r_num = int(str(num)[::-1])
            diff = num - r_num
            if diff in diff_count:
                pairs = (pairs + diff_count[diff]) % mod
                diff_count[diff] += 1
            else:
                diff_count[diff] = 1
        
        return pairs
