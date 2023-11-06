"""
 * 2888. Reshape Data: Concatenate (Answer v1)
 * Problem Link: https://leetcode.com/problems/reshape-data-concatenate/
 * Solution Link (Personal):
"""

import pandas as pd

def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame:
    return pd.concat([df1, df2], axis=0)