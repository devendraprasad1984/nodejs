/*
 * This problem was asked by Facebook.
 You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.
 Compute how many units of water remain trapped on the map in O(N) time and O(1) space.
 For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.
 Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.
 * */

//trapping rain water, vertical bar problem, increasing or decreasing order, water cant be collected as it will overflow
//we cant store water at corners
function trappingRainWater(arr) {
  //big(N^2), naive soln
  let size = arr.length
  let countOfWater = 0

  for (let i = 1; i < size - 1; i++) {
    let lmax = arr[i], rmax = arr[i]
    for (let j = 0; j < i; j++) {
      lmax = Math.max(lmax, arr[j])
    }
    for (let j = i + 1; j < size; j++) {
      rmax = Math.max(rmax, arr[j])
    }
    countOfWater += Math.min(lmax, rmax) - arr[i]
  }
  console.log(countOfWater)
  return countOfWater
}

function trappingRainWaterON(arr) {
  //big(N), efficient soln - precompute lmax and rmax
  let size = arr.length
  let countOfWater = 0
  let lmax = new Array(size), rmax = new Array(size)
  lmax[0] = arr[0]
  rmax[size - 1] = arr[size - 1]
  //precompute lmax
  for (let i = 1; i < size; i++) {
    lmax[i] = Math.max(arr[i], lmax[i - 1])
  }
  //precompute rmax
  for (let i = size - 2; i >= 0; i--) {
    rmax[i] = Math.max(arr[i], rmax[i + 1])
  }

  for (let i = 1; i < size - 1; i++) {
    countOfWater += Math.min(lmax[i], rmax[i]) - arr[i]
  }
  console.log(countOfWater)
  return countOfWater
}


trappingRainWater([2, 1, 2]) //1 unit of water
trappingRainWater([3, 0, 1, 3, 0, 5]) //8 unit of water

trappingRainWaterON([2, 1, 2]) //1 unit of water
trappingRainWaterON([3, 0, 1, 3, 0, 5]) //8 unit of water
