"""
 * 1743. Restore the Array From Adjacent Pairs
 * Problem Link: https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
 * Solution Link (Personal):
"""

from typing import List

class Solution:
    def restoreArray(self, adjacentPairs: List[List[int]]) -> List[int]:
        adj_dict = {}
        for a, b in adjacentPairs:
            if a in adj_dict:
                adj_dict[a].append(b)
            else:
                adj_dict[a] = [b]
            if b in adj_dict:
                adj_dict[b].append(a)
            else:
                adj_dict[b] = [a]
        start = end = None
        for k, v in adj_dict.items():
            if len(v) == 1:
                if start is None:
                    start = k
                else:
                    end = k
                    break
        result = [start]
        while len(result) < len(adjacentPairs) + 1:
            next_num = adj_dict[result[-1]].pop()
            adj_dict[next_num].remove(result[-1])
            result.append(next_num)
        return result