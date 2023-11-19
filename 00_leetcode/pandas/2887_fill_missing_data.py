"""
 * 2887. Fill Missing Data
 * Problem Link: https://leetcode.com/problems/fill-missing-data/
"""

import pandas as pd

def fillMissingValues(products: pd.DataFrame) -> pd.DataFrame:
    products['quantity'] = products['quantity'].fillna(0)
    return products
