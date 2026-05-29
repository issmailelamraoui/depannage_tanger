#include <iostream>
using namespace std;
int main() {
    float n, maxVal; int pos = 1;
    cout << "Entrer nombre 1: "; cin >> maxVal;
    for(int i=2; i<=100; i++) {
        cin >> n;
        if(n > maxVal) { maxVal = n; pos = i; }
    }
    cout << "Max: " << maxVal << " Position: " << pos << endl;
    return 0;
}