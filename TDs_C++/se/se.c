#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
int main(){
pid_t pid=fork();
printf("\tpid=%4d\tgetpid()=%4d\tgetppid()=%4d\n",pid, getpid(), getppid());
}