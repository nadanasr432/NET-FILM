#include <iostream>
#include <string>
using namespace std;
main() {
 int list_of_numbers[200];
 int size = 200;
 for (int i = 0; i< size; i++) list_of_numbers[i] = i*2;
 int max = compute_max(list_of_numbers, size);
 int min = compute_min(list_of_numbers, size);
}
int compute_max(int list[], int sizeoflist){
 int m =list[0]; 
 int i = 0; 
 while (i<sizeoflist) {
if (m >list [i]) m= list[i];
i++;
 }
 return m;
}
int compute_min(int list[], int sizeoflist){
 int m =list[0]; 
 int i = 0; 
 while (i<sizeoflist) {
if (m <list [i]) m= list[i];
i++;
 }
 return m;}