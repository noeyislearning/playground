from typing import List, Callable

def map(arr: List, fn: Callable) -> List:

    new_arr = [None] * len(arr) 
    for i in range(len(arr)): 
        new_arr[i] = fn(arr[i], i) 
    return new_arr 