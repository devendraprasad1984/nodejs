/*
* This problem was asked by Google.
Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.
For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.
Do this in O(N) time and O(1) space.
* */

function findUniqueInteger(arr) {
    let map = {}
    for (let i of arr) {
        map[i] = map[i] === undefined ? 1 : map[i] + 1
    }
    console.log(map)
    for(let i in map){
        if(map[i]===1){
            console.log(i)
            break
        }
    }
}

findUniqueInteger([6, 1, 3, 3, 3, 6, 6])
findUniqueInteger([13, 19, 13, 13])
