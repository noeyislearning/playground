"""
 * Find The Runner-Up Score!
"""

if __name__ == "__main__":
    n = int(input())
    arr = map(int, input().split())

    us = list(set(arr))
    us.sort(reverse=True)
    rus = us[1]

    print(rus)