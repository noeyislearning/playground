/**
 * 016. Power Digit Sum
*/

#include <iostream>
#include <cmath>
using namespace std;

// Function to calculate the sum of digits of a number
int sumOfDigits(string num) {
    int sum = 0;
    for (char digit : num) {
        sum += digit - '0';
    }
    return sum;
}

int main() {
    // Calculate 2^1000
    double result = pow(2, 1000);

    // Convert the result to a string to extract individual digits
    string resultStr = to_string(result);

    // Calculate the sum of digits
    int sum = sumOfDigits(resultStr);

    cout << "The sum of the digits of 2^1000 is: " << sum << endl;

    return 0;
}
