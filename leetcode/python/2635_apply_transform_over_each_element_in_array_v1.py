"""
2635. Apply Transform over Each Element in Array (Answer v1)
Problem Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
Solution Link (Personal):
"""

from typing import List, Callable

def map(arr: List, fn: Callable) -> List:

    new_arr = [None] * len(arr) 
    for i in range(len(arr)): 
        new_arr[i] = fn(arr[i], i) 
    return new_arr 