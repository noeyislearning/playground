/**
 * 003 - Largest Prime Factor
*/

#include <iostream>
#include <cmath>

long long largestPrimeFactor(long long n) {
    long long maxPrime = -1;

    while (n % 2 == 0) {
        maxPrime = 2;
        n /= 2;
    }

    for (long long i = 3; i <= sqrt(n); i += 2) {
        while (n % i == 0) {
            maxPrime = i;
            n /= i;
        }
    }

    if (n > 2) {
        maxPrime = n;
    }

    return maxPrime;
}

int main() {
    long long number = 600851475143;
    std::cout << "The largest prime factor of " << number << " is: " << largestPrimeFactor(number) << std::endl;
    return 0;
}
