/*
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
 * */


const cons = (a, b) => {
  const pair = (func) => {
    return func(a, b)
  }
  return pair
}

const car = (f) => {
  return f((a, b) => {
    return a
  })
}
const cdr = (f) => {
  return f((a, b) => {
    return b
  })
}

let pair = cons(3, 4)
console.log(car.bind(cons, pair)())
console.log(car(pair))
console.log(cdr(pair))
