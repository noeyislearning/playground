/**
 * 006. Sum Square Difference
*/

#include <iostream>

int main() {
    int limit = 100; // Define the limit to be 100 for the first 100 natural numbers
    int sumOfSquares = 0;
    int sum = 0;

    // Calculate the sum of squares and the sum of the numbers
    for (int i = 1; i <= limit; ++i) {
        sumOfSquares += i * i; // Add the square of each number to sumOfSquares
        sum += i; // Add each number to the sum
    }

    int squareOfSum = sum * sum; // Calculate the square of the sum

    int difference = squareOfSum - sumOfSquares; // Calculate the difference

    std::cout << "The difference between the sum of the squares "
              << "and the square of the sum for the first " << limit << " natural numbers is: "
              << difference << std::endl;

    return 0;
}
