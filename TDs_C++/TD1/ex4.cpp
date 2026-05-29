#include <iostream>
using namespace std;

int main() {
    float a, b;
    int choix;
    
    cout << "Entrez deux nombres: ";
    cin >> a >> b;
    
    cout << "Choisissez une operation:\n1: Addition\n2: Soustraction\n3: Multiplication\n4: Division\nChoix: ";
    cin >> choix;
    
    switch(choix) {
        case 1: cout << "Resultat: " << a + b << endl; break;
        case 2: cout << "Resultat: " << a - b << endl; break;
        case 3: cout << "Resultat: " << a * b << endl; break;
        case 4: 
            if(b != 0) cout << "Resultat: " << a / b << endl;
            else cout << "Erreur: Division par zero." << endl;
            break;
        default: cout << "Choix invalide." << endl;
    }
    return 0;
}