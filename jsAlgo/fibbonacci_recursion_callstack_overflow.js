let sum = 0

function fib(n) {
    if (n <= 2) return 1
    sum = fib(n - 1) + fib(n - 2)
    return sum
}

console.log(fib(10)) //55
// fib(100) //call stack exceeds, node runs recursion on callstack and for such big operation it becomes overflow

//big O will be 2^n -exponential and is very very bad

//solution to make it work
