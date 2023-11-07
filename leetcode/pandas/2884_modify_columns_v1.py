"""
 * 2884. Modify Columns (Answer v1)
 * Problem Link: https://leetcode.com/problems/modify-columns/
 * Solution Link (Personal):
"""

import pandas as pd

def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees['salary'] = employees['salary'] * 2
    return employees