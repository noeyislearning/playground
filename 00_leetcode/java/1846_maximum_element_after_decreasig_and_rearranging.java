/**
 * 1846. Maximum Element After Decreasing and Rearranging
 * Problem Link: https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/
*/

class Solution {
    public int maximumElementAfterDecrementingAndRearranging(int[] arr) {
        int n = arr.length;
        int[] count = new int[n + 1];
        
        for (int num : arr) {
            count[Math.min(num, n)]++;
        }

        int max = 0;
        for (int i = 1; i <= n; i++) {
            max = Math.min(max + count[i], i); 
        }

        return max;
    }
}
