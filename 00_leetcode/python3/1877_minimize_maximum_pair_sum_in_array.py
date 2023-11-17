"""
 * 1877. Minimize Maximum Pair Sum in Array
 * Problem Link: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
 * Solution Link (Personal):
"""

class Solution:
    def minPairSum(self, nums):
        nums.sort()
        n = len(nums)
        max_pair_sum = float('-inf')
        left, right = 0, n - 1

        while left < right:
            pair_sum = nums[left] + nums[right]
            max_pair_sum = max(max_pair_sum, pair_sum)
            left += 1
            right -= 1

        return max_pair_sum
