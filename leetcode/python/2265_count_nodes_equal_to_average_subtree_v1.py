"""
2265. Count Nodes Equal to Average of Subtree
Problem Link: https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/
Solution Link (Personal):
"""

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def averageOfSubtree(self, root: TreeNode) -> int:
        def postorder(node):
            nonlocal count
            if not node:
                return 0, 0

            left_sum, left_count = postorder(node.left)
            right_sum, right_count = postorder(node.right)

            subtree_sum = left_sum + right_sum + node.val
            subtree_count = left_count + right_count + 1

            subtree_average = subtree_sum // subtree_count

            if node.val == subtree_average:
                count += 1

            return subtree_sum, subtree_count

        count = 0
        postorder(root)
        return count