#include <iostream>
using namespace std;

int main() {
    float a, b, c, max;
    cout << "Entrez trois nombres: ";
    cin >> a >> b >> c;
    
    max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    
    cout << "Le nombre le plus grand est: " << max << endl;
    return 0;
}