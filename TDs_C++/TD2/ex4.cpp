#include <iostream>
using namespace std;
int main() {
    int n, somme = 0; cin >> n;
    for(int i=1; i<=n; i++) somme += i;
    cout << "Somme: " << somme;
    return 0;
}