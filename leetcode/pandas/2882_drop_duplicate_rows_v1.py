"""
 * 2882. Drop Duplicate Rows (Answer v1)
 * Problem Link: https://leetcode.com/problems/drop-duplicate-rows/
 * Solution Link (Personal):
"""

import pandas as pd

def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    return customers.drop_duplicates(subset='email', keep='first')