let arr = [4, 4, 1, 3, 5, 5, 5, 7, 8]
let distinct = {}
let duplicatesOnly = []
for (let i = 0; i <= arr.length; i++) {
    let key = arr[i]
    distinct[key] = distinct[key] === undefined ? 1 : distinct[key] + 1
}
for (let i in distinct) {
    if (distinct[i] > 1) duplicatesOnly.push(parseInt(i))
}
console.log(arr, duplicatesOnly)