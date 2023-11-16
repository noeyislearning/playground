"""
 * 2884. Modify Columns 
 * Problem Link: https://leetcode.com/problems/modify-columns/
 * Solution Link (Personal):
"""

import pandas as pd

def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees['salary'] = employees['salary'] * 2
    return employees
