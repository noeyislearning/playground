/**
 * 0501. Find Mode in Binary Search Tree
 * Problem Link: https://leetcode.com/problems/find-mode-in-binary-search-tree/
 * Solution Link (Personal):
 */

class Solution {
  Integer prev = null;
  int count = 1;
  int max = 0;

  public int[] findMode(TreeNode root) {
      if (root == null) return new int[0];

      List<Integer> modes = new ArrayList<>();
      traverse(root, modes);

      int[] result = new int[modes.size()];
      for (int i = 0; i < modes.size(); ++i) {
          result[i] = modes.get(i);
      }
      return result;
  }

  private void traverse(TreeNode node, List<Integer> modes) {
      if (node == null) return;

      traverse(node.left, modes);

      if (prev != null) {
          if (node.val == prev) {
              count++;
          } else {
              count = 1;
          }
      }

      if (count > max) {
          max = count;
          modes.clear();
          modes.add(node.val);
      } else if (count == max) {
          modes.add(node.val);
      }

      prev = node.val;

      traverse(node.right, modes);
  }
}