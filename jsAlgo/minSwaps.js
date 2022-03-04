//You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order
let arr = [7, 1, 3, 2, 4, 5, 6]
let isOdd = arr.length % 2 !== 0 ? true : false
let arrPos = []
let swapCounter = 0
for (let i = 0; i < arr.length; i++) {
    arrPos.push([arr[i], i])
    if (arr[i] !== i) swapCounter++
}
// arrPos.sort((a, b) => a[0] - b[0])
console.log(arr, isOdd, arrPos, swapCounter.toString() + ' times swap is needed for sorting')

