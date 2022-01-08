const zip = (arr, ...ars) => {
    return arr.map((val, i) => {
        return ars.reduce((acc, next) => [...acc, next[i]], [val])
    })
}
console.log(zip([1, 2, 3], [4, 5, 6]))
console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]))

let ar1 = [1, 2, 3]
let ar2 = [4, 5, 6]
let ar3 = ar1.map((v, i) => {
    return [v, ar2[i]]
})
console.log('approach2', ar3)