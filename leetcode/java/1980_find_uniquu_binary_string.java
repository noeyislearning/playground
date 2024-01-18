/**
 * 1980. Find Unique Binary String
 * Problem Link: https://leetcode.com/problems/find-unique-binary-string/
 */

import java.util.HashSet;
import java.util.Set;

class Solution {
    public String findDifferentBinaryString(String[] nums) {
        int n = nums.length;
        Set<String> set = new HashSet<>();
        
        for (String num : nums) {
            set.add(num);
        }
        
        for (int i = 0; i < (1 << n); i++) {
            String binary = Integer.toBinaryString(i);
            while (binary.length() < n) {
                binary = "0" + binary;
            }
            
            if (!set.contains(binary)) {
                return binary;
            }
        }
        
        return "";
    }
}
