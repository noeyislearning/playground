"""
 * 2785. Sort Vowels in a String
 * Problem Link: https://leetcode.com/problems/sort-vowels-in-a-string/
"""

class Solution:
  def sortVowels(self, s: str) -> str:
    chars = list(s)
    
    vowels = []
    for i, ch in enumerate(chars):
      if ch in 'aeiouAEIOU':
        vowels.append(ch)
        chars[i] = ''
        
    vowels.sort()
    
    j = 0
    for i, ch in enumerate(chars):
      if ch == '':
        chars[i] = vowels[j]
        j += 1
        
    return ''.join(chars)