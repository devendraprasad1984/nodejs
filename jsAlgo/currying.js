const add = (a, b, c) => a + b + c

const mul = (a, b, c, d) => a * b * c * d

const perpetualCurry = fn => (...args) => {
    return fn(...args)
    if (args.length === fn.length) {
        return fn(...args)
    } else {
        return perpetualCurry(fn.bind(fn, ...args))
    }
}


const multplyC = perpetualCurry(mul)
const addC = perpetualCurry(add)
// console.log(addC(1)(2)(3))
// console.log(addC(1)(2))
// console.log(multplyC(1)(2)(3)(4))
// console.log(multplyC(1)(2))

//this behaviour is function currying using bind
let multiply = function (x, y) {
    console.log(`product of ${x} and ${y} is ${x * y}`)
}
let multiplyBy2 = multiply.bind(this, 2) //copy multiply but dont call it and set 2 as 1st param as 2
let _one = multiply.bind(this, 2, 4) //8, now 4 will be added to y, this implementation is what currying is
_one()
_one(10)//ignores 10
multiplyBy2(10) //10 will be set on y

let multiplyBy3 = multiply.bind(this, 3)
multiplyBy3(5)
multiplyBy3(4, 4)


//currying using closures
function plus(num1) {
    return function (num2) {
        console.log('sum is ' + (num1 + num2))
    }
}

let plusBy10 = plus(10)
plusBy10(20)
