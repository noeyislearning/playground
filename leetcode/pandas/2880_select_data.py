"""
 * 2880. Select Data
 * Problem Link: https://leetcode.com/problems/select-data/
"""

import pandas as pd

def selectData(students: pd.DataFrame) -> pd.DataFrame:
    return students.loc[students['student_id'] == 101, ['name', 'age']]
