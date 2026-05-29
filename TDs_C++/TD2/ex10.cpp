#include <iostream>
using namespace std;
int compter(int n) {
    int c = 0;
    while(n != 0) { n /= 10; c++; }
    return c;
}
int main() {
    int n; cin >> n;
    cout << compter(n);
    return 0;
}