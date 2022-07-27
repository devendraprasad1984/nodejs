/*
 * This problem was asked by Uber.
 Given an array of integers, return a new array such that each element at index i of the
 *  new array is the product of all the numbers in the original array except the one at i.
 For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
 *  If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 Follow-up: what if you can't use division?
 * */


function solution1(arr) {
  let output = []
  for (let i of arr) {
    let mult = 1
    for (let j of arr) {
      if (i !== j) {
        mult = mult * j
      }
    }
    output.push(mult)
  }
//O(N^2)
  console.log(arr, output)
}

function solution2(arr) {
  let n = arr.length
  let left = [], right = [], product = []
  left[0] = 1, right[n - 1] = 1
  for (let i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1]
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = arr[i + 1] * right[i + 1]
  }
  for (let i = 0; i < n; i++) {
    product[i] = left[i] * right[i]
  }
  //O(3N)
  console.log(left, right, product)
}

function solution3(arr) {
  let n = arr.length
  let left = [], right = [], prod = []
  left[0] = 1, right[n - 1] = 1
  let product = 1
  for (let i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1]
    right[n - 1 - i] = arr[n - i] * right[n - i]
  }
  for (let i = 0; i < n; i++) {
    prod[i] = left[i] * right[i]
  }
  //O(2N)
  console.log(left, right, prod)
}


solution1([1, 2, 3, 4, 5])
solution1([3, 2, 1])
solution2([3, 2, 1])
solution3([3, 2, 1])
