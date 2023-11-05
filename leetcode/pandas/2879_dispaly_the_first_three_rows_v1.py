"""
 * 2879. Display the First Three Rows
 * Problem Link: https://leetcode.com/problems/display-the-first-three-rows/
 * Solution Link (Personal):
"""

import pandas as pd

def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
  return employees.head(3)