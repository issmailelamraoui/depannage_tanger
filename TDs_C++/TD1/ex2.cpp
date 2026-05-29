#include <iostream>
#include <cmath>
using namespace std;

int main() {
    float n;
    cout << "Entrez un nombre: ";
    cin >> n;
    
    if (n >= 0) {
        cout << "La racine carree est: " << sqrt(n) << endl;
    } else {
        cout << "Erreur: Impossible de calculer la racine carree d'un nombre negatif." << endl;
    }
    return 0;
}