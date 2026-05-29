#include <iostream>
using namespace std;
bool estPremier(int n) {
    if(n < 2) return false;
    for(int i=2; i*i<=n; i++) if(n%i==0) return false;
    return true;
}
int main() {
    int n; cin >> n;
    cout << (estPremier(n) ? "Premier" : "Non Premier");
    return 0;
}