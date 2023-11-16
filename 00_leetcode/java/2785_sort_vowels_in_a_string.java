/**
 * 2785. Sort Vowels in a String
 * Problem Link: https://leetcode.com/problems/sort-vowels-in-a-string/
 * Solution Link (Personal):
 */


class Solution {
  public String sortVowels(String s) {
    char[] chars = s.toCharArray();
    
    int idx = 0;
    char[] vowels = new char[s.length()];
    for (int i = 0; i < chars.length; i++) {
      char ch = chars[i];
      if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' 
          || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
        vowels[idx++] = ch;
      } 
    }
    
    Arrays.sort(vowels, 0, idx);
    
    idx = 0;
    for (int i = 0; i < chars.length; i++) {
      if (chars[i] == 'a' || chars[i] == 'e' || chars[i] == 'i' || chars[i] == 'o' || chars[i] == 'u'
          || chars[i] == 'A' || chars[i] == 'E' || chars[i] == 'I' || chars[i] == 'O' || chars[i] == 'U') {
        chars[i] = vowels[idx++];  
      }
    }
    
    return new String(chars);
  }
}