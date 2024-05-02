---
title: Create a Dataframe from List
---

# Create a Dataframe from List

<Badge type="warning" text="LeetCode" /> <a href="https://leetcode.com/problems/create-a-dataframe-from-list/" target="_blank"><Badge type="warning" text="#2877" /> </a> <Badge type="info" text="🟢 Easy" /> <Badge type="info" text="Pandas" /> <a href="https://github.com/noeyislearning" target="_blank"><Badge type="tip" text="Solve by @noeyislearning" /> </a>

## Problem Statement

Write a solution to **create** a DataFrame from a 2D list called `student_data`. This 2D list contains the IDs and ages of some students.

The DataFrame should have two columns, `student_id` and `age`, and be in the same order as the original 2D list.

The result format is in the following example.

**Example 1:**

> Input: `student_data`  
> `[
 [1, 15],
 [2, 11],
 [3, 11],
 [4, 20]
]`  
> Output:

| student_id | age |
| ---------- | --- |
| 1          | 15  |
| 2          | 11  |
| 3          | 11  |
| 4          | 20  |

> Explanation:  
> A DataFrame was created on top of student_data, with two columns named `student_id` and `age`.

## Solution

```python pandas
import pandas as pd
from typing import List

def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:
    df = pd.DataFrame(student_data, columns=['student_id', 'age'])

    return df
```

## Explanation

Imagine you have a list of lists, like a table with rows and columns. Each row represents a student, and the columns contain their ID and age. We want to transform this list into a special kind of table called a DataFrame, which is easier to work with.

We use a special tool called Pandas, which is like a super calculator for data. Here's what it does:

- **(Create the DataFrame)** We tell Pandas to take our list of lists and turn it into a DataFrame. We also specify the names of the columns: "student_id" and "age". It's like telling our friend how to organize the data.
- **(Return the DataFrame)** Now that our friend has built the DataFrame, we get it back and can use it for other tasks.
