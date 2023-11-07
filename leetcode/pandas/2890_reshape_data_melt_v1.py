"""
 * 2890. Reshape Data: Melt (Answer v1)
 * Problem Link: https://leetcode.com/problems/reshape-data-melt/
 * Solution Link (Personal):
"""

import pandas as pd

def meltTable(report: pd.DataFrame) -> pd.DataFrame:
    return report.melt(id_vars='product', var_name='quarter', value_name='sales')