"""
 * 1503. Last Moment Before All Ants Fall Out of a Plank 
 * Problem Link: https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/
"""

from typing import List

class Solution:
    def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
        if not left and not right:
            return 0
        if not left:
            return n - min(right)
        if not right:
            return max(left)
        return max(max(left), n - min(right))
