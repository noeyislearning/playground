-- 1527. Patients With a Condition
-- Problem Link: https://leetcode.com/problems/patients-with-a-condition/
-- Solution Link (Personal):

SELECT patient_id, patient_name, conditions
FROM patients
WHERE conditions regexp '\\bDIAB1'