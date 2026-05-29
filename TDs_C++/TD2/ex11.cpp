#include <iostream>
using namespace std;
double fact(int n) { return (n==0) ? 1 : n * fact(n-1); }
int main() {
    double s = 0;
    for(int i=1; i<=5; i++) s += i/fact(i);
    cout << "Somme: " << s;
    return 0;
}