"""
 * 2886. Change Data Type 
 * Problem Link: https://leetcode.com/problems/change-data-type/
 * Solution Link (Personal):
"""

import pandas as pd

def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
    students['grade'] = students['grade'].astype(int)
    return students
