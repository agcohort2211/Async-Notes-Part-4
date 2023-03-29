/*
Part4: Introducing Workers
--------------------------------------------------------Notes-------------------------------------------------------------------------------

Thread - is a sequence of instructions that a program follows 
Single Thread - program can only execute one instruction at a time.
Workers - allow tasks to be run in a separate thread of execution 
    -can allow tasks to be run in separate thread to be run , so other tasks can continue.
    - a downside with Workers is that when multiple threads exist , and we don't know which thread will run and which one will not.
    and a variable is accessed by many threads, this can cause bugs.
    - to avoid this workers cannot access the DOM( workers and main code don't mix variables)\
There are three types of workers :
-Dedicated Workers 
-Shared Workers
-Service Workers 
 
A worker is created by by using the Worker() constructor we can pass a URL to it 
/
*/