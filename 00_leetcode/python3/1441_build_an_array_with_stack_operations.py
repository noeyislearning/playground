"""
 * 1441. Build an Array With Stack Operations 
 * Problem Link: https://leetcode.com/problems/build-an-array-with-stack-operations/
"""

class Solution:
    def buildArray(self, target, n):
        result = []
        target_index = 0

        for num in range(1, n + 1):
            if target_index == len(target):
                break

            result.append("Push")

            if num == target[target_index]:
                target_index += 1
            else:
                result.append("Pop")

        return result

# Example usage:
solution = Solution()
target1 = [1, 3]
n1 = 3
print(solution.buildArray(target1, n1))  # Output: ["Push", "Push", "Pop", "Push"]
target2 = [1, 2, 3]
n2 = 3
print(solution.buildArray(target2, n2))  # Output: ["Push", "Push", "Push"]
target3 = [1, 2]
n3 = 4
print(solution.buildArray(target3, n3))  # Output: ["Push", "Push"]
