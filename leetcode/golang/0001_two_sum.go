/**
 * 1. Two Sum
 * Problem Link: https://leetcode.com/problems/two-sum/
 * Solution Link (Personal):
 */

func twoSum(nums []int, target int) []int {
	numMap := make(map[int]int)
	
	for i, num := range nums {
			complement := target - num
			if index, found := numMap[complement]; found {
					return []int{index, i}
			}
			numMap[num] = i
	}
	
	return nil
}
