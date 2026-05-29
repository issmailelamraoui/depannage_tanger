#include <iostream>
using namespace std;
int main() {
    for(int i=1; i<=10; i++) {
        for(int j=0; j<=12; j++) cout << i << "x" << j << "=" << i*j << "\t";
        cout << endl;
    }
    return 0;
}