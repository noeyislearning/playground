"""
 * 2889. Reshape Data: Pivot (Answer 1)
 * Problem Link: https://leetcode.com/problems/reshape-data-pivot/
"""

import pandas as pd

def pivotTable(weather: pd.DataFrame) -> pd.DataFrame:
    return weather.pivot(index='month', columns='city', values='temperature')
