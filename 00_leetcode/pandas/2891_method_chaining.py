"""
 * 2891. Method Chaining 
 * Problem Link: https://leetcode.com/problems/method-chaining/
"""

import pandas as pd

def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:
    heavy_animals = animals[animals['weight'] > 100]
    sorted_animals = heavy_animals.sort_values(by='weight', ascending=False)
    return sorted_animals[['name']]
