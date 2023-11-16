/**
 * 007. 10001st prime
*/

#include <iostream>
#include <vector>

// Function to find the nth prime number
int findNthPrime(int n) {
    std::vector<bool> sieve(150000, true); // Creating a sieve to store prime flags
    int count = 0;
    int prime = 2; // Starting with the first prime number

    for (int i = 2; i < sieve.size(); ++i) {
        if (sieve[i]) {
            ++count;
            prime = i;
            if (count == n) {
                break; // Found the nth prime number
            }
            // Mark all multiples of the current prime as non-prime
            for (int j = i * 2; j < sieve.size(); j += i) {
                sieve[j] = false;
            }
        }
    }

    return prime;
}

int main() {
    int n = 10001;
    int result = findNthPrime(n);
    std::cout << "The " << n << "st prime number is: " << result << std::endl;

    return 0;
}
