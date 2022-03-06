const add = (a, b, c) => a + b + c

const mul = (a, b, c, d) => a * b * c * d

const perpetualCurry = fn => (...args) => {
    return fn(...args)
    // if (args.length === fn.length) {
    //     return fn(...args)
    // } else {
    //     console.log(fn, ...args)
    //     return perpetualCurry(fn.bind(fn, ...args))
    // }
}


const multplyC = perpetualCurry(mul)
const addC = perpetualCurry(add)
// console.log(addC(1)(2)(3))
console.log(addC(1)(2))
// console.log(multplyC(1)(2)(3)(4))
// console.log(multplyC(1)(2))
/*
function perpetualCurry(func) {
  const len = func.length

  function inner(l, arr) {
    return function(a) {
      if (l <= 1) {
       return func(...arr,a)
      } else {
      return  inner(len - 1, [...arr,a])
      }
    }


  }


  return inner(len, [])
} */

/*
function curry(fn) {
  const N = fn.length;
  function innerFn(n, args) {
    return function (a) {
      if(n <= 1) {
        return fn(...args, a);
      }
     return innerFn(n - 1, [...args, a]);
    }
  }
  return innerFn(N, [])
}
 */

/* let sum=(a,b,c,d,e)=>a+c+b+d+e

function functionCurry(fn){
   return function(...params){
       console.log(params,fn.length)
       if(params.length === fn.length){
         return  fn(...params)
          //call the fn
       }else{
           return functionCurry(fn.bind(fn,...params))
       }
   }
}
const currySum=functionCurry(sum)

console.log(currySum(1)(2)(1)(2)(1))
*/