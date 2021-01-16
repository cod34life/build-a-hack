/*First time using C+*/

#include <iostream>

using namespace std;

int main()
{
    cout<<"I chose to do this challenge in C++, because it's the language my dad struggled with in college.\n";
    cout<<"Wanted to prove to him that it wasn't that hard...\n";
    cout<<"Hello, world, it's my turn to make a fool of myself :P \n";
    
    for(int i=1;i<=100;i++) {
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
    cout<<"Alright, how'd I do? Good? Bad? Let me know in the comments!";
    return 0;
}
