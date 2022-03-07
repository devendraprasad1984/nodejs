//currying-pollyfill using bind

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Array.prototype.myReduce = function (fn, init, context) {
    let arr = this
    let accumulator = init || undefined
    for (let i = 0; i < arr.length; i++) {
        if (accumulator !== undefined) {
            accumulator = fn.call(undefined, accumulator, arr[i])
        } else {
            accumulator = arr[0]
        }
    }
    return accumulator
}

let sum = arr.reduce((accumulator, index) => {
    return accumulator + index
}, 0)
console.log('reduce built-in', sum)

let sum1 = arr.myReduce((accumulator, index) => {
    return accumulator + index
}, 0)
console.log('reduce pollyfilled', sum1)
