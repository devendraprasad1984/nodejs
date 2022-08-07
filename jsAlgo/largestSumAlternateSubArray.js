/*
* Given an array arr[] of size N, the task is to find the maximum alternating sum of a subarray possible for a given array.
* */

function approach1(arr) {
  console.log('solving for', arr)
  let sum = 0
  let sumSoFar = 0
  let size = arr.length
  //start at evan indices
  for (let i = 0; i < size; i++) {
    let val = arr[i]
    if (i % 2 === 1) {
      sumSoFar -= val
    } else {
      sumSoFar = Math.max(sumSoFar + val, val)
    }
    sum = Math.max(sum, sumSoFar)
  }
  //start at odd indices
  sumSoFar = 0
  for (let i = 1; i < size; i++) {
    let val = arr[i]
    if (i % 2 === 0) {
      sumSoFar -= val
    } else {
      sumSoFar = Math.max(sumSoFar + val, val)
    }
    sum = Math.max(sum, sumSoFar)
  }
  console.log('Max Sum is', sum)
}

approach1([2, 4, 6, 2, 5])
approach1([5, 1, 1, 5])
approach1([-4, -10, 3, 5])

