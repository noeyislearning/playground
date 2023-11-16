"""
 * 1921. Eliminate Maximum Number of Monsters 
 * Problem Link: https://leetcode.com/problems/eliminate-maximum-number-of-monsters/
 * Solution Link (Personal):
"""

from typing import List

class Solution:
    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:
        n = len(dist)
        arrival_time = [(dist[i] + speed[i] - 1) // speed[i] for i in range(n)]
        arrival_time.sort()

        for i in range(n):
            if i >= arrival_time[i]:
                return i
        return n
