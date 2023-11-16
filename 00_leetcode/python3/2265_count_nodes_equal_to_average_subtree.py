"""
 * 2265. Count Nodes Equal to Average of Subtree 
 * Problem Link: https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/
 * Solution Link (Personal):
"""

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node:
                return 0, 0

            left_count, left_sum = dfs(node.left)
            right_count, right_sum = dfs(node.right)

            count = left_count + right_count + 1
            sum_ = left_sum + right_sum + node.val

            if node.val == sum_ // count:
                self.ans += 1

            return count, sum_

        self.ans = 0
        dfs(root)        
        return self.ans
