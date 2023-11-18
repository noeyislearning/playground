"""
 * 1838. Frequency of the Most Frequent Element
 * Problem Link: https://leetcode.com/problems/frequency-of-the-most-frequent-element/
 * Solution Link (Personal):
"""

from typing import List

class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()
        n = len(nums)
        l = r = 0
        res = 1
        cnt = 0
        while r < n:
            cnt += (r - l) * (nums[r] - nums[r - 1])
            while cnt > k:
                cnt -= nums[r] - nums[l]
                l += 1
            res = max(res, r - l + 1)
            r += 1
        return res
