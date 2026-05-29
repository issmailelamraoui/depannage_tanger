#include <iostream>
using namespace std;
int main() {
    int n;
    do {
        cout << "Entrer un nombre (1-100): "; cin >> n;
        if(n < 1) cout << "Plus grand" << endl;
        else if(n > 100) cout << "Plus petit" << endl;
    } while(n < 1 || n > 100);
    return 0;
}