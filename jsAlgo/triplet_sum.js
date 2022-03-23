// Input: array = {12, 3, 4, 1, 6, 9}, sum = 24;
// Output: 12, 3, 9
// Explanation: There is a triplet (12, 3 and 9) present
// in the array whose sum is 24.
// Input: array = {1, 2, 3, 4, 5}, sum = 9
// Output: 5, 3, 1
// Explanation: There is a triplet (5, 3 and 1) present
// in the array whose sum is 9.

let arr = [12, 3, 4, 1, 6, 9]
let sum = 24
let pairs = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (sum === (arr[i] + arr[j] + arr[k])) {
                console.log('found sum', arr[i], arr[j], arr[k])
                break
            }
        }
    }
}