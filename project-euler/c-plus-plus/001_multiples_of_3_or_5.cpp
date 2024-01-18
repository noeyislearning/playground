/**
 * 001. Multiples of 3 or 5
*/

#include <iostream>

int main() {
    
    int sum = 0;

    for (int i = 1; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }

    std::cout << "The sum of all the multiples of 3 or 5 below 1000 is: " << sum << std::endl;

    return 0;
}