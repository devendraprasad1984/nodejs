// A Derangement is a permutation of n elements, such that no element appears in its original position. For example, a derangement of {0, 1, 2, 3} is {2, 3, 1, 0}
//using recursion approach which has 2^n exponential time complexity

function dearr1(num) {
    if (num === 1) return 0
    if (num === 2) return 1
    return (num - 1) * (dearr1(num - 1) + dearr1(num - 2))
}

console.log(dearr1(1))
console.log(dearr1(2))
console.log(dearr1(3))
console.log(dearr1(4))

//An Efficient Solution is to use Dynamic Programming to store results of subproblems in an array and build the array in bottom-up manner.

function dearr2(num) {
    let arr = new Array(num + 1)
    if (num === 1) arr[1] = 0
    if (num === 2) arr[2] = 1
    for (let i = 3; i < num; i++) {
        arr[i] = (i - 1) * (arr[i - 1] + arr[i - 2])
    }
    // console.log(arr)
    return arr[num]
}

console.log(dearr2(1))
console.log(dearr2(2))
console.log(dearr2(3))
console.log(dearr2(4))

