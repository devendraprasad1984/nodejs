function parse(str) {
    return Function(`'use strict'; return (${str})`)()
}

let isBoolean = true
let expr = `${isBoolean} ? 10 : (2*2*3)/2+(10**2)`
let calc=parse(expr);
console.log(calc)

//https://stackoverflow.com/questions/2276021/evaluating-a-string-as-a-mathematical-expression-in-javascript
