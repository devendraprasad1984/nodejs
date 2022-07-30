/*
 * This problem was asked by Stripe.
 Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 * */

//sol: positive numbers start from 1, so in the array scan all integers present and return the one missing

function solution1(arr) {
  //brute force
  let positiveArr = []
  //separate already -ve numbers to left most side of arr
  let totalNegativeNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let temp = arr[i]
      arr[i] = arr[totalNegativeNumbers]
      arr[totalNegativeNumbers] = temp
      totalNegativeNumbers++
    }
  }
  //shift the array
  let arr2 = []
  let j = 0
  for (let i = totalNegativeNumbers; i < arr.length; i++) {
    arr2[j] = arr[i]
    j++
  }

  //find missing
  for (let i = 0; i < arr2.length; i++) {
    let x = arr2[i]
    if (x - 1 < arr2.length && arr2[x - 1] > 0) {
      arr2[x - 1] = -arr2[x - 1]
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 0) return i + 1
  }

  console.log(totalNegativeNumbers, arr, arr2)

  return arr2.length + 1
}

function solution2(arr) {
  let positiveArr = []
  //separate already -ve numbers to left most side of arr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positiveArr.push(arr[i])
  }

  //find missing
  let size = positiveArr.length
  for (let i = 0; i < size; i++) {
    let x = positiveArr[i]
    if (x - 1 < size && positiveArr[x - 1] > 0) {
      positiveArr[x - 1] = -positiveArr[x - 1]
    }
  }

  console.log(arr, positiveArr)
  for (let i = 0; i < size; i++) {
    if (positiveArr[i] > 0) return i + 1
  }


  return size + 1
}

function solution3(arr) {
  //create an array of 0s and fill with 1 when positive number is found. iterate again and return index+1 when we first encounter 0
  let size = arr.length
  let newArr = new Array(size + 1)
  newArr.fill(0) //O(N)
  for (let i = 0; i < size; i++) {
    if (arr[i] > 0 && arr[i] <= size)
      newArr[arr[i]] = 1
  }
  console.log(arr, newArr)
  for (let i = 1; i <= size; i++) {
    if (newArr[i] === 0) {
      return i
    }
  }
  return size + 1
}

console.log('solution1')
console.log(solution1([3, 4, -1, 1]))
console.log(solution1([1, 2, 0]))

console.log('solution2')
console.log(solution2([3, 4, -1, 1]))
console.log(solution2([1, 2, 0]))

console.log('solution3')
console.log(solution3([3, 4, -1, 1]))
console.log(solution3([1, 2, 0]))

