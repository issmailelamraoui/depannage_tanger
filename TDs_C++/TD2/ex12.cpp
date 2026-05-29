#include <iostream>
using namespace std;
int main() {
    int a, b, n1, n2; cin >> n1 >> n2;
    a = n1; b = n2;
    while(b != 0) { int t = b; b = a % b; a = t; }
    cout << "PGCD: " << a << " PPCM: " << (n1*n2)/a;
    return 0;
}