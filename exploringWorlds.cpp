/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

int main() {
 std::cout<<"Hello World!\n This is my first time coding in C++! How exciting!";
 std::cout<<" Look, I can create if statements and for loops.\n";
 
 for(int i=1;i<100;i++) {
     if(i%15==0) {
         printf("FizzBuzz\n");
     }
     else if(i%3==0) {
         printf("Fizz\n");
     }
     else if(i%5==0) {
         printf("Buzz\n");
     }
     else {
           printf("%d\t\n", i);   
     }
 }
 std:: cout<<"Looks like C++ isn't too different from JavaScript and Java once you get the hang of it.";
 return 0;
}
