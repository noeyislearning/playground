"""
 * 1535. Find the Winner of an Array Game
 * Problem Link: https://leetcode.com/problems/find-the-winner-of-an-array-game/
"""

class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        current_winner = arr[0]
        win_count = 0

        for i in range(1, len(arr)):
            if arr[i] > current_winner:
                current_winner = arr[i]
                win_count = 1
            else:
                win_count += 1

            if win_count == k:
                return current_winner

        return max(arr)
