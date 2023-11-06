"""
 * 2891. Method Chaining (Answer v1)
 * Problem Link: https://leetcode.com/problems/method-chaining/
 * Solution Link (Personal):
"""

import pandas as pd

def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:
    heavy_animals = animals[animals['weight'] > 100]
    sorted_animals = heavy_animals.sort_values(by='weight', ascending=False)
    return sorted_animals[['name']]