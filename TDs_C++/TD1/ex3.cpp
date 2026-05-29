#include <iostream>
using namespace std;

int main() {
    float a, b;
    cout << "Entrez deux nombres: ";
    cin >> a >> b;
    
    if (a == 0 || b == 0) {
        cout << "Le produit est nul." << endl;
    } else if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
        cout << "Le produit est positif." << endl;
    } else {
        cout << "Le produit est negatif." << endl;
    }
    return 0;
}