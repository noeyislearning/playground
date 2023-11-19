"""
 * 2882. Drop Duplicate Rows 
 * Problem Link: https://leetcode.com/problems/drop-duplicate-rows/
"""

import pandas as pd

def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    return customers.drop_duplicates(subset='email', keep='first')
