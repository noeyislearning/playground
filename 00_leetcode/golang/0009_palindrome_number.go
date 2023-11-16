/**
 * 9. Palindrome Number
 * Problem Link: https://leetcode.com/problems/palindrome-number/
 * Solution Link (Personal):
 */


func isPalindrome(x int) bool {
	if x < 0 || (x%10 == 0 && x != 0) {
			return false
	}

	reversed := 0
	for x > reversed {
			reversed = reversed*10 + x%10
			x /= 10
	}

	return x == reversed || x == reversed/10
}
