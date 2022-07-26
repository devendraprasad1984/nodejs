//sorted array rotated unknown number of time, find an index faster than linear time - Binary Search
//Dont change the array, its circular in nature and rotated from sorted array

function arrRotationTimes(arr) {
  //basically find the min value and its index, because if it were not rotated, it would have been at zero actually
  let firstValue = arr[0]
  let firstIndex = 0
  for (let i in arr) {
    if (arr[i] < firstValue) {
      firstIndex = i
      firstValue = arr[i]
    }
  }
  console.log('number of rotations performed is', firstIndex, ' times and first element was', firstValue)
}

function countRotationsUsingBinarySearch(arr, n) {
  let low = 0, high = n - 1
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    let prevIndex = (mid - 1 + n) % n //applying mod means, it wont go out of bounds
    let nextIndex = (mid + 1) % n
    if (arr[mid] <= arr[prevIndex] && arr[mid] <= arr[nextIndex]) {
      return mid
    } else if (arr[mid] <= arr[high]) {
      high = mid - 1
    } else if (arr[mid] >= arr[low]) {
      low = mid + 1
    }
  }
  return 0
}

function findIndexBinSearch(find, arr) {
  // let sortedArr = [...arr].sort((a, b) => a - b) //deep copy, O(nlogn) for any sorting
  let start = 0
  let end = arr.length - 1

  let found = false
  let foundIndex = -1
  let originalPosition = -1
  //O(logn)
  while (end >= start) {
    let mid = Math.floor((start + end) / 2)
    if (find === arr[mid]) {
      found = true
      foundIndex = mid
      break
    } else if (find > arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return {found, foundIndex, originalPosition}
}

let arr = [13, 18, 25, 2, 8, 10]
// let sortedArr = [2, 8, 10, 13, 18, 25]
let find = 8
arrRotationTimes(arr)
console.log('count rotation using binary search', countRotationsUsingBinarySearch(arr, arr.length))
let {found, foundIndex, originalPosition} = findIndexBinSearch(find, arr)

if (found) {
  console.log('found', find, foundIndex, 'original position', originalPosition)
} else {
  console.log('could not find')
}
//
// let obj = {13: 0, 18: 1, 25: 2, 2: 3, 8: 4, 10: 5}
// let find = 8
// console.log(obj[find])


