let sum = 0

function fib(n) {
    if (n <= 2) return 1
    sum = fib(n - 1) + fib(n - 2)
    return sum
}

console.log(fib(10)) //55
// fib(100) //call stack exceeds, node runs recursion on callstack and for such big operation it becomes overflow

//big O will be 2^n -exponential and is very very bad

//solution to make it work and no callstack, no recursion
function fibNoRec(n) {
    let sum = 0
    for (let i = n; i > 0; i--) {
        sum += i
    }
    if (n <= 2) sum = 1
    return sum
}

// console.log(fibNoRec(5))
console.log(
    fibNoRec(10),
    fibNoRec(100)
)
