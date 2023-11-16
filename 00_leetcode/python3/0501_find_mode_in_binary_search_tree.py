"""
 * 501. Find Mode in Binary Search Tree 
 * Problem Link: https://leetcode.com/problems/find-mode-in-binary-search-tree/
 * Solution Link (Personal):
"""

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def findMode(self, root):
        def inOrderTraversal(node):
            nonlocal current_val, current_count, max_count, modes
            if node:
                inOrderTraversal(node.left)
                if node.val == current_val:
                    current_count += 1
                else:
                    current_val = node.val
                    current_count = 1
                if current_count > max_count:
                    max_count = current_count
                    modes = [current_val]
                elif current_count == max_count:
                    modes.append(current_val)
                inOrderTraversal(node.right)

        if not root:
            return []

        current_val = None
        current_count = 0
        max_count = 0
        modes = []

        inOrderTraversal(root)

        return modes
