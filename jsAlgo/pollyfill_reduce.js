//currying-pollyfill using bind

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Array.prototype.myReduce = function (fn, init, context) {
    let arr = this
    let accumulator = init
    for (let i = 0; i < arr.length; i++) {
        accumulator = fn(accumulator, arr[i])
    }
    return accumulator
}

let sum = arr.reduce((accumulator, num) => {
    return accumulator + num
}, 0)
console.log('reduce built-in', sum)

let sum1 = arr.myReduce((accumulator, num) => {
    return accumulator + num
}, 0)
console.log('reduce pollyfilled', sum1)
