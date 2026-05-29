#include <iostream>
using namespace std;

int main() {
    int age, nationalite, etudiant, mois;
    int tarif = 0;

    cout << "Nationalite (1: Marocain, 2: Non marocain): ";
    cin >> nationalite;
    cout << "Age: ";
    cin >> age;
    cout << "Statut (1: Etudiant, 2: Non etudiant): ";
    cin >> etudiant;
    cout << "Mois de visite (1-12): ";
    cin >> mois;

    if (nationalite == 1) {
        if (age < 7 || age > 60) {
            tarif = 0;
        } else if (etudiant == 2) { 
            // Marocain non etudiant entre 7 et 60 ans
            if (mois >= 10 || mois <= 2) tarif = 10;
            else if (mois >= 3 && mois <= 6) tarif = 20;
            else if (mois >= 7 && mois <= 9) tarif = 30;
        } else {
            cout << "Tarif non specifie pour les etudiants marocains de cet age." << endl;
            return 0;
        }
    } else if (nationalite == 2) {
        if (age < 7 || age > 60 || etudiant == 1) {
            tarif = 50;
        } else {
            // Non marocain, non etudiant entre 7 et 60 ans
            if (mois >= 10 || mois <= 2) tarif = 100;
            else if (mois >= 3 && mois <= 6) tarif = 150;
            else if (mois >= 7 && mois <= 9) tarif = 200;
        }
    }

    if (tarif == 0) {
        cout << "L'entree est gratuite." << endl;
    } else {
        cout << "Les frais d'entree sont de: " << tarif << " MAD." << endl;
    }

    return 0;
}