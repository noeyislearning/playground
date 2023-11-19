"""
 * 2883. Drop Missing Data 
 * Problem Link: https://leetcode.com/problems/drop-missing-data/
"""

import pandas as pd

def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
    return students.dropna(subset=['name'])
