"""
 * 2885. Rename Columns (Answer v1)
 * Problem Link: https://leetcode.com/problems/rename-columns/
 * Solution Link (Personal):
"""

import pandas as pd

def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
    return students.rename(columns={
        'id': 'student_id',
        'first': 'first_name',
        'last': 'last_name',
        'age': 'age_in_years'
    })