/**
 * 009. Special Pythagorean triplet
*/

#include <iostream>

int main() {
    int sum = 1000;
    int a, b, c;

    for (a = 1; a < sum / 3; a++) {
        for (b = a + 1; b < sum / 2; b++) {
            c = sum - a - b;
            if (a * a + b * b == c * c) {
                std::cout << "The Pythagorean triplet is: " << a << ", " << b << ", " << c << std::endl;
                std::cout << "The product abc is: " << a * b * c << std::endl;
                return 0;
            }
        }
    }

    std::cout << "No Pythagorean triplet found for the given sum." << std::endl;
    return 0;
}
