"""
0176. Second Highest Salary (Ansnwer: v1)
Problem Link: https://leetcode.com/problems/second-highest-salary/
Solution Link (Personal): https://leetcode.com/problems/second-highest-salary/solutions/4230149/finding-the-second-highest-salary/
"""
import pandas as pd

def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    # Sort the DataFrame by the 'salary' column in descending order
    sorted_employee = employee.sort_values(by='salary', ascending=False)
    
    # Drop any duplicate salary values (in case there are multiple employees with the same salary)
    sorted_employee = sorted_employee.drop_duplicates(subset='salary')
    
    # Check if there are at least two distinct salary values
    if sorted_employee.shape[0] < 2:
        return pd.DataFrame({'SecondHighestSalary': [None]})
    
    # Get the second row (which has the second-highest salary)
    second_highest = sorted_employee.iloc[1]
    
    return pd.DataFrame({'SecondHighestSalary': [second_highest['salary']]})