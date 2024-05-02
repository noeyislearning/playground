---
title: Second Highest Salary
---

# Second Highest Salary

<Badge type="warning" text="LeetCode" /> <a href="https://leetcode.com/problems/second-highest-salary/" target="_blank"><Badge type="warning" text="#176" /> </a> <Badge type="info" text="🟠 Medium" /> <Badge type="info" text="Pandas" /> <a href="https://github.com/noeyislearning" target="_blank"><Badge type="tip" text="Solve by @noeyislearning" /> </a>

## Problem Statement

Table: `Employee`

| Column Name | Type |
| ----------- | ---- |
| Id          | int  |
| Salary      | int  |

> id is the primary key column for this table.
> Each row of this table contains the salary of an employee.

Write a solution to find the second highest salary from the `Employee` table. If there is no second highest salary, return `null (return None in Pandas)`.

The result format is in the following example.

**Example 1:**

Input: `Employee` table

| id  | salary |
| --- | ------ |
| 1   | 100    |
| 2   | 200    |
| 3   | 300    |

Output:

| SecondHighestSalary |
| ------------------- |
| 200                 |

**Example 2:**

Input: `Employee` table

| id  | salary |
| --- | ------ |
| 1   | 100    |

Output:

| SecondHighestSalary |
| ------------------- |
| null                |

## Solution

```python pandas
import pandas as pd

def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    sorted_df = employee.sort_values(by='salary', ascending=False)

    sorted_df.reset_index(drop=True, inplace=True)

    if sorted_df.shape[0] < 2:
        return pd.DataFrame({'SecondHighestSalary': [None]})
    else:
        return pd.DataFrame({'SecondHighestSalary': [sorted_df.loc[1, 'salary']]})
```

## Explanation

Imagine you have a list of all the salaries your employees make. We want to find the second highest salary, but it's a bit tricky.

Here's how the code does it:

- **(Sorting the salaries)** We imagine lining up all the salaries from highest to lowest.
- **(Checking for duplicates)** Sometimes, people might have the same salary. We only care about unique salaries, so we remove any duplicates.
- **(Finding the second highest)** Now, imagine taking the second person in line from the highest paid. Their salary is the second highest!
- **(No second highest?)** If there are less than two unique salaries (everyone has the same salary), then there's no second highest, so we say "None".

The code uses a special tool called Pandas to do this automatically. It's like a super calculator that can sort and find things in lists of data.
