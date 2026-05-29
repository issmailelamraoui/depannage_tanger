#include <iostream>
using namespace std;

int main() {
    int annee;
    cout << "Entrez une annee: ";
    cin >> annee;
    
    if ((annee % 4 == 0 && annee % 100 != 0) || (annee % 400 == 0)) {
        cout << annee << " est une annee bissextile." << endl;
    } else {
        cout << annee << " n'est pas une annee bissextile." << endl;
    }
    return 0;
}