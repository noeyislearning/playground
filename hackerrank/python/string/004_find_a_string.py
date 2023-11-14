"""
 * Find a String
"""

def count_substring(string, sub_string):
    count = 0
    index = string.find(sub_string)
    
    while index != -1:
        count += 1
        index = string.find(sub_string, index + 1)
    
    return count

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)