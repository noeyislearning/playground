"""
 * 1424. Diagonal Traverse II
 * Problem Link: https://leetcode.com/problems/diagonal-traverse-ii/
"""

class Solution:
    def findDiagonalOrder(self, nums):
        diagonal_map = {}
        
        for i in range(len(nums)):
            for j in range(len(nums[i])):
                if i + j not in diagonal_map:
                    diagonal_map[i + j] = []
                diagonal_map[i + j].append(nums[i][j])
        
        result = []
        
        for key, values in diagonal_map.items():
            result.extend(values[::-1])
        
        return result
