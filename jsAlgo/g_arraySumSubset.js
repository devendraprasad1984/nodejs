// The subset sum problem is an important problem in computer science. Below we'll provide a simple algorithm for solving this problem. The challenge is to determine if there is some subset of numbers in an array that can sum up to some number S. These algorithms can both be implemented to solve Array Addition I and Array Addition.
// The algorithm for the exponential time, naive solution, is as follows: First we will generate every possible set (the power set), and then check if the sum of any of these sets equals the sum S. For example:

"use strict"
let powerSetFunc = require('./g_powerset');
let arrsum = require('./g_sumOfArray');
let arr = [1, 2, 3, 5, 6, 8]
let pw = powerSetFunc(arr);
let sum = 19
// console.log("power set of array is",pw);
for (let i in pw) {
    let x = pw[i];
    if (x.length <= 1) continue
    if (sum === arrsum(x))
        console.log('Sum is there in powerset', pw[i], arrsum(pw[i]));
}
// This algorithm runs in O(2n) time because in the worse case, we need to create every possible subset of the array to check if any of them equal the goal sum, and there are 2n possible sets.

// function arraySumSubset(arr, sum, isSorted) {
//     var mp = { '0': 1 }
//     // arr.map(x =>mp[x]=1);
//     let mx = arr[arr.length - 1];
//     if (!isSorted)
//         arr = arr.sort(function (a, b) { return a - b });
//     let next = 0;
//     for (var i = 0; i < arr.length - 1; i++) {
//         var keys = Object.keys(mp);
//         for (var j = 0; j < keys.length; j++) {
//             next = arr[i] + parseInt(keys[j]);
//             if (next === mx) {
//                 return mp
//             } else if (next < sum && next > (0 - (arr.length - i - 1) * mx)) {
//                 mp[next] = 1;
//             }
//         }
//     }
//     return mp;
// }
// //complexity o(log(2^n))
// console.log('arraySumSubset', arraySumSubset(arr, sum, true));
