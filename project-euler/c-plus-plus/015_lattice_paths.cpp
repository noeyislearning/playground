/**
 * 015. Lattice paths
*/

#include <iostream>
using namespace std;

// Function to calculate factorial
unsigned long long factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to calculate combinations (n choose k)
unsigned long long nCr(int n, int k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

int main() {
    int gridSize = 20;
    unsigned long long paths = nCr(2 * gridSize, gridSize);

    cout << "Number of routes through a 20x20 grid: " << paths << endl;

    return 0;
}
