/**
 * 9. Palindrome Number
 * Problem Link: https://leetcode.com/problems/palindrome-number/
 * Solution Link (Personal):
 */

class Solution {
    public boolean isPalindrome(int x) {
        // If x is negative or ends with 0 (except 0 itself), it's not a palindrome
        if (x < 0 || (x != 0 && x % 10 == 0)) {
            return false;
        }

        int reversed = 0;
        int original = x;

        while (x > 0) {
            int digit = x % 10;
            reversed = reversed * 10 + digit;
            x /= 10;
        }

        return original == reversed;
    }
}
