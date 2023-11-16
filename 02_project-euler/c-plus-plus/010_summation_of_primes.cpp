/**
 * 010. Summation of primes
*/

#include <iostream>
#include <vector>

long long sumOfPrimesBelowN(int n) {
    std::vector<bool> isPrime(n, true);
    long long sum = 0;

    for (int p = 2; p < n; ++p) {
        if (isPrime[p]) {
            sum += p;
            for (int i = p * 2; i < n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    return sum;
}

int main() {
    int limit = 2000000;
    long long result = sumOfPrimesBelowN(limit);
    
    std::cout << "The sum of all primes below " << limit << " is: " << result << std::endl;

    return 0;
}
