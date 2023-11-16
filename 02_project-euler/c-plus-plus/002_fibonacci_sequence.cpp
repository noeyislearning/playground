/**
 * 002. Fibonacci Sequence
*/

#include <iostream>

int main() {
    int limit = 4000000;
    int sum = 0;
    int prev = 1;
    int current = 2;

    while (current <= limit) {
        if (current % 2 == 0) {
            sum += current;
        }
        int next = prev + current;
        prev = current;
        current = next;
    }

    std::cout << "The sum of even-valued terms in the Fibonacci sequence below 4 million is: " << sum << std::endl;

    return 0;
}
