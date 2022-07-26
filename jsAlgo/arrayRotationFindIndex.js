//sorted array rotated unknown number of time, find an index faster than linear time - Binary Search
//Dont change the array, its circular in nature and rotated from sorted array

function findIndexBinSearch(find, arr) {
  // let sortedArr = [...arr].sort((a, b) => a - b) //deep copy, O(nlogn) for any sorting
  let start = 0
  let end = arr.length - 1

  let found = false
  let foundIndex = -1
  let originalPosition = -1
  //O(logn)
  while (end >= start) {
    let mid = start + Math.floor((end - start) / 2)

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
  // if (found) {
  //   let countIndex = 0
  //   //check original position by linear run
  //   //O(N)
  //   for (let i of arr) {
  //     if (i !== find) {
  //       countIndex++
  //     } else {
  //       break
  //     }
  //   }
  //   originalPosition = countIndex
  // }
  return {found, foundIndex, originalPosition}
}

let arr = [13, 18, 25, 2, 8, 10]
// let sortedArr = [2, 8, 10, 13, 18, 25]
let find = 8
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


