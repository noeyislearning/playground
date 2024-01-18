/**
 * 014. Longest Collatz sequence
*/

#include <iostream>
#include <unordered_map>

long long collatzSequenceLength(long long n, std::unordered_map<long long, long long>& cache) {
    if (n == 1) {
        return 1;
    }
    if (cache.find(n) != cache.end()) {
        return cache[n];
    }
    long long length = 0;
    if (n % 2 == 0) {
        length = 1 + collatzSequenceLength(n / 2, cache);
    } else {
        length = 1 + collatzSequenceLength(3 * n + 1, cache);
    }
    cache[n] = length;
    return length;
}

int main() {
    const long long limit = 1000000;
    std::unordered_map<long long, long long> cache;
    long long maxLength = 0;
    long long number = 0;

    for (long long i = 1; i < limit; ++i) {
        long long length = collatzSequenceLength(i, cache);
        if (length > maxLength) {
            maxLength = length;
            number = i;
        }
    }

    std::cout << "Starting number under one million that produces the longest chain: " << number << std::endl;
    return 0;
}
