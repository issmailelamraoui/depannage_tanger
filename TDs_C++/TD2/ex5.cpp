#include <iostream>
using namespace std;
int main() {
    int n;
    while(true) {
        cin >> n;
        if(n < 1 || n > 100) cout << "Erreur, hors intervalle" << endl;
        else if(n < 30) cout << "essayez un nombre plus grand" << endl;
        else if(n > 30) cout << "essayez un nombre plus petit" << endl;
        else { cout << "Bravo!"; break; }
    }
    return 0;
}