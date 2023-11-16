/**
 * 005. Smallest Multiple
*/

#include <iostream>

// Function to calculate the greatest common divisor (GCD) using Euclidean algorithm
long long gcd(long long a, long long b) {
    while (b != 0) {
        long long temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to calculate the least common multiple (LCM) using GCD
long long lcm(long long a, long long b) {
    return (a * b) / gcd(a, b);
}

// Function to find the smallest number divisible by numbers from 1 to n
long long smallestMultiple(int n) {
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result = lcm(result, i);
    }
    return result;
}

int main() {
    int limit = 20;
    long long smallestNum = smallestMultiple(limit);
    
    std::cout << "The smallest number divisible by numbers from 1 to " << limit << " is: " << smallestNum << std::endl;
    
    return 0;
}
