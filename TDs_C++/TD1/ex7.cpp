#include <iostream>
#include <cmath>
using namespace std;

int main() {
    float a, b, c, delta;
    cout << "Entrez les coefficients a, b et c: ";
    cin >> a >> b >> c;
    
    if (a == 0) {
        if (b != 0) cout << "Equation du premier degre. Solution X = " << -c/b << endl;
        else cout << "Pas d'equation valide." << endl;
    } else {
        delta = (b * b) - (4 * a * c);
        
        if (delta > 0) {
            cout << "Deux solutions reelles: " << endl;
            cout << "X1 = " << (-b - sqrt(delta)) / (2 * a) << endl;
            cout << "X2 = " << (-b + sqrt(delta)) / (2 * a) << endl;
        } else if (delta == 0) {
            cout << "Une solution double: X = " << -b / (2 * a) << endl;
        } else {
            cout << "L'equation n'a pas de solution reelle." << endl;
        }
    }
    return 0;
}