/*
 * Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
 For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 * */

function solution1(arr) {
  console.log('solving for', arr)
  let size = arr.length
  let include = arr[0]
  let exclude = 0
  let exclude_new = 0

  for (let i = 1; i < size; i++) {
    let val = arr[i]
    exclude_new = include > exclude ? include : exclude
    include = exclude + val
    exclude = exclude_new
  }
  console.log(include > exclude ? include : exclude)
}

solution1([2, 4, 6, 2, 5])
solution1([5, 1, 1, 5])
solution1([5, 5, 10, 100, 10, 5])
solution1([3, 2, 7, 10])
solution1([3, 2, 5, 10, 7])