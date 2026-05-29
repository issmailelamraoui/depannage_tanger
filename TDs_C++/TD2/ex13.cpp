#include <iostream>
using namespace std;
int sumRec(int n) {
    if(n <= 1) return n;
    return n + sumRec(n-1);
}
int main() {
    int n; cin >> n;
    cout << sumRec(n);
    return 0;
}