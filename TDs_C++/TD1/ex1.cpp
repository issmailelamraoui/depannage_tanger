#include <iostream>
using namespace std;

int main() {
    float n;
    cout << "Entrez un nombre: ";
    cin >> n;
    
    if (n < 0) {
        cout << "La valeur absolue est: " << -n << endl;
    } else {
        cout << "La valeur absolue est: " << n << endl;
    }
    return 0;
}