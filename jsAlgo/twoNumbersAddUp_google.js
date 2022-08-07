/**
 * This problem was recently asked by Google.

 Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

 For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

 Bonus: Can you do this in one pass?

 */

let arr = [10, 15, 3, 7]
let k = 17
let diff = -1
let dict = {}

function solution1() {
  for (let num of arr) {
    diff = k - num
    if (arr.indexOf(diff) !== -1) {
      console.log('present in the array', k, num, diff)
      break
    }
  }
  //complexity: O(n^2) - quadratic
}

function solution2() {
  for (let i of arr) {
    dict[k - i] = true
  }
  console.log(dict)
  for (let num of arr) {
    diff = k - num
    if (dict[diff] !== undefined) {
      console.log('present in the array', k, num, diff)
      break
    }
  }
}

solution2()