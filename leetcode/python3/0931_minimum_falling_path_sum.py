"""
 * 931. Minimum Falling Path Sum
 * Problem Link: https://leetcode.com/problems/minimum-falling-path-sum/
"""

class Solution:
    def minFallingPathSum(self, matrix: list[list[int]]) -> int:
        n = len(matrix)
        for i in range(1, n):
            for j in range(n):
                matrix[i][j] += min(matrix[i - 1][max(0, j - 1):min(n, j + 2)])
        return min(matrix[-1])
