/**
 * 1930. Unique Length-3 Palindromic Subsequences
 * Problem Link: https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
 * Solution Link (Personal):
 */


class Solution {
    public int countPalindromicSubsequence(String s) {
        int[] firstOccurrence = new int[26];
        int[] lastOccurrence = new int[26];
        Arrays.fill(firstOccurrence, Integer.MAX_VALUE);

        for (int i = 0; i < s.length(); i++) {
            firstOccurrence[s.charAt(i) - 'a'] = Math.min(firstOccurrence[s.charAt(i) - 'a'], i);
            lastOccurrence[s.charAt(i) - 'a'] = i;
        }

        int count = 0;
        for (int i = 0; i < 26; i++) {
            if (firstOccurrence[i] < lastOccurrence[i]) {
                Set<Character> set = new HashSet<>();
                for (int j = firstOccurrence[i] + 1; j < lastOccurrence[i]; j++) {
                    set.add(s.charAt(j));
                }
                count += set.size();
            }
        }

        return count;
    }
}