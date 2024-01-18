"""
 * 26. Remove Duplicates from Sorted Array 
 * Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
"""

class Solution:
    def removeElement(self, nums, val):
        left, right = 0, len(nums) - 1
        
        while left <= right:
            if nums[left] == val:
                nums[left] = nums[right]
                right -= 1
            else:
                left += 1
        
        return left

