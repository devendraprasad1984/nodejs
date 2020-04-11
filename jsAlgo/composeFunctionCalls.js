// Write a compose function that returns the result of all the functions passed into it, passing the returned value of a function to the function on its left:
// const foo = compose(x => x*2, x => x + 1, x => x - 5); foo(100). Here, result should be 192.

var compose = function (listOfFunction,xVal) {
    console.log("functions list are",listOfFunction,"xVal is",xVal)
    for(let i=0; i<listOfFunction.length;i++){
        let fn=listOfFunction[i]
        if(typeof fn==="function"){
            console.log("Function results is: ",fn(xVal))
        }
    }
}

var foo = function (x) {
    console.log("the value of x is: " + x)
    var funcList=[
        x=>x*2,
        x=>x+1,
        x=>x-1
    ]
    compose(funcList,x)
    // var retFn = compose([x => x * 2, x => x + 1, x => x - 1])
    // return retFn
}

let x=100
var retFooVar = foo(x)
if (typeof retFooVar === "function") {
    console.log(retFooVar())
} else {
    console.log("cannot parse through the functions array")
}