"""
2635. Apply Transform over Each Element in Array 
Problem Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
Solution Link (Personal):
"""

from typing import List, Callable

def map(arr: List, fn: Callable) -> List:

    new_arr = [None] * len(arr) 
    for i, item in enumerate(arr): 
        new_arr[i] = fn(item, i) 
    return new_arr 
