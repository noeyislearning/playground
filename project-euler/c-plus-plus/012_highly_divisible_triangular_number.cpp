/**
 * 012. Highly divisible triangular number
*/

#include <iostream>
#include <vector>

using namespace std;

int countDivisors(int n) {
    int count = 0;
    for (int i = 1; i * i <= n; ++i) {
        if (n % i == 0) {
            // If divisors are equal, count only one
            if (n / i == i)
                count++;
            else // Otherwise, count both divisors
                count += 2;
        }
    }
    return count;
}

int main() {
    int triangleNum = 1;
    int naturalNum = 2;

    while (true) {
        triangleNum += naturalNum;
        int divisors = countDivisors(triangleNum);
        if (divisors > 500) {
            cout << "The first triangle number with over 500 divisors is: " << triangleNum << endl;
            break;
        }
        naturalNum++;
    }

    return 0;
}
