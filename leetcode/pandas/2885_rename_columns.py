"""
 * 2885. Rename Columns 
 * Problem Link: https://leetcode.com/problems/rename-columns/
"""

import pandas as pd

def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
    return students.rename(columns={
        'id': 'student_id',
        'first': 'first_name',
        'last': 'last_name',
        'age': 'age_in_years'
    })
